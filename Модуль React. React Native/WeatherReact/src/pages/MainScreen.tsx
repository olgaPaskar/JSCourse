import React, { useState } from 'react';
import SearchComponent from '../components/SearchComponent';
import WeatherComponent from '../components/WeatherComponent';
import DrawerComponent from '../components/DrawerComponent';
import '../assets/MainScreen.css';

const MainScreen = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false); // Состояние для открытия/закрытия бургер-меню

    const fetchWeatherData = async (city) => {
        const apiKey = 'YOUR_API_KEY'; // Замените на ваш API ключ
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;

        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Failed to fetch weather data');
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    return (
        <div className="main-screen">
            {/* Компонент для поиска погоды */}
            <div className="search-component-container">
                <SearchComponent onSubmit={fetchWeatherData} />
            </div>

            {/* Компонент для отображения погоды */}
            <div className="weather-component-container">
                <WeatherComponent weatherData={weatherData} />
            </div>

            {/* Компонент для бургер-меню */}
            <div className="burger-menu-container">
                <button className="burger-menu-button" onClick={toggleDrawer}>
                    ☰
                </button>
                <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer} />
            </div>
        </div>
    );
};

export default MainScreen;












