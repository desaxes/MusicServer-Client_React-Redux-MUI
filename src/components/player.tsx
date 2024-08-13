import { Pause, PlayArrow, VolumeUp } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import s from './player.module.scss'
import TrackProgress from './trackProgress.tsx'
import { useTypedSelector } from '../hooks/useTypedSelector.ts'
import { useActions } from '../hooks/useActions.ts'
let audio: any
const Player = () => {
    const { active, pause, volume, currentTime, duration } = useTypedSelector(state => state.player)
    const { pauseTrack, playTrack, setVolume, setCurrentTime, setDuration } = useActions()
    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        }
        else {
            setAudio()
        }
    }, [active])
    const play = () => {
        if (pause) {
            console.log(pause)
            playTrack()
            audio.play()
        }
        else {
            pauseTrack()
            audio.pause()
        }
    }
    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = +e.target.value / 100
        setVolume(+e.target.value)
    }
    const changeTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = +e.target.value
        setCurrentTime(+e.target.value)
    }
    const setAudio = () => {
        if (active) {
            if (audio.src != active.audio) {
                audio.src = "http://localhost:5000/" + active.audio
                audio.volume = volume / 100
                audio.onloadedmetadata = () => {
                    setDuration(Math.ceil(audio.duration))
                }
                audio.ontimeupdate = () => {
                    setCurrentTime(Math.ceil(audio.currentTime))
                }
                playTrack()
                audio.play()
            }
        }
    }
    if (!active) {
        return null
    }
    return (
        <div className={s.player}>
            <IconButton onClick={play} color='primary' size='large'>
                {!pause ? <Pause /> : <PlayArrow />
                }</IconButton>
            <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', width: '60%' }}>
                <div className={s.text}>{active?.artist}-{active?.name}</div>
                <TrackProgress audio={true} width={'100%'} left={currentTime} right={duration} onChange={changeTime} />
            </div>
            <div style={{ display: 'flex', gap: '15px' }}>
                <VolumeUp />
                <TrackProgress audio={false} left={volume} right={100} onChange={changeVolume} />
            </div>
        </div>
    )
}
export default Player