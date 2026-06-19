const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());

// Check if Groq Key is available in the environment
const groqApiKey = process.env.GROQ_API_KEY;
if (!groqApiKey) {
  console.warn("⚠️  [WARNING]: GROQ_API_KEY environment variable is not defined! API routes will fail with a 500 error.");
}

// Serve static files from root directory
app.use(express.static(__dirname));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasKey: !!process.env.GROQ_API_KEY,
    provider: 'groq'
  });
});

// Secure helper to fetch from Groq
async function callGroqBackend(systemInstruction, promptText, isJson = false) {
  const apiKey = process.env.GROQ_API_KEY;
  if (!apiKey) {
    throw new Error("GROQ_API_KEY environment variable is not configured on the server.");
  }

  const messages = [];
  if (systemInstruction) {
    messages.push({ role: 'system', content: systemInstruction });
  }
  messages.push({ role: 'user', content: promptText });

  const payload = {
    model: 'llama-3.3-70b-versatile',
    messages: messages,
    response_format: isJson ? { type: 'json_object' } : undefined
  };

  const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const errText = await response.text();
    let errMessage = response.statusText;
    try {
      const parsedErr = JSON.parse(errText);
      errMessage = parsedErr.error?.message || errMessage;
    } catch(e) {}
    throw new Error(`Groq API Error: ${errMessage}`);
  }

  const resJson = await response.json();
  try {
    return resJson.choices[0].message.content;
  } catch (e) {
    throw new Error("Failed to parse output content from Groq completions response.");
  }
}

