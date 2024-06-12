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
    job: "",
    dates: "",
    about: "",
    location: "",
    link: "",
    skills: [{ skill: "" }],
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const handleSkillChange = (index, e) => {
    const { name, value } = e.target;
    const newSkills = [...info.skills];
    newSkills[index][name] = value;
    setInfo((prevInfo) => ({
      ...prevInfo,
      skills: newSkills,
    }));
  };

  const addSkill = () => {
    setInfo((prevInfo) => ({
      ...prevInfo,
      skills: [...prevInfo.skills, { skill: "" }],
    }));
  };

  const deleteSkill = (index) => {
    const newSkills = info.skills.filter((_, i) => i !== index);
    setInfo((prevInfo) => ({
      ...prevInfo,
      skills: newSkills,
    }));
  };

  return (
    <div className="appDiv">
      <SidePanel
        info={info}
        handleInputChange={handleInputChange}
        handleSkillChange={handleSkillChange}
        addSkill={addSkill}
        deleteSkill={deleteSkill}
      />
      <CVPage info={info} />
    </div>
  );
}

export default App;

/* 

To Do 
------
add email/phone/location/link icons 




*/
