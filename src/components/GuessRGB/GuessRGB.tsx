import { useEffect, useState } from 'react';
import './GuessRGB.css';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft } from "lucide-react"

const GuessRGB: React.FC = () => {
  const [color, setColor] = useState<string>('');
  const navigate = useNavigate();

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
      <button className="absolute top-0 left-0 back-button" onClick={() => navigate('/')}>
        <ChevronLeft />
      </button>
      <h1 className="text-2xl font-bold">Guess the RGB</h1>
      <p className="mb-4">Guess the RGB color!</p>
      <div className="w-48 h-48 color" style={{ backgroundColor: color }}></div>
      <button className="reload-button" onClick={reloadColor}>
        Pick another color!
      </button>
      <div className="flex flex-col gap-2">
        <div>
          <label htmlFor="red">R: </label>
          <input type="number" id="red" min="0" max="255" className="p-1 border" />
        </div>
        <div>
          <label htmlFor="green">G: </label>
          <input type="number" id="green" min="0" max="255" className="p-1 border" />
        </div>
        <div>
          <label htmlFor="blue">B: </label>
          <input type="number" id="blue" min="0" max="255" className="p-1 border" />
        </div>
      </div>
    </div>
  );
};

export default GuessRGB; 