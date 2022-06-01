import Button from './Button';
import GithubButton from './GithubButton';

function Home() {
  return (
    <div className="Home">
      <div className="HowToPlay">
        <h2>HOW TO PLAY</h2>
        <p>Don&apos;t click on the same card more than once!</p>
      </div>
      <div className="Difficulty">
        <Button label="EASY" />
        <Button label="MEDIUM" />
        <Button label="HARD" />
      </div>
      <GithubButton username="nekusu" />
    </div>
  );
}

export default Home;
