import axios from "axios";
import { Dispatch } from "redux";
import { AlbumActions, AlbumActionTypes } from "../../types/album.ts";

export const fetchAlbums = () => {
    return async (dispatch: Dispatch<AlbumActions>) => {
        try {
            const response = await axios.get('http://localhost:5000/album')
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const fetchAlbumById = (id: string) => {
    return async (dispatch: Dispatch<AlbumActions>) => {
        try {
            const response = await axios.get('http://localhost:5000/album/' + id)
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUM_BY_ID,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const deleteAlbum = (id: string) => {
    return async (dispatch: Dispatch<AlbumActions>) => {
        try {
            await axios.delete('http://localhost:5000/album/' + id)
            const response = await axios.get('http://localhost:5000/album')
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const createAlbum = (formData: any) => {
    return async (dispatch: Dispatch<AlbumActions>) => {
        try {
            await axios.post('http://localhost:5000/album/', formData)
            const response = await axios.get('http://localhost:5000/album')
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const addTrackToAlbum = (albumId: any, trackId: any) => {
    return async (dispatch: Dispatch<AlbumActions>) => {
        try {
            await axios.post('http://localhost:5000/album/track/' + albumId, { trackId: trackId })
            const response = await axios.get('http://localhost:5000/album/track/' + albumId)
            dispatch({
                type: AlbumActionTypes.FETCH_TRACKS_BY_ALBUM,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const clearAlbum = (albumId: any) => {
    return async (dispatch: Dispatch<AlbumActions>) => {
        try {
            await axios.delete('http://localhost:5000/album/track/' + albumId)
            const response = await axios.get('http://localhost:5000/album/track/' + albumId)
            dispatch({
                type: AlbumActionTypes.FETCH_TRACKS_BY_ALBUM,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const getAlbumTracks = (albumId: any) => {
    return async (dispatch: Dispatch<AlbumActions>) => {
        try {
            const response = await axios.get('http://localhost:5000/album/track/' + albumId)
            dispatch({
                type: AlbumActionTypes.FETCH_TRACKS_BY_ALBUM,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
                payload: 'Error'
            })
        }
    }
}