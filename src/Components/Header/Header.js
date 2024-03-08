import React, { useState } from "react";
import { Grid, Tab, Tabs, Paper } from "@mui/material";

const Header = () => {
    const [value, setValue] = React.useState(document.location.pathname);

    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    }

    const handleChange = async (event, newPath) => {
        setValue(newPath);
        window.history.replaceState(null, null, newPath);
        await timeout(250)
        window.location.reload(false);
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
