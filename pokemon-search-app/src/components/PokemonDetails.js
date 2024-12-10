import React from 'react';

const PokemonDetails = ({ pokemonData }) => {
    if (!pokemonData) return null;

    const { name, id, weight, height, stats, sprites, types } = pokemonData;

    return (
        <div>
            <h2 id="pokemon-name">{name.toUpperCase()}</h2>
            <p id="pokemon-id">#{id}</p>
            <p id="weight">Weight: {weight}</p>
            <p id="height">Height: {height}</p>
            <p id="hp">HP: {stats[0].base_stat}</p>
            <p id="attack">Attack: {stats[1].base_stat}</p>
            <p id="defense">Defense: {stats[2].base_stat}</p>
            <p id="special-attack">Special Attack: {stats[3].base_stat}</p>
            <p id="special-defense">Special Defense: {stats[4].base_stat}</p>
            <p id="speed">Speed: {stats[5].base_stat}</p>
            <img id="sprite" src={sprites.front_default} alt={name} />
            <div id="types">
                {types.map((typeInfo) => (
                    <p key={typeInfo.type.name}>{typeInfo.type.name.toUpperCase()}</p>
                ))}
            </div>
        </div>
    );
};

export default PokemonDetails;
