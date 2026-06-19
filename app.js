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

const views = ["dashboard", "analyser", "learn", "projects", "interview", "internships", "govt-schemes", "mentor"];

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
    projects: "Project Hub",
    interview: "AI Mock Interviews",
    internships: "Internships Hub",
    "govt-schemes": "Government Schemes",
    mentor: "AI Mentor Chat"
  };

  const dict = translations[currentLanguage] || translations['en'];
  const viewKey = `nav_${viewName}`;
  document.getElementById("current-view-title").innerText = dict[viewKey] || titles[viewName];

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

let currentLanguage = localStorage.getItem("upskill_lang") || "en";

const translations = {
  en: {
    dashboard_title: "Dashboard",
    nav_dashboard: "Dashboard",
    nav_analyser: "Resume Analyser",
    nav_learn: "Roadmap & Learn",
    nav_interview: "Mock Interviews",
    nav_internships: "Internships",
    nav_govt_schemes: "Govt Schemes",
    nav_mentor: "Mentor",
    welcome_back: "Welcome Back,",
    welcome_subtitle: "Track your learning, analyze resumes, practice mock interviews, and land top opportunities using AI-driven coaching.",
    last_ats_score: "Last ATS Resume Score",
    roadmap_progress: "Roadmap Progress",
    interviews_done: "Interviews Done",
    recent_activity: "Recent Activity",
    account_created: "Account Created",
    just_now: "Just now",
    upload_resume: "Upload Resume",
    resume_subtitle: "We'll run an ATS check for your desired role, identify key missing skills, and compile a roadmap.",
    aimed_role: "AIMED JOB ROLE",
    current_status: "CURRENT STATUS",
    resume_content: "RESUME CONTENT",
    drag_drop: "Drag & Drop Resume File",
    or_click: "or click to upload",
    supports_format: "Supports PDF, DOCX, TXT (Simulated upload)",
    or_paste: "— OR PASTE TEXT DIRECTLY —",
    paste_resume_placeholder: "Paste your resume contents, text bio, project history, and experience here...",
    start_analysis: "Start AI Analysis",
    analyser_placeholder_text: "Fill out the resume details and trigger the analysis to view your ATS grading, missing skills, and detailed career feedback.",
    analyzing_resume_text: "Analyzing resume against role profiles...",
    connecting_ai: "Connecting to Secure Groq Server...",
    analysis_complete: "Analysis Complete",
    ats_score_label: "ATS SCORE",
    missing_skills: "Missing Required Skills",
    opt_recs: "Optimization Recommendations",
    gen_roadmap: "Generate Personalized Roadmap",
    learning_hub: "Curated Learning Hub",
    interview_lobby: "AI Mock Interview Lobby",
    interview_subtitle: "Practice general and technical interview questions tailored for your desired job role. Receive live feedback and a communication/technical assessment.",
    interview_target: "INTERVIEW JOB TARGET",
    question_comp: "QUESTION COMPOSITION",
    difficulty_level: "DIFFICULTY LEVEL",
    begin_simulation: "Begin AI Simulation",
    type_response: "Type your response or click the microphone to speak...",
    ask_question_placeholder: "Type your question here...",
    send: "Send",
    brand_slogan: "From learning today to leading tomorrow.",
    nav_projects: "Project Hub",
    projects_title: "AI Project Planner",
    projects_subtitle: "Get personalized project ideas tailored to your target job role and the languages you already know.",
    target_role: "TARGET JOB ROLE",
    languages_known: "LANGUAGES & TECHNOLOGIES KNOWN",
    projects_input_placeholder: "e.g. JavaScript, Python, React, HTML/CSS",
    generate_ideas: "Generate Project Ideas",
    recommended_projects: "Recommended Projects",
    designing_projects_loading: "Designing tailored projects and finding tutorials...",
    watch_tutorials: "Watch Tutorials",
    benefits_title: "Benefits of UpSkill",
    benefit_1: "Personalized career guidance",
    benefit_2: "Skill gap identification",
    benefit_3: "Faster learning with curated resources",
    benefit_4: "Improved interview performance",
    benefit_5: "Better resume quality and ATS score",
    benefit_6: "Access to internships and jobs",
    benefit_7: "Awareness of government opportunities",
    benefit_8: "Stronger project portfolio",
    benefit_9: "One platform for complete career growth",
    // Who it's for
    audience_title: "Who it's for",
    audience_subtitle: "Built for every stage of your career journey",
    audience_college_title: "College Student",
    audience_college_age: "18 – 22",
    audience_college_desc: "No guidance on where to start, weak resume, zero interview prep — UPSKILL builds your foundation from day one.",
    audience_grad_title: "Fresh Graduate",
    audience_grad_age: "22 – 26",
    audience_grad_desc: "ATS rejections piling up, unclear skill gaps, limited network — UPSKILL helps you break through the screening wall.",
    audience_switcher_title: "Career Switcher",
    audience_switcher_age: "26 – 35",
    audience_switcher_desc: "Pivoting domains with no clear learning path — UPSKILL maps exactly what to learn and in what order.",
    audience_seeker_title: "Active Job Seeker",
    audience_seeker_age: "Any age",
    audience_seeker_desc: "Scattered tools, no structured plan — UPSKILL consolidates everything into one intelligent platform.",
    audience_lowincome_title: "Rural / Low-Income",
    audience_lowincome_age: "Any age",
    audience_lowincome_desc: "Unaware of free resources and eligible government schemes — UPSKILL surfaces every opportunity you qualify for.",
    // User Journey
    journey_title: "User Journey",
    journey_subtitle: "From sign-up to job offer",
    journey_step1_title: "Build Your Profile",
    journey_step1_desc: "Share your education, skills, goals, and target role in a guided onboarding flow.",
    journey_step2_title: "Analyse Your Resume",
    journey_step2_desc: "Get your ATS score, keyword gaps, and a prioritised improvement report instantly.",
    journey_step3_title: "Get Your Roadmap",
    journey_step3_desc: "Receive a personalised short, medium, and long-term learning plan curated for you.",
    journey_step4_title: "Practice & Prepare",
    journey_step4_desc: "Run AI mock interviews and iterate on your skills until you're interview-ready.",
    journey_step5_title: "Apply & Land",
    journey_step5_desc: "Discover filtered opportunities and apply directly. Your GPS score tracks every gain."
  },
  hi: {
    dashboard_title: "डैशबोर्ड",
    nav_dashboard: "डैशबोर्ड",
    nav_analyser: "रिज्यूमे विश्लेषक",
    nav_learn: "रोडमैप और सीखें",
    nav_interview: "मॉक इंटरव्यू",
    nav_internships: "इंटर्नशिप",
    nav_govt_schemes: "सरकारी योजनाएं",
    nav_mentor: "एआई मेंटर",
    welcome_back: "स्वागत है वापस,",
    welcome_subtitle: "एआई-संचालित कोचिंग का उपयोग करके अपनी सीख को ट्रैक करें, रिज्यूमे का विश्लेषण करें, मॉक इंटरव्यू का अभ्यास करें और शीर्ष अवसर प्राप्त करें।",
    last_ats_score: "अंतिम एटीएस रिज्यूमे स्कोर",
    roadmap_progress: "रोडमैप प्रगति",
    interviews_done: "इंटरव्यू पूरे हुए",
    recent_activity: "हाल की गतिविधि",
    account_created: "खाता बनाया गया",
    just_now: "अभी-अभी",
    upload_resume: "रिज्यूमे अपलोड करें",
    resume_subtitle: "हम आपकी पसंदीदा भूमिका के लिए एक एटीएस जांच चलाएंगे, महत्वपूर्ण गुम कौशल की पहचान करेंगे और एक रोडमैप तैयार करेंगे।",
    aimed_role: "लक्षित नौकरी की भूमिका",
    current_status: "वर्तमान स्थिति",
    resume_content: "रिज्यूमे सामग्री",
    drag_drop: "रिज्यूमे फ़ाइल खींचें और छोड़ें",
    or_click: "या अपलोड करने के लिए क्लिक करें",
    supports_format: "PDF, DOCX, TXT का समर्थन करता है (सिम्युलेटेड अपलोड)",
    or_paste: "— या सीधे पाठ पेस्ट करें —",
    paste_resume_placeholder: "अपनी रिज्यूमे सामग्री, पाठ जीवनी, परियोजना इतिहास और अनुभव यहाँ पेस्ट करें...",
    start_analysis: "एआई विश्लेषण शुरू करें",
    analyser_placeholder_text: "एटीएस ग्रेडिंग, लापता कौशल और विस्तृत करियर प्रतिक्रिया देखने के लिए रिज्यूमे विवरण भरें और विश्लेषण ट्रिगर करें।",
    analyzing_resume_text: "भूमिका प्रोफाइल के खिलाफ रिज्यूमे का विश्लेषण...",
    connecting_ai: "सुरक्षित ग्रोम एआई इंजन से कनेक्ट किया जा रहा है...",
    analysis_complete: "विश्लेषण पूर्ण",
    ats_score_label: "एटीएस स्कोर",
    missing_skills: "लापता आवश्यक कौशल",
    opt_recs: "अनुकूलन सिफारिशें",
    gen_roadmap: "व्यक्तिगत रोडमैप बनाएं",
    learning_hub: "क्यूरेटेड लर्निंग हब",
    interview_lobby: "एआई मॉक इंटरव्यू लॉबी",
    interview_subtitle: "अपनी लक्षित नौकरी की भूमिका के अनुरूप सामान्य और तकनीकी साक्षात्कार प्रश्नों का अभ्यास करें। लाइव प्रतिक्रिया और संचार/तकनीकी मूल्यांकन प्राप्त करें।",
    interview_target: "साक्षात्कार नौकरी लक्ष्य",
    question_comp: "प्रश्न संरचना",
    difficulty_level: "कठिनाई स्तर",
    begin_simulation: "एआई सिमुलेशन शुरू करें",
    type_response: "अपना उत्तर टाइप करें या बोलने के लिए माइक्रोफ़ोन पर क्लिक करें...",
    ask_question_placeholder: "अपना प्रश्न यहाँ टाइप करें...",
    send: "भेजें",
    brand_slogan: "आज सीखने से लेकर कल नेतृत्व करने तक।",
    nav_projects: "प्रोजेक्ट हब",
    projects_title: "एआई प्रोजेक्ट प्लानर",
    projects_subtitle: "अपनी लक्षित नौकरी की भूमिका और आपके द्वारा पहले से जानी जाने वाली भाषाओं के अनुरूप व्यक्तिगत प्रोजेक्ट विचार प्राप्त करें।",
    target_role: "साक्षात्कार नौकरी लक्ष्य",
    languages_known: "भाषाएं और प्रौद्योगिकियां ज्ञात",
    projects_input_placeholder: "जैसे: JavaScript, Python, React, HTML/CSS",
    generate_ideas: "प्रोजेक्ट विचार उत्पन्न करें",
    recommended_projects: "अनुशंसित परियोजनाएं",
    designing_projects_loading: "अनुकूलित परियोजनाओं को डिजाइन करना और ट्यूटोरियल ढूंढना...",
    watch_tutorials: "ट्यूटोरियल देखें",
    benefits_title: "UpSkill के लाभ",
    benefit_1: "व्यक्तिगत करियर मार्गदर्शन",
    benefit_2: "कौशल अंतराल की पहचान",
    benefit_3: "क्यूरेटेड संसाधनों के साथ तेज गति से सीखना",
    benefit_4: "साक्षात्कार प्रदर्शन में सुधार",
    benefit_5: "बेहतर रिज्यूमे गुणवत्ता और एटीएस स्कोर",
    benefit_6: "इंटर्नशिप और नौकरियों तक पहुंच",
    benefit_7: "सरकारी अवसरों के बारे में जागरूकता",
    benefit_8: "मजबूत प्रोजेक्ट पोर्टफोलियो",
    benefit_9: "पूर्ण करियर विकास के लिए एक मंच",
    // Who it's for
    audience_title: "यह किसके लिए है",
    audience_subtitle: "आपके करियर की यात्रा के हर चरण के लिए निर्मित",
    audience_college_title: "कॉलेज छात्र",
    audience_college_age: "18 – 22",
    audience_college_desc: "कहाँ से शुरू करें, इस पर कोई मार्गदर्शन नहीं, कमज़ोर रिज्यूमे, शून्य साक्षात्कार तैयारी — UPSKILL पहले दिन से आपकी नींव बनाता है।",
    audience_grad_title: "ताजा स्नातक",
    audience_grad_age: "22 – 26",
    audience_grad_desc: "एटीएस अस्वीकरणों का ढेर, अस्पष्ट कौशल अंतराल, सीमित नेटवर्क — UPSKILL स्क्रीनिंग दीवार को तोड़ने में आपकी मदद करता है।",
    audience_switcher_title: "करियर बदलने वाले",
    audience_switcher_age: "26 – 35",
    audience_switcher_desc: "बिना किसी स्पष्ट सीखने के मार्ग के डोमेन को बदलना — UPSKILL बिल्कुल वही मैप करता है जो सीखना है और किस क्रम में सीखना है।",
    audience_seeker_title: "सक्रिय नौकरी चाहने वाले",
    audience_seeker_age: "किसी भी उम्र में",
    audience_seeker_desc: "बिखरे हुए उपकरण, कोई संरचित योजना नहीं — UPSKILL सब कुछ एक बुद्धिमान मंच में समेकित करता है।",
    audience_lowincome_title: "ग्रामीण / कम आय वाले",
    audience_lowincome_age: "किसी भी उम्र में",
    audience_lowincome_desc: "मुफ्त संसाधनों और पात्र सरकारी योजनाओं से अनजान — UPSKILL आपके योग्य हर अवसर को सामने लाता है।",
    // User Journey
    journey_title: "उपयोगकर्ता यात्रा",
    journey_subtitle: "साइन-अप से लेकर नौकरी के प्रस्ताव तक",
    journey_step1_title: "अपनी प्रोफ़ाइल बनाएं",
    journey_step1_desc: "एक निर्देशित ऑनबोर्डिंग प्रवाह में अपनी शिक्षा, कौशल, लक्ष्यों और लक्षित भूमिका को साझा करें।",
    journey_step2_title: "अपने रिज्यूमे का विश्लेषण करें",
    journey_step2_desc: "तुरंत अपना एटीएस स्कोर, कीवर्ड अंतराल और एक प्राथमिकता वाली सुधार रिपोर्ट प्राप्त करें।",
    journey_step3_title: "अपना रोडमैप प्राप्त करें",
    journey_step3_desc: "अपने लिए क्यूरेट की गई एक व्यक्तिगत लघु, मध्यम और दीर्घकालिक सीखने की योजना प्राप्त करें।",
    journey_step4_title: "अभ्यास और तैयारी करें",
    journey_step4_desc: "एआई मॉक साक्षात्कार चलाएं और अपने कौशल पर तब तक काम करें जब तक आप साक्षात्कार के लिए तैयार न हो जाएं।",
    journey_step5_title: "आवेदन करें और सफलता पाएं",
    journey_step5_desc: "फ़िल्टर किए गए अवसरों की खोज करें और सीधे आवेदन करें। आपका जीपीएस स्कोर हर प्रगति को ट्रैक करता है।"
  },
  te: {
    dashboard_title: "డాష్‌బోర్డ్",
    nav_dashboard: "డాష్‌బోర్డ్",
    nav_analyser: "రెజ్యూమే విశ్లేషకుడు",
    nav_learn: "రోడ్‌మ్యాప్ & నేర్చుకోండి",
    nav_interview: "మాక్ ఇంటర్వ్యూలు",
    nav_internships: "ఇంటర్న్‌షిప్‌లు",
    nav_govt_schemes: "ప్రభుత్వ పథకాలు",
    nav_mentor: "మెంటర్",
    welcome_back: "స్వాగతం,",
    welcome_subtitle: "AI-ఆధారిత కోచింగ్‌ను ఉపయోగించి మీ అభ్యాసాన్ని ట్రాక్ చేయండి, రెజ్యూమేలను విశ్లేషించండి, మాక్ ఇంటర్వ్యూలను ప్రాక్టీస్ చేయండి మరియు అగ్ర అవకాశాలను పొందండి.",
    last_ats_score: "చివరి ATS రెజ్యూమే స్కోర్",
    roadmap_progress: "రోడ్‌మ్యాప్ పురోగతి",
    interviews_done: "ఇంటర్వ్యూలు పూర్తయ్యాయి",
    recent_activity: "ఇటీవలి కార్యాచరణ",
    account_created: "ఖాతా సృష్టించబడింది",
    just_now: "ఇప్పుడే",
    upload_resume: "రెజ్యూమే అప్‌లోడ్ చేయండి",
    resume_subtitle: "మేము మీ కావలసిన పాత్ర కోసం ATS తనిఖీని రన్ చేస్తాము, కీలకమైన తప్పిపోయిన నైపుణ్యాలను గుర్తిస్తాము మరియు రోడ్‌మ్యాప్‌ను కంపైల్ చేస్తాము.",
    aimed_role: "లక్ష్యంగా ఉన్న ఉద్యోగ పాత్ర",
    current_status: "ప్రస్తుత స్థితి",
    resume_content: "రెజ్యూమే కంటెంట్",
    drag_drop: "రెజ్యూమే ఫైల్‌ను లాగి వదలండి",
    or_click: "లేదా అప్‌లోడ్ చేయడానికి క్లిక్ చేయండి",
    supports_format: "PDF, DOCX, TXTకి మద్దతు ఇస్తుంది (సిమ్యులేటెడ్ అప్‌లోడ్)",
    or_paste: "— లేదా నేరుగా టెక్స్ట్‌ని పేస్ట్ చేయండి —",
    paste_resume_placeholder: "మీ రెజ్యూమే విషయాలు, బయో, ప్రాజెక్ట్ చరిత్ర మరియు అనుభవాన్ని ఇక్కడ పేస్ట్ చేయండి...",
    start_analysis: "AI విశ్లేషణను ప్రారంభించండి",
    analyser_placeholder_text: "మీ ATS గ్రేడింగ్, తప్పిపోయిన నైపుణ్యాలు మరియు వివరణాత్మక కెరీర్ ఫీడ్‌బ్యాక్ చూడటానికి రెజ్యూమే వివరాలను పూరించి, విశ్లేషణను ప్రారంభించండి.",
    analyzing_resume_text: "రెజ్యూమే విశ్లేషణ జరుగుతోంది...",
    connecting_ai: "AI ఇంజిన్‌కు కనెక్ట్ అవుతోంది...",
    analysis_complete: "విశ్లేషణ పూర్తయింది",
    ats_score_label: "ATS స్కోర్",
    missing_skills: "తప్పిపోయిన అవసరమైన నైపుణ్యాలు",
    opt_recs: "ఆప్టిమైజేషన్ సిఫార్సులు",
    gen_roadmap: "వ్యక్తిగతీకరించిన రోడ్‌మ్యాప్‌ను రూపొందించండి",
    learning_hub: "క్యూరేటెడ్ లెర్నింగ్ హబ్",
    interview_lobby: "AI మాక్ ఇంటర్వ్యూ లాబీ",
    interview_subtitle: "మీరు కోరుకున్న ఉద్యోగ పాత్రకు తగినట్లుగా సాధారణ మరియు సాంకేతిక ఇంటర్వ్యూ ప్రశ్నలను ప్రాక్టీస్ చేయండి. ప్రత్యక్ష అభిప్రాయాన్ని మరియు కమ్యూనికేషన్/సాంకేతిక అంచనాను పొందండి.",
    interview_target: "ఇంటర్వ్యూ ఉద్యోగ లక్ష్యం",
    question_comp: "ప్రశ్నల కూర్పు",
    difficulty_level: "కఠినత స్థాయి",
    begin_simulation: "AI సిమ్యులేషన్ ప్రారంభించండి",
    type_response: "మీ సమాధానాన్ని టైప్ చేయండి లేదా మాట్లాడటానికి మైక్రోఫోన్‌ను క్లిక్ చేయండి...",
    ask_question_placeholder: "మీ ప్రశ్నను ఇక్కడ టైప్ చేయండి...",
    send: "పంపు",
    brand_slogan: "నేటి అభ్యాసం నుండి రేపటి నాయకత్వం వరకు.",
    nav_projects: "ప్రాజెక్ట్ హబ్",
    projects_title: "AI ప్రాజెక్ట్ ప్లానర్",
    projects_subtitle: "మీ లక్ష్య ఉద్యోగ పాత్ర మరియు మీకు ఇప్పటికే తెలిసిన భాషల ఆధారంగా వ్యక్తిగతీకరించిన ప్రాజెక్ట్ ఆలోచనలను పొందండి.",
    target_role: "ఉద్యోగ లక్ష్యం",
    languages_known: "తెలిసిన భాషలు & సాంకేతికతలు",
    projects_input_placeholder: "ఉదా: JavaScript, Python, React, HTML/CSS",
    generate_ideas: "ప్రాజెక్ట్ ఆలోచనలను సృష్టించండి",
    recommended_projects: "సిఫార్సు చేయబడిన ప్రాజెక్ట్‌లు",
    designing_projects_loading: "తగిన ప్రాజెక్ట్‌లను రూపొందించడం మరియు ట్యుటోరియల్‌లను కనుగొనడం...",
    watch_tutorials: "ట్యుటోరియల్స్ చూడండి",
    benefits_title: "UpSkill యొక్క ప్రయోజనాలు",
    benefit_1: "వ్యక్తిగతీకరించిన కెరీర్ మార్గదర్శకత్వం",
    benefit_2: "నైపుణ్యాల లోపాలను గుర్తించడం",
    benefit_3: "క్యూరేటెడ్ వనరులతో వేగంగా నేర్చుకోవడం",
    benefit_4: "మెరుగైన ఇంటర్వ్యూ ప్రదర్శన",
    benefit_5: "మెరుగైన రెజ్యూమే నాణ్యత మరియు ATS స్కోర్",
    benefit_6: "ఇంటర్న్‌షిప్‌లు మరియు ఉద్యోగాలకు ప్రాప్యత",
    benefit_7: "ప్రభుత్వ అవకాశాలపై అవగాహన",
    benefit_8: "బలమైన ప్రాజెక్ట్ పోర్ట్‌ఫోలియో",
    benefit_9: "పూర్తి కెరీర్ అభివృద్ధి కోసం ఒకే వేదిక",
    // Who it's for
    audience_title: "ఇది ఎవరి కోసం",
    audience_subtitle: "మీ కెరీర్ ప్రయాణంలో ప్రతి దశ కోసం నిర్మించబడింది",
    audience_college_title: "కళాశాల విద్యార్థి",
    audience_college_age: "18 – 22",
    audience_college_desc: "ఎక్కడ ప్రారంభించాలో మార్గదర్శకత్వం లేదు, బలహీనమైన రెజ్యూమే, శూన్య ఇంటర్వ్యూ ప్రిపరేషన్ — UPSKILL మొదటి రోజు నుండే మీ పునాదిని నిర్మిస్తుంది.",
    audience_grad_title: "తాజా గ్రాడ్యుయేట్",
    audience_grad_age: "22 – 26",
    audience_grad_desc: "ATS తిరస్కరణలు పెరుగుతున్నాయి, అస్పష్టమైన నైపుణ్య లోపాలు, పరిమిత నెట్‌వర్క్ — స్క్రీనింగ్ గోడను బద్దలు కొట్టడానికి UPSKILL మీకు సహాయపడుతుంది.",
    audience_switcher_title: "కెరీర్ మార్చుకునేవారు",
    audience_switcher_age: "26 – 35",
    audience_switcher_desc: "స్పష్టమైన అభ్యాస మార్గం లేకుండా డొమైన్‌లను మార్చడం — ఏది నేర్చుకోవాలి మరియు ఏ క్రమంలో నేర్చుకోవాలో UPSKILL ఖచ్చితంగా మ్యాప్ చేస్తుంది.",
    audience_seeker_title: "ఉద్యోగ అన్వేషకులు",
    audience_seeker_age: "ఏ వయస్సు వారైనా",
    audience_seeker_desc: "చెల్లాచెదురైన సాధనాలు, నిర్మాణాత్మక ప్రణాళిక లేదు — UPSKILL అన్నింటినీ ఒకే తెలివైన ప్లాట్‌ఫారమ్‌లోకి చేర్చుతుంది.",
    audience_lowincome_title: "గ్రామీణ / తక్కువ ఆదాయం",
    audience_lowincome_age: "ఏ వయస్సు వారైనా",
    audience_lowincome_desc: "ఉచిత వనరులు మరియు అర్హత కలిగిన ప్రభుత్వ పథకాల గురించి తెలియదు — మీరు అర్హత పొందే ప్రతి అవకాశాన్ని UPSKILL చూపిస్తుంది.",
    // User Journey
    journey_title: "వినియోగదారు ప్రయాణం",
    journey_subtitle: "సైన్-అప్ నుండి ఉద్యోగ ఆఫర్ వరకు",
    journey_step1_title: "మీ ప్రొఫైల్‌ను రూపొందించండి",
    journey_step1_desc: "మార్గదర్శక ఆన్‌బోర్డింగ్ ఫ్లోలో మీ విద్య, నైపుణ్యాలు, లక్ష్యాలు మరియు లక్ష్య పాత్రను పంచుకోండి.",
    journey_step2_title: "మీ రెజ్యూమేని విశ్లేషించండి",
    journey_step2_desc: "మీ ATS స్కోర్, కీవర్డ్ లోపాలు మరియు ప్రాధాన్యత గల మెరుగుదల నివేదికను తక్షణమే పొందండి.",
    journey_step3_title: "మీ రోడ్‌మ్యాప్ పొందండి",
    journey_step3_desc: "మీ కోసం క్యూరేట్ చేయబడిన వ్యక్తిగతీకరించిన స్వల్ప, మధ్యస్థ మరియు దీర్ఘకాలిక అభ్యాస ప్రణాళికను పొందండి.",
    journey_step4_title: "ప్రాక్టీస్ & ప్రిపేర్",
    journey_step4_desc: "AI మాక్ ఇంటర్వ్యూలను రన్ చేయండి మరియు మీరు ఇంటర్వ్యూకి సిద్ధంగా ఉండేవరకు మీ నైపుణ్యాలను మెరుగుపరుచుకోండి.",
    journey_step5_title: "అప్లై & ల్యాండ్",
    journey_step5_desc: "ఫిల్టర్ చేసిన అవకాశాలను కనుగొని నేరుగా దరఖాస్తు చేసుకోండి. మీ GPS స్కోర్ ప్రతి పురోగతిని ట్రాక్ చేస్తుంది."
  }
};

