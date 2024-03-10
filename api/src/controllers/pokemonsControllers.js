const { Pokemon, Type } = require("../db.js");
const axios = require("axios");
// const {Op} = require("sequelize");

const getPokemonById = async (id, source) => {
  const pokemon =
    source === "api"
      ? (await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)).data
      : await Pokemon.findByPk(id, {
          include: [
            {
              model: Type,
              as: "pokemonsTypes",
            },
          ],
        });
  return pokemon;
};



const getPokemonsInfo = async (pokemonsList) => {
  const pokemonsInfos = [];
  for (const pokemon of pokemonsList) {
    const response = await axios.get(pokemon.url);
    const { name, stats, id, types, sprites } = response.data;
    const pokemonInfo = {
      id,
      name,
      imageUrl: sprites.front_default,
      stats: stats.map(({ base_stat, stat }) => ({
        name: stat.name,
        base_stat,
      })),
      types: types.map(({ type }) => ({
        name: type.name,
      })),
    };

    pokemonsInfos.push(pokemonInfo);
  }
  return pokemonsInfos;
};

const getQueryName = async (name) => {
  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  
}

// const pokemonsBd = await Pokemon.findAll({
//   where: {
//     name: {
//       [Op.iLike]: '%' + name + '%'
//     }
//   }
// });

module.exports = {
  getPokemonById,
  getPokemonsInfo,
  getQueryName,
  
};
