import "../styles/CVPage.css";
import emailIcon from "../assets/mail(2).png";
import phoneIcon from "../assets/smartphone-call.png";
import locationIcon from "../assets/location.png";
import githubIcon from "../assets/github(1).png";

export default function CVPage({ info }) {
  return (
    <div className="cv-page">
      <div className="name-header">
        <h1 className="name">{info.name || "John Doe"}</h1>
        <p>
          {info.about ||
            "I am a passionate computer science student with a strong interest in software development, data analysis, and AI. I enjoy solving complex problems and working on innovative projects."}{" "}
        </p>
      </div>
      <div className="contact">
        <p className="email">
          <img src={emailIcon} />
          {info.email || "johndoe@aol.com"}
        </p>
        <p className="phone">
          <img src={phoneIcon} />
          {info.phone || "572-108-4722"}
        </p>

        <p>
          <img src={locationIcon} />
          {info.location || "South Lake Tahoe, California"}
        </p>
        <p>
          <img src={githubIcon} />
          <a href={info.link}>
            {info.link || "https://github.com/jackNicosia"}
          </a>
        </p>
      </div>
      <div className="education-section">
        <h2>Education</h2>
        <ul>
          <li className="school-name">
            {info.school || "Krelboyne University"}
          </li>
          <li className="degree-li">
            {info.degree || "Master's Degree in Computer Science"}
          </li>
          <li className="year-li">{info.year || "2014-2018"}</li>
        </ul>
      </div>
      <div className="work-history">
        <h2>Work History</h2>
        <ul>
          <li className="job-name">{info.job || "Lakeview Valet"}</li>
          <li className="position-li">{info.position || "Valet"}</li>
          <li className="dates-li">{info.dates || "March 2014 - Present"}</li>
        </ul>
      </div>
      <div className="skills-section">
        <h3>Technical Skills</h3>
        <ul>
          <li>{info.skill || "Javascript"}</li>
        </ul>
      </div>
    </div>
  );
}
