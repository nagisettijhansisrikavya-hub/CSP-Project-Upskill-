<<<<<<< HEAD
# 🚀 UpSkill | AI-Powered Career Development Platform

UpSkill is a premium, full-stack career development and upskilling platform. It features a modern glassmorphic dark-theme dashboard designed to help users scan resumes, generate interactive learning roadmaps, practice voice-supported AI mock interviews, search for internships, and chat with a persistent AI Mentor.

To preserve API key security, the platform is structured as a full-stack application. It uses a secure Node.js/Express backend that proxies AI requests to the **Groq API** (`llama-3.3-70b-versatile` model), ensuring that your credentials are never exposed to the client's browser.

---

## 🎨 Key Features

1. **📄 Resume Analyser (ATS Scanner)**: Upload or paste your resume to scan it against target job roles. Computes a realistic ATS scorecard, extracts missing skills, and offers 3 actionable optimization tips.
2. **🌳 Personalized Roadmaps**: Visual, interactive timeline nodes generated dynamically from your missing skills. Links directly to curated YouTube lectures.
3. **🎙️ AI Mock Interviews**: Generates technical or general/HR behavioral questions based on target roles and difficulty. Supports voice answers (Web Speech API) with live transcription and reads questions out loud. Evaluates your answers to provide an overall grade, remarks, and a question-by-question model answer comparison.
4. **💬 Persistent AI Career Mentor**: A responsive chat assistant that guides you on resume templates, coding, and career progression.
5. **💼 Internships Portal**: Search mock internship feeds or click out directly to pre-filtered portals like LinkedIn, Indeed, and Internshala.
6. **🏛️ Govt Schemes Directory**: Explore state-sponsored skill development programs and training opportunities filtered by student or professional target audiences.
7. **🔒 Key-Isolation Security**: Full proxy integration prevents API key leaks in network traffic or local storage.

---

## 🛠️ Tech Stack

- **Frontend**: HTML5, Vanilla CSS (Premium Glassmorphic Dark-Neon Theme), JavaScript (ES6, Web Speech Synthesis & Recognition APIs)
- **Backend**: Node.js, Express
- **AI Integration**: Groq API (`llama-3.3-70b-versatile` model)
- **Icons**: FontAwesome v6

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (Node v18+ is recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/upskill-platform.git
cd upskill-platform
```

### 2. Install Dependencies
Install Express and other required packages:
```bash
npm install
```

### 3. Configure the Groq API Key
You must define the `GROQ_API_KEY` environment variable on your system before running the server.

#### On Windows (PowerShell):
```powershell
$env:GROQ_API_KEY="your_groq_api_key_here"
```

#### On Windows (Command Prompt):
```cmd
set GROQ_API_KEY=your_groq_api_key_here
```

#### On Linux / macOS:
```bash
export GROQ_API_KEY="your_groq_api_key_here"
```

### 4. Run the Server
Start the local Express server:
```bash
npm start
```
The console will log:
```text
=================================================
🚀 UpSkill Server Running!
👉 Serving local files on http://localhost:3000
🔑 Groq API Key Status: CONFIGURED (OK)
=================================================
```

### 5. Access the Platform
Open your browser and navigate to:
**[http://localhost:3000](http://localhost:3000)**

---

## 🔒 Security Design

- **Backend Proxying**: All prompt generation and raw completions take place on the Node.js backend. The client only sends resume text or chat inputs to `/api/*` endpoints.
- **Diagnostics Dashboard**: A status check widget monitors `/api/health` to confirm server connection and credential settings without returning key characters to the browser console.

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).
=======
# CSP-Project-Upskill-
UPSKILL is an AI-powered career guidance platform that analyzes a user's target job and current skills, identifies skill gaps, creates personalized learning roadmaps, recommends learning resources, conducts AI mock interviews, and connects users with relevant internships and job opportunities to improve career readiness. 🚀
>>>>>>> e10b18def0b317235d4a490e70d834e965d48523
