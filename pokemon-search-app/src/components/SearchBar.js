import React from 'react';

const SearchBar = ({ searchValue, setSearchValue, fetchPokemon }) => {
    return (
        <div>
            <input
                id="search-input"
                type="text"
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />
            <button id="search-button" onClick={fetchPokemon}>Search</button>
        </div>
    );
};

export default SearchBar;
