import Logo from '../img/RickAndMorty.svg';

function Header({ setIsPlaying, setIsGameOver }) {
  return (
    <header>
      <img
        src={Logo}
        alt="Rick and Morty logo"
        onClick={() => {
          setIsPlaying(false);
          setIsGameOver(false);
        }} />
      <h1>MEMORY CARD GAME</h1>
    </header>
  );
}

export default Header;
