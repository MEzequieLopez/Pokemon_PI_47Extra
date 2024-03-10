const { Router } = require("express");
const { getPokemonsHandler,getDetailHandler,postCreateHandler,} = require("../handlers/pokemonsHandlers");
const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemonsHandler);

pokemonsRouter.get("/:id", getDetailHandler);

pokemonsRouter.post("/", postCreateHandler);

module.exports = pokemonsRouter;
