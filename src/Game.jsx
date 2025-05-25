import {useState} from 'react';
import PlayerSearch from './Components/PlayerSearch';
import PlayerCard from './Components/PlayerCard';
import playerData from './data/playerData';

function Game({ players }) {
    const [selectedPlayer, setSelectedPlayer] = useState(null);

    const handlePlayerSelect = (playerName) => {
        const foundPlayer = playerData.find(p => p.name === playerName.name);
        setSelectedPlayer(foundPlayer || null);
        console.log(playerName.name);
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