
export interface ITrack {
    _id: string;
    name: string;
    artist: string;
    text: string;
    listens: number;
    picture: string;
    audio: string;
    comments: IComment[]
}
export interface IComment {
    _id: string;
    username: string;
    text: string
}
export interface TrackState {
    currentTrack: ITrack | null,
    currentComments:IComment[],
    tracks: ITrack[],
    error: string
}
export enum TrackActionTypes {
    FETCH_TRACKS = 'FETCH_TRACKS',
    FETCH_TRACKS_ERROR = 'FETCH_TRACKS_ERROR',
    FETCH_TRACK_BY_ID = 'FETCH_TRACK_BY_ID',
    FETCH_COMMENTS = 'FETCH_COMMENTS'
}
interface FetchTrackAction {
    type: TrackActionTypes.FETCH_TRACKS,
    payload: ITrack[]
}
interface FetchComments {
    type: TrackActionTypes.FETCH_COMMENTS,
    payload: IComment[]
}
interface FetchTrackErrorAction {
    type: TrackActionTypes.FETCH_TRACKS_ERROR,
    payload: string
}
interface FetchTrackById {
    type: TrackActionTypes.FETCH_TRACK_BY_ID,
    payload: ITrack
}
export type TrackActions = FetchTrackAction | FetchTrackErrorAction | FetchTrackById | FetchComments