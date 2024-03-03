import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  return (
    <form className="form">
      <div className="search-input">
        <SearchIcon />
        <input
          type="text"
          name="search"
          placeholder="Search..."
          autoComplete="off"
        />
      </div>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};
