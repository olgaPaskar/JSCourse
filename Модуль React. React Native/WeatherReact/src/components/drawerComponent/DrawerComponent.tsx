import React, { useState } from 'react';
import './DrawerComponent.css';
import AvatarComponent from "../AvatarComponent";
import LoginComponent from "../LoginComponent";
import '../../pages/mainScreen/DarkTheme.css';
import '../../pages/mainScreen/LightTheme.css';

const DrawerComponent = ({ isOpen, onClose, avatar, login }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const [isRussianLocale, setIsRussianLocale] = useState(true);

    const toggleTheme = () => {
        setIsDarkTheme(prevTheme => !prevTheme);
    };

    const toggleLocale = () => {
        setIsRussianLocale(prevLocale => !prevLocale);
    };

    return (
        <div className={`drawer ${isOpen ? 'open' : ''} ${isDarkTheme ? 'dark-theme' : ''}`}>
            <button className="close-button" onClick={onClose}>
                &times;
            </button>
            <div className="user-profile">
                <AvatarComponent avatar={avatar} />
                <LoginComponent login={login} />
            </div>
            <div className="settings">
                <div className="theme-toggle">
                    <h3>Choose Theme:</h3>
                    <button onClick={toggleTheme} className={isDarkTheme ? 'active' : ''}>Dark</button>
                    <button onClick={toggleTheme} className={!isDarkTheme ? 'active' : ''}>Light</button>
                </div>
                <div className="locale-toggle">
                    <h3>Change Language:</h3>
                    <button onClick={toggleLocale} className={isRussianLocale ? 'active' : ''}>Russian</button>
                    <button onClick={toggleLocale} className={!isRussianLocale ? 'active' : ''}>English</button>
                </div>
            </div>
        </div>
    );
};

export default DrawerComponent;










