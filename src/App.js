import React, { useState, useEffect } from "react";
import axios from 'axios';
import { format } from 'date-fns';

import Card from './components/Card';
import DateModule from './components/DateModule';

import "./styles/index.scss";
import "flatpickr/dist/themes/dark.css";

import "./App.css";

function App() {
  
  const [ data, setData ] = useState({});
  const [ date, setDate ] = useState(new Date());
  const api = `https://api.nasa.gov/planetary/apod?api_key=QN8Y7dLuMEzZvTmxQrOQGdjLJKSOi671UYhkenRP&date=`;

  useEffect(() => {
    axios.get(api + format(date, "yyyy-MM-dd"))
    .then(resp => {
      setData(resp.data);
    }).catch(err => console.error(err.message));
  }, [date]);

  const updateDate = d => {
    setDate(d);
  };

  return (
    <div className="App">
      <Card api={api} data={data}  />
      <DateModule date={date} updateDate={updateDate} />
    </div>
  );
}

export default App;
