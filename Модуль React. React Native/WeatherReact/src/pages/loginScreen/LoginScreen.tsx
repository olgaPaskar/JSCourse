import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LoginScreen.css';

import AvatarComponent from '../../components/AvatarComponent';
import LoginComponent from '../../components/LoginComponent';
import PasswordComponent from '../../components/PasswordComponent';
import RegisterButton from "../../components/RegisterButton";
import RegisterModal from "./RegisterModal";
import {setAvatar, setError, setLogin, setPassword, setShowRegisterModal} from "./authSlice";

function LoginScreen({ navigateToMain }) {
    const showRegisterModal = useSelector(state => state.auth.showRegisterModal);
    const login = useSelector(state => state.auth.login);
    const password = useSelector(state => state.auth.password);
    const avatar = useSelector(state => state.auth.avatar);
    const error = useSelector(state => state.auth.error);

    const dispatch = useDispatch();

    const handleLoginChange = (event) => {
        dispatch(setLogin(event.target.value));
        dispatch(setError(''));
    };

    const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));
        dispatch(setError(''));
    };

    const handleAvatarChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (file.type.startsWith('image/')) {
                const reader = new FileReader();
                reader.onload = () => {
                    dispatch(setAvatar(reader.result));
                };
                reader.readAsDataURL(file);
            } else {
                dispatch(setError('Пожалуйста, загрузите изображение.'));
            }
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!isLoginValid(login)) {
            dispatch(setError('Логин должен содержать от 6 до 12 символов'));
            return;
        }

        if (!isPasswordValid(password)) {
            dispatch(setError('Пароль должен содержать от 8 до 14 символов, хотя бы одну заглавную букву и одну цифру, без знаков препинания'));
            return;
        }

        if (!avatar) {
            dispatch(setError('Пожалуйста, загрузите аватар.'));
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

    const handleRegisterClick = () => {
        dispatch(setShowRegisterModal(true));
    };

    const handleCloseLoginModal = () => {
        dispatch(setShowRegisterModal(false));
    };

    const handleRegister = () => {
        handleRegisterClick();
    };

    return (
        <div className="login-screen">
            <h1>Welcome to WeatherCity!</h1>
            <form onSubmit={handleSubmit}>
                <AvatarComponent avatar={avatar} handleAvatarChange={handleAvatarChange} />
                <LoginComponent login={login} handleLoginChange={handleLoginChange} />
                {error && <div className="error">{error}</div>}
                <PasswordComponent password={password} handlePasswordChange={handlePasswordChange} />
                <RegisterButton onClick={handleRegisterClick} isDisabled={!login || !password || !avatar}/>
            </form>
            <a href="#" onClick={handleRegister}>Registration</a>
            {showRegisterModal && <RegisterModal onClose={handleCloseLoginModal} />}
        </div>
    );
}

export default LoginScreen;






















