import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useTypedSelector } from '../../../../hooks/useTypedSelector.ts';
import { useActions } from '../../../../hooks/useActions.ts';
import AddIcon from '@mui/icons-material/Add';
import { IconButton, Input } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Delete } from '@mui/icons-material';
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function TrackModal(props) {
    const params = useParams()
    const { tracks } = useTypedSelector(state => state.tracks)
    const { albumTracks } = useTypedSelector(state => state.albums)
    const { fetchTracks, addTrackToAlbum, clearAlbum, search } = useActions()
    const [query, setQuery] = React.useState('')
    const searchQuery = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value)
    }
    React.useEffect(() => {
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
    const [timer, setTimer] = React.useState<number | null>(null)
    const handleClose = () => props.setOpen(false);
    return (
        <div>
            <Modal
                open={props.open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Input onChange={searchQuery} placeholder='track name' style={{ width: '100%', marginBottom: '10px' }} />
                    {tracks.map(track =>
                        <div style={{
                            display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
                        }}>
                            <div style={{
                                display: 'flex', fontWeight: '500px', borderBottom: 'pink 3px solid'
                            }}>
                                <div>
                                    {track.artist}-
                                </div>
                                <div>
                                    {track.name}
                                </div>
                            </div>
                            <div>
                                <Button disabled={albumTracks?.some(e => e._id === track._id)}
                                    onClick={() => {
                                        addTrackToAlbum(params?.id, track._id)
                                    }} color='secondary'><AddIcon /></Button>
                            </div>
                        </div>
                    )}
                    <IconButton onClick={() => {
                        clearAlbum(params.id ? params.id : '')
                    }} color='error' style={{ marginLeft: 'auto' }}>
                        <Delete /> Clear Album
                    </IconButton>
                </Box>
            </Modal>
        </div>
    );
}