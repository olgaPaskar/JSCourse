import React from 'react';

function Burger({ avatar, username, theme, language, onThemeChange, onLanguageChange }) {
    return (
        <div className="burger-menu">
            <div className="avatar">{avatar}</div>
            <div className="username">{username}</div>
            <div className="theme-toggle">
                <span>Тема: </span>
                <button onClick={onThemeChange}>Светлая</button>
                <button onClick={onThemeChange}>Темная</button>
            </div>
            <div className="language-toggle">
                <span>Язык: </span>
                <button onClick={onLanguageChange}>Русский</button>
                <button onClick={onLanguageChange}>Английский</button>
            </div>
        </div>
    );
}

export default Burger;
