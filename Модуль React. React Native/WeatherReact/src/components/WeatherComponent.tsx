// WeatherInfo.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../assets/WeatherComponent.css'

const WeatherComponent = ({ weatherData }) => {
    const [currentWeather, setCurrentWeather] = useState(null);

    useEffect(() => {
        const fetchCurrentWeather = async () => {
            try {
                // Получаем текущее местоположение пользователя
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;

                    // Запрашиваем погоду по текущему местоположению
                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=8d2b23833b2282cc7e34989c52989413&units=metric`
                    );
                    setCurrentWeather(response.data);
                });
            } catch (error) {
                console.error('Error fetching current weather:', error);
            }
        };

        fetchCurrentWeather();
    }, []); // Пустой массив завершает эффект после первого рендера

    return (
        <div className="weather-info-container">
            <h2>Current Weather</h2>
            {currentWeather ? (
                <>
                    <p>Location: {currentWeather.name}</p>
                    <p>Temperature: {currentWeather.main.temp} °C</p>
                    <p>Description: {currentWeather.weather[0].description}</p>
                </>
            ) : (
                <p>Loading...</p>
            )}
            <hr />
            {weatherData && (
                <>
                    <h2>Weather in {weatherData.name}</h2>
                    <p>Temperature: {weatherData.main.temp} °C</p>
                    <p>Description: {weatherData.weather[0].description}</p>
                </>
            )}
        </div>
    );
};

export default WeatherComponent;
