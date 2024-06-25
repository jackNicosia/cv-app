import { useState } from "react";
import SidePanel from "./SidePanel";
import CVPage from "./CVPage";

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
      <CVPage info={info} isModified={isModified} />
    </div>
  );
}

export default App;

/* 

To Do 
------
create max width for cv-page text




// maybe remove bullets until typed into

  style slide bar



*/
