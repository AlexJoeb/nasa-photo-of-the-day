import React, { useState } from "react";
import "./App.css";
import axios from 'axios';

import Card from './components/Card';

const api = `https://api.nasa.gov/planetary/apod?api_key=QN8Y7dLuMEzZvTmxQrOQGdjLJKSOi671UYhkenRP`;



function App() {
  
  const [data, setData] = useState({});

  useState(() => {
    axios.get("")
    .then(resp => {
      setData({
        title: "Hello",
        url: "https://apod.nasa.gov/apod/image/2003/AntiCrepRays_Goff_960.jpg",
        explanation: "This is a pretty picture.",
      });
    }).finally(() => console.log("Updated", data));
  }, []);

  return (
    <div className="App">
      <Card data={data} />
    </div>
  );
}

export default App;
