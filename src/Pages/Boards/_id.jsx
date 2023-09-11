import {Container} from "@mui/material";
import Appbar from "~/Components/AppBar/AppBar.jsx";
import BoardBar from "./BoardBar/BoarBar.jsx";
import BoardContent from "./BoardContent/BoardContene.jsx";
import { mockData } from '~/apis/mock-data.js'

function Board() {
  return (
    <Container disableGutters maxWidth={false} sx={{height: '100vh'}}>
      <Appbar/>
      <BoardBar board={mockData?.board}/>
      <BoardContent board={mockData?.board}/>
    </Container>
  )
}

export default Board;