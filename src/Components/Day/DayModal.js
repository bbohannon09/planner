import React from "react";
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Modal, Select, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { setShowModal, setPriorityLevel, setTitleFieldValue, setDescriptionFieldValue, setNewTask } from "../../Reducers/DayReducer";
import { useSelector } from "react-redux";

const DayModal = (props) => {
    const dispatch = useDispatch();

    const titleFieldValue = useSelector(state => state.dayReducer.titleFieldValue);
    const descriptionFieldValue = useSelector(state => state.dayReducer.descriptionFieldValue);
    const priorityLevel = useSelector(state => state.dayReducer.priorityLevel);
    const allTasks = useSelector(state => state.dayReducer.allTasks);

    const closeModal = () => {
        dispatch(setShowModal(false));
        dispatch(setPriorityLevel(0))
        dispatch(setTitleFieldValue(''))
        dispatch(setDescriptionFieldValue(''))
    };

    const prioritySelect = (e) => {
        e.preventDefault();
        dispatch(setPriorityLevel(e.target.value))
    };

    const changeTitleFieldValue = (e) => {
        e.preventDefault();
        dispatch(setTitleFieldValue(e.target.value))
    };

    const changeDescriptionFieldValue = (e) => {
        e.preventDefault();
        dispatch(setDescriptionFieldValue(e.target.value))
    };

    const createTask = () => {
        let i = 0
        let id;
        while (i <= allTasks.length) {
            if (!allTasks[i]) {
                id = i
            }
            i++
        }

        dispatch(setNewTask({
            titleFieldValue,
            descriptionFieldValue,
            priorityLevel,
            id
        }))
        dispatch(setShowModal(false))
    }

    return (
        <Modal
            open={props.showModal}
            onClose={closeModal}
        >
            <Box
                minHeight={'20em'}
                width={'30em'}
                justifyContent={'center'}
                border={1}
                borderRadius={3}
                sx={{
                    position: 'absolute',
                    top: '30%',
                    left: '33%',
                    bgcolor: '#1c1c1c'
                    }}
            >
                <Grid container>
                    <Grid item xs={6}>
                        <h1 style={{color: '#f5f5f5', marginLeft: '0.5em'}}>{props.title}</h1>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={() => {dispatch(closeModal)}} sx={{position: 'absolute', top: 0, right: 0, borderRadius: 3}}>
                            <CloseIcon />
                        </Button>
                    </Grid>
                    <Grid container rowGap={2}>
                        <Grid item marginLeft={'1em'} xs={7}>
                            <TextField
                                id={'titleField'}
                                variant='standard'
                                label='Title'
                                onChange={changeTitleFieldValue}
                                inputProps={{ maxLength: 20 }}
                                helperText={titleFieldValue.length + ' / 20'}
                                
                            />
                        </Grid>
                        <Grid item marginLeft={'1em'} xs={3}>
                            <FormControl fullWidth>
                                <InputLabel>Priorty</InputLabel>
                                <Select
                                    label="Priority"
                                    variant='outlined'
                                    defaultValue={0}
                                    onChange={prioritySelect}
                                >
                                    <MenuItem value={0}>None</MenuItem>
                                    <MenuItem value={1}>Low</MenuItem>
                                    <MenuItem value={2}>Medium</MenuItem>
                                    <MenuItem value={3}>High</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item marginLeft={'1em'} xs={6}>
                            <TextField
                                id={'descriptionField'}
                                variant='standard'
                                label='Description'
                                multiline
                                fullWidth
                                onChange={changeDescriptionFieldValue}
                                inputProps={{ maxLength: 34 }}
                                helperText={descriptionFieldValue.length + ' / 34'}
                            />
                        </Grid>
                        <Grid item xs={5}>
                            <Button
                                variant='contained'
                                sx={{
                                    position:'absolute',
                                    right: 20,
                                    bottom: 20
                                }}
                                onClick={createTask}
                            >
                                Create
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Box>
        </Modal>
    )
};

DayModal.propTypes = {
    showModal: PropTypes.bool,
    publish: PropTypes.func
}

export default DayModal;
