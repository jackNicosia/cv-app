import Personal from "./Personal";
import Education from "./Education";
import "../styles/SidePanel.css";
import Work from "./Work";
import Skills from "./Skills";

export default function SidePanel({
  info,
  handleInputChange,
  handleJobChange,
  addJob,
  deleteJob,
  handleSkillChange,
  addSkill,
  deleteSkill,
}) {
  return (
    <div className="sidePanel">
      <h2>General Information</h2>
      <Personal info={info} handleInputChange={handleInputChange} />
      <h2>Education</h2>
      <Education info={info} handleInputChange={handleInputChange} />
      <h2>Work History</h2>
      {info.jobs.map((job, index) => (
        <Work
          key={index}
          job={job}
          index={index}
          handleJobChange={handleJobChange}
          deleteJob={deleteJob}
        />
      ))}
      <button type="button" onClick={addJob}>
        Add Job{" "}
      </button>
      <h2>Technical skills</h2>
      <Skills
        info={info}
        handleSkillChange={handleSkillChange}
        addSkill={addSkill}
        deleteSkill={deleteSkill}
      />
    </div>
  );
}
