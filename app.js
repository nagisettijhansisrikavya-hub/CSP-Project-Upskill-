// ==========================================
// STATIC DATA DATA STORES (MOCK DATA & DICTS)
// ==========================================

const ROLE_SKILLS = {
  "Frontend Developer": ["React", "TypeScript", "Tailwind CSS", "Next.js", "Redux", "Git", "Webpack", "CSS Grid", "REST APIs", "Unit Testing"],
  "Backend Developer": ["Node.js", "Express", "PostgreSQL", "MongoDB", "Redis", "Docker", "System Design", "JWT", "GraphQL", "AWS"],
  "Fullstack Developer": ["React", "Node.js", "TypeScript", "PostgreSQL", "Docker", "REST APIs", "Git", "Next.js", "AWS", "Redux"],
  "Data Scientist": ["Python", "Pandas", "Scikit-Learn", "SQL", "TensorFlow", "Machine Learning", "Data Visualization", "Tableau", "Git", "Docker"],
  "Product Manager": ["Agile Methodology", "Product Roadmap", "Jira", "User Research", "A/B Testing", "SQL", "Market Analysis", "Figma", "Data Analytics"],
  "UI/UX Designer": ["Figma", "Wireframing", "Prototyping", "User Research", "Information Architecture", "Design Systems", "Adobe XD", "Visual Design", "HTML/CSS"]
};

const YT_CHANNELS = {
  "React": [
    { title: "React JS Crash Course 2026", channel: "Traversy Media", link: "https://www.youtube.com/results?search_query=react+js+crash+course" },
    { title: "React Full Course for Beginners", channel: "freeCodeCamp.org", link: "https://www.youtube.com/results?search_query=react+full+course" }
  ],
  "TypeScript": [
    { title: "TypeScript Tutorial for Beginners", channel: "Programming with Mosh", link: "https://www.youtube.com/results?search_query=typescript+tutorial+mosh" },
    { title: "TypeScript Course - Beginners to Advanced", channel: "freeCodeCamp.org", link: "https://www.youtube.com/results?search_query=typescript+course" }
  ],
  "Node.js": [
    { title: "Node.js Full Course", channel: "Dave Gray", link: "https://www.youtube.com/results?search_query=nodejs+full+course+dave+gray" },
    { title: "Node.js Crash Course", channel: "Net Ninja", link: "https://www.youtube.com/results?search_query=nodejs+crash+course+net+ninja" }
  ],
  "Figma": [
    { title: "Figma UI/UX Design Tutorial", channel: "DesignCourse", link: "https://www.youtube.com/results?search_query=figma+ui+ux+design+tutorial" },
    { title: "Figma Full Course for Beginners", channel: "freeCodeCamp.org", link: "https://www.youtube.com/results?search_query=figma+full+course" }
  ],
  "Python": [
    { title: "Python for Beginners - Full Course", channel: "Programming with Mosh", link: "https://www.youtube.com/results?search_query=python+for+beginners+mosh" },
    { title: "Python Data Science Course", channel: "freeCodeCamp.org", link: "https://www.youtube.com/results?search_query=python+data+science+course" }
  ],
  "Tailwind CSS": [
    { title: "Tailwind CSS Crash Course", channel: "Brad Traversy", link: "https://www.youtube.com/results?search_query=tailwind+css+crash+course" }
  ],
  "System Design": [
    { title: "System Design Primer", channel: "ByteByteGo", link: "https://www.youtube.com/results?search_query=system+design+primer+bytebytego" }
  ],
  "Agile Methodology": [
    { title: "Agile Project Management Guide", channel: "Asana", link: "https://www.youtube.com/results?search_query=agile+project+management" }
  ]
};

const SCHEMES_DATA = [
  {
    title: "Pradhan Mantri Kaushal Vikas Yojana (PMKVY)",
    desc: "A flagship skill certification scheme aimed at enabling Indian youth to take up industry-relevant skill training that will help them secure a better livelihood.",
    target: "student",
    benefits: "Free skill training, financial assistance, placement support, assessment certificates.",
    link: "https://www.pmkvyofficial.org/"
  },
  {
    title: "Digital India Internship Scheme",
    desc: "Provides hands-on experience and learning opportunities under the Ministry of Electronics and Information Technology (MeitY) on emerging national tech projects.",
    target: "student",
    benefits: "Monthly stipend of ₹10,000, certificate of completion, exposure to governmental IT infrastructures.",
    link: "https://www.meity.gov.in/schemes"
  },
  {
    title: "National Apprenticeship Promotion Scheme (NAPS)",
    desc: "A program by the Govt of India to promote apprenticeship training and incentivize employers who engage apprentices in engineering and business management fields.",
    target: "student",
    benefits: "Hands-on work experience, partial stipend reimbursement from gov, industrial certification.",
    link: "https://www.apprenticeshipindia.gov.in/"
  },
  {
    title: "AICTE Yashasvi Scheme",
    desc: "Support and scholarships for degree/diploma students pursuing technical education, encouraging women and marginalized communities to upskill in tech.",
    target: "student",
    benefits: "₹50,000 per annum scholarship, laptop subsidies, academic book vouchers.",
    link: "https://www.aicte-india.org/"
  },
  {
    title: "Skill Acquisition and Knowledge Awareness for Livelihood Promotion (SANKALP)",
    desc: "World Bank supported project to boost institutional mechanisms for skill development and increase access to quality market-oriented training for workers.",
    target: "working",
    benefits: "Re-skilling/up-skilling bootcamps, certified competency credentials, vocational guidance.",
    link: "https://msde.gov.in/en/schemes-reports/schemes/sankalp"
  },
  {
    title: "Pravasi Kaushal Vikas Yojana (PKVY)",
    desc: "Specialized training program for Indian workers seeking overseas employment, aligning skills with international standards in healthcare, IT, and fabrication.",
    target: "working",
    benefits: "Pre-departure orientation, international skill standards testing, language familiarity training.",
    link: "https://www.nsdcindia.org/"
  }
];

