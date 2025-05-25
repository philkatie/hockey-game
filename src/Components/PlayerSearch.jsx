import { Autocomplete, TextField } from '@mui/material';

function PlayerSearch({ players, selectedPlayer, onSelectPlayer }) {
  return (
    <Autocomplete
      disablePortal
      options={players}
      getOptionLabel={(option) => option.name}
      value={selectedPlayer}
      onChange={(e, newValue) => onSelectPlayer(newValue)}
      sx={{
        width: 300,
        '& .MuiInputBase-root': {
          backgroundColor: '#1a1a1a',
          color: '#2ecc71',
          borderRadius: 1,
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#2ecc71',
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: '#27ae60',
        },
        '& .Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: '#27ae60',
        },
        '& .MuiInputLabel-root': {
          color: '#2ecc71',
        },
        '& .MuiInputLabel-root.Mui-focused': {
          color: '#27ae60',
        },
        '& .MuiAutocomplete-popupIndicator': {
          color: '#2ecc71',
        },
        '& .MuiAutocomplete-clearIndicator': {
          color: '#2ecc71',
        },
      }}
      renderInput={(params) => <TextField {...params} label="Player" />}
    />
  );
}

export default PlayerSearch;
