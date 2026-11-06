import React from "react";
import "../assets/skill.css";

const skillNameMap = {
  "c-programming": "C",
  "java-coffee-cup": "Java",
  "python": "Python",
  "mysql": "MySQL",
  "mongodb": "MongoDB",
  "postgreesql": "PostgreSQL",
  "css3": "CSS3",
  "html-5": "HTML5",
  "javascript": "JavaScript",
  "react--v1": "React",
  "visual-studio-code": "VS Code",
  "java-eclipse": "Eclipse",
  "nodejs": "Node.js",
  "bootstrap": "Bootstrap",
  "django": "Django",
  "flask": "Flask",
  "react-native": "React Native",
  "git": "Git",
  "android-os": "Android",
  "postman": "Postman",
};

const getSkillName = (data) => {
  if (data.name) return data.name;
  if (!data.image) return "";
  for (const [key, value] of Object.entries(skillNameMap)) {
    if (data.image.includes(key)) return value;
  }
  return "";
};

const SkillsCard = ({ data }) => {
  const name = getSkillName(data);

  return (
    <div className="modern-skill-item" title={name}>
      <img src={data.image} alt={name || "skill"} className="modern-skill-icon" />
      {name && <span className="modern-skill-name">{name}</span>}
    </div>
  );
};

export default SkillsCard;
