import Personal from "./Personal";
import Education from "./Education";
import "../styles/SidePanel.css";
import Work from "./Work";
import Skills from "./Skills";

export default function SidePanel({ info, handleInputChange }) {
  return (
    <div className="sidePanel">
      <h2>General Information</h2>
      <Personal info={info} handleInputChange={handleInputChange} />
      <h2>Education</h2>
      <Education info={info} handleInputChange={handleInputChange} />
      <h2>Work History</h2>
      <Work info={info} handleInputChange={handleInputChange} />
      <h2>Technical skills</h2>
      <Skills info={info} handleInputChange={handleInputChange} />
    </div>
  );
}
