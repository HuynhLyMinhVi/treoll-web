import {Container} from "@mui/material";
import Appbar from "~/Components/AppBar/index.jsx";
import BoardBar from "./BoardBar/index.jsx";
import BoardContent from "./BoardContent/index.jsx";

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