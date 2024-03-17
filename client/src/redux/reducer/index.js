import { GET_POKEMONS, GET_BY_NAME } from "../actions";


let initialState = { allPokemons:[],usersCopy:[] };

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        allPokemons: action.payload,
        usersCopy: action.payload
      };
      case GET_BY_NAME:
      return {
        ...state,
        allPokemons: action.payload,
      };
    default:
      return state;
  }
}

export default rootReducer;
