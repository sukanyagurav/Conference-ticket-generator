import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="max-w-[1000px] mx-auto p-8 relative z-10 ">
      <Link to="/">
        <img
          src="/images/logo-full.svg"
          alt="Coding Conf logo"
          className="mx-auto"
        />
      </Link>
    </header>
  );
};

export default Header;
