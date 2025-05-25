import InfoCard from './InfoCard';

const PlayerCard = ({ player, correctPlayer }) => {
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
        <InfoCard label="Status" value={player.status} correctValue={correctPlayer?.status} />
        <InfoCard label="Position" value={player.position} correctValue={correctPlayer?.position} />
        <InfoCard label="Jersey #" value={player.jersey_number} correctValue={correctPlayer?.jersey_number} />
        <InfoCard label="Seasons Played" value={player.seasons_played} correctValue={correctPlayer?.seasons_played} />
        <InfoCard label="Nationality" value={player.nationality} correctValue={correctPlayer?.nationality} />
        <InfoCard label="Debut" value={player.debut_season} correctValue={correctPlayer?.debut_season} />
        <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
          <InfoCard label="Team" value={player.team_most_seasons} correctValue={correctPlayer?.team_most_seasons} />
          <InfoCard label="Draft Number" value={player.draft_number} correctValue={correctPlayer?.draft_number} />
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