const INTERNSHIPS_DATA = [
  {
    title: "Frontend Development Intern",
    company: "PixelCraft Studios",
    type: "Remote",
    domain: "Development",
    stipend: "₹15,000 / month",
    location: "Remote",
    skills: "React, Tailwind CSS, JavaScript",
    link: "https://linkedin.com/jobs"
  },
  {
    title: "Backend Engineering Intern",
    company: "CloudScale Systems",
    type: "Remote",
    domain: "Development",
    stipend: "₹20,000 / month",
    location: "Remote",
    skills: "Node.js, MongoDB, Express",
    link: "https://internshala.com"
  },
  {
    title: "UI/UX Product Designer",
    company: "Aura Creative",
    type: "Hybrid",
    domain: "Design",
    stipend: "₹18,000 / month",
    location: "Mumbai, IN",
    skills: "Figma, User Research, Prototyping",
    link: "https://wellfound.com"
  },
  {
    title: "Data Analyst & Insights Intern",
    company: "AlphaMetrics Consulting",
    type: "On-Site",
    domain: "Data",
    stipend: "₹22,000 / month",
    location: "Bangalore, IN",
    skills: "Python, SQL, Tableau, Pandas",
    link: "https://indeed.com"
  },
  {
    title: "Associate Product Manager Intern",
    company: "FinTech Flow",
    type: "Hybrid",
    domain: "Product",
    stipend: "₹25,000 / month",
    location: "Gurugram, IN",
    skills: "Agile, Product Roadmap, Market Analysis",
    link: "https://linkedin.com/jobs"
  },
  {
    title: "Mobile App Developer (Flutter)",
    company: "GoApp Technologies",
    type: "Remote",
    domain: "Development",
    stipend: "₹12,000 / month",
    location: "Remote",
    skills: "Flutter, Dart, Firebase, Git",
    link: "https://internshala.com"
  },
  {
    title: "Machine Learning Intern",
    company: "NeuralLabs AI",
    type: "Remote",
    domain: "Data",
    stipend: "₹30,000 / month",
    location: "Remote",
    skills: "Python, TensorFlow, Scikit-Learn",
    link: "https://wellfound.com"
  }
];

const QUESTIONS_BANK = {
  "Frontend Developer": [
    {
      q: "Explain the difference between Virtual DOM and Shadow DOM, and how React uses the Virtual DOM.",
      type: "technical",
      model: "Virtual DOM is a lightweight JS copy of the real DOM used by React for performance optimization via diffing and reconciliation. Shadow DOM is a web standard used for encapsulation in Web Components, scoping CSS styles so they do not leak."
    },
    {
      q: "What is CSS Specificity, and how is it calculated?",
      type: "technical",
      model: "CSS Specificity determines which styles apply when multiple rules match. It is calculated based on weights: Inline styles (1000), IDs (100), Classes/attributes/pseudo-classes (10), and Elements/pseudo-elements (1). The rule with highest specificity wins."
    },
    {
      q: "Tell me about a time you faced a difficult coding bug. How did you diagnose and resolve it?",
      type: "general",
      model: "Candidate should explain a systematic approach: reproducing the bug, placing breakpoints/logs, checking network payloads, reading documentation, and isolating the root cause followed by testing the fix."
    },
    {
      q: "Describe the event loop in JavaScript and how asynchronous callbacks are processed.",
      type: "technical",
      model: "The event loop continuously monitors the Call Stack and Callback Queue. When the stack is empty, it pushes the first callback from the queue (like setTimeout/fetch resolved promises) onto the stack for execution."
    },
    {
      q: "Why do you want to pursue a career in Frontend Development?",
      type: "general",
      model: "A good answer connects visual design, problem-solving, immediate user impact, and excitement about fast-paced web ecosystems."
    }
  ],
  "Backend Developer": [
    {
      q: "What is database normalization and when might you choose to denormalize your database?",
      type: "technical",
      model: "Normalization reduces data redundancy and improves integrity (1NF, 2NF, 3NF). Denormalization introduces controlled redundancy to optimize read performance and avoid complex JOIN operations in high-load scenarios."
    },
    {
      q: "Explain how JSON Web Tokens (JWT) work for authentication.",
      type: "technical",
      model: "JWT consists of Header, Payload, and Signature. The server signs the token upon login, and the client sends it in headers. The server verifies the signature to authorize requests without querying a database session."
    },
    {
      q: "Describe a situation where you had to collaborate with a cross-functional team member who had a different perspective.",
      type: "general",
      model: "Look for active listening, alignment on shared goals, compromise, testing/data-backed decision making, and maintaining positive working relationships."
    }
  ]
};

// ==========================================
// STATE MANAGEMENT & GLOBAL CONFIG
// ==========================================

let currentUser = null;
let appConfig = {
  mode: localStorage.getItem("upskill_ai_mode") || "live"
};

let currentInterview = {
  role: "",
  type: "",
  difficulty: "",
  currentQuestionIndex: 0,
  questions: [],
  answers: [],
  active: false
};

// ==========================================
// TOAST NOTIFICATIONS
// ==========================================

function showToast(message, type = 'info') {
  const container = document.getElementById("toast-container");
  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  let icon = '<i class="fa-solid fa-circle-info"></i>';
  if (type === 'success') icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === 'error') icon = '<i class="fa-solid fa-circle-exclamation"></i>';
  
  toast.innerHTML = `
    ${icon}
    <div class="toast-message">${message}</div>
  `;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1) reverse forwards';
    setTimeout(() => {
      toast.remove();
    }, 300);
  }, 3000);
}

// ==========================================
// ROUTER & VIEW CONTROLLER
// ==========================================

const views = ["dashboard", "analyser", "learn", "interview", "internships", "govt-schemes", "mentor"];

function showView(viewName) {
  if (!currentUser) {
    document.getElementById("app-view").style.display = "none";
    document.getElementById("auth-view").style.display = "flex";
    return;
  }

  // Hide all panels, remove active from links
  views.forEach(v => {
    document.getElementById(`view-${v}`).classList.remove("active");
    document.getElementById(`nav-${v}`).classList.remove("active");
  });

  // Show selected panel
  document.getElementById(`view-${viewName}`).classList.add("active");
  document.getElementById(`nav-${viewName}`).classList.add("active");

  // Update header title
  const titles = {
    dashboard: "Dashboard",
    analyser: "Resume Analyser",
    learn: "Roadmap & Learning",
    interview: "AI Mock Interviews",
    internships: "Internships Hub",
    "govt-schemes": "Government Schemes",
    mentor: "AI Mentor Chat"
  };
  document.getElementById("current-view-title").innerText = titles[viewName];

  // Specific panel triggers
  if (viewName === 'learn') {
    renderRoadmapView();
  }
}

// Sidebar links navigation hook & mobile navigation drawer
document.querySelectorAll(".sidebar-link").forEach(link => {
  link.addEventListener("click", (e) => {
    const view = e.currentTarget.getAttribute("data-view");
    showView(view);
    
    // Auto-close sidebar on link click (for mobile layout)
    const appSidebar = document.getElementById("app-sidebar");
    const sidebarOverlay = document.getElementById("sidebar-overlay");
    if (appSidebar) appSidebar.classList.remove("open");
    if (sidebarOverlay) sidebarOverlay.classList.remove("open");
  });
});

