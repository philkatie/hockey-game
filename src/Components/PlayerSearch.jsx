import { Autocomplete, TextField } from '@mui/material';
import playerData from './Data/playerData';

function PlayerSearch() {
  return (
    <Autocomplete
      disablePortal
      options={playerData}
      getOptionLabel={(option) => option.name} 
      sx={{width:300}}
      renderInput={(params) => <TextField {...params} label="Player" />}
    />
  )
};

export default PlayerSearch;
