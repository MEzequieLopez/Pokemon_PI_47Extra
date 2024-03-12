const { Type } = require("../db.js");
const { typesAll } = require("../utils/index,.js");
const { typesNameBd } = require("../controllers/pokemonsControllers.js");
const getTypesHandler = async (req, res) => {
  try {
    const typesCount = await Type.count();
    if (typesCount === 0) {
      typesNameBd();
    }
    const typesPokemonAll = await typesAll();
    res.status(200).json(typesPokemonAll);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

module.exports = {
  getTypesHandler,
};
