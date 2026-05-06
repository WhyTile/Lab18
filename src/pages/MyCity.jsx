import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function MyCity() {
  const [weather, setWeather] = useState(null);
  const city = "Kyiv";
  const API_KEY = "ab5290e6064ddea9e2ddf5a298d0b22b";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const res = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        setWeather(res.data);
      } catch (err) {
        console.error("Помилка при завантаженні погоди", err);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="page">
      <h1>Моє місто — Київ</h1>
      <p>Київ — це серце України, місто з тисячолітньою історією та неймовірною енергетикою. Це центр технологічного розвитку та освіти, де я навчаюся та розвиваюся.</p>
      
      <div className="weather-block">
        <h2>Погода у місті</h2>
        {weather ? (
          <div>
            <p><b>Температура:</b> {weather.main.temp}°C</p>
            <p><b>Опис:</b> {weather.weather[0].description}</p>
            <p><b>Координати:</b> {weather.coord.lat}, {weather.coord.lon}</p>
            <p><b>Країна:</b> {weather.sys.country}</p>
          </div>
        ) : <p>Завантаження даних погоди...</p>}
      </div>
    </div>
  );
}