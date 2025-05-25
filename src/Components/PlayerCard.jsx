const PlayerCard = ({ player }) => {
  if (!player) return <div>Select a player to view their information.</div>;

  return (
    <div>
      <h2>{player.name}</h2>
      <p>Position: {player.position}</p>
      <p>Team: {player.team_most_seasons}</p>
      <p>Seasons Played: {player.seasons_played}</p>
      <p>Status: {player.status}</p>
      <p>Jersey #: {player.jersey_number}</p>
      <p>Nationality: {player.nationality}</p>
    </div>
  );
};

export default PlayerCard;
