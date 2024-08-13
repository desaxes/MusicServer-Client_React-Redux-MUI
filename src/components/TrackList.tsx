import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import TrackItem from './TrackItem.tsx'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { useActions } from '../hooks/useActions.ts'

const TrackList: React.FC = () => {
    const { tracks, error } = useTypedSelector(state => state.tracks)
    const { fetchTracks } = useActions()
    useEffect(() => {
        fetchTracks()
    }, [])
    return (

        <Grid container direction={'column'} width={'70%'} style={{marginBottom:'60px'}}>
            <Box p={3}>
                {tracks.map(track =>
                    <TrackItem key={track._id} track={track} />
                )}
            </Box>
        </Grid>
    )
}
export default TrackList