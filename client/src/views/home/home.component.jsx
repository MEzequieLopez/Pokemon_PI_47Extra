// import './Home.css';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemonByName, getPokemons } from "../../redux/actions";
import Cards from "../../components/cards/cards.component";
import NavBar from "../../components/navBar/navBar.component";


function Home() {
  const dispatch = useDispatch();
  const usersCopy = useSelector((state) => state.allPokemons);
  const [searchString, setSearchString] = useState("");

  function handlerChange(event) {
    event.preventDefault();
    setSearchString(event.target.value)
  }

  function handlerSubmit(event) {
    event.preventDefault();
    dispatch(getPokemonByName(searchString))

  }


  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
  return (
    <div>
      <NavBar handlerChange={handlerChange} handlerSubmit={handlerSubmit}/>
      <Cards allPokemons={usersCopy}  />
    </div>
  );
}

export default Home;
