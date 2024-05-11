import { useState } from 'react';
import StartScreen from './component/StartScreen';
import GameScreen from "./component/GameScreen";

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="app">
      {!gameStarted && <StartScreen onStartGame={handleStartGame} />}
      {gameStarted && <GameScreen />}
    </div>
  );
}

export default App;
