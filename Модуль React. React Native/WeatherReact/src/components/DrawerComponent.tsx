import React from 'react';
import '../assets/DrawerComponent.css';
import AvatarComponent from "../components/AvatarComponent";
import LoginComponent from "../components/LoginComponent";

const DrawerComponent = ({ isOpen, onClose }) => {
    // Функция для переключения темы
    const toggleTheme = () => {
        // Реализация переключения темы
    };

    // Функция для переключения локали
    const toggleLocale = () => {
        // Реализация переключения локали
    };

    return (
        <div className={`drawer ${isOpen ? 'open' : ''}`}>
            {/* Кнопка для закрытия drawer */}
            <button className="close-button" onClick={onClose}>
                &times;
            </button>

            {/* Аватар пользователя и имя */}
            <div className="user-profile">
                <AvatarComponent />
                <LoginComponent />
            </div>

            {/* Переключатели темы и локали */}
            <div className="settings">
                <div className="theme-toggle">
                    <label>
                        <input type="checkbox" onChange={toggleTheme} />
                        Toggle Theme
                    </label>
                </div>
                <div className="locale-toggle">
                    <label>
                        <input type="checkbox" onChange={toggleLocale} />
                        Toggle Locale
                    </label>
                </div>
            </div>
        </div>
    );
};

export default DrawerComponent;

