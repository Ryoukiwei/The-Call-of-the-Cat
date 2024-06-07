import { useState } from 'react';
import StartScreen from './component/StartScreen';
import GameScreen from "./component/GameScreen";
import GameOver from './component/GameOver/GameOver';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0);

  const handleStartGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setFinalScore(0);
  };

  const handleGameOver = (score: number) => {
    setGameOver(true);
    setFinalScore(score);
  };

  return (
    <div className="app">
      {!gameStarted && !gameOver && <StartScreen onStartGame={handleStartGame} />}
      {gameStarted && !gameOver && <GameScreen onGameOver={handleGameOver} />}
      {gameOver && <GameOver score={finalScore} />}
    </div>
  );
}

export default App;
