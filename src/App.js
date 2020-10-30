import React, { useEffect, useState } from "react";
import "./App.css";
import CardContainer from "./components/CardContainer";

function App() {
  const [albumData, setAlbumData] = useState([]);
  useEffect(() => {
    async function getData() {
      const data = await fetch(
        "https://api.jsonbin.io/b/5f9c6eea9291173cbca603af"
      );
      const json = await data.json();

      setAlbumData(json);
    }
    getData();
  }, []);

  return (
    <div className="wrapper">
      <CardContainer albumData={albumData} />
    </div>
  );
}

export default App;
