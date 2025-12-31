import { links, skillImage } from "../utils/constant";
import { Mail, X} from "lucide-react";

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
  description: " A frontend developer based in Karnataka,India. I am currently working in Infosys. I passionate about upgrading my skills and also likes to get my hand dirty on new technology. I start my day with motive on being better then previous day. Learn new skills that helped me to do better work.I'm constantly open to new ideas and always look to reach out to others, share and discuss ideas with them, thereby learn and also help others grow too"
}

export const experiencedata = [
  {
    id: 1,
    title: "Web Development Intern.",
    subtitle: "Ekathva Innovations Pvt. Ltd.",
    description: "Done a Project titled 'Django Based REST API development for Ayucare Management'.One month online industry level internship helped me to gain knowledge about recent technology, ideologies and aesthetics of the company.Learnt about Django and REST API",
    image: "./images/ekatvaI.jpg",
    githubLink: "https://github.com/SubramanyaKS/AyuCareManagement/",
  },
  {
    id: 2,
    title: "Web Development and Design Intern .",
    subtitle: "The Sparks Foundation.",
    description: "My First Internship helped me to gain some knowledge on web development. Worked on the project title 'Basic Banking System' which is demonstrate the basic banking operation.",
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
    university: "Visvesvaraya Technological University, Belagavi",
    course: "Bachelor of Engineering",
    specification: "Information Science and Engineering",
    year: "2022"
  },
  {
    id: 2,
    college: "Vikasa Composite P U College, Shivamogga",
    university: "Department of PU Education Board",
    course: "Pre-University/12th",
    specification: null,
    year: "2018"
  },
  {
    id: 3,
    college: "Sri Ramakrishna Vidyanikethana, Shivamogga",
    university: "Karnataka State Education and Examination board",
    course: "SSLC",
    specification: null,
    year: "2016"
  }

]