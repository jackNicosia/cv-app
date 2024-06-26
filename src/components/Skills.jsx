export default function Skills({
  info,
  handleSkillChange,
  addSkill,
  deleteSkill,
}) {
  return (
    <div className="skills">
      {info.skills.map((skill, index) => (
        <div key={index} className="skill-input">
          <div className="input-container">
            <button type="button" onClick={() => deleteSkill(index)}>
              X
            </button>
            <label>Skill:</label>
            <input
              type="text"
              name="skill"
              value={skill.skill}
              onChange={(e) => handleSkillChange(index, e)}
              className="input-field"
            />
          </div>
        </div>
      ))}
      <button type="button" onClick={addSkill}>
        Add Skill
      </button>
    </div>
  );
}
