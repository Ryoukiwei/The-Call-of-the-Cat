import { useEffect } from "react";
import "./Timer.css";

type TimerProps = {
    timeLeft: number;
    setTimeLeft: (timeLeft: number) => void;
    setGameOver: (gameOver: boolean) => void;
    gameOver: boolean;
};

const Timer: React.FC<TimerProps> = ({ timeLeft, setTimeLeft, setGameOver, gameOver }) => {
    useEffect(() => {
        if (timeLeft > 0 && !gameOver) {
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(timer);
        } else if (timeLeft <= 0) {
            setGameOver(true);
        }
    }, [timeLeft, gameOver, setTimeLeft, setGameOver]);

    return (
        <div className="timer">
            Time left: {Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}
        </div>
    );
};

export default Timer;
