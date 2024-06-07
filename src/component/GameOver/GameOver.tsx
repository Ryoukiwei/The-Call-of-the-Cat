import React from "react";
import {
    FacebookShareButton,
    TwitterShareButton,
    WhatsappShareButton,
    TelegramShareButton,
    LineShareButton,
    FacebookIcon,
    TwitterIcon,
    WhatsappIcon,
    TelegramIcon,
    LineIcon,
} from "react-share";
import "./GameOver.css";

type GameOverProps = {
    score: number;
};

const GameOver: React.FC<GameOverProps> = ({ score }) => {

    const shareUrl = "https://github.com/Ryoukiwei/The-Call-of-the-Cat.git";
    const title = `I scored ${score} points in this awesome game!`;

    return (
        <div className="game-over-container">
            <div className="game-over-message">
                Game Over
            </div>
            <div className="final-score">
                Your Score: {score}
            </div>
            <div className="share-buttons">
                <FacebookShareButton url={shareUrl}>
                    <FacebookIcon size={32} round />
                </FacebookShareButton>
                <TwitterShareButton url={shareUrl} title={title}>
                    <TwitterIcon size={32} round />
                </TwitterShareButton>
                <WhatsappShareButton url={shareUrl} title={title} separator=":: ">
                    <WhatsappIcon size={32} round />
                </WhatsappShareButton>
                <TelegramShareButton url={shareUrl} title={title}>
                    <TelegramIcon size={32} round />
                </TelegramShareButton>
                <LineShareButton url={shareUrl} title={title}>
                    <LineIcon size={32} round />
                </LineShareButton>
            </div>
        </div>
    );
};

export default GameOver;