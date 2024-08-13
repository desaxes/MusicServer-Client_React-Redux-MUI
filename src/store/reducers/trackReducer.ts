import { TrackActions, TrackActionTypes, TrackState } from '../../types/track.ts';

const InititalState: TrackState = {
    currentTrack: null,
    currentComments:[],
    tracks: [],
    error: ''
}
export const trackReducer = (state = InititalState, action: TrackActions): TrackState => {
    switch (action.type) {
        case TrackActionTypes.FETCH_TRACKS: {
            return { ...state, error: '', tracks: action.payload }
        }
        case TrackActionTypes.FETCH_TRACKS_ERROR: {
            return { ...state, error: action.payload }
        }
        case TrackActionTypes.FETCH_TRACK_BY_ID: {
            return { ...state, error: '', currentTrack: action.payload }
        }
        case TrackActionTypes.FETCH_COMMENTS: {
            return { ...state, error: '', currentComments: action.payload }
        }
        default: return state
    }
}