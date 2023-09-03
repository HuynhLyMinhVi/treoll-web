import React from "react";
import {
  Avatar,
  Box,
  Button,
  Divider, IconButton,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList, Tooltip,
  Typography
} from "@mui/material";
import {Check, Cloud, ContentCopy, ContentCut, ContentPaste, Logout, PersonAdd, Settings} from "@mui/icons-material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Profiles = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box>
      <Tooltip title="Account settings" arrow disableInteractive>
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{p: 0}}
          aria-controls={open ? 'basic-menu-profiles' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar alt="Avata" sx={{width: 30, height: 30}}
                  src='https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/355891971_2656375794512472_6287077110854388772_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=9Uw6HzeDT0oAX_5Wiyn&_nc_ht=scontent.fsgn5-9.fna&oh=00_AfDsf036pnCVn5aPPReuXdQti_lkaMOveAq7MnHKCPiv9A&oe=64F84819'/>
        </IconButton>
      </Tooltip>
      <Menu
        id="basic-menu-profiles"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button-profiles',
        }}
        transformOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'bottom'}}
      >

        <MenuItem onClick={handleClose}>
          <Avatar sx={{width: 28, height: 28, mr: 2}}/> Profile
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <Avatar sx={{width: 28, height: 28, mr: 2}}/> My account
        </MenuItem>
        <Divider/>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <PersonAdd fontSize="small"/>
          </ListItemIcon>
          Add another account
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Settings fontSize="small"/>
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <Logout fontSize="small"/>
          </ListItemIcon>
          Logout
        </MenuItem>

      </Menu>
    </Box>
  );
};

export default Profiles;