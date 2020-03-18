import React, { useState } from "react";
import "./App.css";
import axios from 'axios';

import Card from './components/Card';

import "./styles/index.scss";

const api = `https://api.nasa.gov/planetary/apod?api_key=QN8Y7dLuMEzZvTmxQrOQGdjLJKSOi671UYhkenRP`;



function App() {
  
  const [data, setData] = useState({});

  useState(() => {
    axios.get(api)
    .then(resp => {
      setData(resp.data);
    }).finally(() => console.log("Updated", data));
  }, []);

  return (
    <div className="App">
      <Card data={data} />
    </div>
  );
}

export default App;
