import Button from './Button';
import GithubButton from './GithubButton';

function Home({ play }) {
  return (
    <div className="Home">
      <div className="HowToPlay">
        <h2>HOW TO PLAY</h2>
        <p>Don&apos;t click on the same card more than once!</p>
      </div>
      <div className="Difficulty">
        <Button label="EASY" handleClick={() => play(10)} />
        <Button label="MEDIUM" handleClick={() => play(20)} />
        <Button label="HARD" handleClick={() => play(30)} />
      </div>
      <GithubButton username="nekusu" />
    </div>
  );
}

export default Home;
