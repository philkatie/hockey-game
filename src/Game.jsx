import React from 'react';
import PlayerSearch from './Components/PlayerSearch';
import PlayerCard from './Components/PlayerCard';

function Game() {
  return (
    <>
        <div>Game Board</div>
        <PlayerCard />
        <PlayerSearch />
    </>
  )
};

export default Game;