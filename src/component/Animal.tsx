type AnimalProps = {
    imageUrl: string;
    position: { x: number; y: number };
    visible: boolean;
    onAnimalClick: () => void;
};

function Animal({ imageUrl, position, visible, onAnimalClick }: AnimalProps) {

    const animalStyle: React.CSSProperties = {
        position: "absolute",
        left: `${position.x}px`,
        top: `${position.y}px`,
        opacity: visible ? 1 : 0,
        width: "200px",
        height: "200px",
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
    };

    return (
        <div
            className="animal"
            style={animalStyle}
            onClick={onAnimalClick}
        >
        </div>
    );
}

export default Animal;
