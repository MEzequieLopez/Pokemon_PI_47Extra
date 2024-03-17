// import './nacBar.css';

function SearchBar({onChange, onClick}) {
  return (
    <div >
      <form onSubmit={onClick} >
        <input type="search" onChange={onChange} />
        <button type="submit"  >Buscar...</button>
      </form>
    </div>
  );
}

export default SearchBar;