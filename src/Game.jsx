import {useState, useEffect} from 'react';
import PlayerSearch from './Components/PlayerSearch';
import PlayerCard from './Components/PlayerCard';
import playerData from './data/playerData';

function Game() {
    const [correctPlayer, setCorrectPlayer] = useState(null);
    const [selectedPlayer, setSelectedPlayer] = useState(null);
    const [currentGuess, setCurrentGuess] = useState(null);
    const [guesses, setGuesses] = useState([]);

    useEffect(() => {
        const randomPlayer = playerData[Math.floor(Math.random() * playerData.length)];
        setCorrectPlayer(randomPlayer);
        console.log('Correct player:', randomPlayer); // ✅ For debugging
    }, []);

    const handlePlayerSelect = (playerObject) => {
        if (!playerObject) {
            setSelectedPlayer(null);
            console.log('Player cleared');
            console.log(correctPlayer);
            return;
        }

        const foundPlayer = playerData.find(p => p.name === playerObject.name);
        setSelectedPlayer(foundPlayer || null);
        console.log(playerObject.name);
    };

    const handleSubmit = () => {
        if (!selectedPlayer) return;

        if (currentGuess) {
            setGuesses(prev => [currentGuess, ...prev]);
        }

        setCurrentGuess(selectedPlayer);
        setSelectedPlayer(null);
    };

  return (
    <div className='game-container'>
        <PlayerSearch
            players={playerData}
            selectedPlayer={selectedPlayer}
            onSelectPlayer={handlePlayerSelect}
        />
        <button
            onClick={handleSubmit}
            disabled={!selectedPlayer}
            style={{ margin: '1rem 0', padding: '0.5rem 1rem', cursor: selectedPlayer ? 'pointer' : 'not-allowed' }}
        >
            Submit Guess
        </button>

        {currentGuess && (
            <div className="player-card" style={{ marginBottom: '1rem' }}>
                <h3>Your current selection:</h3>
                <PlayerCard player={currentGuess} correctPlayer={correctPlayer} />
                {currentGuess.id === correctPlayer?.id ? (
                <p style={{ color: 'limegreen' }}>🎉 Correct Guess!</p>
                ) : (
                <p style={{ color: 'red' }}>Try again!</p>
                )}
            </div>
        )}

        <h3>Previous guesses:</h3>
        <div className="guesses-container" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {guesses.map((guess, idx) => (
            <div key={guess.id || idx} className="guess-card slide-down">
                <PlayerCard player={guess} correctPlayer={correctPlayer} />
                {guess.id === correctPlayer?.id && (
                <p style={{ color: 'limegreen' }}>🎉 This was the correct player!</p>
                )}
            </div>
            ))}
        </div>
    </div>
  )
};

export default Game;