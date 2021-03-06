import moment from 'moment';


export const publishDiff = (publishedAt) => {
    const published = moment(publishedAt)
    const now = moment()
    const min = now.diff(published, 'minute') > 60 ?
        ({
            value: now.diff(published, 'hours'),
            text: 'hour ago',
            type: 'hour',
        }) : ({
            value: now.diff(published, 'minute'),
            text: 'minutes ago',
            type: 'minute'
        })
    const max = min.type == 'hour' && min.value > 24 ? ({
        value: now.diff(published, 'days'),
        text: 'days ago',
        type: 'day'
    }) : min
    return max
}