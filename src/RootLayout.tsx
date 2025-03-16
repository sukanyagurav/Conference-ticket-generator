import Header from './Header';
import { Outlet } from 'react-router-dom';

const template = () => {
  return (
    <>
      <Header />
      <main className="max-w-[1000px] h-full mx-auto text-neutral flex flex-col justify-center items-center relative z-10">
        {<Outlet />}
      </main>
      <footer className="text-orange-500 p-8 text-center text-lg">
        Challenge by{' '}
        <a
          href="https://www.frontendmentor.io/profile/sukanyagurav"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a href="https://www.frontendmentor.io/profile/sukanyagurav">SG</a>.
      </footer>
    </>
  );
};

export default template;
