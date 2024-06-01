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
        />
      </label>
      <label>
        Title of study:
        <input
          type="text"
          name="degree"
          value={info.degree}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Year:
        <input
          type="text"
          name="year"
          value={info.year}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}