function applyTranslations() {
  const dict = translations[currentLanguage] || translations['en'];
  
  // Elements with data-translate
  document.querySelectorAll("[data-translate]").forEach(el => {
    const key = el.getAttribute("data-translate");
    if (dict[key]) {
      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = dict[key];
      } else if (key === "welcome_back") {
        const greetingSpan = document.getElementById("dashboard-user-greeting");
        const greetingName = greetingSpan ? greetingSpan.innerText : "Explorer";
        el.innerHTML = `${dict[key]} <span class="text-gradient-primary" id="dashboard-user-greeting">${greetingName}</span>!`;
      } else {
        el.innerText = dict[key];
      }
    }
  });

  // Handle placeholders specifically for inputs/textareas
  const textAnswerInput = document.getElementById("interview-text-answer");
  if (textAnswerInput) textAnswerInput.placeholder = dict["type_response"];
  
  const mentorInputField = document.getElementById("mentor-input-field");
  if (mentorInputField) mentorInputField.placeholder = dict["ask_question_placeholder"];

  // Update current header title
  const activeLink = document.querySelector(".sidebar-link.active");
  if (activeLink) {
    const viewName = activeLink.getAttribute("data-view");
    const headerTitle = document.getElementById("current-view-title");
    const viewKey = `nav_${viewName}`;
    if (headerTitle) {
      headerTitle.innerText = dict[viewKey] || activeLink.innerText.trim();
    }
  }
}

