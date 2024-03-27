import React from 'react';
import Burger from '../components/BurgerComponent';
import Search from '../components/SearchComponent';
//import CurrentWeather from './CurrentWeather';
//import WeatherForecast from './WeatherForecast';

function MainScreen() {
    return (
        <div className="main-screen">
            <Burger />
            <Search />
            <div className="weather-section">
                <CurrentWeather />
                <WeatherForecast />
            </div>
        </div>
    );
}

export default MainScreen;
