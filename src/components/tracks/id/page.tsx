import React, { useEffect } from 'react'
import s from './trackpage.module.scss'
import { Button, Card, Input, TextField } from '@mui/material'
import { useNavigate, useParams } from 'react-router-dom'
import { useTypedSelector } from '../../../hooks/useTypedSelector.ts'
import { useActions } from '../../../hooks/useActions.ts'
import { useInput } from '../../../hooks/useInput.ts'

const TrackPage = () => {
    const params = useParams()
    const navigate = useNavigate()
    const track = {
        _id: '231',
        name: 'Track 1reeeee',
        artist: 'Artist 1',
        text: 'ewtwetew qwrqwwrqw qwtwqe',
        listens: 2,
        picture: 'http://localhost:5000/image/5b901541-d9fd-4482-b40a-8e39ae544069.jpeg',
        audio: 'http://localhost:5000/audio/c55fda15-9fe4-4027-9aed-c55281d959a5.mp3',
        comments: []
    }
    const { currentTrack, currentComments } = useTypedSelector(state => state.tracks)
    const { fetchTrackById, fetchComments, createComment } = useActions()
    useEffect(() => {
        if (!params.id) {
            navigate('/MusicServer/error')
        }
        else {
            fetchTrackById(params.id)
            fetchComments(params.id)
        }
    }, [])
    const username = useInput('')
    const text = useInput('')
    const addComment = () => {
        if (params.id) {
            createComment(username.value, text.value, params.id)
        }
    }
    console.log(currentComments)
    return (
        <div className={s.container}>
            <div className={s.trackBlock}>
                <Button onClick={() => navigate('/MusicServer/tracks')} variant='contained' color='secondary' style={{ marginBottom: '20px' }}>Back to the list</Button>
                <div className={s.info}>
                    <img src={'http://localhost:5000/' + currentTrack?.picture} />
                    <div className={s.text}>
                        <p>Artist - {currentTrack?.artist}</p>
                        <p>Name - {currentTrack?.name}</p>
                        <p>Listens - {currentTrack?.listens}</p>
                    </div>
                </div>
                <div className={s.text}>
                    <p>Text</p>
                    <p className={s.words}>{currentTrack?.text}</p>
                    <div className={s.commentBlock}>
                        <p>Comments</p>
                        <div className={s.sendCom}>
                            <Input {...username} className={s.input} style={{ color: 'black' }} color='secondary' placeholder='Your Name'></Input>
                            <Input {...text} className={s.input} style={{ color: 'black' }} color='warning' placeholder='Comment'></Input>
                            <Button onClick={addComment} className={s.button} variant='contained' color='secondary'>Send</Button>
                        </div>
                        <div>
                            {currentComments.map(c =>
                                <Card variant='outlined' style={{
                                    margin:'10px', padding:'0 10px',
                                    background:'linear-gradient(90deg, rgba(254,227,255,1) 0%, rgba(234,210,255,1) 37%, rgba(255,130,238,1) 63%, rgba(207,140,255,1) 100%)',
                                    border:'1px solid black',borderRadius:'20px'
                                    }}>
                                    <div className={s.com}>
                                        <div className={s.comname}> {c.username}</div>
                                        <div className={s.comtext}> {c.text}</div>
                                    </div>
                                </Card>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default TrackPage