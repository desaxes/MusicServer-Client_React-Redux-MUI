import { Box, Button, Card, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import TrackList from '../TrackList.tsx'
import { useNavigate } from 'react-router-dom'
import TrackItem from '../albums/id/TrackItemForAlbum.tsx'
import { useActions } from '../../hooks/useActions.ts'
import { useTypedSelector } from '../../hooks/useTypedSelector.ts'
import AlbumItem from '../AlbumItemMain.tsx'
const Main = () => {
    const navigate = useNavigate()
    const { tracks, error } = useTypedSelector(state => state.tracks)
    const { albums } = useTypedSelector(state => state.albums)
    const { fetchTracks, fetchAlbums } = useActions()
    useEffect(() => {
        fetchTracks()
        fetchAlbums()
    }, [])
    return (
        <div>
            <Grid container justifyContent={'center'} width={'100%'}>
                <Card style={{ backgroundColor: 'rgb(255, 255, 255)', width: '100%', border: 'solid 2px white' }}>
                    <Box p={3} >
                        <Grid container justifyContent={'space-between'}>
                            <h1>
                                New Tracks
                            </h1>
                        </Grid>
                    </Box>
                </Card>
                <Grid container direction={'column'} width={'70%'} style={{ marginBottom: '0px', paddingTop: '20px' }}>
                    <Box p={3}>
                        {tracks.length >= 1 && <TrackItem key={'newtrack1'} track={tracks[tracks.length - 1]} />}
                        {tracks.length >= 2 && <TrackItem key={'newtrack2'} track={tracks[tracks.length - 2]} />}
                        {tracks.length >= 3 && <TrackItem key={'newtrack3'} track={tracks[tracks.length - 3]} />}
                    </Box>
                </Grid>
                <Card style={{ backgroundColor: 'rgb(255, 255, 255)', width: '100%', border: 'solid 2px white' }}>
                    <Box p={3} >
                        <Grid container justifyContent={'space-between'}>
                            <h1>
                                New Albums
                            </h1>
                        </Grid>
                    </Box>
                </Card>
                <Grid columns={12} container direction={'row'} width={'70%'} style={{ marginBottom: '120px' }}>
                    {albums.length >= 1 && <AlbumItem key={'newalbum1'} album={albums[albums.length - 1]} />}
                    {albums.length >= 2 && <AlbumItem key={'newalbum2'} album={albums[albums.length - 2]} />}
                    {albums.length >= 3 && <AlbumItem key={'newalbum3'} album={albums[albums.length - 3]} />}
                    {albums.length >= 4 && <AlbumItem key={'newalbum4'} album={albums[albums.length - 4]} />}
                </Grid>
            </Grid>
        </div>
    )
}
export default Main