const mobileToggle = document.getElementById("mobile-sidebar-toggle");
const sidebarOverlay = document.getElementById("sidebar-overlay");
if (mobileToggle && sidebarOverlay) {
  mobileToggle.addEventListener("click", () => {
    const appSidebar = document.getElementById("app-sidebar");
    if (appSidebar) {
      appSidebar.classList.toggle("open");
      sidebarOverlay.classList.toggle("open");
    }
  });

  sidebarOverlay.addEventListener("click", () => {
    const appSidebar = document.getElementById("app-sidebar");
    if (appSidebar) appSidebar.classList.remove("open");
    sidebarOverlay.classList.remove("open");
  });
}

// ==========================================
// GEMINI API UTILITIES
// ==========================================

async function callServerAPI(endpoint, payload) {
  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(payload)
  });
  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(errData.error || response.statusText);
  }
  return await response.json();
}

// Setup API Modal operations
const apiModal = document.getElementById("api-modal");

async function checkServerHealth() {
  const statusDiag = document.getElementById("server-diag-status");
  const keyDiag = document.getElementById("server-diag-key");
  const dot = document.getElementById("api-status-indicator");
  const txt = document.getElementById("api-status-text");

  try {
    const res = await fetch('/api/health');
    if (!res.ok) throw new Error("Server error");
    const data = await res.json();
    
    if (statusDiag) statusDiag.innerHTML = '<span style="color: var(--success);">Connected</span>';
    
    if (data.hasKey) {
      if (keyDiag) keyDiag.innerHTML = '<span style="color: var(--success);">CONFIGURED (llama-3.3)</span>';
      if (appConfig.mode === 'live') {
        dot.className = "api-status-dot active";
        txt.innerText = "Groq Server Active";
      } else {
        dot.className = "api-status-dot";
        txt.innerText = "Simulated AI";
      }
    } else {
      if (keyDiag) keyDiag.innerHTML = '<span style="color: var(--danger);">MISSING KEY</span>';
      dot.className = "api-status-dot missing";
      txt.innerText = "Server Key Missing";
    }
  } catch (err) {
    if (statusDiag) statusDiag.innerHTML = '<span style="color: var(--danger);">Offline</span>';
    if (keyDiag) keyDiag.innerHTML = '<span style="color: var(--text-muted);">Unknown</span>';
    dot.className = "api-status-dot missing";
    txt.innerText = "Server Offline";
  }
}

document.getElementById("btn-api-status").addEventListener("click", () => {
  document.getElementById("settings-ai-mode").value = appConfig.mode;
  checkServerHealth();
  apiModal.classList.add("active");
});

document.getElementById("btn-close-api-modal").addEventListener("click", () => {
  apiModal.classList.remove("active");
});
document.getElementById("btn-api-modal-cancel").addEventListener("click", () => {
  apiModal.classList.remove("active");
});

document.getElementById("btn-api-modal-save").addEventListener("click", () => {
  const mode = document.getElementById("settings-ai-mode").value;
  appConfig.mode = mode;
  localStorage.setItem("upskill_ai_mode", mode);
  
  checkServerHealth();
  apiModal.classList.remove("active");
  showToast("AI Operation Mode updated successfully!", "success");
});

function updateApiStatusIndicator() {
  checkServerHealth();
}

// ==========================================
// RESUME ANALYSER ENGINE
// ==========================================

// Setup File drag zone
const dropzone = document.getElementById("resume-dropzone");
const fileInput = document.getElementById("resume-file-input");
const textInput = document.getElementById("resume-text-input");

dropzone.addEventListener("click", () => fileInput.click());
dropzone.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropzone.classList.add("dragover");
});
dropzone.addEventListener("dragleave", () => dropzone.classList.remove("dragover"));
dropzone.addEventListener("drop", (e) => {
  e.preventDefault();
  dropzone.classList.remove("dragover");
  if (e.dataTransfer.files.length) {
    handleResumeUpload(e.dataTransfer.files[0]);
  }
});
fileInput.addEventListener("change", (e) => {
  if (e.target.files.length) {
    handleResumeUpload(e.target.files[0]);
  }
});

function handleResumeUpload(file) {
  showToast(`Uploading resume: ${file.name}`, "info");
  
  const reader = new FileReader();
  reader.onload = (e) => {
    // If it is text content, read it
    textInput.value = e.target.result;
    showToast("Resume parsed. Click 'Start AI Analysis' to compute score.", "success");
  };
  
  if (file.type === "text/plain" || file.name.endsWith(".txt")) {
    reader.readAsText(file);
  } else {
    // PDF or Docx simulated text generation based on file name
    setTimeout(() => {
      textInput.value = `[PARSED FILE CONTENTS: ${file.name}]\n\nCandidate Profile: Experienced developer specializing in coding. Built standard websites, analyzed databases, and integrated API systems. Familar with software development lifecycles and agile models. Looking to transition into full-time roles.`;
      showToast("Resume template extracted successfully.", "success");
    }, 1000);
  }
}

// Resume Analysis Trigger
document.getElementById("btn-run-analysis").addEventListener("click", async () => {
  const resumeText = textInput.value.trim();
  const role = document.getElementById("analyser-target-role").value;
  const status = document.getElementById("analyser-status").value;

  if (!resumeText) {
    showToast("Please write or upload a resume content first.", "error");
    return;
  }

  document.getElementById("analyser-placeholder").style.display = "none";
  document.getElementById("analyser-results-card").style.display = "none";
  document.getElementById("analyser-loading").style.display = "flex";

  try {
    let result = null;
    
    if (appConfig.mode === 'live') {
      document.getElementById("analysis-load-text").innerText = "Connecting to Secure Groq Server...";
      result = await callServerAPI('/api/analyze-resume', { resumeText, role, status });
    } else {
      // Offline mock parsing
      document.getElementById("analysis-load-text").innerText = "Simulating local parsing model...";
      await new Promise(res => setTimeout(res, 1800)); // Sleep simulation
      
      // Calculate missing skills based on role skills dictionary
      const allSkills = ROLE_SKILLS[role] || [];
      const lowerResume = resumeText.toLowerCase();
      const missingSkills = allSkills.filter(skill => !lowerResume.includes(skill.toLowerCase()));
      const matchingSkills = allSkills.filter(skill => lowerResume.includes(skill.toLowerCase()));
      
      // Score calculation
      let score = 30;
      if (allSkills.length > 0) {
        score = Math.round((matchingSkills.length / allSkills.length) * 70) + 30;
      }
      if (score > 95) score = 95; // Cap so there's always something to learn
      
      result = {
        score: score,
        missingSkills: missingSkills.length > 0 ? missingSkills : [allSkills[0], allSkills[1]],
        recommendations: [
          `Format your project descriptions using the STAR method (Situation, Task, Action, Result).`,
          `Highlight your competencies in ${allSkills.slice(0, 3).join(", ")} directly in your header summary.`,
          `Quantify achievements (e.g. 'Improved efficiency by 20%') instead of list-based duties.`
        ]
      };
    }

    // Save to user object
    currentUser.lastAtsScore = result.score;
    currentUser.activeRole = role;
    currentUser.status = status;
    currentUser.missingSkills = result.missingSkills;
    currentUser.completedRoadmapNodes = []; // Reset on new analysis
    
    // Update local user database
    updateUserDb();
    
    // Render Results
    renderAnalysisResults(result);
    
    // Trigger dashboard stats refresh
    updateDashboardStats();
    
    // Log Activity
    logActivity(`Analyzed resume for ${role} (ATS Score: ${result.score})`);
    
    showToast("Resume analysis complete!", "success");
    
  } catch (err) {
    showToast(err.message, "error");
    document.getElementById("analyser-placeholder").style.display = "block";
  } finally {
    document.getElementById("analyser-loading").style.display = "none";
  }
});