// Theme Switcher Logic
function initTheme() {
  const savedTheme = localStorage.getItem("upskill_theme");
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle-btn");
  
  if (savedTheme === "light") {
    body.classList.add("light-mode");
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    body.classList.remove("light-mode");
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
}

function toggleTheme() {
  const body = document.body;
  const toggleBtn = document.getElementById("theme-toggle-btn");
  body.classList.toggle("light-mode");
  
  if (body.classList.contains("light-mode")) {
    localStorage.setItem("upskill_theme", "light");
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    showToast(currentLanguage === 'hi' ? "लाइट मोड सक्रिय" : currentLanguage === 'te' ? "లైట్ మోడ్ సక్రియం చేయబడింది" : "Switched to Light Mode", "success");
  } else {
    localStorage.setItem("upskill_theme", "dark");
    if (toggleBtn) toggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    showToast(currentLanguage === 'hi' ? "डार्क मोड सक्रिय" : currentLanguage === 'te' ? "డార్క్ మోడ్ సక్రియం చేయబడింది" : "Switched to Dark Mode", "success");
  }
}

async function callServerAPI(endpoint, payload) {
  // Inject current language selection
  const langName = currentLanguage === 'hi' ? 'Hindi' : currentLanguage === 'te' ? 'Telugu' : 'English';
  payload.language = langName;

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
let isListening = false;

function startSpeechRecognition() {
  const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRec) {
    showToast("Speech recognition is not supported on this browser.", "error");
    return;
  }

  // Create fresh instance to avoid Android state hanging bugs
  recognition = new SpeechRec();
  recognition.continuous = false;
  recognition.interimResults = false;
  
  // Set language dynamically to match user preference
  if (currentLanguage === 'hi') {
    recognition.lang = 'hi-IN';
  } else if (currentLanguage === 'te') {
    recognition.lang = 'te-IN';
  } else {
    recognition.lang = 'en-US';
  }

  recognition.onstart = () => {
    isListening = true;
    if (voiceBtn) voiceBtn.classList.add("active");
    showToast(
      currentLanguage === 'hi' ? "सुन रहा हूँ... स्पष्ट बोलें।" :
      currentLanguage === 'te' ? "వింటున్నాను... స్పష్టంగా మాట్లాడండి." :
      "Listening... Speak clearly.", "info"
    );
  };

  recognition.onend = () => {
    isListening = false;
    if (voiceBtn) voiceBtn.classList.remove("active");
  };

  recognition.onerror = (e) => {
    isListening = false;
    if (voiceBtn) voiceBtn.classList.remove("active");
    console.error("Speech Recognition Error:", e.error);
    if (e.error === 'not-allowed') {
      showToast(
        currentLanguage === 'hi' ? "माइक्रोफोन अनुमति अस्वीकार कर दी गई।" :
        currentLanguage === 'te' ? "మైక్రోఫోన్ అనుమతి నిరసించబడింది." :
        "Microphone permission blocked. Please check your browser settings or ensure you are using HTTPS.", "error"
      );
    } else if (e.error === 'no-speech') {
      showToast(
        currentLanguage === 'hi' ? "कोई आवाज़ नहीं सुनी गई।" :
        currentLanguage === 'te' ? "ఏ శబ్దము వినపడలేదు." :
        "No speech detected. Try speaking louder or closer to the mic.", "warning"
      );
    } else {
      showToast("Voice error: " + e.error, "error");
    }
  };

  recognition.onresult = (e) => {
    if (e.results && e.results[0] && e.results[0][0]) {
      const transcript = e.results[0][0].transcript;
      if (textAnswerInput) {
        if (textAnswerInput.value.trim() !== "") {
          textAnswerInput.value = textAnswerInput.value.trim() + " " + transcript;
        } else {
          textAnswerInput.value = transcript;
        }
      }
      showToast(
        currentLanguage === 'hi' ? "उत्तर प्रतिलेखित!" :
        currentLanguage === 'te' ? "సమాధానం రాయబడింది!" :
        "Answer transcribed!", "success"
      );
    }
  };

  try {
    recognition.start();
  } catch (err) {
    console.error("Failed to start recognition:", err);
    showToast("Could not start microphone.", "error");
  }
}

if (voiceBtn) {
  voiceBtn.addEventListener("click", () => {
    const SpeechRec = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRec) {
      showToast("Speech recognition is not supported on this browser.", "error");
      return;
    }

    if (isListening && recognition) {
      recognition.stop();
    } else {
      startSpeechRecognition();
    }
  });
}

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

