import * as PlayerActionCreators from './player.ts'
import * as TrackActionCreators from './track.ts'
import * as AlbumActionCreators from './album.ts'
export default {
    ...PlayerActionCreators,
    ...TrackActionCreators,
    ...AlbumActionCreators
}