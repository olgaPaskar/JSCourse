import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import LoginScreen from '../pages/LoginScreen';
import MainScreen from '../pages/MainScreen';

function Navigation() {
    return (
        <Router>
            <Switch>
                <Route path="/login" component={LoginScreen} />
                <Route path="/main" component={MainScreen} />
                <Redirect to="/login" />
            </Switch>
        </Router>
    );
}

export default Navigation;