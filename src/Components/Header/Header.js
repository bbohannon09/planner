import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { Grid, Tab, Tabs, Paper } from "@mui/material";

const Header = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState(document.location.pathname);
    const handleChange = (event, newPath) => {
        setValue(newPath);
        navigate(newPath);
    };
    return (
        <Grid container spacing={1}>
            <Grid item xs={12}>
            <Paper style={{ backgroundColor: '#262626', padding: '20px' }}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    textColor="inherit"
                    sx={{ 
                        "& .MuiTabs-indicator": { backgroundColor: "white" } 
                    }}
                    indicatorColor="primary"
                    >
                        <Tab value='/dashboard' label='Dashboard' sx={{ color: 'white' }} />
                        <Tab value='/tasks' label='Tasks' sx={{ color: 'white' }} />
                </Tabs>
            </Paper>
            </Grid>
        </Grid>
    )
}

export default Header;
