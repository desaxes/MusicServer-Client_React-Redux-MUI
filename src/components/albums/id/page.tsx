import { Box, Button, Card, Grid } from "@mui/material";
import React, { useEffect } from 'react'
import { useNavigate, useParams } from "react-router-dom";
import AlbumTrackList from "./AlbumTrackList.tsx";
import { useActions } from "../../../hooks/useActions.ts";
import { useTypedSelector } from "../../../hooks/useTypedSelector.ts";
const AlbumTracks = () => {
    const navigate = useNavigate()
    const params = useParams()
    const { currentAlbum } = useTypedSelector(state => state.albums)
    const { fetchAlbumById } = useActions()
    useEffect(() => {
        if (params.id) { fetchAlbumById(params.id) }
    }, [])
    return (
        <Grid container justifyContent={'center'} width={'100%'}>
            <Card style={{ backgroundColor: 'rgb(255, 255, 255)', width: '100%', border: 'solid 2px white' }}>
                <Box p={3} >
                    <Grid container justifyContent={'space-between'}>
                        <h1>
                            {currentAlbum?.name}
                        </h1>
                        <Button onClick={() => navigate('/MusicServer/albums/add/' + params.id)} variant="contained" color='secondary'>Add Music To Album</Button>
                    </Grid>
                </Box>
            </Card>
            <AlbumTrackList />
        </Grid>
    )
}
export default AlbumTracks