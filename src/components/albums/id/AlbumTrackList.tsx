import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts'
import { useActions } from '../../../hooks/useActions.ts'
import { useParams } from 'react-router-dom'
import TrackItem from '../../TrackItem.tsx'

const AlbumTrackList: React.FC = () => {
    const { tracks } = useTypedSelector(state => state.albums)
    const { getAlbumTracks } = useActions()
    const params = useParams()
    useEffect(() => {
        getAlbumTracks(params.id)
    }, [])
    return (

        <Grid container direction={'column'} width={'70%'} style={{ marginBottom: '60px' }}>
            <Box p={3}>
                {tracks.map(track =>
                    <TrackItem key={track._id} track={track} />
                )}
            </Box>
        </Grid>
    )
}
export default AlbumTrackList