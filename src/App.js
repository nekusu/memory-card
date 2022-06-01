import { useState } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Waves from './components/Waves';
import './scss/App.scss';

function App() {
  const [, setDifficulty] = useState(null);
  const [isPlaying, setPlayingState] = useState(false);
  const play = (difficulty) => {
    setDifficulty(difficulty);
    setPlayingState(true);
  };

  return (
    <div className={`App ${isPlaying ? 'playing' : ''}`}>
      <Header setPlayingState={setPlayingState} />
      <Home play={play} />
      <Waves />
    </div>
  );
}

export default App;
