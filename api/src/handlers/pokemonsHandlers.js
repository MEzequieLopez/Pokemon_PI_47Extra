const { getPokemonById, getPokemonsInfo, getPokemonsByName } = require("../controllers/pokemonsControllers.js");
const { postPokemonBd } = require("../controllers/postPokemonsControllers.js");

const postCreateHandler = async (req, res) => {
  const pokemonsInfoBd = req.body;

  try {
    const CreaterPokemonsBd = postPokemonBd(pokemonsInfoBd);
    res.status(200).json(CreaterPokemonsBd);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const getPokemonsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    if (name) {
      const pokemonsForName = await getPokemonsByName(name);
      if (pokemonsForName.length > 0) {
        res.status(200).json(pokemonsForName);
      } else {
        res.status(404).json({ error: `name: ${name} not found` });
      }
    } else {
      const pokemonsInfo = await getPokemonsInfo();
      res.status(200).json(pokemonsInfo);
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while processing your request." });
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
