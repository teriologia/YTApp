import {TYPES} from '../store/types'

export const fetchData = ( location, maxResults ) => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=${location.latitude}%2C${location.longitude}&locationRadius=10mi&maxResults=${maxResults}&order=date&type=video&key=AIzaSyDKW3yG3pD_sNWL-RNjwE2BWEGBMnCid4c`;
    return((dispatch) => {
        fetch(url)
        .then(res => res.json())
        .then(resJson => {
            dispatch({
                type: TYPES.GETDATA,
                payload: resJson
            })
        })  
    })
}


export const increaseMaxResult = (maxResult, increment) =>{
    return {
        type: TYPES.INCREASE,
        payload: maxResult + increment
    }
}