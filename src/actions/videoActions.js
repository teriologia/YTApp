import {TYPES} from '../store/types'

export const fetchData = ( location ) => {
    const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=${location.latitude}%2C${location.longitude}&locationRadius=10mi&maxResults=10&order=date&type=video&key=AIzaSyDOL_BDrOJ42MvY2choKZxzugnv3nxEcyQ`;
    return((dispatch) => {
        fetch(url)
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
            dispatch({
                type: TYPES.GETDATA,
                payload: resJson
            })
        })  
    })
}
