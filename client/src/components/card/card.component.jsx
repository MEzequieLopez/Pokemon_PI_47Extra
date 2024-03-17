// import './card.css';

function Card({ pokemons }) {
  const { imageUrl, name, types } = pokemons;
  return (
    <div className="card">
      <h1>{name}</h1>
      <img src={imageUrl} alt={name} />
      <p>
        {types.map((type) => (
          <p>{type.name}</p>
        ))}
      </p>
    </div>
  );
}

export default Card;
