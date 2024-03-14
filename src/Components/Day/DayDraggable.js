import React from "react";
import { Grid, IconButton, SvgIcon } from "@mui/material";
import { useDispatch } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import { deleteTask } from "../../Reducers/DayReducer";
import { PropTypes } from "prop-types";

const DayDraggable = (props) => {
    const dispatch = useDispatch();

    const removeTask = (index, list) => {
        dispatch(deleteTask({index, list}));
    }

    return (
        <>
            <Grid container bgcolor={'#2c2c2c'} alignItems={'center'} borderRadius={2} minHeight={'3.5em'}>
                <Grid container item xs={1} fontSize={20} marginLeft={'0.5em'} color={'#ff2c25'}>
                    {'!'.repeat(props.priorityLevel)}
                </Grid>
                <Grid container item xs={9}>
                    <Grid item xs={12} fontSize={24} color={'#f5f5f5'}>
                        {props.title}
                    </Grid>
                    <Grid item xs={12} fontSize={14} color={'#979797'}>
                        {props.description}
                    </Grid>
                </Grid>
                <Grid container item xs={1}>
                    <IconButton onClick={() => {removeTask(props.index, props.list)}}>
                        <SvgIcon>
                            <DeleteIcon style={{color: '#ff2c25'}} />
                        </SvgIcon>
                    </IconButton>
                </Grid>
            </Grid>
            <Grid item height={'0.25em'}></Grid>
        </>
    )
}

DayDraggable.proptypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    index: PropTypes.number
}

export default DayDraggable;