import React, { useContext, useState } from 'react';
import SearchComponent from '../../components/searchComponent/SearchComponent';
import WeatherComponent from '../../components/weatherComponent/WeatherComponent';
import DrawerComponent from '../../components/drawerComponent/DrawerComponent';
import WeatherFiveDaysComponent from "../../components/weatherFiveDaysComponent/WeatherFiveDaysComponent";
import './MainScreen.css';
import { ThemeContext } from '../../ThemeProvider';

const MainScreen: React.FC = ({ avatar, login }) => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    const [weatherData, setWeatherData] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const fetchWeatherData = async (city) => {
        const apiKey = '8d2b23833b2282cc7e34989c52989413';
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
        <div className={`main-screen ${theme}`}>
            <div className="search-component-container">
                <SearchComponent onSubmit={fetchWeatherData} />
            </div>
            <div className="weather-component-container">
                <WeatherComponent weatherData={weatherData} />
                <WeatherFiveDaysComponent />
            </div>
            <div className="burger-menu-container">
                <button className="burger-menu-button" onClick={toggleDrawer}>
                    ☰
                </button>
                <button className="theme-switch-button" onClick={toggleTheme}>
                    Switch to {theme === 'light' ? 'dark' : 'light'} mode
                </button>
                <DrawerComponent isOpen={isDrawerOpen} onClose={toggleDrawer} avatar={avatar} login={login} />
            </div>
        </div>
    );
};

export default MainScreen;




















