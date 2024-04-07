import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './WeatherFiveDaysComponent.css';

const FiveDayForecastComponent = () => {
    const [forecastData, setForecastData] = useState(null);

    useEffect(() => {
        const fetchForecastData = async () => {
            try {
                // Получение текущего местоположения пользователя
                navigator.geolocation.getCurrentPosition(async (position) => {
                    const { latitude, longitude } = position.coords;

                    const response = await axios.get(
                        `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=8d2b23833b2282cc7e34989c52989413&units=metric`
                    );
                    setForecastData(response.data);
                });
            } catch (error) {
                console.error('Error fetching forecast data:', error);
            }
        };

        fetchForecastData();
    }, []);

    // Функция для группировки прогнозов по дням
    const groupForecastsByDay = (forecasts) => {
        const groupedForecasts = {};
        forecasts.forEach((forecast) => {
            // Извлекаем дату из времени прогноза
            const date = forecast.dt_txt.split(' ')[0];
            // Добавляем прогноз в соответствующий день
            if (!groupedForecasts[date]) {
                groupedForecasts[date] = [forecast];
            } else {
                groupedForecasts[date].push(forecast);
            }
        });
        return groupedForecasts;
    };

    return (
        <div>
            <h2>5-Day Weather Forecast</h2>
            {forecastData ? (
                <div>
                    {Object.entries(groupForecastsByDay(forecastData.list)).map(([date, forecasts]) => (
                        <div key={date} className="forecast-day">
                            <h3>{date}</h3>
                            {forecasts.map((forecast, index) => (
                                <div key={index}>
                                    <p>Date and Time: {forecast.dt_txt}</p>
                                    <p>Temperature: {forecast.main.temp} °C</p>
                                    <p>Description: {forecast.weather[0].description}</p>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ) : (
                <p>Loading forecast data...</p>
            )}
        </div>
    );
};

export default FiveDayForecastComponent;





