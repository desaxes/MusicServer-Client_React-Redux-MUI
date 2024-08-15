import { ITrack } from "./track"

export interface IAlbum {
    _id:string,
    name: string,
    desc: string,
    picture: string,
    tracks: string[]
}
export interface AlbumState {
    albumTracks: ITrack[],
    albums: IAlbum[],
    currentAlbum: IAlbum | null,
    error: string
}
export enum AlbumActionTypes {
    FETCH_ALBUMS = 'FETCH_ALBUMS',
    FETCH_ALBUMS_ERROR = 'FETCH_ALBUMS_ERROR',
    FETCH_TRACKS_BY_ALBUM = 'FETCH_TRACKS_BY_ALBUM',
    FETCH_ALBUM_BY_ID = 'FETCH_ALBUM_BY_ID',
}
interface FecthTracksByAlbum {
    type: AlbumActionTypes.FETCH_TRACKS_BY_ALBUM,
    payload: ITrack[]
}
interface FetchAlbums {
    type: AlbumActionTypes.FETCH_ALBUMS,
    payload: IAlbum[]
}
interface FetchAlbumsError {
    type: AlbumActionTypes.FETCH_ALBUMS_ERROR,
    payload: string
}
interface FetchAlbumById {
    type: AlbumActionTypes.FETCH_ALBUM_BY_ID,
    payload: IAlbum
}
export type AlbumActions = FecthTracksByAlbum | FetchAlbums | FetchAlbumsError | FetchAlbumById