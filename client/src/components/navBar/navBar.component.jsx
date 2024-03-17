// import './nacBar.css';
 
import SearchBar from "../searchBar/searchBar.compenent";

function NavBar({ handlerChange, handlerSubmit }) {
  return (
    <div>
      <nav>
      <h1>Pokemon App</h1>
      {<SearchBar onChange={handlerChange} onClick={handlerSubmit} />}
    </nav>
    </div>
  );
}

export default NavBar;
