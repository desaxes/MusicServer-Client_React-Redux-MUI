import { ITrack } from '../types/track.ts'
import { Box, Card, Grid, IconButton } from '@mui/material'
import React from 'react'
import s from './trackitem.module.scss'
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { useActions } from '../hooks/useActions.ts'
import { useNavigate } from 'react-router-dom';
const TrackItem: React.FC<{ track: ITrack, key: string }> = ({ track }) => {
    const navigate = useNavigate()
    const { active } = useTypedSelector(state => state.player)
    const { setActiveTrack, deleteTrack } = useActions()
    const play = (e: any) => {
        e.stopPropagation()
        setActiveTrack(track)
    }
    const removeTrack = (e: any) => {
        e.stopPropagation()
        deleteTrack(track._id)
    }
    return (
        // @ts-ignore
        <Card
            style={{
                background: active?.audio === track.audio && 'linear-gradient(90deg, rgba(73,31,180,1) 0%, rgba(155,72,227,1) 37%, rgba(140,52,128,1) 63%, rgba(55,28,74,1))', 
                color: active?.audio === track.audio && "white"
            }}
            onClick={() => navigate('/MusicServer/tracks/' + track._id)} className={s.track}>
            <IconButton disabled={active?.audio === track.audio} onClick={play} color='error' size='large'>{active?.audio === track.audio ? <Pause /> : <PlayArrow />}</IconButton>
            <img className={s.picture} src={'http://localhost:5000/' + track.picture} />
            <div className={s.textblock}>
                <div className={s.name}>{track.name}</div>
                <div className={s.artist}>{track.artist}</div>
            </div>
            <IconButton onClick={removeTrack} color='error' style={{ marginLeft: 'auto' }}>
                <Delete />
            </IconButton>
        </Card>
    )
}
export default TrackItem