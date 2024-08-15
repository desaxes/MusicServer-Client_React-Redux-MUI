import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts'
import { useActions } from '../../../hooks/useActions.ts'
import TrackItem from './TrackItemForAlbum.tsx'
import { useParams } from 'react-router-dom'

const AlbumTrackList: React.FC = () => {
    const { albumTracks } = useTypedSelector(state => state.albums)
    const { getAlbumTracks } = useActions()
    const params = useParams()
    useEffect(() => {
        getAlbumTracks(params.id)
    }, [])
    return (
        <Grid container direction={'column'} width={'70%'} style={{ marginBottom: '60px' }}>
            <Box p={3}>
                {albumTracks.map(track =>
                    <TrackItem key={track._id} track={track} />
                )}
            </Box>
        </Grid>
    )
}
export default AlbumTrackList