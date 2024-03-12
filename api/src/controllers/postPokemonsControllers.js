const { Pokemon, Type } = require("../db.js");

const postPokemonBd = async (pokemonsInfoBd) => {
  const { id, name, image, life, attack, defense, typeId } =
    pokemonsInfoBd;
  const newPokemon = await Pokemon.create({id, name, image, life, attack, defense });
  await newPokemon.addType(typeId)
  return newPokemon;
};

module.exports = { postPokemonBd };
