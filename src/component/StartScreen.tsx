function StartScreen({ onStartGame }: { onStartGame: () => void }) {

    const handleStartClick = () => {
        onStartGame();
    };

    const startStyle: React.CSSProperties = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
    }

    return (
        <div className="start-screen" style={startStyle}>
            <h1>The Call of the Cat: A Nighttime Adventure</h1>
            <button onClick={handleStartClick}>Start Game</button>
        </div>
    )
}

export default StartScreen