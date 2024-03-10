const axios = require("axios");

const infoCleaner = (arr) => {
    arr.map((pokemon) => {
        return {
            name: pokemon.name,
            image:pokemon.image,
            attack:pokemon.attack,
            defense:pokemon.defense,
            created: false,
        }
    })
}

const getPokemonsAll = async () => {
    const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const pokemones = response.data.results;
    return pokemones;
  };

module.exports = {
    infoCleaner,
    getPokemonsAll
}


   
       
   