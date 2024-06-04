export default function Education({ info, handleInputChange }) {
  return (
    <div className="work">
      <label>
        Company name:
        <input
          type="text"
          name="job"
          value={info.job}
          onChange={handleInputChange}
          className="input-field"
        />
      </label>
      <label>
        Position title:
        <input
          type="text"
          name="position"
          value={info.position}
          onChange={handleInputChange}
          className="input-field"
        />
      </label>
      <label>
        Dates of employment
        <input
          type="text"
          name="dates"
          value={info.dates}
          onChange={handleInputChange}
          className="input-field"
        />
      </label>
    </div>
  );
}
