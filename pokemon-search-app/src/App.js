import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import PokemonDetails from './components/PokemonDetails';

const App = () => {
    const [pokemonData, setPokemonData] = useState(null);
    const [searchValue, setSearchValue] = useState("");

    const fetchPokemon = async () => {
        try {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${searchValue.toLowerCase()}`);
            if (!response.ok) {
                alert("Pokémon not found");
                setPokemonData(null);
                return;
            }
            const data = await response.json();
            setPokemonData(data);
        } catch (error) {
            console.error("Error fetching Pokémon data:", error);
        }
    };

    return (
        <div>
            <h1>Pokémon Search</h1>
            <SearchBar
                searchValue={searchValue}
                setSearchValue={setSearchValue}
                fetchPokemon={fetchPokemon}
            />
            <PokemonDetails pokemonData={pokemonData} />
        </div>
    );
};

export default App;
