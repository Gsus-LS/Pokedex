const searchButton = document.getElementById('search-button');
const pokemonDisplay = document.getElementById('pokemon-display');

searchButton.addEventListener('click', async () => {
    const input = document.getElementById('pokemon-input').value;
    if (!input) return;

    const pokemonNumber = parseInt(input);
    if (pokemonNumber < 1 || pokemonNumber > 898) {
        pokemonDisplay.innerHTML = "<p>Please enter a valid Pokémon number (1-898).</p>";
        return;
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNumber}`);
        const data = await response.json();
        displayPokemon(data);
    } catch (error) {
        pokemonDisplay.innerHTML = "<p>Pokémon not found. Please try again.</p>";
    }
});

function displayPokemon(pokemon) {
    pokemonDisplay.innerHTML = `
        <h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
        <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
        <p>Number: ${pokemon.id}</p>
    `;
}
