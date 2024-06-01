import "../styles/CVPage.css";

export default function CVPage({ info }) {
  return (
    <div className="cv-page">
      <div>
        <h1 className="name">{info.name || "John Doe"}</h1>
        <p>
          {info.about ||
            "I am a passionate computer science student with a strong interest in software development, data analysis, and AI. I enjoy solving complex problems and working on innovative projects."}{" "}
        </p>
      </div>
      <div>
        <p className="email">{info.email || "johndoe@aol.com"}</p>
        <p className="phone">{info.phone || "572-108-4722"}</p>
        <p>{info.location || "South Lake Tahoe, California"}</p>
      </div>
      <h2>Education</h2>
      <p>{info.school || "Krelboyne University"}</p>
      <p>{info.degree || "Master's Degree in Computer Science"}</p>
      <p>{info.year || "2014-2018"}</p>
      <h2>Work History</h2>
      <p>{info.job || "Lakeview Valet"}</p>
      <p>{info.position || "Valet"}</p>
      <p>{info.dates || "March 2014 - Present"}</p>
    </div>
  );
}