const loginForm = document.getElementById("login-form");
const registerForm = document.getElementById("register-form");
const authSubtitle = document.getElementById("auth-subtitle");
const authFooter = document.getElementById("auth-footer");

let isLoginMode = true;

function setAuthMode(toLogin) {
  isLoginMode = toLogin;
  const dict = translations[currentLanguage] || translations['en'];
  
  if (isLoginMode) {
    if (loginForm) loginForm.style.display = "block";
    if (registerForm) registerForm.style.display = "none";
    if (authSubtitle) {
      authSubtitle.setAttribute("data-translate", "brand_slogan");
      authSubtitle.innerText = dict["brand_slogan"] || "From learning today to leading tomorrow.";
    }
    if (authFooter) {
      authFooter.innerHTML = `Don't have an account? <a href="#" id="auth-switch-link">Create one</a>`;
    }
  } else {
    if (loginForm) loginForm.style.display = "none";
    if (registerForm) registerForm.style.display = "block";
    if (authSubtitle) {
      authSubtitle.removeAttribute("data-translate");
      authSubtitle.innerText = "Register your profile to access custom AI roadmaps";
    }
    if (authFooter) {
      authFooter.innerHTML = `Already have an account? <a href="#" id="auth-switch-link">Sign In</a>`;
    }
  }
}