// 1. Resume Analyser Route
app.post('/api/analyze-resume', async (req, res) => {
  const { resumeText, role, status, language } = req.body;
  if (!resumeText || !role || !status) {
    return res.status(400).json({ error: "Missing required resumeText, role, or status parameter." });
  }

  const systemInstruction = `You are a professional ATS resume scanner and recruiter. Output strictly in JSON format. Generate all analysis comments, optimization recommendations, and text feedback in the language: ${language || 'English'}.`;
  const prompt = `Analyze this resume for the role: ${role}. Candidate status: ${status}. 
  Resume text: "${resumeText}".
  Compute a realistic ATS score (0-100), extract a list of missing technical skills for this role, and provide 3 actionable optimization tips.
  Output exactly in this JSON structure (keep JSON key names in English, but write the string values inside "recommendations" in the language: ${language || 'English'}):
  {
    "score": 82,
    "missingSkills": ["React", "TypeScript"],
    "recommendations": ["Recommendation bullet 1", "Recommendation bullet 2", "Recommendation bullet 3"]
  }`;

  try {
    const resultText = await callGroqBackend(systemInstruction, prompt, true);
    res.json(JSON.parse(resultText));
  } catch (err) {
    console.error("Error in /api/analyze-resume:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 2. Generate Interview Questions Route
app.post('/api/generate-questions', async (req, res) => {
  const { role, difficulty, type, language } = req.body;
  if (!role || !difficulty || !type) {
    return res.status(400).json({ error: "Missing required role, difficulty, or type parameter." });
  }

  const systemInstruction = `You are a professional software engineer interviewer. Generate 5 distinct interview questions. Output strictly in JSON format. Generate all question texts in the language: ${language || 'English'}.`;
  const prompt = `Generate a JSON object containing a list of 5 interview questions for a ${difficulty} ${role}. 
  The composition should be: ${type === 'technical' ? 'purely technical' : type === 'general' ? 'purely behavioral/HR' : 'mix of technical and behavioral'}.
  Return the questions in the following JSON format (keep JSON key names like "questions" and "question" in English, but write the question text values in the language: ${language || 'English'}):
  {
    "questions": [
      { "question": "Question 1 text here" },
      { "question": "Question 2 text here" },
      { "question": "Question 3 text here" },
      { "question": "Question 4 text here" },
      { "question": "Question 5 text here" }
    ]
  }`;

  try {
    const resultText = await callGroqBackend(systemInstruction, prompt, true);
    const parsed = JSON.parse(resultText);
    
    // Normalize response: extract the array of questions
    let questionsArray = [];
    if (Array.isArray(parsed)) {
      questionsArray = parsed;
    } else if (parsed && Array.isArray(parsed.questions)) {
      questionsArray = parsed.questions;
    } else if (parsed && typeof parsed === 'object') {
      const possibleArray = Object.values(parsed).find(val => Array.isArray(val));
      if (possibleArray) {
        questionsArray = possibleArray;
      } else {
        throw new Error("No array of questions found in the JSON response from Groq.");
      }
    } else {
      throw new Error("Invalid response format from Groq API.");
    }
    
    // Return standard array of questions to the frontend
    res.json(questionsArray);
  } catch (err) {
    console.error("Error in /api/generate-questions:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 3. Evaluate Interview Answers Route
app.post('/api/evaluate-interview', async (req, res) => {
  const { role, difficulty, questions, answers, language } = req.body;
  if (!role || !difficulty || !questions || !answers) {
    return res.status(400).json({ error: "Missing required role, difficulty, questions, or answers parameter." });
  }

  const qnA = questions.map((q, idx) => `Q: ${q}\nA: ${answers[idx]}`).join("\n\n");
  const systemInstruction = `You are an expert tech interviewer and communication coach. Output strictly in JSON format. Generate all feedback summaries, correctness critiques, model answers, and textual remarks in the language: ${language || 'English'}.`;
  const prompt = `Evaluate the candidate's answers below for the role: ${role} at difficulty: ${difficulty}. 
  ${qnA}
  Provide an overall percentage score (0-100), overall remarks summary, and a list containing a breakdown of correctness evaluation and a model answer suggestions for each of the 5 questions.
  Output exactly in this JSON format structure (keep JSON keys like "score", "summary", "breakdown", "question", "answer", "correctness", "modelAnswer" in English, but write the string values of "summary", "correctness", and "modelAnswer" in the language: ${language || 'English'}):
  {
    "score": 85,
    "summary": "Overall summary feedback text here...",
    "breakdown": [
      { "question": "Question 1", "answer": "Candidate Answer 1", "correctness": "Feedback on accuracy and style.", "modelAnswer": "Brief suggested model response." }
    ]
  }`;

  try {
    const resultText = await callGroqBackend(systemInstruction, prompt, true);
    res.json(JSON.parse(resultText));
  } catch (err) {
    console.error("Error in /api/evaluate-interview:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 4. AI Mentor Chat Route
app.post('/api/mentor-chat', async (req, res) => {
  const { message, language } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Missing required message parameter." });
  }

  const systemInstruction = `You are UpSkill AI Mentor, a highly knowledgeable career consultant and coder mentor. Guide the user with specific resources, career strategy advice, and engineering methodologies. Use formatting and markdown where appropriate. Always respond in the language: ${language || 'English'}.`;
  const prompt = `User states: "${message}"`;

  try {
    const resultText = await callGroqBackend(systemInstruction, prompt, false);
    res.json({ response: resultText });
  } catch (err) {
    console.error("Error in /api/mentor-chat:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// 5. Recommend Projects Route
app.post('/api/recommend-projects', async (req, res) => {
  const { role, languages, language } = req.body;
  if (!role || !languages) {
    return res.status(400).json({ error: "Missing required role or languages parameters." });
  }

  const systemInstruction = `You are a career development expert and senior software engineer. Recommend exactly 3 relevant projects that are suitable for a student aiming for the job role: ${role}, who knows the languages/technologies: ${languages}. Output strictly in JSON format. Generate all title, description, and difficulty values in the language: ${language || 'English'}.`;
  
  const prompt = `Based on the job role: ${role} and technical stack: ${languages}, generate a list of exactly 3 relevant project ideas.
  Output exactly in this JSON format structure (keep JSON key names in English, but write string values in the language: ${language || 'English'}):
  {
    "projects": [
      {
        "title": "Project Title",
        "description": "Brief description of what to build and its benefits.",
        "difficulty": "Beginner / Intermediate / Advanced",
        "techStack": ["React", "CSS"],
        "searchQuery": "build project title tutorial"
      }
    ]
  }`;

  try {
    const resultText = await callGroqBackend(systemInstruction, prompt, true);
    res.json(JSON.parse(resultText));
  } catch (err) {
    console.error("Error in /api/recommend-projects:", err.message);
    res.status(500).json({ error: err.message });
  }
});

// Fallback: Redirect all other requests to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Express Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`\n=================================================`);
  console.log(`🚀 UpSkill Server Running!`);
  console.log(`👉 Serving local files on http://localhost:${PORT}`);
  console.log(`🔑 Groq API Key Status: ${process.env.GROQ_API_KEY ? 'CONFIGURED (OK)' : 'MISSING (WARNING)'}`);
  console.log(`=================================================\n`);
});
