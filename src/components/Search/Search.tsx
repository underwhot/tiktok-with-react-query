import { useLocation, useMatch, useNavigate } from 'react-router-dom';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

export const Search = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isMatch = useMatch('search');
  const [value, setValue] = useState('');

  useEffect(() => {
    if (isMatch) return;
    setValue('');
  }, [location, isMatch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const val = value.trim();
    if (!val) return;
    navigate(`/search?q=${val}`);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="search-input">
        <SearchIcon />
        <input
          type="search"
          name="search"
          placeholder="Search..."
          autoComplete="off"
          value={value}
          onChange={handleChange}
        />
      </div>
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};