// Auth footer toggle listener using event delegation
if (authFooter) {
  authFooter.addEventListener("click", (e) => {
    if (e.target && e.target.id === "auth-switch-link") {
      e.preventDefault();
      setAuthMode(!isLoginMode);
    }
  });
}

// Password visibility toggles
const loginPasswordToggle = document.getElementById("login-password-toggle");
if (loginPasswordToggle) {
  loginPasswordToggle.addEventListener("click", (e) => {
    const input = document.getElementById("login-password");
    if (input) {
      const isPass = input.type === "password";
      input.type = isPass ? "text" : "password";
      e.target.className = isPass ? "fa-solid fa-eye-slash password-toggle" : "fa-solid fa-eye password-toggle";
    }
  });
}

const registerPasswordToggle = document.getElementById("register-password-toggle");
if (registerPasswordToggle) {
  registerPasswordToggle.addEventListener("click", (e) => {
    const input = document.getElementById("register-password");
    if (input) {
      const isPass = input.type === "password";
      input.type = isPass ? "text" : "password";
      e.target.className = isPass ? "fa-solid fa-eye-slash password-toggle" : "fa-solid fa-eye password-toggle";
    }
  });
}

// Register submit
if (registerForm) {
  registerForm.addEventListener("submit", (e) => {
    e.preventDefault();
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
    setAuthMode(true);
  });
}

