import React, {useState} from 'react';
import '../assets/LoginScreen.css';

import AvatarComponent from '../components/AvatarComponent';
import LoginComponent from '../components/LoginComponent';
import PasswordComponent from '../components/PasswordComponent';
import RepeatPasswordComponent from '../components/RepeatPasswordComponent';
import RegisterButton from "../components/RegisterButton";

function LoginScreen({navigateToMain}) {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [avatar, setAvatar] = useState<string | ArrayBuffer | null>(null);
    const [loginError, setLoginError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleLoginChange = (event) => {
        setLogin(event.target.value);
        setLoginError('');
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        setPasswordError('');
    };

    const handleRepeatPasswordChange = (event) => {
        setRepeatPassword(event.target.value);
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    setAvatar(reader.result);
                };
                reader.readAsDataURL(file);
            } else {
                setLoginError('Пожалуйста, загрузите изображение.');
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isLoginValid(login)) {
            setLoginError('Логин должен содержать от 6 до 12 символов');
            return;
        }

        if (!isPasswordValid(password)) {
            setPasswordError('Пароль должен содержать от 8 до 14 символов, хотя бы одну заглавную букву и одну цифру, без знаков препинания');
            return;
        }

        if (password !== repeatPassword) {
            setPasswordError('Пароли не совпадают');
            return;
        }

        if (!avatar) {
            setLoginError('Пожалуйста, загрузите аватар.');
            return;
        }
        navigateToMain();
    };

    const isLoginValid = (login) => {
        return login.length >= 6 && login.length <= 12;
    };

    const isPasswordValid = (password) => {
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,14}$/;
        return passwordRegex.test(password);
    };

    return (
        <div className="login-screen">
            <h1>Welcome to WeatherCity!</h1>
            <form onSubmit={handleSubmit}>
                <AvatarComponent avatar={avatar} handleAvatarChange={handleAvatarChange} />
                <LoginComponent login={login} handleLoginChange={handleLoginChange} />
                {loginError && <div className="error">{loginError}</div>}
                <PasswordComponent password={password} handlePasswordChange={handlePasswordChange} />
                {passwordError && <div className="error">{passwordError}</div>}
                <RepeatPasswordComponent repeatPassword={repeatPassword}
                                         handleRepeatPasswordChange={handleRepeatPasswordChange}/>
                <RegisterButton onClick={handleSubmit} isDisabled={!login || !password || !repeatPassword || !avatar}/>
            </form>
        </div>
    );
}

export default LoginScreen;









