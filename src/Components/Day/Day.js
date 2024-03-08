import React, { useEffect } from "react";
import { Button, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import { pageLoad, setDescriptionFieldValue, setPriorityLevel, setShowModal, setTitleFieldValue } from "../../Reducers/DayReducer";
import { useSelector } from "react-redux";
import DayModal from "./DayModal";
import DayDragDrop from "./DayDragDrop";

const Day = () => {
    useEffect(() => {
        dispatch(pageLoad({
            incompleteTasks: localStorage.getItem('incompleteTasks'),
            activeTasks: localStorage.getItem('activeTasks'),
            finishedTasks: localStorage.getItem('finishedTasks'),
            allTasks: localStorage.getItem('allTasks')
        }))
    }, []);

    const dispatch = useDispatch();
    const showModal = useSelector(state => state.dayReducer.showModal);
    const priorityLevel = useSelector(state => state.dayReducer.priorityLevel);
    const titleFieldValue = useSelector(state => state.dayReducer.titleFieldValue);
    const descriptionFieldValue = useSelector(state => state.dayReducer.descriptionFieldValue);
    const tasks = useSelector(state => state.dayReducer.tasks)
    const incomplete = useSelector((state) => state.dayReducer.incompleteTasks)

    const openModal = () => {
        dispatch(setShowModal(true));
        dispatch(setTitleFieldValue(''));
        dispatch(setDescriptionFieldValue(''));
        dispatch(setPriorityLevel(0));
    };

    const saveData = () => {
        const data = { key: 'value' };
        localStorage.setItem('myData', JSON.stringify(data));
      }

    return (
        <>
            <Button
                variant='contained'
                sx={{
                    borderRadius: 5,
                    position: 'absolute',
                    top: '5%',
                    right: '10%'
                }}
                onClick={() => {openModal()}}
            >
                <AddIcon />
            </Button>
            <DayModal 
                title={'Add new task'}
                showModal={showModal}
            />
            <DayDragDrop />
        </>
    );
}

export default Day;