// Login submit
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
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
}

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
  // Initialize mock users if database is empty
  const usersStr = localStorage.getItem("upskill_users");
  if (!usersStr || JSON.parse(usersStr).length === 0) {
    const defaultUsers = [
      {
        id: "usr-default",
        name: "n jhansi sri kavya",
        email: "jhansi@upskill.com",
        password: "password123",
        status: "Student",
        activeRole: "Frontend Developer",
        lastAtsScore: 85,
        roadmapProgress: 35,
        interviewsDone: 2,
        completedRoadmapNodes: ["node-1", "node-2"],
        missingSkills: ["Docker", "Kubernetes"]
      }
    ];
    localStorage.setItem("upskill_users", JSON.stringify(defaultUsers));
  }

  // Initialize theme
  initTheme();
  
  // Wire theme toggle button click handler
  const themeToggle = document.getElementById("theme-toggle-btn");
  if (themeToggle) {
    themeToggle.addEventListener("click", toggleTheme);
  }
  
  // Initialize language selector and value
  const langSelect = document.getElementById("language-select");
  if (langSelect) {
    langSelect.value = currentLanguage;
    langSelect.addEventListener("change", (e) => {
      currentLanguage = e.target.value;
      localStorage.setItem("upskill_lang", currentLanguage);
      applyTranslations();
      showToast(currentLanguage === 'hi' ? "भाषा बदली गई" : currentLanguage === 'te' ? "భాష మార్చబడింది" : "Language Switched", "success");
    });
  }
  applyTranslations();

  // Wire click handlers for interactive dashboard stats cards
  const cardAts = document.getElementById("card-ats-score");
  if (cardAts) {
    cardAts.addEventListener("click", () => showView("analyser"));
  }
  const cardRoadmap = document.getElementById("card-roadmap-progress");
  if (cardRoadmap) {
    cardRoadmap.addEventListener("click", () => showView("learn"));
  }
  const cardInterview = document.getElementById("card-interviews-done");
  if (cardInterview) {
    cardInterview.addEventListener("click", () => showView("interview"));
  }

  // Wire Project Hub button handler
  const btnRecommendProjects = document.getElementById("btn-recommend-projects");
  if (btnRecommendProjects) {
    btnRecommendProjects.addEventListener("click", handleRecommendProjects);
  }

  const activeUser = sessionStorage.getItem("upskill_active_user");
  if (activeUser) {
    currentUser = JSON.parse(activeUser);
    enterAppWorkspace();
  } else {
    showView("login"); // Directs to auth view
  }
});

