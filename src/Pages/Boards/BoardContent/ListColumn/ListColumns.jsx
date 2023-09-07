import { Box, Button } from "@mui/material";
import Column from "~/Pages/Boards/BoardContent/ListColumn/Column/Column.jsx";
import NoteAddIcon from '@mui/icons-material/NoteAdd';


const ListColumns = () => {
  return (
      <Box sx={{
        bgcolor: "inherit",
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: 'auto',
        overflowY: 'hidden',
        '&::-webkit-scrollbar-track': { m: 2 },
      }}>
        <Column/>
        <Column/>
        <Column/>
        
        <Box sx={{
          minWidth: "200px",
          maxWidth: "200px",
          mx: 2,
          borderRadius: "6px",
          height: "fit-content",
          backgroundColor:"#ffffff3d"
        }}>
          <Button
              startIcon={<NoteAddIcon/>}
              sx={{
                color: "white",
                width: "100%",
                justifyContent: "flex-start",
                pl: 2.5,
                py:"8px"
              }}
          >
            Add New Column
          </Button>
        </Box>
      </Box>
  )
}
export default ListColumns