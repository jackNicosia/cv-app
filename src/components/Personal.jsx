export default function Personal({ info, handleInputChange }) {
  return (
    <div className="personal">
      <label>
        Name:
        <input
          className="input-field"
          type="text"
          name="name"
          value={info.name}
          onChange={handleInputChange}
        />
      </label>
      <label>
        About yourself:
        <textarea
          className="input-field"
          name="about"
          value={info.about}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Email:
        <input
          className="input-field"
          type="text"
          name="email"
          value={info.email}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone number:
        <input
          className="input-field"
          type="text"
          name="phone"
          value={info.phone}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Location:
        <input
          className="input-field"
          type="text"
          name="location"
          value={info.location}
          onChange={handleInputChange}
        />
      </label>
    </div>
  );
}
