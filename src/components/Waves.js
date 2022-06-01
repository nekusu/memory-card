import uniqid from 'uniqid';
import Wave from 'react-wavify';

const waves = [
  {
    gradient: {
      start: '#75d625',
      end: '#2f550e',
    },
    options: {
      amplitude: 50,
      speed: 0.3,
    },
  },
  {
    gradient: {
      start: '#cfee78',
      end: '#5f6d37',
    },
    options: {
      amplitude: 35,
      speed: 0.5,
    },
  },
  {
    gradient: {
      start: '#2b9134',
      end: '#0a2b0d',
    },
    options: {
      amplitude: 20,
      speed: 0.7,
    },
  },
];
waves.forEach((wave) => wave.key = uniqid());

function Waves() {
  return (
    <div className="Waves">
      {waves.map(({ key, gradient, options }) => (
        <Wave
          key={key}
          fill={`url(#${key}-gradient)`}
          options={{
            ...options,
            height: 40,
          }}
        >
          <defs>
            <linearGradient
              id={`${key}-gradient`}
              gradientTransform="rotate(90)"
            >
              <stop offset="0" stopColor={gradient.start} />
              <stop offset="1" stopColor={gradient.end} />
            </linearGradient>
          </defs>
        </Wave>
      ))}
    </div>
  );
}

export default Waves;