function renderAnalysisResults(data) {
  document.getElementById("ats-score-radial").style.setProperty("--score", data.score);
  document.getElementById("ats-score-val").innerText = data.score;
  
  let matchText = "Needs Refinement";
  if (data.score >= 80) matchText = "Excellent Match!";
  else if (data.score >= 60) matchText = "Good Match";
  document.getElementById("ats-evaluation-title").innerText = matchText;

  // Skills
  const skillsContainer = document.getElementById("analysis-missing-skills");
  skillsContainer.innerHTML = "";
  data.missingSkills.forEach(skill => {
    const pill = document.createElement("div");
    pill.className = "skill-pill missing";
    pill.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${skill}`;
    skillsContainer.appendChild(pill);
  });

  // Tips
  const tipsContainer = document.getElementById("analysis-optimization-bullets");
  tipsContainer.innerHTML = "";
  data.recommendations.forEach(tip => {
    const bullet = document.createElement("div");
    bullet.className = "feedback-bullet";
    bullet.innerHTML = `<i class="fa-solid fa-circle-chevron-right" style="color: var(--primary);"></i> <span>${tip}</span>`;
    tipsContainer.appendChild(bullet);
  });

  document.getElementById("analyser-results-card").style.display = "block";
}

document.getElementById("btn-goto-roadmap").addEventListener("click", () => {
  showView("learn");
});
document.getElementById("btn-roadmap-goto-analyser").addEventListener("click", () => {
  showView("analyser");
});

// ==========================================
// ROADMAP & LEARN SKILLS CONTROLLER
// ==========================================

function renderRoadmapView() {
  if (!currentUser || !currentUser.missingSkills || currentUser.missingSkills.length === 0) {
    document.getElementById("roadmap-placeholder").style.display = "block";
    document.getElementById("roadmap-active-view").style.display = "none";
    return;
  }

  document.getElementById("roadmap-placeholder").style.display = "none";
  document.getElementById("roadmap-active-view").style.display = "block";
  document.getElementById("roadmap-role-title").innerText = currentUser.activeRole;

  // Render nodes
  const treeContainer = document.getElementById("roadmap-tree-nodes");
  treeContainer.innerHTML = "";

  const steps = [
    { title: "Stage 1: Core Fundamentals", level: "Beginner", id: "n1" },
    { title: "Stage 2: Advanced Tech & Integration", level: "Intermediate", id: "n2" },
    { title: "Stage 3: Portfolio & Production", level: "Advanced", id: "n3" }
  ];

  // Divide missing skills among nodes
  const skillsCount = currentUser.missingSkills.length;
  const chunk1 = currentUser.missingSkills.slice(0, Math.ceil(skillsCount/3));
  const chunk2 = currentUser.missingSkills.slice(Math.ceil(skillsCount/3), Math.ceil(2*skillsCount/3));
  const chunk3 = currentUser.missingSkills.slice(Math.ceil(2*skillsCount/3));

  const chunks = [chunk1, chunk2, chunk3];

  steps.forEach((step, idx) => {
    const node = document.createElement("div");
    node.className = "roadmap-node";
    
    const nodeSkills = chunks[idx] && chunks[idx].length > 0 ? chunks[idx] : ["Review Fundamentals"];
    
    let checkboxHtml = "";
    nodeSkills.forEach((skill, sIdx) => {
      const uniqueId = `rm-check-${step.id}-${sIdx}`;
      const isChecked = currentUser.completedRoadmapNodes.includes(uniqueId) ? "checked" : "";
      checkboxHtml += `
        <label class="roadmap-checkbox-item">
          <input type="checkbox" id="${uniqueId}" data-skill="${skill}" ${isChecked} onchange="toggleRoadmapNode('${uniqueId}')">
          <span>Master ${skill}</span>
        </label>
      `;
    });

    node.innerHTML = `
      <div class="roadmap-node-inner glass glass-interactive" onclick="loadYoutubeSkill('${nodeSkills[0]}')">
        <div class="roadmap-node-header">
          <div class="roadmap-node-title">
            <i class="fa-solid fa-route"></i> ${step.title}
          </div>
          <span class="badge ${idx === 0 ? 'badge-primary' : idx === 1 ? 'badge-secondary' : 'badge-success'}">${step.level}</span>
        </div>
        <div class="roadmap-checkboxes">
          ${checkboxHtml}
        </div>
      </div>
    `;
    treeContainer.appendChild(node);
  });

  // Load YouTube videos for the first missing skill initially
  loadYoutubeSkill(currentUser.missingSkills[0]);

  // Render Skills Directory
  const dirContainer = document.getElementById("roadmap-skills-directory");
  dirContainer.innerHTML = "";
  currentUser.missingSkills.forEach(skill => {
    const pill = document.createElement("div");
    pill.className = "skill-pill learned";
    pill.style.cursor = "pointer";
    pill.innerHTML = `<i class="fa-brands fa-youtube" style="color:var(--danger)"></i> ${skill}`;
    pill.addEventListener("click", () => loadYoutubeSkill(skill));
    dirContainer.appendChild(pill);
  });
}

function loadYoutubeSkill(skill) {
  const container = document.getElementById("learn-youtube-grid");
  container.innerHTML = "";

  // Check if we have curated recommendations
  const channels = YT_CHANNELS[skill] || [
    { title: `${skill} Masterclass for Beginners`, channel: "freeCodeCamp.org", link: `https://www.youtube.com/results?search_query=${encodeURIComponent(skill + ' full course')}` },
    { title: `${skill} Complete Career Guide`, channel: "Tech Academy", link: `https://www.youtube.com/results?search_query=${encodeURIComponent(skill + ' tutorials')}` }
  ];

  channels.forEach(ch => {
    const item = document.createElement("a");
    item.href = ch.link;
    item.target = "_blank";
    item.className = "yt-item glass glass-interactive";
    item.innerHTML = `
      <i class="fa-brands fa-youtube"></i>
      <div class="yt-info">
        <span class="yt-title">${ch.title}</span>
        <span class="yt-channel">${ch.channel}</span>
      </div>
    `;
    container.appendChild(item);
  });
}

function toggleRoadmapNode(checkboxId) {
  const checkbox = document.getElementById(checkboxId);
  if (checkbox.checked) {
    if (!currentUser.completedRoadmapNodes.includes(checkboxId)) {
      currentUser.completedRoadmapNodes.push(checkboxId);
      showToast(`Mastered ${checkbox.getAttribute("data-skill")}!`, "success");
    }
  } else {
    currentUser.completedRoadmapNodes = currentUser.completedRoadmapNodes.filter(id => id !== checkboxId);
  }

  updateUserDb();
  updateDashboardStats();
}

function updateRoadmapProgress() {
  if (!currentUser || !currentUser.missingSkills) return;
  // Total nodes is roughly sum of lengths of missing skills
  const total = document.querySelectorAll(".roadmap-checkbox-item input").length;
  const checked = currentUser.completedRoadmapNodes.length;

  const percent = total > 0 ? Math.round((checked / total) * 100) : 0;
  
  document.getElementById("stat-roadmap-progress").innerText = `${percent}%`;
  
  // Also log activity on milestone
  if (percent === 100 && total > 0) {
    logActivity(`Mastered entire roadmap for ${currentUser.activeRole}! 🏆`);
    showToast("Congratulations! You mastered all roadmap milestones!", "success");
  }
}

// ==========================================
// AI MOCK INTERVIEW CONTROLLER
// ==========================================

const startBtn = document.getElementById("btn-start-interview");
const textAnswerInput = document.getElementById("interview-text-answer");
const submitAnswerBtn = document.getElementById("btn-interview-submit-answer");
const chatHistory = document.getElementById("interview-chat-history");

startBtn.addEventListener("click", () => {
  const role = document.getElementById("interview-target-role").value;
  const type = document.getElementById("interview-type").value;
  const diff = document.getElementById("interview-difficulty").value;

  startInterview(role, type, diff);
});

async function startInterview(role, type, difficulty) {
  document.getElementById("interview-setup-room").style.display = "none";
  document.getElementById("interview-live-room").style.display = "grid";
  chatHistory.innerHTML = "";

  currentInterview = {
    role: role,
    type: type,
    difficulty: difficulty,
    currentQuestionIndex: 0,
    questions: [],
    answers: [],
    active: true
  };

  // Set Sidebar Info
  document.getElementById("session-info-role").innerText = role;
  document.getElementById("session-info-diff").innerText = difficulty;
  updateQuestionProgress();

  addInterviewerChatBubble("Hello! Welcome to your interview session. I am preparing your questions now...");

  try {
    if (appConfig.mode === 'live') {
      const parsedList = await callServerAPI('/api/generate-questions', { role, difficulty, type });
      
      // Robustly extract array of questions
      let questionsArray = [];
      if (Array.isArray(parsedList)) {
        questionsArray = parsedList;
      } else if (parsedList && Array.isArray(parsedList.questions)) {
        questionsArray = parsedList.questions;
      } else if (parsedList && typeof parsedList === 'object') {
        const possibleArray = Object.values(parsedList).find(val => Array.isArray(val));
        if (possibleArray) {
          questionsArray = possibleArray;
        } else {
          throw new Error("No questions array found in response.");
        }
      } else {
        throw new Error("Invalid questions format returned by server.");
      }
      
      currentInterview.questions = questionsArray.map(item => {
        if (typeof item === 'string') return item;
        return item.question || item.q || JSON.stringify(item);
      });
    } else {
      // Fallback local questions
      await new Promise(res => setTimeout(res, 1200));
      const list = QUESTIONS_BANK[role] || QUESTIONS_BANK["Frontend Developer"];
      currentInterview.questions = list.slice(0, 5).map(item => item.q);
    }

    chatHistory.innerHTML = ""; // Clear loader message
    askNextQuestion();
  } catch (err) {
    showToast(err.message, "error");
    terminateInterview();
  }
}

function updateQuestionProgress() {
  const idx = currentInterview.currentQuestionIndex;
  document.getElementById("interview-q-counter").innerText = `${idx + 1} / 5`;
  const pct = (idx / 5) * 100;
  document.getElementById("interview-q-progress-fill").style.width = `${pct}%`;
}

function askNextQuestion() {
  const index = currentInterview.currentQuestionIndex;
  const q = currentInterview.questions[index];
  
  addInterviewerChatBubble(q);
  updateQuestionProgress();
  
  // Speech synthesis (TTS)
  speakText(q);
}

function speakText(text) {
  if ('speechSynthesis' in window) {
    // Stop any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    // Try to pick a nice English voice
    const voices = window.speechSynthesis.getVoices();
    const englishVoice = voices.find(v => v.lang.startsWith("en"));
    if (englishVoice) utterance.voice = englishVoice;
    
    window.speechSynthesis.speak(utterance);
  }
}

function addInterviewerChatBubble(text) {
  const bubble = document.createElement("div");
  bubble.className = "interview-bubble interviewer";
  bubble.innerHTML = `
    <div class="bubble-speaker">AI Interviewer</div>
    <div>${text}</div>
  `;
  chatHistory.appendChild(bubble);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

function addCandidateChatBubble(text) {
  const bubble = document.createElement("div");
  bubble.className = "interview-bubble candidate";
  bubble.innerHTML = `
    <div class="bubble-speaker">Candidate (You)</div>
    <div>${text}</div>
  `;
  chatHistory.appendChild(bubble);
  chatHistory.scrollTop = chatHistory.scrollHeight;
}

submitAnswerBtn.addEventListener("click", () => submitAnswer());
textAnswerInput.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') submitAnswer();
});

