import { TYPES } from '../types'

const initialState = { data: null, maxResult: 10 };
export const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPES.GETDATA:
            return { ...state, data: action.payload }
        case TYPES.INCREASE:
            return {...state, maxResult: action.payload }
        default:
            return { ...state, };
    }
}