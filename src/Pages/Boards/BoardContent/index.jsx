import {Box, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {Cloud, ContentCopy, ContentCut, ContentPaste} from "@mui/icons-material";
import React from "react";


const COLUMN_HEADER_HEIGHT = '50px'
const COLUMN_FOOTER_HEIGHT = '56px'
const BoardContent = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box sx={{
      bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#34495e' : '#1976d2'),
      width: "100%",
      display: "flex",
      height: (theme) => theme.trello.boardContentHeight,
    }}>
      <Box sx={{
        minWidth: "300px",
        maxWidth: "300px",
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#333643' : '#ebecf0'),
        ml: 2,
        borderRadius: "6px"
      }}>
        <Box sx={{
          height: COLUMN_HEADER_HEIGHT,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Typography>Column Type</Typography>

          <Box>

            <ExpandMoreIcon
              id="basic-button-workspaces"
              aria-controls={open ? 'basic-menu-workspaces' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{color: 'text.primary', cursor:'pointer'}}/>
            <Menu
              id="basic-menu-workspaces"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button-workspaces',
              }}
            >
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small" />
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘X
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small" />
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘C
                </Typography>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small" />
                </ListItemIcon>
                <ListItemText>Paste</ListItemText>
                <Typography variant="body2" color="text.secondary">
                  ⌘V
                </Typography>
              </MenuItem>
              <Divider />
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small" />
                </ListItemIcon>
                <ListItemText>Web Clipboard</ListItemText>
              </MenuItem>
            </Menu>
          </Box>

        </Box>
        <Box sx={{}}>Body</Box>
        <Box sx={{
          height: COLUMN_FOOTER_HEIGHT,
          p: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>Footer</Box>
      </Box>
    </Box>
  );
};

export default BoardContent;