function submitAnswer() {
  if (!currentInterview.active) return;
  const ans = textAnswerInput.value.trim();
  if (!ans) {
    showToast("Please provide an answer or click the microphone to speak.", "warning");
    return;
  }

  // Clear speech synthesis
  if ('speechSynthesis' in window) window.speechSynthesis.cancel();

  addCandidateChatBubble(ans);
  currentInterview.answers.push(ans);
  textAnswerInput.value = "";

  currentInterview.currentQuestionIndex++;

  if (currentInterview.currentQuestionIndex < 5) {
    setTimeout(askNextQuestion, 1000);
  } else {
    evaluateInterview();
  }
}

async function evaluateInterview() {
  document.getElementById("interview-live-room").style.display = "none";
  const feedbackView = document.getElementById("interview-feedback-view");
  feedbackView.style.display = "block";
  
  document.getElementById("interview-feedback-summary").innerText = "Generating performance evaluation report...";
  const breakdownContainer = document.getElementById("interview-q-breakdown");
  breakdownContainer.innerHTML = `<div class="loader-container"><div class="spinner"></div><p>Aggregating ratings...</p></div>`;

  try {
    let result = null;

    if (appConfig.mode === 'live') {
      result = await callServerAPI('/api/evaluate-interview', { 
        role: currentInterview.role, 
        difficulty: currentInterview.difficulty, 
        questions: currentInterview.questions, 
        answers: currentInterview.answers 
      });
    } else {
      // Local simulated response
      await new Promise(res => setTimeout(res, 2000));
      
      // Calculate a funny/nice random score based on word counts
      const avgLen = currentInterview.answers.reduce((acc, a) => acc + a.length, 0) / 5;
      let score = 50 + Math.round(avgLen / 3);
      if (score > 95) score = 95;
      if (score < 40) score = 40;

      const breakdown = currentInterview.questions.map((q, idx) => {
        return {
          question: q,
          answer: currentInterview.answers[idx],
          correctness: "Good structure. The answer demonstrates core knowledge of the topic, although elaborating on direct engineering trade-offs would secure a higher rating.",
          modelAnswer: "A model response should explicitly define key terms, mention real-world application examples, and briefly touch on edge cases."
        };
      });

      result = {
        score: score,
        summary: `You performed well during this simulated session for ${currentInterview.role}. Your communication is clear. To reach staff level ratings, practice framing your technical designs with quantitative metrics.`,
        breakdown: breakdown
      };
    }

    // Render results
    document.getElementById("interview-score-radial").style.setProperty("--score", result.score);
    document.getElementById("interview-feedback-score").innerText = `${result.score}%`;
    
    let grade = "C";
    if (result.score >= 90) grade = "A+ (Excellent)";
    else if (result.score >= 80) grade = "A (Above Average)";
    else if (result.score >= 70) grade = "B (Good)";
    else if (result.score >= 60) grade = "C (Pass)";
    else grade = "D (Need Practice)";

    document.getElementById("interview-grade-title").innerText = grade;
    document.getElementById("interview-feedback-summary").innerText = result.summary;

    // Build breakdown
    breakdownContainer.innerHTML = "";
    result.breakdown.forEach((item, idx) => {
      const block = document.createElement("div");
      block.className = "glass";
      block.style.padding = "20px";
      block.innerHTML = `
        <div style="font-weight:700; color: var(--primary); margin-bottom: 8px;">Question ${idx+1}: ${item.question}</div>
        <div style="font-size:0.9rem; margin-bottom: 8px; color: var(--text-secondary);">
          <strong style="color:var(--text-primary)">Your Answer:</strong> "${item.answer}"
        </div>
        <div style="font-size:0.85rem; padding: 10px; border-radius: 6px; background: rgba(16, 185, 129, 0.05); margin-bottom: 8px;">
          <strong style="color:var(--secondary)">Evaluation:</strong> ${item.correctness}
        </div>
        <div style="font-size:0.85rem; padding: 10px; border-radius: 6px; background: rgba(16, 185, 129, 0.05);">
          <strong style="color:var(--success)">Model Answer Guideline:</strong> ${item.modelAnswer}
        </div>
      `;
      breakdownContainer.appendChild(block);
    });

    currentUser.interviewsDone++;
    updateUserDb();
    updateDashboardStats();
    
    logActivity(`Finished mock interview for ${currentInterview.role} (Score: ${result.score}%)`);
    showToast("Interview performance rated!", "success");

  } catch (err) {
    showToast(err.message, "error");
    terminateInterview();
  }
}

