import { Box, Button, Divider, ListItemIcon, ListItemText, Menu, MenuItem, Tooltip, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCardIcon from "@mui/icons-material/AddCard";
import { Cloud, ContentCopy, ContentCut, ContentPaste } from "@mui/icons-material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import React from "react";
import ListCards from "~/Pages/Boards/BoardContent/ListColumn/Column/ListCrads/ListCards.jsx";


const Column = () => {
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
        minWidth: "300px",
        maxWidth: "300px",
        bgcolor: (theme) => ( theme.palette.mode === 'dark' ? '#333643' : '#ebecf0' ),
        ml: 2,
        borderRadius: "6px",
        height: "fit-content",
        maxHeight: (theme) => `calc(${theme.trello.boardContentHeight} - ${theme.spacing(5)})`
      }}>
        <Box sx={{
          height: (theme)=>theme.trello.columnHeaderHeight,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Typography variant='h6' sx={{
            fontSize: '1rem',
            fontWeight: 'bold',
            cursor: "pointer"
          }}>Column Type</Typography>
          <Box>
            <Tooltip title="More option" arrow disableInteractive>
              <ExpandMoreIcon
                  id="basic-column-dropdown"
                  aria-controls={open ? 'basic-menu-column-dropdown' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ color: 'text.primary', cursor: 'pointer' }}/>
            </Tooltip>
            <Menu
                id="basic-menu-column-dropdown"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  'aria-labelledby': 'basic-column-dropdown',
                }}
            >
              <MenuItem>
                <ListItemIcon>
                  <AddCardIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText>ADD new card</ListItemText>
              </MenuItem>
              <Divider/>
              <MenuItem>
                <ListItemIcon>
                  <ContentCut fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Cut</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentCopy fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Copy</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <ContentPaste fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Page</ListItemText>
              </MenuItem>
              <Divider/>
              <MenuItem>
                <ListItemIcon>
                  <DeleteForeverIcon fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Remove this column</ListItemText>
              </MenuItem>
              <MenuItem>
                <ListItemIcon>
                  <Cloud fontSize="small"/>
                </ListItemIcon>
                <ListItemText>Archive this column</ListItemText>
              </MenuItem>
            </Menu>
          </Box>
        </Box>
        <ListCards/>
        <Box sx={{
          height: (theme)=>theme.trello.columnFooterHeight,
          p: 2,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <Button startIcon={<AddCardIcon/>}>Add new card</Button>
          <Tooltip title='Drag to move' arrow disableInteractive>
            <DragHandleIcon sx={{
              cursor: 'pointer'
            }}/>
          </Tooltip>
        </Box>
      </Box>
  )
}
export default Column