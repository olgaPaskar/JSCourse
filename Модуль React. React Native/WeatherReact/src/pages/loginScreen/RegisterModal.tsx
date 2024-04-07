import React, { useState } from 'react';
import './RegisterModal.css'; // Стили можно определить в отдельном CSS файле

function RegisterModal({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [avatar, setAvatar] = useState<File | null>(null); // Используем тип File для хранения файла аватара
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [repeatPasswordError, setRepeatPasswordError] = useState('');
    const [avatarError, setAvatarError] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
        setUsernameError('');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
        setRepeatPasswordError('');
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                setAvatar(file);
                setAvatarError('');
            } else {
                setAvatar(null);
                setAvatarError('Пожалуйста, загрузите изображение.');
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Валидация полей регистрации
        if (username.length < 6 || username.length > 12) {
            setUsernameError('Логин должен содержать от 6 до 12 символов');
            return;
        }

        if (password.length < 8 || password.length > 14 || !/(?=.*[A-Z])(?=.*\d)/.test(password)) {
            setPasswordError('Пароль должен содержать от 8 до 14 символов, хотя бы одну заглавную букву и одну цифру');
            return;
        }

        if (password !== repeatPassword) {
            setRepeatPasswordError('Пароли не совпадают');
            return;
        }

        if (!avatar) {
            setAvatarError('Пожалуйста, загрузите аватар.');
            return;
        }

        // Все поля заполнены корректно, можно отправить данные на сервер или выполнить другие действия
        console.log('Username:', username);
        console.log('Password:', password);
        console.log('Avatar:', avatar);

        // Закрыть модальное окно после успешной регистрации
        onClose();
    };

    return (
        <div className="register-modal">
            <div className="register-modal-content">
                <span className="register-modal-close" onClick={onClose}>&times;</span>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="register-input" placeholder="Имя пользователя" value={username} onChange={handleUsernameChange} />
                    {usernameError && <div className="error">{usernameError}</div>}
                    <input type="password" className="register-input" placeholder="Пароль" value={password} onChange={handlePasswordChange} />
                    {passwordError && <div className="error">{passwordError}</div>}
                    <input type="password" className="register-input" placeholder="Повторите пароль" value={repeatPassword} onChange={handleRepeatPasswordChange} />
                    {repeatPasswordError && <div className="error">{repeatPasswordError}</div>}
                    <input type="file" className="register-input" accept="image/*" onChange={handleAvatarChange} />
                    {avatarError && <div className="error">{avatarError}</div>}
                    <button type="submit" className="register-button">Зарегистрироваться</button>
                </form>
            </div>
        </div>
    );
}

export default RegisterModal;



