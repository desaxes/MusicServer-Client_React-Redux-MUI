import * as PlayerActionCreators from './player.ts'
import * as TrackActionCreators from './track.ts'
export default {
    ...PlayerActionCreators,
    ...TrackActionCreators
}