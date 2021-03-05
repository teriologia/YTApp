import {TYPES} from '../types'

const initialState = { data: null };
export const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GETDATA:
            return {...state, data: action.payload}
        default:
            return { ...state };
    }
}