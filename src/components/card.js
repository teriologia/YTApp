import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import moment from 'moment'

const Card = (props) => {
    const { title, description, channelTitle, thumbnails, publishedAt } = props.data.item.snippet
    const published = moment(publishedAt)
    const now = moment()
    const hour = now.diff(published, 'hour')
    const minutes = now.diff(published, 'minute')

    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: thumbnails.high.url }} style={styles.image} />
            <View style={styles.infoContainer}>
                <Text style={[styles.titleText, styles.defaultText]}>{title}</Text>
                <Text style={styles.defaultText}>from: {channelTitle}</Text>
                {minutes < 60 ? (<Text style={styles.defaultText}>{`${minutes} minutes ago`}</Text>) : (<Text style={styles.defaultText}>{`${hour} hour ago`}</Text>)}
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: '#414141',
        marginVertical: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    image: {
        width: 100,
        height: 100
    },
    infoContainer: {
        flex: 1,
        paddingLeft: 10,
        justifyContent: 'space-between',
    },
    titleText: {
        fontWeight: 'bold',
        fontSize: 16,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        marginRight: 10,
        paddingBottom: 10
    },
    defaultText:{
        color: '#FFF'
    }
})

export default Card