import {Container} from "@mui/material";
import Appbar from "~/Components/AppBar/AppBar.jsx";
import BoardBar from "./BoardBar/BoarBar.jsx";
import BoardContent from "./BoardContent/BoardContene.jsx";

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
      <Appbar/>
      <BoardBar/>
      <BoardContent/>
    </Container>
  )
}

export default Board;