import ModeSelect from "../ModeSelect/ModeSelect.jsx";
import {Badge, Box, Button, InputAdornment, TextField, Tooltip, Typography} from "@mui/material";
import AppsIcon from '@mui/icons-material/Apps';
import {ReactComponent as TrelloIcon} from '~/assets/trello.svg';
import SvgIcon from '@mui/material/SvgIcon'
import Workspaces from '~/Components/AppBar/Menus/Workspaces.jsx'
import Recent from "~/Components/AppBar/Menus/Recent.jsx";
import Starred from "~/Components/AppBar/Menus/Starred.jsx";
import Templates from "~/Components/AppBar/Menus/Templates.jsx";
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Profiles from "~/Components/AppBar/Menus/Profiles.jsx";
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {useState} from "react";

const Appbar = () => {
  const [searchValue, setSearchValue] = useState('')
  return (
    <Box px={2} sx={{
      width: "100%",
      height: (theme) => theme.trello.appBarHeight,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 2,
      overflowX: "auto",
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#2c3e50' : '#1565c0')
    }}>
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
        <AppsIcon sx={{color: 'white'}}/>
        <Box sx={{display: 'flex', alignItems: 'center', gap: 0.5}}>
          <SvgIcon component={TrelloIcon} inheritViewBox fontSize="small" sx={{color: 'white'}}/>
          <Typography variant='span'
                      sx={{fontSize: "1.2rem", fontWeight: "bold", color: 'white'}}>Trello</Typography>
        </Box>

        <Box sx={{display: {xs: 'none', md: ' flex'}, gap: 1}}>
          <Workspaces/>
          <Recent/>
          <Starred/>
          <Templates/>
          <Button sx={{
            color: 'white',
            border: 'none',
            '&:hover': {
              border: "none"
            }
          }}
                  variant="outlined"
                  endIcon={<AddToPhotosIcon/>}>Create</Button>
        </Box>

      </Box>
      <Box sx={{display: 'flex', alignItems: 'center', gap: 2}}>
        <TextField
          id="outlined-search" label="Search" type="text" size='small'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          sx={{
            minWidth: '120px',
            maxWidth: '180px',
            '& label': {color: 'white'},
            '& input': {color: 'white'},
            '& label.Mui-focused': {color: 'white'},
            '& .MuiOutlinedInput-root': {
              '& fieldset': {borderColor: 'white'},
              '&:hover fieldset': {borderColor: 'white'},
              '&.Mui-focused fieldset': {borderColor: 'white'},
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{color: 'white'}}/>
              </InputAdornment>
            ),
            endAdornment: (
              <CloseIcon
                sx={{color: searchValue ? 'white' : 'transparent', fontSize: 'small', cursor: 'pointer'}}
                onClick={() => setSearchValue('')}
              />
            )
          }}
        />
        <ModeSelect/>
        <Tooltip title="Notifications" disableInteractive arrow>
          <Badge color="warning" variant='dot' sx={{cursor: 'pointer'}}>
            <NotificationsNoneIcon sx={{color: 'white'}}/>
          </Badge>
        </Tooltip>
        <Tooltip title="Help" disableInteractive arrow>
          <HelpOutlineIcon sx={{cursor: 'pointer', color: 'white'}}/>
        </Tooltip>
        <Profiles/>
      </Box>
    </Box>
  );
};

export default Appbar;