import { ITrack } from '../types/track.ts'
import { Box, Card, Grid, IconButton } from '@mui/material'
import React from 'react'
import s from './trackitem.module.scss'
import { Delete, Pause, PlayArrow } from '@mui/icons-material'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { useActions } from '../hooks/useActions.ts'
import { useNavigate } from 'react-router-dom';
import { IAlbum } from '../types/album.ts'
const AlbumItem: React.FC<{ album: IAlbum, key: string }> = ({ album }) => {
    const navigate = useNavigate()
    const { deleteAlbum } = useActions()

    const removeAlbum = (e: any) => {
        e.stopPropagation()
        deleteAlbum(album._id)
    }
    return (
        // @ts-ignore
        <Grid item xs={3} onClick={() => navigate('/MusicServer/albums/' + album._id)} style={{
            cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative',
            margin: '20px 0'
        }}>
            <img style={{
                width: '200px', height: '200px', border: 'solid pink 4px', borderRadius: '50%'
            }} src={'http://localhost:5000/' + album.picture} />
            <div style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '20px'
            }}>
                <div>{album.name}</div>
                <div style={{
                    fontSize: '16px', opacity: '60%'
                }}>{album.desc}</div>
            </div>
        </Grid>
    )
}
export default AlbumItem