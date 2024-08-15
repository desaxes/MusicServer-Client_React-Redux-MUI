import { Box, Button, Card, Grid, TextField } from "@mui/material";
import TrackList from "../TrackList.tsx";
import React, { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { useActions } from "../../hooks/useActions.ts";
const Tracks = () => {
    const navigate = useNavigate()

    return (
        <Grid container justifyContent={'center'} width={'100%'}>
            <Card style={{ backgroundColor: 'rgb(255, 255, 255)', width: '100%', border: 'solid 2px white' }}>
                <Box p={3} >
                    <Grid container justifyContent={'space-between'}>
                        <h1>
                            Tracks
                        </h1>
                        <Button onClick={() => navigate('/MusicServer/create')} variant="contained" color='secondary'>Load</Button>
                    </Grid>
                </Box>
            </Card>

            <TrackList />
        </Grid>
    )
}
export default Tracks