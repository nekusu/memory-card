import Button from './Button';
import Rick from '../img/rick.png';
import Morty from '../img/morty.png';

const rickImage = new Image();
const mortyImage = new Image();
rickImage.src = Rick;
mortyImage.src = Morty;

function GameOver({ difficulty, score, play }) {
  const didWin = score === difficulty;

  return (
    <div className="GameOver">
      <img
        src={didWin ? rickImage.src : mortyImage.src}
        alt={didWin ? 'Rick' : 'Morty'}
      />
      <Button
        className="PlayAgain"
        label="PLAY AGAIN"
        handleClick={() => play(difficulty)}
      />
    </div>
  );
}

export default GameOver;
