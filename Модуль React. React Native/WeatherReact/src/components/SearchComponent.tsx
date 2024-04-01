import React, { useState } from 'react';
import '../assets/SearchComponent.css';

const SearchComponent = ({ onSubmit }) => {
    const [city, setCity] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(city);
    };

    return (
        <form className="SearchComponent" onSubmit={handleSubmit}>
            <input
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city name"
            />
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchComponent;










