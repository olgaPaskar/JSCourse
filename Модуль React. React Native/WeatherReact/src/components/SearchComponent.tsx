import React, { useState, useEffect } from 'react';

function Search({ cities, onCitySelect }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCities, setFilteredCities] = useState([]);

    useEffect(() => {
        const filtered = cities.filter(city =>
            city.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredCities(filtered);
    }, [searchTerm, cities]);

    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleCitySelect = (city) => {
        setSearchTerm('');
        onCitySelect(city);
    };

    return (
        <div className="search">
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Введите название города"
            />
            {searchTerm && (
                <ul className="city-list">
                    {filteredCities.map((city, index) => (
                        <li key={index} onClick={() => handleCitySelect(city)}>
                            {city}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Search;
