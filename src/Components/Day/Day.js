import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { Button, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { useDispatch } from "react-redux";
import { setDescriptionFieldValue, setPriorityLevel, setShowModal, setTitleFieldValue, updateURL } from "../../Reducers/DayReducer";
import { useSelector } from "react-redux";
import DayModal from "./DayModal";
import DayDragDrop from "./DayDragDrop";

const Day = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const urlPath = useSelector((state) => state.dayReducer.urlPath)
    const showModal = useSelector(state => state.dayReducer.showModal);
    const priorityLevel = useSelector(state => state.dayReducer.priorityLevel);
    const titleFieldValue = useSelector(state => state.dayReducer.titleFieldValue);
    const descriptionFieldValue = useSelector(state => state.dayReducer.descriptionFieldValue);
    const tasks = useSelector(state => state.dayReducer.tasks)
    const incomplete = useSelector((state) => state.dayReducer.incompleteTasks)

    useEffect(() => {
        navigate(urlPath)
    }, [urlPath]);
    

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
