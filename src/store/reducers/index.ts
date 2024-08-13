import { combineReducers } from "redux";
import { playerReducer } from "./player-reducer.ts";
import { trackReducer } from "./trackReducer.ts";

export const rootReducer = combineReducers({
    player: playerReducer,
    tracks:trackReducer
})

export type RootState = ReturnType<typeof rootReducer>