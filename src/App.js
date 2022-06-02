import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Game from './components/Game';
import GameOver from './components/GameOver';
import Waves from './components/Waves';
import './scss/App.scss';

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const play = (difficulty) => {
    setDifficulty(difficulty);
    setIsPlaying(true);
    setIsGameOver(false);
    setScore(0);
  };

  return (
    <div className={`App ${isPlaying ? 'playing' : ''} ${isGameOver ? 'gameOver' : ''}`}>
      <Header setIsPlaying={setIsPlaying} setIsGameOver={setIsGameOver} />
      {isPlaying
        ? <>
          <div className="Score">{score} / {difficulty}</div>
          {isGameOver
            ? <GameOver difficulty={difficulty} score={score} play={play} />
            : <Game
              difficulty={difficulty}
              score={score}
              setScore={setScore}
              setIsGameOver={setIsGameOver}
            />
          }
        </>
        : <Home play={play} />}
      <Waves />
    </div>
  );
}

export default App;
