import { combineReducers } from "redux";
import { playerReducer } from "./player-reducer.ts";
import { trackReducer } from "./trackReducer.ts";
import { albumReducer } from "./albumReducer.ts";

export const rootReducer = combineReducers({
    player: playerReducer,
    tracks: trackReducer,
    albums: albumReducer
})

export type RootState = ReturnType<typeof rootReducer>