function terminateInterview() {
  currentInterview.active = false;
  document.getElementById("interview-live-room").style.display = "none";
  document.getElementById("interview-feedback-view").style.display = "none";
  document.getElementById("interview-setup-room").style.display = "block";
}

document.getElementById("btn-terminate-interview").addEventListener("click", () => {
  terminateInterview();
  showToast("Interview session terminated.", "info");
});

document.getElementById("btn-interview-restart").addEventListener("click", () => {
  terminateInterview();
});

document.getElementById("btn-interview-view-roadmap").addEventListener("click", () => {
  showView("learn");
});

// ==========================================
// VOICE INTEGRATION (SPEECH RECOGNITION)
// ==========================================

const voiceBtn = document.getElementById("btn-interview-voice");
let recognition = null;

if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  recognition = new SpeechRec();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = 'en-US';

  recognition.onstart = () => {
    voiceBtn.classList.add("active");
    showToast("Listening... Speak clearly.", "info");
  };

  recognition.onend = () => {
    voiceBtn.classList.remove("active");
  };

  recognition.onerror = (e) => {
    showToast("Voice error: " + e.error, "error");
    voiceBtn.classList.remove("active");
  };

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    textAnswerInput.value = transcript;
    showToast("Answer transcribed!", "success");
  };
}

voiceBtn.addEventListener("click", () => {
  if (!recognition) {
    showToast("Speech recognition is not supported on this browser.", "error");
    return;
  }
  
  if (voiceBtn.classList.contains("active")) {
    recognition.stop();
  } else {
    recognition.start();
  }
});

// ==========================================
// INTERNSHIPS LISTINGS & FILTER ENGINE
// ==========================================

