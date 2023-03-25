import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [userName, setUsername] = useState("");
  useEffect(() => {
    getNames();
  }, []);

  const getNames = async () => {
    const response = await axios.get("/names");
    const name = response.data;
    setUsername(name);
  };

  return (
    <>
      <h1>My Website</h1>
      <h3>My Name is : {userName}</h3>
    </>
  );
}

export default App;
