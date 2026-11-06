import { links, skillImage } from "../utils/constant";
import { Mail, X,Linkedin, Github, Youtube,Facebook,Instagram} from "lucide-react";

export const projectsdata = [
  {
    id: 1,
    title: "Pocket AI",
    subtitle: "Offline Mobile AI Assistant",
    description: "An offline-first mobile AI assistant powered by on-device GGUF inference via embedded llama.cpp. Features full-duplex voice interaction (STT/TTS), local SQLite chat storage, and offline function calling for native device tools (alarms, battery diagnostics, reminders, and flashlight).",
    image: "./images/ai.jpg",
    techStack: ["Flutter", "Dart", "llama.cpp", "SQLite", "Riverpod"],
    githubLink: "https://github.com/SubramanyaKS/PocketAI",
    websiteLink: null,
    downloadLink: null
  },
  {
    id: 2,
    title: "PhrasePic",
    subtitle: "Generative AI Image Generation Platform",
    description: "Application that generates images based on natural language prompts. Developed with Next.js, React, and Stability AI's Stable Diffusion model API hosted on Hugging Face.",
    image: "./images/phrasepics.png",
    techStack: ["Next.js", "React", "Generative AI", "Hugging Face"],
    githubLink: "https://github.com/SubramanyaKS/PhrasePic",
    websiteLink: null,
    downloadLink: null
  },
  {
    id: 3,
    title: "Gemini SQL Interface",
    subtitle: "An AI based SQL Interface",
    description: "A compact, production-minded Streamlit application that converts natural-language questions into SQL using Google's Gemini API and executes safe, read-mostly queries against a Relational database.",
    image: "./images/text-sql.png",
    techStack: ["Python", "Streamlit", "SQL","GEMINI"],
    githubLink: "https://github.com/SubramanyaKS/gemini-sql-interface",
    websiteLink: null,
    downloadLink: null
  },
  {
    id: 4,
    title: "PhaseBot",
    subtitle: "Flutter based AI chatbot",
    description: "PhraseBot is a Flutter-based AI chatbot that provides real-time conversations using Google gemini API. It also features user authentication with Supabase for a secure and personalized experience.",
    image: "./images/phrasebot.png",
    techStack: ["Flutter", "Generative AI", "Gemini"],
    githubLink: "https://github.com/SubramanyaKS/phrasebot",
    websiteLink:null,
    downloadLink: null
  },
  {
    id: 5,
    title: "Weather Application",
    subtitle: "Real-Time Weather Web App",
    description: "Responsive web application utilizing the OpenWeatherMap API to fetch live weather details, forecasts, and atmospheric conditions for global cities.",
    image: "./images/weather.jpg",
    techStack: ["React JS", "Bootstrap", "REST API"],
    githubLink: "https://github.com/SubramanyaKS/Weather-app/",
    websiteLink: "https://subramanyaks.github.io/Weather-app",
    downloadLink: null
  },
  {
    id: 6,
    title: "TalkTranslo",
    subtitle: "Flutter based Translation App",
    description: "TalkTranslo is a comprehensive Flutter-based translator application that supports real-time text translation, voice translation, image text recognition and translation, and multi-language text-to-speech capabilities.",
    image: "./images/media.jpg",
    techStack: ["Flutter", "Speech API", "Mobile Dev"],
    githubLink: "https://github.com/SubramanyaKS/talktranslo",
    websiteLink: null,
    downloadLink: null
  },
  
]
export const programskills = [
  {
    id: 1,
    image: skillImage.c
  },
  {
    id: 2,
    image: skillImage.java
  },
  {
    id: 3,
    image: skillImage.python
  }
]


export const databaseskills = [
  {
    id: 1,
    image: skillImage.mysql
  },
  {
    id: 2,
    image: skillImage.mongodb
  },
  {
    id:3,
    image:skillImage.postgres
  }
]

export const webskills = [
  {
    id: 1,
    image: skillImage.css
  },
  {
    id: 2,
    image: skillImage.html
  },
  {
    id: 3,
    image: skillImage.javascript
  },
  {
    id: 4,
    image: skillImage.react
  }
]

export const ide = [
  {
    id: 1,
    image: skillImage.vscode
  },
  {
    id: 2,
    image: skillImage.eclipse
  }
]

export const framework = [
  {
    id: 1,
    image: skillImage.node
  },
  {
    id: 2,
    image: skillImage.bootstrap
  },
  {
    id: 3,
    image: skillImage.reactnative

  },
  {
    id: 4,
    image: skillImage.flask
  },
  {
    id: 5,
    image: skillImage.django
  }
]

export const other = [
  {
    id: 1,
    image: skillImage.git
  },
  {
    id: 2,
    image: skillImage.android
  },
  {
    id: 3,
    image: skillImage.postman
  }
]

