export default function Skills({ info, handleInputChange }) {
  return (
    <div className="skills">
      <label>
        Skill:
        <input
          type="text"
          name="skill"
          value={info.skill}
          onChange={handleInputChange}
          className="input-field"
        />
      </label>
      <button>Add Skill</button>
    </div>
  );
}

/*

Add function to button so that multiple skills can be added.
*/
