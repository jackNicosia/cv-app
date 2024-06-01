import { useState } from "react";
import SidePanel from "./SidePanel";
import CVPage from "./CVPage";

function App() {
  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
    school: "",
    degree: "",
    year: "",
    job: "",
    dates: "",
    about: "",
    location: "",
    link: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  return (
    <div className="appDiv">
      <SidePanel info={info} handleInputChange={handleInputChange} />
      <CVPage info={info} />
    </div>
  );
}

export default App;
