import InfoCard from './InfoCard';

const PlayerCard = ({ player }) => {
  if (!player) return <div>Select a player to view their information.</div>;

  return (
    <div>
      <h2 style={{ color: 'green', textAlign: 'center', marginBottom: '1rem' }}>
        {player.name}
      </h2>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1rem',
          maxWidth: '600px',
          margin: '0 auto',
        }}
      >
        <InfoCard label="Status" value={player.status} />
        <InfoCard label="Position" value={player.position} />
        <InfoCard label="Jersey #" value={player.jersey_number} />
        <InfoCard label="Seasons Played" value={player.seasons_played} />
        <InfoCard label="Nationality" value={player.nationality} />
        <InfoCard label="Team" value={player.team_most_seasons} />
      </div>
    </div>
  );
};

export default PlayerCard;
