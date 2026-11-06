import chat from '../assets/chatbot.png';
import user from '../assets/user.png';

export const rules = {
  greetings: ["hi", "hello", "hey", "greetings", "howdy", "sup", "good morning", "good evening", "good afternoon"],
  name: ["who are you", "what is your name", "what's your name", "your name", "who made you", "bot name"],
  about: ["about", "who is subramanya", "tell me about subramanya", "bio", "profile", "background", "introduce"],
  experience: ["experience", "work", "job", "company", "current job", "infosys", "internship", "career"],
  skills: ["skills", "expertise", "knowledge", "programming", "skill", "tech stack", "languages", "frontend", "backend", "react", "python", "javascript", "flutter"],
  projects: ["projects", "portfolio", "work", "project", "apps", "built", "phrasepic", "weather app", "pocket ai", "pocketai"],
  education: ["education", "qualification", "college", "university", "degree", "engineering", "vtu", "jnnce", "school", "10th", "12th"],
  resume: ["resume", "cv", "curriculum vitae", "download resume"],
  contact: ["contact", "email", "phone", "reach out", "hire", "message", "linkedin", "github", "twitter"],
  help: ["help", "what can you do", "commands", "menu", "options", "questions"]
};

export const responses = {
  greetings: "Hello there! 👋 I am SuBot, Subramanya's virtual portfolio assistant. How can I help you today? You can ask me about his skills, projects, work experience, or how to get in touch!",
  name: "I am **SuBot**, a virtual assistant built to help you learn more about Subramanya K S, his software engineering background, and his projects.",
  about: "Subramanya K S is a passionate Software Engineer and Frontend Developer based in Karnataka, India. He currently works at Infosys, specializing in React, modern JavaScript, and building responsive, high-performance web and mobile applications.",
  experience: "Subramanya currently works as a Software Engineer at **Infosys** (2022 - Present). Previously, he completed internships at **Ekathva Innovations** (Django REST API development) and **The Sparks Foundation** (Web Development & Design).",
  skills: "Subramanya's primary skills include:\n• **Frontend & Mobile:** React.js, JavaScript, Flutter, HTML5, CSS3, Bootstrap\n• **Backend & DB:** Node.js, Python, Django, MySQL, MongoDB, PostgreSQL, SQLite\n• **Tools & AI:** Git, VS Code, llama.cpp, REST APIs, Postman",
  projects: "Some of Subramanya's featured projects include:\n• **Pocket AI:** Offline mobile AI assistant with Flutter & embedded llama.cpp\n• **PhrasePic:** Generative AI image generator using Next.js & Stable Diffusion\n• **Weather Application:** Real-time global weather app built with React\n• **React News App:** API-based news aggregator",
  education: "Subramanya graduated with a **Bachelor of Engineering (B.E.)** in **Information Science & Engineering** from JNN College of Engineering (VTU) in 2022. He completed pre-university at Vikasa Composite P.U. College.",
  resume: "You can view and download Subramanya's latest resume directly from the About section or via Google Drive: https://drive.google.com/file/d/15V_I5zW-iQ8eYWvtQEmi6sZ-6DgWGvya/view",
  contact: "You can reach Subramanya directly at:\n• **Email:** subramanyaks22@gmail.com\n• **LinkedIn:** linkedin.com/in/subramanyakshebbar\n• **GitHub:** github.com/SubramanyaKS\nOr use the Contact page form on this website!",
  help: "You can ask me questions like:\n1. 'What are his skills?'\n2. 'Tell me about Pocket AI'\n3. 'Where does he work?'\n4. 'Tell me about his projects'\n5. 'How can I contact him?'",
  fallback: "I'm not completely sure about that, but you can ask me about Subramanya's **skills**, **projects**, **experience**, **education**, or **contact info**. Alternatively, feel free to email him directly at subramanyaks22@gmail.com!"
};

export const chatbotImages = {
  chatbot: chat,
  user: user,
};