export const aboutdetails = {
  name: "Subramanya KS",
  image: "./images/subbu.png",
  resumeLink: links.resumeLink,
  tagline: "Learner|Programmer|Developer",
description: `A frontend developer based in Karnataka, India. I currently work at Infosys.
I’m passionate about continuously upgrading my skills and getting my hands dirty with new technologies. I strive to be better than the previous day by learning, experimenting, and applying new ideas to my work.
I’m always open to new ideas and enjoy collaborating, sharing knowledge, and learning from others—while helping them grow as well`
}

export const experiencedata = [
  {
    id: 1,
    title: "Software Engineer",
    subtitle: "Infosys",
    period: "2022 - Present",
    type: "Full-Time",
    location: "Karnataka, India",
    description: "Contributing to enterprise frontend and web development, building scalable, responsive user interfaces using modern JavaScript and React ecosystem, and collaborating with cross-functional engineering teams.",
    techStack: ["React JS", "JavaScript", "HTML5/CSS3", "REST APIs", "Git"],
    image: "./images/infosys-logo.png",
    githubLink: null,
  },
  {
    id: 2,
    title: "Web Development Intern",
    subtitle: "Ekathva Innovations Pvt. Ltd.",
    period: "Aug 2021 - Sep 2021",
    type: "Internship",
    location: "Remote",
    description: "Developed a Django-based REST API for 'Ayucare Management'. Gained hands-on industry experience building structured backend services, database schema design, and API endpoint integration.",
    techStack: ["Django", "Python", "REST API", "Database Design"],
    image: "./images/ekatvaI.jpg",
    githubLink: "https://github.com/SubramanyaKS/AyuCareManagement/",
  },
  {
    id: 3,
    title: "Web Development & Design Intern",
    subtitle: "The Sparks Foundation",
    period: "Jun 2021 - Jul 2021",
    type: "Internship",
    location: "Remote",
    description: "Built the 'Basic Banking System' project demonstrating core banking transactions, account flow simulation, user balance updates, and responsive frontend design.",
    techStack: ["JavaScript", "HTML5", "CSS3", "Web Design"],
    image: "./images/Thesparks.jpg",
    githubLink: "https://github.com/SubramanyaKS/Task1-BasicBankingSystem/",
  }
]
export const socialIcon = [
  {
    id: 1,
    href: links.linkedinLink,
    className: "linkedin social",
    icon: Linkedin,
    iconClass: "fa-bounce",
    label: "linkedin",
  },
  {
    id: 2,
    href: links.githubLink,
    className: "github social",
    icon: Github,
    iconClass: "fa-flip",
    label:"github",
  },
  {
    id: 3,
    href: links.youtubeLink,
    className: "youtube social",
    icon: Youtube,
    iconClass: "fa-beat",
    label:"youtube",
  },
  {
    id: 4,
    href: links.twitterLink,
    className: "twitter social",
    icon: X,
    iconClass: "fa-shake",
    label:"twitter",
  },
  {
    id: 5,
    href: links.facebookLink,
    className: "facebook social",
    icon: Facebook,
    iconClass: "fa-fade",
    label:"facebook",
  },
  {
    id: 6,
    href: links.instagramLink,
    className: "instagram social",
    icon: Instagram,
    iconClass: "fa-spin",
    label:"instagram",
  },
  {
    id: 7,
    href: links.gmailLink,
    className: "gmail social",
    icon: Mail,
    iconClass: "fa-beat-fade",
    label:"gmail",
  }

]

export const headerdata = {
  image: "./images/avatar.png",
  name: "SUBRAMANYA K S",
  typedarr: ["Learner",
    "Developer",
    "Simple Coder",
    "MERN Stack Developer",
    "Open Source Contributor"]
}

export const educationdata = [
  {
    id: 1,
    college: "JNN College of Engineering",
    university: "Visvesvaraya Technological University (VTU)",
    course: "Bachelor of Engineering (B.E.)",
    specification: "Information Science and Engineering",
    year: "2018 - 2022",
    status: "Graduated"
  },
  {
    id: 2,
    college: "Vikasa Composite P.U. College, Shivamogga",
    university: "Department of Pre-University Education",
    course: "Pre-University / 12th Standard",
    specification: "PCMB / Science",
    year: "2016 - 2018",
    status: "Completed"
  },
  {
    id: 3,
    college: "Sri Ramakrishna Vidyanikethana, Shivamogga",
    university: "Karnataka Secondary Education Examination Board (KSEEB)",
    course: "Secondary School Leaving Certificate (SSLC / 10th)",
    specification: "General High School Studies",
    year: "2015 - 2016",
    status: "Completed"
  }
]