import './App.css'
import {useEffect, useState} from "react";

function App() {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    fetch('https://api.open-meteo.com/v1/forecast?latitude=43.9381&longitude=17.5883&current=temperature_2m')
      .then(response => response.json())
      .then(data => {
        const temp = data.current.temperature_2m
        const units = data.current_units.temperature_2m
        setTemperature(temp + " " + units)
      });
  }, []);

  return (
    <>
      <h1>Vrime</h1>
      <h5>{temperature}</h5>
    </>
  )
}

export default App
