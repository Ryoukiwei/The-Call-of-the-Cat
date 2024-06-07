import { useState, useEffect } from "react";
import Animal from "./Animal";
import ScoreBoard from "./ScoreBoard";
import Timer from "./Timer/Timer";
import animalsData from "../assets/animeData.json";

type AnimalProps = {
    position: { x: number; y: number };
    imageUrl: string;
    visible: boolean;
};

type GameScreenProps = {
    onGameOver: (score: number) => void;
};

function GameScreen({ onGameOver }: GameScreenProps) {
    const [animals, setAnimals] = useState<AnimalProps[]>([]);
    const [lastPlayTime, setLastPlayTime] = useState(0);
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(3); // 5 minutes
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const initialAnimals = animalsData.map(animal => ({
            imageUrl: animal.imageUrl,
            position: generatePosition(),
            visible: false,
        }));
        setAnimals(initialAnimals);
    }, []);

    useEffect(() => {
        if (gameOver) {
            onGameOver(score);
        }
    }, [gameOver, onGameOver, score]);

    function generatePosition(): { x: number; y: number } {
        const maxX = window.innerWidth - 200;
        const maxY = window.innerHeight - 200;

        const randomX = Math.floor(Math.random() * maxX);
        const randomY = Math.floor(Math.random() * maxY);
        return { x: randomX, y: randomY };
    }

    const handleMouseMove = (e: React.MouseEvent) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const currentTime = Date.now();

        animals.forEach(({ position, imageUrl, visible }) => {
            const distance = Math.sqrt((position.x - mouseX) ** 2 + (position.y - mouseY) ** 2);
            const animalData = animalsData.find(data => data.imageUrl === imageUrl);

            if (!visible && distance < 200 && currentTime - lastPlayTime > 1000 && animalData) {
                const audio = new Audio(animalData.soundUrl);
                audio.volume = 1 - distance / 200;
                audio.play();
                setLastPlayTime(currentTime);
            }
        });
    };

    const handleAnimalClick = (index: number) => {
        const updatedAnimals = [...animals];
        const clickedAnimal = updatedAnimals[index];

        if (!clickedAnimal.visible) {
            updatedAnimals[index] = { ...clickedAnimal, visible: true };
            setAnimals(updatedAnimals);

            if (clickedAnimal.imageUrl.includes("cat")) {
                setScore(score + 1);

                const allCatsVisible = updatedAnimals.every(animal => animal.imageUrl.includes("cat") ? animal.visible : true);
                if (allCatsVisible) {
                    setTimeout(() => {
                        const resetAnimals = updatedAnimals.map(animal => ({
                            ...animal,
                            position: generatePosition(),
                            visible: false,
                        }));
                        setAnimals(resetAnimals);
                    }, 2000);
                }

            } else {
                setScore(score - 1);
            }
        }
    };

    return (
        <div className="game-screen" onMouseMove={handleMouseMove}>
            <ScoreBoard score={score} />
            <Timer timeLeft={timeLeft} setTimeLeft={setTimeLeft} setGameOver={setGameOver} gameOver={gameOver} />
            {animals.map((animal, index) => (
                <Animal
                    key={index}
                    imageUrl={animal.imageUrl}
                    position={animal.position}
                    visible={animal.visible}
                    onAnimalClick={() => handleAnimalClick(index)}
                />
            ))}
        </div>
    );
}

export default GameScreen;
