import { AlbumActions, AlbumActionTypes, AlbumState, IAlbum } from '../../types/album.ts';
import { ITrack } from '../../types/track.ts';

const InititalState: AlbumState = {
    albumTracks: [],
    currentAlbum: null,
    albums: [],
    error: ''
}
export const albumReducer = (state = InititalState, action: AlbumActions): AlbumState => {
    switch (action.type) {
        case AlbumActionTypes.FETCH_TRACKS_BY_ALBUM: {
            return { ...state, error: '', albumTracks: action.payload }
        }
        case AlbumActionTypes.FETCH_ALBUMS_ERROR: {
            return { ...state, error: action.payload }
        }
        case AlbumActionTypes.FETCH_ALBUM_BY_ID: {
            return { ...state, error: '', currentAlbum: action.payload }
        }
        case AlbumActionTypes.FETCH_ALBUMS: {
            return { ...state, error: '', albums: action.payload }
        }
        default: return state
    }
}