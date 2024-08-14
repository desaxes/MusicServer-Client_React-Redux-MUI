import { ITrack, TrackActions, TrackActionTypes } from "../../types/track.ts";
import axios from "axios";
import { Dispatch } from "redux";
import { ObjectId } from 'mongoose';

// export const fetchTracks = (payload:ITrack[]): TrackActions => {
//     return async { type: TrackActionTypes.FETCH_TRACKS, payload }
// }
// export const fetchTracksError = (payload:string): TrackActions => {
//     return async { type: TrackActionTypes.FETCH_TRACKS_ERROR, payload }
// }

export const fetchTracks = () => {
    return async (dispatch: Dispatch<TrackActions>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks')
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const fetchTrackById = (id: string) => {
    return async (dispatch: Dispatch<TrackActions>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks/' + id)
            dispatch({
                type: TrackActionTypes.FETCH_TRACK_BY_ID,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const deleteTrack = (id: string) => {
    return async (dispatch: Dispatch<TrackActions>) => {
        try {
            await axios.delete('http://localhost:5000/tracks/' + id)
            const response = await axios.get('http://localhost:5000/tracks')
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const createTrack = (formData: any) => {
    return async (dispatch: Dispatch<TrackActions>) => {
        try {
            await axios.post('http://localhost:5000/tracks/', formData)
            const response = await axios.get('http://localhost:5000/tracks')
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Error'
            })
        }
    }
}

export const fetchComments = (id: string) => {
    return async (dispatch: Dispatch<TrackActions>) => {
        try {
            const response = await axios.get('http://localhost:5000/tracks/comment/' + id)
            dispatch({
                type: TrackActionTypes.FETCH_COMMENTS,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Error'
            })
        }
    }
}
export const createComment = (username: string, text: string, trackId: any) => {
    return async (dispatch: Dispatch<TrackActions>) => {
        try {
            await axios.post('http://localhost:5000/tracks/comment', { username, text, trackId })
            const response = await axios.get('http://localhost:5000/tracks/comment/' + trackId)
            dispatch({
                type: TrackActionTypes.FETCH_COMMENTS,
                payload: response.data
            })
        }
        catch (e) {
            dispatch({
                type: TrackActionTypes.FETCH_TRACKS_ERROR,
                payload: 'Error'
            })
        }
    }
}