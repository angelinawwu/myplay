import { useEffect, useState } from 'react';
import './GuessRGB.css';

const GuessRGB: React.FC = () => {
  const [color, setColor] = useState<string>('');

  const getRandomColor = (): string => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const reloadColor = () => {
    setColor(getRandomColor());
  };

  useEffect(() => {
    reloadColor();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Guess the RGB</h1>
      <p className="mb-4">Guess the RGB color!</p>
      <div className="color w-48 h-48 mb-4" style={{ backgroundColor: color }}></div>
      <button className="reloadButton mb-4 stroke" onClick={reloadColor}>
        Pick another color!
      </button>
      <div className="flex flex-col gap-2">
        <div>
          <label htmlFor="red">R: </label>
          <input type="number" id="red" min="0" max="255" className="border p-1" />
        </div>
        <div>
          <label htmlFor="green">G: </label>
          <input type="number" id="green" min="0" max="255" className="border p-1" />
        </div>
        <div>
          <label htmlFor="blue">B: </label>
          <input type="number" id="blue" min="0" max="255" className="border p-1" />
        </div>
      </div>
    </div>
  );
};

export default GuessRGB; 