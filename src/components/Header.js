import Logo from '../img/RickAndMorty.svg';

function Header() {
  return (
    <header>
      <img src={Logo} alt="Rick and Morty logo" />
      <h1>MEMORY CARD GAME</h1>
    </header>
  );
}

export default Header;
