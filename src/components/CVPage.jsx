import "../styles/CVPage.css";
import emailIcon from "../assets/mail(2).png";
import phoneIcon from "../assets/smartphone-call.png";
import locationIcon from "../assets/location.png";
import githubIcon from "../assets/github(1).png";

export default function CVPage({ info, isModified }) {
  return (
    <div className="cv-page">
      <div className="left-section">
        <div className="name-header">
          <h1 className="name">{isModified ? info.name : "John Doe"}</h1>
          <p>
            {isModified
              ? info.about
              : "I am a passionate computer science student with a strong interest in software development, data analysis, and AI. I enjoy solving complex problems and working on innovative projects."}{" "}
          </p>
        </div>
        <div className="education-section">
          <h2>Education</h2>
          <ul>
            <li className="school-name">
              {isModified ? info.school : "Krelboyne University"}
            </li>
            <li className="degree-li">
              {isModified ? info.degree : "Master's Degree in Computer Science"}
            </li>
            <li className="year-li">{isModified ? info.year : "2014-2018"}</li>
          </ul>
        </div>
        <div className="work-history">
          <h2>Work History</h2>
          <ul>
            {info.jobs.map((job, index) => (
              <div key={index} className="job-entry">
                <li key={index}>{job.job || "Lakeview Valet"}</li>

                <li className="position-li" key={index}>
                  {isModified ? job.position : "Valet"}
                </li>

                <li className="dates-li" key={index}>
                  {isModified ? job.dates : "March 2014 - Present"}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className="right-section">
        <div className="contact">
          <p className="email">
            <img src={emailIcon} alt="Email" />
            {isModified ? info.email : "johndoe@aol.com"}
          </p>
          <p className="phone">
            <img src={phoneIcon} alt="Phone" />
            {isModified ? info.phone : "572-108-4722"}
          </p>
          <p>
            <img src={locationIcon} alt="Location" />
            {isModified ? info.location : "South Lake Tahoe, California"}
          </p>
          <p>
            <img src={githubIcon} alt="GitHub" />
            <a href={info.link}>
              {isModified ? info.link : "https://github.com/jackNicosia"}
            </a>
          </p>
        </div>
        <div className="skills-section">
          <h3>Technical Skills</h3>
          <ul>
            {info.skills.map((skill, index) => (
              <li key={index}>{isModified ? skill.skill : "Javascript"}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
