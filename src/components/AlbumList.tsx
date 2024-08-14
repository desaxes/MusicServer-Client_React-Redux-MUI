import { Box, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import TrackItem from './TrackItem.tsx'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { useActions } from '../hooks/useActions.ts'
import AlbumItem from './AlbumItem.tsx'

const AlbumList: React.FC = () => {
    const { albums } = useTypedSelector(state => state.albums)
    const { fetchAlbums } = useActions()
    useEffect(() => {
        fetchAlbums()
    }, [])
    return (
        <Grid columns={12} container direction={'row'} width={'70%'} style={{ marginBottom: '60px' }}>
            {albums.map(album =>
                <AlbumItem key={album._id} album={album} />
            )}
        </Grid>
    )
}
export default AlbumList