import {useColorScheme} from "@mui/material/styles";
import {Box, FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";

function ModeSelect() {
  const {mode, setMode} = useColorScheme();

  const handleChange = (event) => {
    const setSelectMode = event.target.value
    setMode(setSelectMode)
    // setMode(event.target.value);
  };
  return (
    <FormControl size="small" sx={{minWidth: '120'}}>
      <InputLabel
        id="lable-select-dank-light-mode"
        sx={{
          color: 'white',
          '&.Mui-focused': {color: 'white'},
        }}
      >
        Mode</InputLabel>
      <Select
        labelId="lable-select-dank-light-mode"
        id="select-dank-light-mode"
        value={mode}
        label="Mode"
        onChange={handleChange}
        sx={{
          color: 'white',
          '.MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
          '&:hover .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {borderColor: 'white'},
          '.MuiSvgIcon-root': {color: 'white'}
        }}
      >
        <MenuItem value='light'>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <LightModeIcon fontSize='small'/>
            Light
          </Box>
        </MenuItem>
        <MenuItem value='dark'>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <DarkModeIcon fontSize='small'/>
            Dark
          </Box>
        </MenuItem>
        <MenuItem value='system'>
          <Box sx={{display: 'flex', alignItems: 'center', gap: 1}}>
            <SettingsBrightnessIcon fontSize='small'/>
            System
          </Box>
        </MenuItem>
      </Select>
    </FormControl>);
}

export default ModeSelect;