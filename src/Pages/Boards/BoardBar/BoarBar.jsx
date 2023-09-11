import { Box, Button, Tooltip } from "@mui/material";
import Chip from '@mui/material/Chip';
import DashboardIcon from '@mui/icons-material/Dashboard';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import BoltIcon from '@mui/icons-material/Bolt';
import FilterListIcon from '@mui/icons-material/FilterList';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import {capitalizeFirstLetter} from '~/Utils/formatters.js'

const MENU_STYLE = {
  color: 'white',
  backgroundColor: 'transparent',
  border: 'none',
  px: '5px',
  borderRadius: '4px',
  '& .MuiSvgIcon-root': { color: 'white' },
  '&:hover': { bgColor: 'primary.50' }
}
const BoardBar = ({board}) => {
  return (
      <Box px={2} sx={{
        width: "100%",
        height: (theme) => theme.trello.boarBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: 'auto',
        backgroundColor: (theme) => ( theme.palette.mode === 'dark' ? '#34495e' : '#1976d2' ),
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Chip sx={MENU_STYLE} icon={<DashboardIcon/>} label={board?.title} onClick={() => {
          }}/>
          <Chip sx={MENU_STYLE} icon={<VpnLockIcon/>} label={capitalizeFirstLetter(board?.type)} onClick={() => {
          }}/>
          <Chip sx={MENU_STYLE} icon={<AddToDriveIcon/>} label="Add to google drive" onClick={() => {
          }}/>
          <Chip sx={MENU_STYLE} icon={<BoltIcon/>} label="Automation" onClick={() => {
          }}/>
          <Chip sx={MENU_STYLE} icon={<FilterListIcon/>} label="Filters" onClick={() => {
          }}/>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Button
              variant="outlined" startIcon={<PersonAddIcon/>}
              sx={{
                color: 'white',
                borderColor: 'white',
                '&:hover ': { borderColor: 'white' }
              }}
          >Invite</Button>
          <AvatarGroup
              max={4}
              sx={{
                '& .MuiAvatar-root': {
                  width: 34,
                  height: 34,
                  fontSize: 16,
                  '&:first-of-type': { bgColor: '#a4b0be' }
                }
              }}>
            <Tooltip title='HuynhViDev' disableInteractive arrow>
              <Avatar alt="Remy Sharp"
                      src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-6/370623279_989150742361202_3339652226663986460_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=CgsT24_bLWkAX_gQI8P&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAk9eB-7ezZvVElcZXk8ujcPDTLEOhBGKvboxyu2MU_HQ&oe=64F9D73A"/>
            </Tooltip>
            
            <Avatar alt="Travis Howard"
                    src="https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/342039752_782065439755548_1404719523033758283_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=Gmdd6zxO6e8AX-aHn_j&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfBJEfMpqsHp-X6ffnxq4U2g95KjmahBHZjzaKa9EkFrYA&oe=64F8F039"/>
            <Avatar alt="Cindy Baker"
                    src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-1/358462663_3437633613141798_4186498177831286532_n.jpg?stp=dst-jpg_p200x200&_nc_cat=110&ccb=1-7&_nc_sid=fe8171&_nc_ohc=HZXj1OglbAgAX8_op_l&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfD4KeGJO1Hut9rTB-uPrk0VKRCUcCWRlnQNBYXhgpbxog&oe=64F852E8"/>
            <Avatar alt="Agnes Walker"
                    src="https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/315882934_5537017929722267_8490058618140813595_n.jpg?stp=dst-jpg_p200x200&_nc_cat=108&ccb=1-7&_nc_sid=fe8171&_nc_ohc=IEb6ePxjeIoAX8G1wVX&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfAXSwt2GqEy1C6uSioez5K0ZKCHvgqw1bnmfghrXSRHyA&oe=64F9EC4A"/>
            <Avatar alt="Trevor Henderson"
                    src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/367418307_1054791702321079_1102687780716592562_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a2f6c7&_nc_ohc=SB3aOkzmQsMAX-EOJm9&_nc_ht=scontent.fsgn5-11.fna&oh=00_AfB_CAuuvYvFSJPVcJa4i1CcuGSxtc3inGsa7I9mh0tObQ&oe=64F8A0E5"/>
          
          </AvatarGroup>
        </Box>
      </Box> );
};

export default BoardBar;