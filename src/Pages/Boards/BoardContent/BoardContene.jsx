import { Box } from "@mui/material";
import ListColumns from "~/Pages/Boards/BoardContent/ListColumn/ListColumns.jsx";
import { mapOrder } from '~/Utils/sorts.js'
import { DndContext, useSensor, useSensors, PointerSensor, MouseSensor, TouchSensor } from '@dnd-kit/core';
import { useEffect, useState } from "react";
import { arrayMove } from '@dnd-kit/sortable';

const BoardContent = ({ board }) => {
  // Fix trường hợp bị lỗi khi lick vào column mà không di chuyển.
  const mouseSensor = useSensor(MouseSensor, { activationConstraint: { distance: 10 } })
  const touchSensor = useSensor(TouchSensor, { activationConstraint: { delay: 250, tolerance: 500 } })
  
  const sensors = useSensors(mouseSensor,touchSensor)
  const [orderedColumState, setOrderedColumState] = useState([])
  
  useEffect(() => {
    const orderedColum = mapOrder(board?.columns, board?.columnOrderIds, '_id')
    setOrderedColumState(orderedColum)
  }, [board])
  const handleDragEnd = (event) => {
    const { active, over } = event
    if( !over ) return
    if( active.id !== over.id ){
      const oldIndex = orderedColumState.findIndex(c => c._id === active.id)
      const newIndex = orderedColumState.findIndex(c => c._id === over.id)
      
      const dndOrderedColumState = arrayMove(orderedColumState, oldIndex, newIndex)
      
      setOrderedColumState(dndOrderedColumState)
    }
  }
  return (
      <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
        <Box sx={{
          backgroundColor: (theme) => ( theme.palette.mode === 'dark' ? '#34495e' : '#1976d2' ),
          width: "100%",
          height: (theme) => theme.trello.boardContentHeight,
          p: " 10px 0"
        }}>
          <ListColumns columns={orderedColumState}/>
        </Box>
      </DndContext>
  
  );
};

export default BoardContent;