import React from 'react';

function RepeatPasswordComponent({ repeatPassword, handleRepeatPasswordChange }) {
    return (
        <div className="form-group">
            <label htmlFor="repeatPassword">Repeat Password:</label>
            <input
                type="password"
                id="repeatPassword"
                value={repeatPassword}
                onChange={handleRepeatPasswordChange}
            />
        </div>
    );
}

export default RepeatPasswordComponent;
