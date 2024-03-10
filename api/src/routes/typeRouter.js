const { Router } = require("express");
const {getTypesHandler} = require("../handlers/typesHandlres.js")

const typesRouters = Router();

typesRouters.get("/", getTypesHandler)

module.exports = typesRouters;
