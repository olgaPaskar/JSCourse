import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './SearchComponent.css';

const SearchComponent = ({ onSubmit }) => {
    const [city, setCity] = useState('');
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const fetchSuggestions = async () => {
            try {
                const response = await axios.get(`https://api.api-ninjas.com/v1/city?name=${city}`, {
                    headers: {
                        'X-Api-Key': 'h9zkqVbQxALqUNAb+1T/zQ==elcSBu4esz5icYRP'
                    }
                });
                setSuggestions(response.data);
            } catch (error) {
                console.error('Error fetching city suggestions:', error);
            }
        };

        if (city.trim() !== '') {
            fetchSuggestions();
        } else {
            setSuggestions([]);
        }
    }, [city]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(city);
    };

    const handleSuggestionClick = (selectedCity) => {
        setCity(selectedCity);
        setSuggestions([]);
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
            <ul className="suggestions">
                {suggestions.map((suggest) => (
                    <li key={suggest.id} onClick={() => handleSuggestionClick(suggest.name)}>
                        {suggest.name}
                    </li>
                ))}
            </ul>
        </form>
    );
};

export default SearchComponent;











