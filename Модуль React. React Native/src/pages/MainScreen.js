import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Menu as MenuIcon, Search as SearchIcon, Clear as ClearIcon } from '@react-navigation/native';

const api = '8d2b23833b2282cc7e34989c52989413';

const MainScreen: React.FC = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [weatherData, setWeatherData] = useState<any>(null);
    const [searchValue, setSearchValue] = useState('');
    const [localWeather, setLocalWeather] = useState<any>(null);

    useEffect(() => {
        fetchLocation();
    }, []);

    const fetchLocation = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords;
                fetchLocalWeather(latitude, longitude);
            },
            (error) => {
                console.error('Ошибка получения геолокации:', error);
            }
        );
    };

    const fetchLocalWeather = async (lat: number, long: number) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=${api}&units=metric`);
            setLocalWeather(response.data);
        } catch (error) {
            console.error('Ошибка получения данных о погоде:', error);
        }
    };

    const fetchWeatherByCity = async (city: string) => {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`);
            setWeatherData(response.data);
        } catch (error) {
            console.error('Ошибка получения данных о погоде для указанного города:', error);
        }
    };

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(e.target.value);
    };

    const handleSearch = () => {
        fetchWeatherByCity(searchValue);
    };

    const handleClearSearch = () => {
        setSearchValue('');
        setWeatherData(null);
    };

    return (
        <div>
            <Button onClick={toggleDrawer}><MenuIcon /></Button>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
                <div>
                    <Menu>
                        <MenuItem>Светлая тема</MenuItem>
                        <MenuItem>Темная тема</MenuItem>
                        <MenuItem>Русский</MenuItem>
                        <MenuItem>Английский</MenuItem>
                    </Menu>
                </div>
            </Drawer>
            <div>
                <TextField
                    value={searchValue}
                    onChange={handleSearchChange}
                    placeholder="Введите город"
                    InputProps={{
                        endAdornment: (
                            <IconButton onClick={handleClearSearch}>
                                <ClearIcon />
                            </IconButton>
                        ),
                    }}
                />
                <Button onClick={handleSearch}><SearchIcon /></Button>
            </div>
            {weatherData && (
                <div>
                    <h2>Погода в {weatherData.name}:</h2>
                    <p>Температура: {weatherData.main.temp}°C</p>
                    <p>Описание: {weatherData.weather[0].description}</p>
                </div>
            )}
            {localWeather && (
                <div>
                    <h2>Погода в вашем регионе:</h2>
                    <p>Температура: {localWeather.main.temp}°C</p>
                    <p>Описание: {localWeather.weather[0].description}</p>
                </div>
            )}
        </div>
    );
};

export default MainScreen;
