export default function Education({ info, handleInputChange }) {
  return (
    <div className="education">
      <label>
        School:
        <input
          type="text"
          name="school"
          value={info.school}
          onChange={handleInputChange}
          className="input-field"
        />
      </label>
      <label>
        Title of study:
        <input
          type="text"
          name="degree"
          value={info.degree}
          onChange={handleInputChange}
          className="input-field"
        />
      </label>
      <label>
        Years:
        <input
          type="text"
          name="year"
          value={info.year}
          onChange={handleInputChange}
          className="input-field"
        />
      </label>
    </div>
  );
}
