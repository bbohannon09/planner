import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Grid, Tab, Tabs, Paper } from "@mui/material";
import { updateURL } from '../../Reducers/DayReducer'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const state = useSelector((state) => state.dayReducer);
    const urlPath = useSelector((state) => state.dayReducer.urlPath);

    const handleChange = (event, newPath) => {
        dispatch(updateURL({newPath}))
        navigate(newPath)
    };

    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
            <Paper style={{ backgroundColor: '#262626', padding: '20px' }}>
                <Tabs
                    value={urlPath}
                    onChange={handleChange}
                    textColor="inherit"
                    sx={{ 
                        "& .MuiTabs-indicator": { backgroundColor: "white" } 
                    }}
                    indicatorColor="primary"
                    >
                        <Tab value='/planner' label='Dashboard' sx={{ color: 'white' }} />
                        <Tab value='/planner/tasks' label='Tasks' sx={{ color: 'white' }} />
                </Tabs>
            </Paper>
            </Grid>
        </Grid>
    )
}

export default Header;
