import {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';

interface WeatherForecast
{
  date : string,
  summary : string,
  temperatureC : number,
  temperatureF : number
}
function App() {
  const [forecast, setForecast] = useState<WeatherForecast[]>();
  useEffect(() => {
    (async () => {
      const {data} = await axios.get<WeatherForecast[]>("/weatherforecast");
      console.log(data);
      setForecast(data);
    })();
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {forecast?.map(x => <li key={x.temperatureC}>{x.summary}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;
