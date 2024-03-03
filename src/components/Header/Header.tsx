import { Link } from 'react-router-dom';

import { Search } from '../Search/Search';

export const Header = () => {
  return (
    <header className="header">
      <div className="container header__container">
        <Link to="/" className="logo">
          <h1>TIK TOK</h1>
        </Link>
        <Search />
      </div>
    </header>
  );
};
