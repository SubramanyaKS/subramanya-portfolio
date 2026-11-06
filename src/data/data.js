import { links, skillImage } from "../utils/constant";
import { Mail, X,Linkedin, Github, Youtube,Facebook,Instagram} from "lucide-react";

export const projectsdata = [
  {
    id: 1,
    title: "Weather Application",
    subtitle: "API Based Web Application",
    description: "Developed a web application which uses openweathermap API to fetch the weather details of various city across the globe by giving city name as input.",
    image: "./images/weather.jpg",
    techStack: ["React JS", "Bootstrap"],
    githubLink: "https://github.com/SubramanyaKS/Weather-app/",
    websiteLink: "https://subramanyaks.github.io/Weather-app",
    downloadLink: null
  },
  {
    id: 2,
    title: "React News App",
    subtitle: "API Based Web Application.",
    description:
      "React JS-based online news web app that utilizes the NewsAPI.org API. It allows users to access and read news articles from a wide range of sources.",
    image: "./images/news.jpg",
    techStack: ["React JS", "Bootstrap"],
    githubLink: "https://github.com/SubramanyaKS/React-News-App/",
    websiteLink: null,
    downloadLink: null
  },
  {
    id: 3,
    title: "PhrasePic",
    subtitle: "Image generator Website",
    description:
      "Application which generate Image based on the input prompt. It has developed using Next JS and Stability AI's Stable Diffusion model API hosted on Hugging Face",
    image: "./images/ai.jpg",
    techStack: ["Next JS", "React","Generative AI"],
    githubLink: "https://github.com/SubramanyaKS/PhrasePic",
    websiteLink: null,
    downloadLink: null
  },
  {
    id: 4,
    title: "Media Player Application",
    subtitle: "Android application.",
    description:
      "Application which play the audio and video and able to move forward and backword of media using button.",
    image: "./images/media.jpg",
    techStack: ["Android", "Java"],
    githubLink: "https://github.com/SubramanyaKS/MediaPlayer-Android-Application",
    websiteLink: null,
    downloadLink: null
  },
  {
    id: 5,
    title: "Bus Reservation System",
    subtitle: "A Dbms mini-project",
    description:
      "This Project is the DBMS mini-project and desktop application where we can reserve the bus seat,check the seat availability and view the seat arrangement do the payment after seat reservation.",
    image: "./images/bus.jpg",
    techStack: ["Java", "Oracle db"],
    githubLink: "https://github.com/SubramanyaKS/busreservation",
    websiteLink: null,
    downloadLink: "https://github.com/SubramanyaKS/busreservation/blob/main/BusReservation.jar"
  },
  {
    id: 6,
    title: "Random Quote Generator.",
    subtitle: "html javascript based web app.",
    description:
      "A simple web application which display the quote with both text and speech using random quote api.",
    image: "./images/quote.jpg",
    techStack: ["Javascript", "CSS", "HTML", "Bootstrap"],
    githubLink: "https://github.com/SubramanyaKS/RandomQuoteGenerator",
    websiteLink: "https://subramanyaks.github.io/RandomQuoteGenerator",
    downloadLink: null
  },
  {
    id: 7,
    title: "VTU SGPA CGPA Calculator.",
    subtitle: "Java jar application.",
    description:
      "This project  which calculate the CGPA and SGPA of VTU students.Created both java jar application and android app",
    image: "./images/cal.jpg",
    techStack: ["Java", "Android"],
    githubLink: "https://github.com/SubramanyaKS/VTU-CGPA_SGPA-Calculator/",
    websiteLink: null,
    downloadLink: "https://github.com/SubramanyaKS/Vtu-sgpa-calculator/blob/main/Vtu_SGPACGPA_Calculator_1.0.apk"
  },
  {
    id: 8,
    title: "Heart Disease Prediction System.",
    subtitle: "Machine-learning project using regression model.",
    description:
      "This project predict the heart disease by various machine learning model using ‘heart.csv’ dataset.",
    image: "./images/heart.jpg",
    techStack: ["Python", "Jupyter Notebook"],
    githubLink: "https://github.com/SubramanyaKS/Heart_Attack_Prediction",
    websiteLink: null,
    downloadLink: null,
  },
  {
    id: 9,
    title: "Diabeties Prediction System.",
    subtitle: "Machine-learning project using regression model.",
    description:
      "In this project we determine the diabetes by building various machine learning model using ‘diabetes.csv’ dataset.",
    image: "./images/diabeties.jpg",
    techStack: ["Python", "Jupyter Notebook"],
    githubLink: "https://github.com/SubramanyaKS/Diabetes_prediction",
    websiteLink: null,
    downloadLink: null
  }
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