// ==========================================
// AI PROJECT HUB — RECOMMENDATIONS ENGINE
// ==========================================

async function handleRecommendProjects() {
  const roleInput = document.getElementById("projects-role");
  const languagesInput = document.getElementById("projects-languages");
  const loadingEl = document.getElementById("projects-loading");
  const resultsEl = document.getElementById("projects-results-container");
  const gridEl = document.getElementById("projects-list-grid");
  const selectedRoleEl = document.getElementById("projects-selected-role");

  const role = roleInput ? roleInput.value.trim() : "";
  const languages = languagesInput ? languagesInput.value.trim() : "";

  const dict = translations[currentLanguage] || translations["en"];

  if (!languages) {
    showToast(
      currentLanguage === "hi"
        ? "कृपया भाषाएं और प्रौद्योगिकियां दर्ज करें"
        : currentLanguage === "te"
        ? "దయచేసి భాషలు మరియు సాంకేతికతలను నమోదు చేయండి"
        : "Please enter at least one language or technology",
      "error"
    );
    return;
  }

  // Show loading state
  if (loadingEl) loadingEl.style.display = "flex";
  if (resultsEl) resultsEl.style.display = "none";
  if (gridEl) gridEl.innerHTML = "";

  try {
    const data = await callServerAPI("/api/recommend-projects", { role, languages });

    if (!data.projects || !Array.isArray(data.projects) || data.projects.length === 0) {
      throw new Error("No projects returned from server.");
    }

    // Populate role label
    if (selectedRoleEl) selectedRoleEl.innerText = role;

    // Build project cards
    gridEl.innerHTML = "";
    data.projects.forEach((project, index) => {
      const card = buildProjectCard(project, index, dict);
      gridEl.appendChild(card);
    });

    // Show results
    if (loadingEl) loadingEl.style.display = "none";
    if (resultsEl) {
      resultsEl.style.display = "block";
      resultsEl.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    showToast(
      currentLanguage === "hi"
        ? "प्रोजेक्ट सफलतापूर्वक उत्पन्न हुए!"
        : currentLanguage === "te"
        ? "ప్రాజెక్ట్‌లు విజయవంతంగా రూపొందించబడ్డాయి!"
        : "Projects generated successfully!",
      "success"
    );
  } catch (err) {
    if (loadingEl) loadingEl.style.display = "none";
    console.error("Project Hub error:", err);
    showToast(
      currentLanguage === "hi"
        ? "प्रोजेक्ट प्राप्त करने में त्रुटि। पुनः प्रयास करें।"
        : currentLanguage === "te"
        ? "ప్రాజెక్ట్‌లు పొందడంలో లోపం. మళ్ళీ ప్రయత్నించండి."
        : "Error fetching projects. Please try again.",
      "error"
    );
  }
}

function buildProjectCard(project, index, dict) {
  const difficultyColors = {
    Beginner: "#22c55e",
    Intermediate: "#f59e0b",
    Advanced: "#ef4444",
    // Hindi variants
    "शुरुआती": "#22c55e",
    "मध्यम": "#f59e0b",
    "उन्नत": "#ef4444",
    // Telugu variants
    "ప్రారంభకుడు": "#22c55e",
    "మధ్యస్థం": "#f59e0b",
    "అధునాతన": "#ef4444",
  };

  const diffColor = difficultyColors[project.difficulty] || "#6366f1";
  const searchQuery = encodeURIComponent((project.searchQuery || project.title) + " tutorial");
  const ytLink = `https://www.youtube.com/results?search_query=${searchQuery}`;

  const techTags = Array.isArray(project.techStack)
    ? project.techStack.map(tag => `<span class="tech-tag">${tag}</span>`).join("")
    : "";

  const animDelay = index * 0.12;

  const card = document.createElement("div");
  card.className = "project-card glass";
  card.style.cssText = `animation: fadeInUp 0.5s ease ${animDelay}s both;`;
  card.innerHTML = `
    <div class="project-card-header">
      <span class="project-index">#${String(index + 1).padStart(2, "0")}</span>
      <span class="project-difficulty-badge" style="background: ${diffColor}22; color: ${diffColor}; border: 1px solid ${diffColor}55;">
        ${project.difficulty || "Intermediate"}
      </span>
    </div>
    <h3 class="project-title">${project.title || "Project"}</h3>
    <p class="project-description">${project.description || ""}</p>
    <div class="project-tech-tags">${techTags}</div>
    <a href="${ytLink}" target="_blank" rel="noopener noreferrer" class="btn-yt-watch">
      <i class="fa-brands fa-youtube"></i>
      <span data-translate="watch_tutorials">${dict["watch_tutorials"] || "Watch Tutorials"}</span>
    </a>
  `;
  return card;
}
