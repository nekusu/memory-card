import { useState, useEffect, useRef } from 'react';
import { TwinSpin } from 'react-cssfx-loading';
import { getCharacter } from '../rickmortyapi';
import Card from './Card';
import randomNumber from '../utils/randomNumber';
import cacheImages from '../utils/cacheImages';

const maxVisibleCharacters = 3;
const availableCharacters = 826;
const randomId = () => randomNumber({ max: availableCharacters });

function Game(props) {
  const {
    difficulty,
    score,
    setScore,
  } = props;
  const characters = useRef([]);
  const [visibleCharacters, setvisibleCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const characterCount = 10 * (difficulty + 1);
    const characterIds = new Set();
    while (characterIds.size < characterCount) {
      characterIds.add(randomId());
    }
    const loadCharacters = async (ids) => {
      const items = await getCharacter([...ids]);
      const images = items.map(({ image }) => image);
      await cacheImages(images);
      const newCharacters = items.map(({ id, image, name }) => ({
        id, image, name, isClicked: false,
      }));
      shuffleCharacters(newCharacters);
      characters.current = newCharacters;
      setIsLoading(false);
    };
    loadCharacters(characterIds);
  }, [difficulty]);

  const shuffleCharacters = (items = characters.current) => {
    const indexes = [];
    const shuffled = [];
    let clicked = 0;
    while (shuffled.length < maxVisibleCharacters) {
      const randomIndex = randomNumber({ max: items.length - 1 });
      const character = items[randomIndex];
      if (!indexes.includes(randomIndex) && (clicked < 2 || !character.isClicked)) {
        indexes.push(randomIndex);
        shuffled.push(character);
        clicked += +character.isClicked;
      }
    }
    setvisibleCharacters(shuffled);
  };
  const clickCharacter = (id) => {
    const character = characters.current.find(character => character.id === id);
    if (character.isClicked) {
      console.log('you lose');
      return;
    } else {
      character.isClicked = true;
      setScore(score + 1);
    }
    if (characters.current.every(character => character.isClicked)) {
      console.log('you win');
    } else {
      shuffleCharacters();
    }
  };

  return (
    <div className="Game">
      {isLoading
        ? <TwinSpin color="#cfee78" height="100px" width="100px" />
        : <>
          <div className="Cards">
            {visibleCharacters.map(({ id, image, name }) => (
              <Card
                key={id}
                image={image}
                name={name}
                handleClick={() => clickCharacter(id)}
              />
            ))}
          </div>
        </>
      }
    </div>
  );
}

export default Game;
