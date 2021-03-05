import { combineReducers } from "redux";
import {videosReducer} from './videosReducer';

const appReducer = combineReducers({
    videos: videosReducer,
})

export default appReducer;