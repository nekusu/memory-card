import Logo from '../img/RickAndMorty.svg';

function Header({ setPlayingState }) {
  return (
    <header>
      <img
        src={Logo}
        alt="Rick and Morty logo"
        onClick={() => setPlayingState(false)} />
      <h1>MEMORY CARD GAME</h1>
    </header>
  );
}

export default Header;
