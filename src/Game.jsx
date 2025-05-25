import {useState, useEffect} from 'react';
import PlayerSearch from './Components/PlayerSearch';
import PlayerCard from './Components/PlayerCard';
import playerData from './data/playerData';

function Game() {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handlePlayerSelect = (playerObject) => {
        if (!playerObject) {
            setSelectedPlayer(null);
            console.log('Player cleared');
            return;
        }

        const foundPlayer = playerData.find(p => p.name === playerObject.name);
        setSelectedPlayer(foundPlayer || null);
        console.log(playerObject.name);
    };

  return (
    <>
    <div className='game-container'>
        <PlayerSearch 
            players={playerData}
            onSelectPlayer={handlePlayerSelect}
        />
        {selectedPlayer && (
            <div className="player-card">
                <PlayerCard player={selectedPlayer} />
            </div>
        )}
    </div>
    </>
  )
};

export default Game;