export default function Job({ job, index, handleJobChange, deleteJob }) {
  return (
    <div className="work">
      <label>
        Company name:
        <input
          type="text"
          name="job"
          value={job.job}
          onChange={(e) => handleJobChange(index, e)}
          className="input-field"
        />
      </label>
      <label>
        Position title:
        <input
          type="text"
          name="position"
          value={job.position}
          onChange={(e) => handleJobChange(index, e)}
          className="input-field"
        />
      </label>
      <label>
        Dates of employment
        <input
          type="text"
          name="dates"
          value={job.dates}
          onChange={(e) => handleJobChange(index, e)}
          className="input-field"
        />
      </label>
      <button type="button" onClick={() => deleteJob(index)}>
        x
      </button>
    </div>
  );
}
