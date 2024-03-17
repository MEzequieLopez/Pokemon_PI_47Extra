const axios = require("axios");
const { Type } = require("../db.js");

const infoCleaner = async (datas) => {
  const pokemonsInfos = [];
  for (const pokemon of datas) {
    const response = await axios.get(pokemon.url);
    const { name, stats, id, sprites, types } = response.data;
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

const infoCleanerId = async (datas) => {
  const pokemonsInfos = [];
  const { name, stats, id, types, sprites } = datas.data;
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
  return pokemonsInfos;
};

const typesAll = async () => {
  const types = await Type.findAll();
  const typesAlls = types.map((type) => type.name);
  return typesAlls;
};

module.exports = {
  infoCleaner,
  infoCleanerId,
  typesAll,
};
