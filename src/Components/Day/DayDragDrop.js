import { Grid } from "@mui/material";
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { moveTask, reorderTasks } from "../../Reducers/DayReducer";
import DayDraggable from "./DayDraggable";

const DayDragDrop = () => {
    const dispatch = useDispatch();
    const incompleteTasks = useSelector(state => state.dayReducer.incompleteTasks)
    const activeTasks = useSelector(state => state.dayReducer.activeTasks)
    const finishedTasks = useSelector(state => state.dayReducer.finishedTasks)

    const onDragEnd = (result) => {
        const { source, destination } = result;

        if (!destination) {
            return
        }

        if (source.droppableId == destination.droppableId && source.index != destination.index) {
            dispatch(reorderTasks({source, destination}))
        } else {
            dispatch(moveTask({source, destination}))
        }
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Grid container columnGap={8} rowGap={2} marginTop={'1em'} justifyContent={'center'}>
                <Grid item xs={3.33} marginLeft={'1em'} fontSize={35} color={'#f5f5f5'}>
                    Not Started
                </Grid>
                <Grid item xs={3.33} fontSize={35} color={'#f5f5f5'}>
                    In Progress
                </Grid>
                <Grid item xs={3.33} fontSize={35} color={'#f5f5f5'}>
                    Completed
                </Grid>
                <Grid item xs={3.33} border={[1, "dashed"]} borderRadius={'2em'} minHeight={500}>
                    <Droppable droppableId="incomplete">
                        {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                listStyleType: 'none',
                                padding: '8px',
                                margin: '8px',
                                minHeight:'200px'
                            }}
                        >
                            {incompleteTasks.map((item, index) => (
                                    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <DayDraggable
                                                    title={item.titleFieldValue}
                                                    description={item.descriptionFieldValue}
                                                    priorityLevel={item.priorityLevel}
                                                    index={index}
                                                    id={item.id}
                                                    list={'incompleteTasks'}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </ul>
                        )}
                    </Droppable>
                </Grid>
                <Grid item xs={3.33} border={[1, "dashed"]} borderRadius={'2em'}>
                    <Droppable droppableId="active">
                        {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                listStyleType: 'none',
                                padding: '8px',
                                margin: '8px',
                                minHeight:'200px'
                            }}
                        >
                            {activeTasks.map((item, index) => (
                                    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <DayDraggable
                                                    title={item.titleFieldValue}
                                                    description={item.descriptionFieldValue}
                                                    priorityLevel={item.priorityLevel}
                                                    index={index}
                                                    id={item.id}
                                                    list={'activeTasks'}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </ul>
                        )}
                    </Droppable>
                </Grid>
                <Grid item xs={3.33} border={[1, "dashed"]} borderRadius={'2em'}>
                    <Droppable droppableId="finished">
                        {(provided) => (
                        <ul
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            style={{
                                listStyleType: 'none',
                                padding: '8px',
                                margin: '8px',
                                minHeight:'200px'
                            }}
                        >
                            {finishedTasks.map((item, index) => (
                                    <Draggable key={item.id} draggableId={String(item.id)} index={index}>
                                        {(provided) => (
                                            <div
                                                ref={provided.innerRef}
                                                {...provided.draggableProps}
                                                {...provided.dragHandleProps}
                                            >
                                                <DayDraggable
                                                    title={item.titleFieldValue}
                                                    description={item.descriptionFieldValue}
                                                    priorityLevel={item.priorityLevel}
                                                    index={index}
                                                    id={item.id}
                                                    list={'finishedTasks'}
                                                />
                                            </div>
                                        )}
                                    </Draggable>
                                ))}
                            {provided.placeholder}
                        </ul>
                        )}
                    </Droppable>
                </Grid>
            </Grid>
        </DragDropContext>
    )
}

export default DayDragDrop;
