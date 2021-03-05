import {TYPES} from '../store/types'

export const fetchData = () => {
    const url = 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&location=41.054419%2C29.006326&locationRadius=10mi&maxResults=100&order=date&type=video&key=AIzaSyBgfUo1PNpfI6LcuvS1wumYimi77ZyR0BE';
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
