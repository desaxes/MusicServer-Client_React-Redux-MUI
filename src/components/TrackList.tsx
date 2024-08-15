import { Box, Grid, TextField } from '@mui/material'
import React, { ChangeEvent, useEffect, useState } from 'react'
import TrackItem from './TrackItem.tsx'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { useActions } from '../hooks/useActions.ts'

const TrackList: React.FC = () => {
    const { tracks, error } = useTypedSelector(state => state.tracks)
    const { fetchTracks } = useActions()
    const [query, setQuery] = useState('')
    const { search } = useActions()
    const searchQuery = (e: ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    const [timer, setTimer] = useState<number | null>(null)
    useEffect(() => {
        if (!query) {
            if (timer) {
                clearTimeout(timer)
            }
            fetchTracks()
        }
        else {
            if (timer) {
                clearTimeout(timer)
            }
            setTimer(
                setTimeout(() => { search(query) }, 500)
            )
        }
    }, [query])
    return (

        <Grid container direction={'column'} width={'70%'} style={{ marginBottom: '100px', paddingTop: '20px' }}>
            <TextField placeholder='Track name' fullWidth value={query} onChange={searchQuery}></TextField>
            <Box p={3}>
                {tracks.map(track =>
                    <TrackItem key={track._id} track={track} />
                )}
            </Box>
        </Grid>
    )
}
export default TrackList