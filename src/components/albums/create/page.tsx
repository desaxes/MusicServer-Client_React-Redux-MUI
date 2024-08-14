import React from 'react'
import { useState } from "react";
import s from './create.module.scss'
import { Stepper, Step, StepLabel, Grid, Button, TextField } from "@mui/material";
import PublishIcon from '@mui/icons-material/Publish';
import { styled } from '@mui/material/styles';
import { useInput } from '../../../hooks/useInput.ts';
import { useActions } from '../../../hooks/useActions.ts';
import { useNavigate } from 'react-router-dom';
const CreateAlbum = () => {
    const steps = ['info', 'picture']
    const [state, setState] = useState<number>(1)
    const { createAlbum } = useActions()
    const navigate = useNavigate()
    const next = () => {
        if (state < 2) {
            setState(state + 1)
        }
        else {
            const formData = new FormData()
            formData.append('name', name.value)
            formData.append('desc', desc.value)
            formData.append('picture', picture)
            createAlbum(formData)
            navigate('/MusicServer/albums')
        }
    }
    const back = () => {
        setState(state - 1)
    }
    const name = useInput('')
    const desc = useInput('')
    const VisuallyHiddenInput = styled('input')({
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: 1,
        overflow: 'hidden',
        position: 'absolute',
        bottom: 0,
        left: 0,
        whiteSpace: 'nowrap',
        width: 1,
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        if (e.target.files != null) {
            setFile(e.target.files[0], type)
        }
    }
    const setFile = (file: any, type: string) => {
        if (type === 'image') {
            setPicture(file)
        }
    }
    const [picture, setPicture] = useState('')
    return (
        <div className={s.container}>
            <div className={s.loadBlock}>
                <h1>Album Creation</h1>
                <Stepper activeStep={state - 1}>
                    {steps.map((step, index) =>
                        <Step
                            key={index}
                            completed={state > index + 1}
                        >
                            <StepLabel>{step}</StepLabel>
                        </Step>
                    )}
                </Stepper>
                {state === 1 &&
                    <Grid className={s.dataField} container direction='column' gap='20px'>
                        <TextField {...name} placeholder='album name'></TextField>
                        <TextField {...desc} placeholder='description'></TextField>
                    </Grid>
                }
                {state === 2 && <div className={s.pictureField}>
                    <div
                        style={{ color: 'green', marginBottom: '12px', fontSize: '18px' }}
                    >{picture === '' ? '' : 'Image loaded'}</div>
                    <Button
                        component="label"
                        role={undefined}
                        variant="contained"
                        tabIndex={-1}
                        startIcon={<PublishIcon />}
                    >
                        Upload file
                        <VisuallyHiddenInput accept="image/*" type="file" onChange={e => onChange(e, 'image')} />
                    </Button>
                </div>}
                <Grid container justifyContent='space-between'>
                    <Button disabled={state === 1} onClick={back} variant='contained' color='secondary'>Back</Button>
                    <Button onClick={next} variant='contained' color='secondary'>{state === 2 ? 'Add Album' : 'Next'}</Button>
                </Grid>
            </div>
        </div>
    )
}
export default CreateAlbum