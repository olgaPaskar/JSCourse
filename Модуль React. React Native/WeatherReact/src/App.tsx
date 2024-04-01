import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginScreen from './pages/LoginScreen';
import MainScreen from './pages/MainScreen';

const App = () => {
    const navigateToMain = () => {
        window.location.href = '/main';
    };

    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<LoginScreen navigateToMain={navigateToMain}/>}/>
                <Route path="/main" element={<MainScreen/>}/>
            </Routes>
        </Router>
    );
};

export default App;



