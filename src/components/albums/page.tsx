import React from 'react'
import { Box, Button, Card, Grid } from "@mui/material";
import TrackList from "../TrackList.tsx";
import { useNavigate } from "react-router-dom";
import AlbumList from '../AlbumList.tsx';
const Albums = () => {
    const navigate = useNavigate()
    return (
        <Grid container justifyContent={'center'} width={'100%'}>
            <Card style={{ backgroundColor: 'rgb(255, 255, 255)', width: '100%', border: 'solid 2px white' }}>
                <Box p={3} >
                    <Grid container justifyContent={'space-between'}>
                        <h1>
                            Albums
                        </h1>
                        <Button onClick={() => navigate('/MusicServer/albums/create')} variant="contained" color='secondary'>Add Album</Button>
                    </Grid>
                </Box>
            </Card>
            <AlbumList />
        </Grid>
    )
}
export default Albums