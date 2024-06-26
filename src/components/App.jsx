import { useState, useRef } from "react";
import SidePanel from "./SidePanel";
import CVPage from "./CVPage";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";

function App() {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
    school: "",
    degree: "",
    year: "",
    jobs: [
      {
        job: "",
        position: "",
        dates: "",
      },
    ],
    about: "",
    location: "",
    link: "",
    skills: [{ skill: "" }],
  });

  const [isModified, setIsModified] = useState(false);
  const cvRef = useRef();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
    if (!isModified) {
      setIsModified(true);
    }
  };

  const handleJobChange = (index, e) => {
    const { name, value } = e.target;
    const jobs = [...info.jobs];
    jobs[index][name] = value;
    setInfo({ ...info, jobs });
    if (!isModified) {
      setIsModified(true);
    }
  };

  const addJob = () => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      jobs: [...prevInfo.jobs, { job: "", position: "", dates: "" }],
    }));
    if (!isModified) {
      setIsModified(true);
    }
  };

  const deleteJob = (index) => {
    const jobs = [...info.jobs];
    jobs.splice(index, 1);
    setInfo({ ...info, jobs });
    if (!isModified) {
      setIsModified(true);
    }
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = [...info.skills];
    newSkills[index][name] = value;
    setInfo((prevInfo) => ({
      ...prevInfo,
      skills: newSkills,
    }));
    if (!isModified) {
      setIsModified(true);
    }
  };

  const addSkill = () => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      skills: [...prevInfo.skills, { skill: "" }],
    }));
    if (!isModified) {
      setIsModified(true);
    }
  };

  const deleteSkill = (index) => {
    const newSkills = info.skills.filter((_, i) => i !== index);
    setInfo((prevInfo) => ({
      ...prevInfo,
      skills: newSkills,
    }));
    if (!isModified) {
      setIsModified(true);
    }
  };
  const generatePDF = () => {
    const input = cvRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "pt",
        format: [canvas.width, canvas.height],
      });
      pdf.addImage(imgData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("CV.pdf");
    });
  };

  const generateTextFile = () => {
    const textContent = `
      CV
      Name: ${info.name || "John Doe"}
      Email: ${info.email || "johndoe@aol.com"}
      Phone: ${info.phone || "572-108-4722"}
      Location: ${info.location || "South Lake Tahoe, California"}
      About: ${
        info.about ||
        "I am a passionate computer science student with a strong interest in software development, data analysis, and AI. I enjoy solving complex problems and working on innovative projects."
      }
      Education:
      ${info.school || "Krelboyne University"} - ${
      info.degree || "Master's Degree in Computer Science"
    } (${info.year || "2014-2018"})
      Work History:
      ${info.jobs
        .map(
          (job) =>
            `${job.job || "Lakeview Valet"} - ${job.position || "Valet"} (${
              job.dates || "March 2014 - Present"
            })`
        )
        .join("\n")}
      Skills:
      ${info.skills.map((skill) => `${skill.skill || "Javascript"}`).join("\n")}
    `;
    const blob = new Blob([textContent], { type: "text/plain;charset=utf-8" });
    saveAs(blob, "CV.txt");
  };

  return (
    <div className="appDiv">
      <SidePanel
        info={info}
        handleInputChange={handleInputChange}
        handleJobChange={handleJobChange}
        addJob={addJob}
        deleteJob={deleteJob}
        handleSkillChange={handleSkillChange}
        addSkill={addSkill}
        deleteSkill={deleteSkill}
      />
      <div ref={cvRef}>
        <CVPage info={info} isModified={isModified} />
      </div>
      <div className="downloadBtns">
        <button onClick={generatePDF}>Save as PDF</button>
        <button onClick={generateTextFile}>Save as Text File</button>
      </div>
    </div>
  );
}

export default App;

/* 

To Do 
------

check layout for print preview
 
make it so that when typing in skills, hitting enter will add skill.

make contact info example load

*/
