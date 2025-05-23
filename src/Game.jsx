import React from 'react';
import PlayerSearch from './PlayerSearch';
import PlayerCard from './Components/PlayerCard';

function Game() {
  return (
    <>
        <div>Game Board</div>
        <PlayerSearch />
        <PlayerCard />
    </>
  )
};

export default Game;