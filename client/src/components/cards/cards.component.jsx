// import './cards.css';
import Card from "../../components/card/card.component";

function Cards({ allPokemons }) {
  const pokemonsList = allPokemons;

  return (
    <div>
      {pokemonsList?.map((pokemon) => (
        <Card pokemons={pokemon} />
      ))}
    </div>
  );
}

export default Cards;
