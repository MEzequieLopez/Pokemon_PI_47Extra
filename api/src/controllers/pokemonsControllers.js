const { Pokemon, Type } = require("../db.js");
const axios = require("axios");
const { Op } = require("sequelize");
const { infoCleaner, infoCleanerId } = require("../utils/index,.js");
const typesNameBd = async () => {
  const response = await axios.get(`https://pokeapi.co/api/v2/type`);
  const typesPokemons = response.data.results;
  for (const typesd of typesPokemons) {
    await Type.upsert({ name: typesd.name });
  }
};

const getPokemonById = async (id, source) => {
  let pokemonType;
  if (source === "api") {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

    const pokemonTypeId = await infoCleanerId(response);
    pokemonType = pokemonTypeId;
  } else {
    pokemonType = await Pokemon.findByPk(id, {
      include: [
        {
          model: Type,
          as: "types",
          attributes: ['name'],
          through: { attributes: [] }
        },
      ],
    });
  }
  return pokemonType;
};

const getPokemonsInfo = async () => {
  const pokemonsBd = await Pokemon.findAll();

  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const pokemones = response.data.results;

  const infoCleairPokemonsApi = await infoCleaner(pokemones);
  return [...pokemonsBd, ...infoCleairPokemonsApi];
};

const getPokemonsByName = async (name) => {
  const pokemonApiBd = await Pokemon.findAll({
    where: {
      name: {
        [Op.iLike]: "%" + name + "%",
      },
    },
  });

  const response = await axios.get("https://pokeapi.co/api/v2/pokemon");
  const pokemones = response.data.results;

  const pokemonsCleair = await infoCleaner(pokemones);

  const lowerCaseName = name.toLowerCase();

  const pokemonForName = pokemonsCleair.filter(
    (pokemon) => pokemon.name.toLowerCase() === lowerCaseName
  );
  return [...pokemonForName, ...pokemonApiBd];
};

module.exports = {
  getPokemonById,
  getPokemonsInfo,
  getPokemonsByName,
  typesNameBd,
};
