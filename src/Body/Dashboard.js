import { Grid, ImageList, ImageListItem } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
    const incompleteCount = JSON.parse(localStorage.getItem('incompleteTasks')).length;
    const activeCount = JSON.parse(localStorage.getItem('activeTasks')).length;
    const finishedCount = JSON.parse(localStorage.getItem('finishedTasks')).length;

    const textStyle = {
        titles: {
            color: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
        },
        values: {
            margin: 0,
            color: '#f5f5f5',
            display: 'flex',
            justifyContent: 'center',
            fontSize: 45
        }
    }

    return (
        <Grid container columnGap={3} rowGap={2} marginTop={'1em'} justifyContent={'center'}>
            <Grid
                container
                item
                border={1}
                borderRadius={4}
                xs={3}
                height={'10em'}
                bgcolor={'#262626'}
                justifyContent={'center'}
                sx={{ boxShadow: 4 }}
            >
                <Grid item xs={12} justifyItems={'center'} maxHeight={'4em'}>
                    <h1 style={textStyle.titles}>Number of tasks:</h1>
                </Grid>
                <Grid container item xs={12} fontSize={50} justifyContent={'center'} color={'#f3f3f3'}>
                    {incompleteCount + activeCount}
                </Grid>
            </Grid>
            <Grid container item border={1} borderRadius={4} xs={8} height={'10em'} bgcolor={'#262626'} sx={{ boxShadow: 4 }}>
                <Grid container item xs={4}justifyContent={'center'}>
                    <Grid item xs={12} justifyItems={'center'} maxHeight={'4em'}>
                        <h1 style={textStyle.titles}>Items not Started:</h1>
                    </Grid>
                    <Grid container item xs={12} fontSize={50} justifyContent={'center'} color={'#f3f3f3'}>
                        {incompleteCount}
                    </Grid>
                </Grid>
                <Grid xs={4}>
                    <Grid item xs={12} justifyItems={'center'} maxHeight={'4em'}>
                        <h1 style={textStyle.titles}>Items in Progress:</h1>
                    </Grid>
                    <Grid container item xs={12} fontSize={50} justifyContent={'center'} color={'#f3f3f3'}>
                        {activeCount}
                    </Grid>
                </Grid>
                <Grid xs={4}>
                    <Grid item xs={12} justifyItems={'center'} maxHeight={'4em'}>
                        <h1 style={textStyle.titles}>Items Completed:</h1>
                    </Grid>
                    <Grid container item xs={12} fontSize={50} justifyContent={'center'} color={'#f3f3f3'}>
                        {finishedCount}
                    </Grid>
                </Grid>
            </Grid>
            <Grid item border={1} borderRadius={4} xs={8} height={'10em'} bgcolor={'#262626'} sx={{ boxShadow: 4 }}>
                
            </Grid>
            <Grid item border={1} borderRadius={4} xs={3} height={'10em'} bgcolor={'#262626'} sx={{ boxShadow: 4 }}>
                
            </Grid>
        </Grid>
    )
}

export default Dashboard;
