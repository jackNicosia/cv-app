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
        />
      </label>
      <label>
        Position title:
        <input
          type="text"
          name="position"
          value={info.position}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Dates of employment
        <input
          type="text"
          name="dates"
          value={info.dates}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}
