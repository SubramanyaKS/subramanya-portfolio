# Subramanya K S | Developer Portfolio 🚀

[![Netlify Status](https://api.netlify.com/api/v1/badges/f16a267e-7689-4a90-b42c-8becaad56141/deploy-status)](https://app.netlify.com/sites/subramanyaks/deploys)
[![GitHub license](https://img.shields.io/github/license/SubramanyaKS/subramanya-portfolio?style=for-the-badge)](https://github.com/SubramanyaKS/subramanya-portfolio/blob/main/LICENCE)
[![GitHub stars](https://img.shields.io/github/stars/SubramanyaKS/subramanya-portfolio?style=for-the-badge)](https://github.com/SubramanyaKS/subramanya-portfolio/stargazers)
[![GitHub issues](https://img.shields.io/github/issues/SubramanyaKS/subramanya-portfolio?style=for-the-badge)](https://github.com/SubramanyaKS/subramanya-portfolio/issues)
![React 19](https://img.shields.io/badge/React-19.0.0-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite 7](https://img.shields.io/badge/Vite-7.0.6-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-black?style=for-the-badge&logo=framer&logoColor=blue)

A modern, high-performance developer portfolio built with **React 19**, **Vite**, and **Framer Motion** — showcasing my software engineering experience, full-stack projects, and technical skill set.

🌐 **Live Demo:** [https://subramanya-portfolio.netlify.app](https://subramanya-portfolio.netlify.app)

---

## ✨ Features

- **🎨 Modern Developer Aesthetic:** Grounded in a dark slate cyberpunk palette (`#020617`) with glassmorphism, glowing cyan accents, and dual typography (**Plus Jakarta Sans** for UI & **JetBrains Mono** for code and terminal elements).
- **⚡ Lightning-Fast Performance:** Powered by Vite 7 with modular code splitting and asset hashing.
- **💼 Dedicated Work Experience:** Career timeline highlighting software engineering roles and internships with company details, duration, tech tags, and project deliverables.
- **🚀 Project Showcase:** Responsive 16:9 previews with hover zoom, tags, always-visible descriptions, and direct **Live Demo** & **Code** CTAs.
- **🛠️ Interactive Bento Skills:** Categorized tech stack (*Frontend*, *Backend*, *Languages*, *Databases*, *DevOps/Tools*) with interactive filter tabs and tool counters.
- **🎓 Academic Background:** Timeline roadmap with degree milestones and Information Science & Engineering specialization.
- **📬 Contact Hub:** 2-column layout featuring an interactive **One-Click "Copy Email"** card, location/availability metadata, and a glassmorphic contact form with in-UI validation and feedback.
- **🤖 Built-in Assistant (SuBot):** Rule-based interactive chatbot providing instant answers about skills, projects, and contact info.
- **🔄 Smart Anti-Cache System:** Integrated cache buster and automatic legacy service worker purger to guarantee visitors always see the latest build without manually clearing browser data.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/), [React DOM 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 7](https://vitejs.dev/) |
| **Animations & Interactions**| [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Styling & Layout** | [Bootstrap 5](https://getbootstrap.com/), [React-Bootstrap](https://react-bootstrap.github.io/), Modern CSS Glassmorphism |
| **Routing** | [React Router DOM v6](https://reactrouter.com/) |
| **Form Handling & Email** | [EmailJS Browser SDK](https://www.emailjs.com/) |
| **Typing Effect** | [React-Typed](https://github.com/ssbeefeater/react-typed) |

---

## 📋 Prerequisites

Before setting up the project locally, ensure you have the following installed:

- [![NodeJS](https://img.shields.io/badge/Node.js-18+-6DA55F?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org/) (Node.js 18.x or later recommended)
- [![Git](https://img.shields.io/badge/Git-Latest-%23F05033.svg?style=flat-square&logo=git&logoColor=white)](https://git-scm.com/)

---

## 🚀 Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/SubramanyaKS/subramanya-portfolio.git
cd subramanya-portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the project root for the contact form (EmailJS integration):
```env
VITE_APP_SERVICE_ID=your_emailjs_service_id
VITE_APP_TEMPLATE_ID=your_emailjs_template_id
VITE_APP_PUBLIC_KEY=your_emailjs_public_key
```
*(Note: If environment variables are omitted, the form gracefully falls back for local testing).*

### 4. Run the development server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:5173
```

---

## 📦 Available Scripts

- `npm run dev` - Starts the Vite local development server with Hot Module Replacement (HMR).
- `npm run build` - Builds the optimized production bundle to the `build/` directory.
- `npm run serve` - Locally previews the production build.

---

## 📁 Project Structure

```
├── public/                 # Static assets & public files
│   ├── _headers            # Netlify CDN caching configuration
│   ├── _redirects          # SPA client-side routing redirects
│   └── images/             # Project screenshots and avatar assets
├── src/
│   ├── assets/             # Component-specific styles
│   ├── components/         # Reusable UI components
│   │   ├── common/         # Buttons, badges, headings, and motion reveals
│   │   ├── EducationCard   # Academic milestone card
│   │   ├── ExperienceCard  # Career role card
│   │   ├── ProjectCard     # Showcase project card
│   │   ├── SkillsCard      # Bento skill item with label
│   │   └── ContactForm     # Interactive contact form
│   ├── data/               # Centralized data sources (projects, skills, bio)
│   ├── hook/               # Custom hooks (form handling, hover, chatbot)
│   ├── pages/              # Main route views (Header, About, Projects, Skills, etc.)
│   ├── routes/             # App routing configuration
│   ├── utils/              # Helper utilities & constants
│   ├── App.css             # Design system & glassmorphic styling
│   ├── index.jsx           # App entry point with cache buster
│   └── index.css           # Global reset
├── index.html              # HTML shell with Google Fonts & anti-cache tags
├── vite.config.js          # Vite configuration & server cache rules
└── package.json            # Project dependencies & scripts
```

---

## 👨‍💻 Author

**Subramanya K S**
- 🌐 **Portfolio:** [subramanya-portfolio.netlify.app](https://subramanya-portfolio.netlify.app)
- 💼 **LinkedIn:** [linkedin.com/in/subramanyakshebbar](https://www.linkedin.com/in/subramanyakshebbar/)
- 🐙 **GitHub:** [@SubramanyaKS](https://github.com/SubramanyaKS)
- 🐦 **Twitter / X:** [@subbukshebbar](https://twitter.com/subbukshebbar)
- ✉️ **Email:** subramanyaks22@gmail.com

---

## 📄 License

This project is licensed under the GNU General Public License v3.0 - see the [LICENCE](LICENCE) file for details.

---

⭐ **If you find this portfolio helpful or inspiring, please consider starring the repository!**