function renderInternshipsListings() {
  const container = document.getElementById("internships-grid-container");
  container.innerHTML = "";

  const searchVal = document.getElementById("internship-search").value.toLowerCase();
  const typeFilter = document.getElementById("internship-filter-type").value;
  const domainFilter = document.getElementById("internship-filter-domain").value;

  const filtered = INTERNSHIPS_DATA.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchVal) ||
                          item.company.toLowerCase().includes(searchVal) ||
                          item.skills.toLowerCase().includes(searchVal);
    
    const matchesType = typeFilter === 'all' || item.type === typeFilter;
    const matchesDomain = domainFilter === 'all' || item.domain === domainFilter;

    return matchesSearch && matchesType && matchesDomain;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-secondary);">
        <i class="fa-solid fa-folder-open" style="font-size: 3rem; margin-bottom: 12px; display: block;"></i>
        No matching internship openings found. Try altering your filters.
      </div>
    `;
    return;
  }

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "internship-card glass glass-interactive";
    card.innerHTML = `
      <div class="internship-company-row">
        <div class="company-logo">${item.company.charAt(0)}</div>
        <div class="company-info">
          <h3>${item.company}</h3>
          <p>${item.location}</p>
        </div>
      </div>
      <h4 class="internship-title">${item.title}</h4>
      <div class="internship-details">
        <div class="internship-detail-item">
          <i class="fa-solid fa-location-dot"></i> ${item.type}
        </div>
        <div class="internship-detail-item">
          <i class="fa-solid fa-code"></i> ${item.domain}
        </div>
      </div>
      <p style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px;">
        <strong>Skills:</strong> ${item.skills}
      </p>
      <div class="internship-footer">
        <span class="stipend-tag">${item.stipend}</span>
        <a href="${item.link}" target="_blank" class="btn btn-primary" style="padding: 8px 16px; font-size: 0.85rem;">
          Apply Now <i class="fa-solid fa-up-right-from-square"></i>
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.getElementById("internship-search").addEventListener("input", renderInternshipsListings);
document.getElementById("internship-filter-type").addEventListener("change", renderInternshipsListings);
document.getElementById("internship-filter-domain").addEventListener("change", renderInternshipsListings);

// Initialize initial list load
renderInternshipsListings();

// ==========================================
// GOVERNMENT SCHEMES COMPONENT
// ==========================================

function renderSchemes(audience = 'all') {
  const container = document.getElementById("schemes-grid-container");
  container.innerHTML = "";

  const filtered = SCHEMES_DATA.filter(sch => audience === 'all' || sch.target === audience);

  filtered.forEach(sch => {
    const card = document.createElement("div");
    card.className = "scheme-card glass glass-interactive";
    card.innerHTML = `
      <div class="scheme-icon-tag"><i class="fa-solid fa-building-columns"></i></div>
      <h4 class="scheme-title">${sch.title}</h4>
      <p class="scheme-desc">${sch.desc}</p>
      <div style="font-size: 0.8rem; margin-top: 8px;">
        <strong>Eligibility/Benefits:</strong> <span style="color:var(--text-secondary)">${sch.benefits}</span>
      </div>
      <div class="scheme-meta">
        <span class="scheme-target">${sch.target === 'student' ? 'For Students' : 'For Professionals'}</span>
        <a href="${sch.link}" target="_blank" class="btn btn-outline" style="padding: 8px 14px; font-size: 0.8rem;">
          Open Portal <i class="fa-solid fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    `;
    container.appendChild(card);
  });
}

document.querySelectorAll(".schemes-tab-btn").forEach(btn => {
  btn.addEventListener("click", (e) => {
    document.querySelectorAll(".schemes-tab-btn").forEach(b => b.classList.remove("active"));
    e.target.classList.add("active");
    renderSchemes(e.target.getAttribute("data-target"));
  });
});

renderSchemes();

// ==========================================
// AI MENTOR COMPONENT
// ==========================================

const mentorSendBtn = document.getElementById("btn-mentor-chat-send");
const mentorInputField = document.getElementById("mentor-chat-input-field");
const mentorHistory = document.getElementById("mentor-chat-history");

mentorSendBtn.addEventListener("click", () => sendMentorMessage());
mentorInputField.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') sendMentorMessage();
});

async function sendMentorMessage() {
  const msg = mentorInputField.value.trim();
  if (!msg) return;

  // Add User Message
  addMentorChatBubble(msg, 'user');
  mentorInputField.value = "";

  // Loader bubble
  const loaderId = `mentor-loader-${Date.now()}`;
  const loaderBubble = document.createElement("div");
  loaderBubble.className = "mentor-chat-bubble ai";
  loaderBubble.id = loaderId;
  loaderBubble.innerHTML = `<div style="display:flex; gap:6px; align-items:center;"><div class="spinner" style="width:16px; height:16px; border-width:2px;"></div> Generating guidance...</div>`;
  mentorHistory.appendChild(loaderBubble);
  mentorHistory.scrollTop = mentorHistory.scrollHeight;

  try {
    let aiResponse = "";
    
    if (appConfig.mode === 'live') {
      const data = await callServerAPI('/api/mentor-chat', { message: msg });
      aiResponse = data.response;
    } else {
      // Offline fallback responder
      await new Promise(res => setTimeout(res, 1500));
      
      const lower = msg.toLowerCase();
      if (lower.includes("resume") || lower.includes("ats")) {
        aiResponse = "To improve your ATS resume rating, I recommend ensuring your skills directly map to standard definitions. Utilize bulleted highlights starting with active action verbs (e.g. 'Engineered', 'Launched', 'Redesigned') rather than plain descriptors. Be sure to check out our **Resume Analyser** tab!";
      } else if (lower.includes("react") || lower.includes("frontend")) {
        aiResponse = "Frontend engineering requires mastering core concepts. I recommend focusing on React lifecycle states, custom hooks, and state context APIs. We also have a curated roadmap for Frontend developers in the **Roadmap & Learn** tab featuring free video tutorials!";
      } else if (lower.includes("internship") || lower.includes("job")) {
        aiResponse = "Securing internships requires a combination of portfolio projects and direct networking. Use platforms like LinkedIn or Internshala. I suggest looking at our **Internships** tab which lists active mock openings and provides direct search portals!";
      } else {
        aiResponse = `That is a great question regarding career development! 🚀 As your AI mentor, I suggest looking into mastering one specific domain (like Frontend or Backend development), building 2 robust projects, and utilizing our AI Mock Interviews to test your behavioral skills. If you'd like a more precise response, configure your **Gemini API Key** in the top-right header settings!`;
      }
    }

    loaderBubble.remove();
    addMentorChatBubble(aiResponse, 'ai');

  } catch (err) {
    loaderBubble.remove();
    addMentorChatBubble(`Error: ${err.message}. Please verify your API Key configuration in the settings.`, 'ai');
    showToast(err.message, "error");
  }
}

function addMentorChatBubble(text, speaker) {
  const bubble = document.createElement("div");
  bubble.className = `mentor-chat-bubble ${speaker}`;
  
  // Format code blocks if any
  let formatted = text;
  
  // Simple markdown conversion for code blocks
  formatted = formatted.replace(/```([\s\S]*?)```/g, '<pre><code>$1</code></pre>');
  // Bold format
  formatted = formatted.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
  // Simple newlines to breaks
  formatted = formatted.split("\n").join("<br>");

  bubble.innerHTML = formatted;
  mentorHistory.appendChild(bubble);
  mentorHistory.scrollTop = mentorHistory.scrollHeight;
}

// Floating AI Mentor Toggle
const floatBtn = document.getElementById("floating-ai-mentor-btn");
floatBtn.addEventListener("click", () => {
  showView("mentor");
});

