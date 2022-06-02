import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Game from './components/Game';
import Waves from './components/Waves';
import './scss/App.scss';

function App() {
  const [difficulty, setDifficulty] = useState(null);
  const [isPlaying, setPlayingState] = useState(false);
  const [score, setScore] = useState(0);
  const play = (difficulty) => {
    setDifficulty(difficulty);
    setPlayingState(true);
    setScore(0);
  };

  return (
    <div className={`App ${isPlaying ? 'playing' : ''}`}>
      <Header setPlayingState={setPlayingState} />
      {isPlaying
        ? <>
          <div className="Score">{score} / {10 * (difficulty + 1)}</div>
          <Game difficulty={difficulty} score={score} setScore={setScore} />
        </>
        : <Home play={play} />}
      <Waves />
    </div>
  );
}

export default App;
