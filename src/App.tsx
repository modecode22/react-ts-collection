import React, { useState, useEffect } from 'react';
import Orb from './components/Orb';

const App: React.FC = () => {
  const [currentColor, setCurrentColor] = useState<'blue' | 'red' | 'yellow'>('blue');

  useEffect(() => {
    const colors = ['blue', 'red', 'yellow'];
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setCurrentColor(colors[index] as 'blue' | 'red' | 'yellow');
    }, 7000); // This gives each color a 7-second interval before switching

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex bg-stone-900 justify-center items-center h-screen">
      <div className='' style={{ position: 'relative', width: '120px', height: '120px' }}>
        <Orb color={currentColor} />
      </div>
    </div>
  );
}

export default App;