// ==========================================
// AUTHENTICATION & SESSION MANAGEMENT
// ==========================================

const switchLink = document.getElementById("auth-switch-link");
const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const authSubtitle = document.getElementById("auth-subtitle");

let isLoginMode = true;

switchLink.addEventListener("click", (e) => {
  e.preventDefault();
  isLoginMode = !isLoginMode;
  
  if (isLoginMode) {
    loginForm.style.display = "block";
    registerForm.style.display = "none";
    authSubtitle.innerText = "Sign in to accelerate your career growth";
    switchLink.innerText = "Create one";
    document.getElementById("auth-footer").innerHTML = `Don't have an account? <a href="#" id="auth-switch-link">Create one</a>`;
  } else {
    loginForm.style.display = "none";
    registerForm.style.display = "block";
    authSubtitle.innerText = "Register your profile to access custom AI roadmaps";
    switchLink.innerText = "Sign In";
    document.getElementById("auth-footer").innerHTML = `Already have an account? <a href="#" id="auth-switch-link">Sign In</a>`;
  }
  
  // Rebind link listener since innerHTML destroys it
  document.getElementById("auth-switch-link").addEventListener("click", (ev) => {
    ev.preventDefault();
    switchLink.click();
  });
});

// Password visibility toggles
document.getElementById("login-password-toggle").addEventListener("click", (e) => {
  const input = document.getElementById("login-password");
  const isPass = input.type === "password";
  input.type = isPass ? "text" : "password";
  e.target.className = isPass ? "fa-solid fa-eye-slash password-toggle" : "fa-solid fa-eye password-toggle";
});

document.getElementById("register-password-toggle").addEventListener("click", (e) => {
  const input = document.getElementById("register-password");
  const isPass = input.type === "password";
  input.type = isPass ? "text" : "password";
  e.target.className = isPass ? "fa-solid fa-eye-slash password-toggle" : "fa-solid fa-eye password-toggle";
});

// Register submit
document.getElementById("btn-register-submit").addEventListener("click", () => {
  const name = document.getElementById("register-name").value.trim();
  const email = document.getElementById("register-email").value.trim();
  const password = document.getElementById("register-password").value.trim();

  if (!name || !email || !password) {
    showToast("Please fill all signup fields.", "warning");
    return;
  }
  if (password.length < 8) {
    showToast("Password must be at least 8 characters.", "warning");
    return;
  }

  const users = JSON.parse(localStorage.getItem("upskill_users") || "[]");
  if (users.find(u => u.email === email)) {
    showToast("An account with this email already exists.", "error");
    return;
  }

  const newUser = {
    id: "usr-" + Date.now(),
    name: name,
    email: email,
    password: password,
    status: "Student",
    activeRole: "Frontend Developer",
    lastAtsScore: null,
    roadmapProgress: 0,
    interviewsDone: 0,
    completedRoadmapNodes: [],
    missingSkills: []
  };

  users.push(newUser);
  localStorage.setItem("upskill_users", JSON.stringify(users));

  showToast("Registration successful! Please log in.", "success");
  
  // Clear fields and switch to login
  document.getElementById("register-name").value = "";
  document.getElementById("register-email").value = "";
  document.getElementById("register-password").value = "";
  switchLink.click();
});

// Login submit
document.getElementById("btn-login-submit").addEventListener("click", () => {
  const email = document.getElementById("login-email").value.trim();
  const password = document.getElementById("login-password").value.trim();

  if (!email || !password) {
    showToast("Please fill all login fields.", "warning");
    return;
  }

  const users = JSON.parse(localStorage.getItem("upskill_users") || "[]");
  const found = users.find(u => u.email === email && u.password === password);

  if (!found) {
    showToast("Invalid email or password.", "error");
    return;
  }

  currentUser = found;
  sessionStorage.setItem("upskill_active_user", JSON.stringify(currentUser));
  
  showToast(`Welcome back, ${currentUser.name}!`, "success");
  enterAppWorkspace();
});

// Logout trigger
document.getElementById("btn-logout").addEventListener("click", () => {
  currentUser = null;
  sessionStorage.removeItem("upskill_active_user");
  document.getElementById("app-view").style.display = "none";
  document.getElementById("auth-view").style.display = "flex";
  showToast("Logged out successfully.", "info");
});

function enterAppWorkspace() {
  document.getElementById("auth-view").style.display = "none";
  document.getElementById("app-view").style.display = "grid";
  
  // Set User labels
  document.getElementById("user-profile-name").innerText = currentUser.name;
  document.getElementById("user-profile-status").innerText = currentUser.status;
  document.getElementById("dashboard-user-greeting").innerText = currentUser.name;
  
  // Avatar initials
  const initials = currentUser.name.split(" ").map(n => n[0]).join("").toUpperCase().slice(0, 2);
  document.getElementById("user-avatar-initials").innerText = initials;

  updateDashboardStats();
  updateApiStatusIndicator();
  showView("dashboard");
}

function updateUserDb() {
  const users = JSON.parse(localStorage.getItem("upskill_users") || "[]");
  const idx = users.findIndex(u => u.id === currentUser.id);
  if (idx !== -1) {
    users[idx] = currentUser;
    localStorage.setItem("upskill_users", JSON.stringify(users));
  }
  // Keep session alive
  sessionStorage.setItem("upskill_active_user", JSON.stringify(currentUser));
}

function updateDashboardStats() {
  if (!currentUser) return;

  // Score
  document.getElementById("stat-ats-score").innerText = currentUser.lastAtsScore ? `${currentUser.lastAtsScore}` : "--";
  
  // Progress
  updateRoadmapProgress();

  // Interviews Done
  document.getElementById("stat-interviews-done").innerText = currentUser.interviewsDone;
}

// Activity Log Tracker
function logActivity(activityText) {
  const list = document.getElementById("activity-log-list");
  const item = document.createElement("div");
  item.className = "activity-item glass";
  item.style.background = "rgba(255,255,255,0.01)";
  item.innerHTML = `
    <div class="activity-dot"></div>
    <div class="activity-info">
      <div class="activity-title">${activityText}</div>
      <div class="activity-time">Just now</div>
    </div>
  `;
  list.insertBefore(item, list.firstChild);
}

// ==========================================
// SESSION RESTORATION (AUTO-LOGIN)
// ==========================================

window.addEventListener("DOMContentLoaded", () => {
  const activeUser = sessionStorage.getItem("upskill_active_user");
  if (activeUser) {
    currentUser = JSON.parse(activeUser);
    enterAppWorkspace();
  } else {
    showView("login"); // Directs to auth view
  }
});
