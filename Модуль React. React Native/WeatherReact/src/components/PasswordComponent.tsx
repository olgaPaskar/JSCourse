import React from 'react';

function PasswordComponent({ password, handlePasswordChange }) {
    return (
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
            />
        </div>
    );
}

export default PasswordComponent;
