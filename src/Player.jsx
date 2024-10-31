import React from 'react';

const Player = ({ musica }) => {
    return (
        <div className="player">
            <audio controls>
                <source src={musica} type="audio/mpeg" />
                Seu navegador não suporta o elemento audio.
            </audio>
        </div>
    );
};

export default Player;