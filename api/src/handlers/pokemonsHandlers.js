const {
  getPokemonById,
  getPokemonsInfo,
  getQueryName,
} = require("../controllers/pokemonsControllers.js");
const {getPokemonsAll}  = require("../utils/index,.js")

const postCreateHandler = async (req, res) => {};

const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (!name) {
      const pokemonsList = await getPokemonsAll();
      const pokemonsInfo = await getPokemonsInfo(pokemonsList);
      res.status(200).json(pokemonsInfo);
    } else {
      const pokemonsForName =  getQueryName(name);
      const pokemonsAll = await getPokemonsAll();

    }
  } catch (error) {
    res.status(400).json({ error: `name: ${name} not found` });
  }
};

const getDetailHandler = async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "db" : "api";
  try {
    const response = await getPokemonById(id, source);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  getPokemonsHandler,
  getDetailHandler,
  postCreateHandler,
};
