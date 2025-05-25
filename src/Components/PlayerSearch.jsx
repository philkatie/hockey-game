import { Autocomplete, TextField } from '@mui/material';

function PlayerSearch({ players, selectedPlayer, onSelectPlayer }) {
  return (
    <Autocomplete
      disablePortal
      options={players}
      getOptionLabel={(option) => option.name}
      value={selectedPlayer}
      onChange={(e, newValue) => onSelectPlayer(newValue)}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Player" />}
    />
  );
}

export default PlayerSearch;
