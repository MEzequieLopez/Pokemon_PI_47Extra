const { Router } = require("express");
const pokemonsRouter = require("./pokemonsRouter");
const typesRouters = require("./typeRouter");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const routers = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
routers.use("/pokemons", pokemonsRouter);
routers.use("/types", typesRouters);

module.exports = routers;
