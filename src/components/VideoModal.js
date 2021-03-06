import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import {publishDiff} from './cardhelper'


const VideoModal = (props) => {
    const { title, description, channelTitle, thumbnails, publishedAt } = props.data
    const publish = publishDiff(publishedAt)
    return (
        <View style={styles.modalContainer}>
            <View style={styles.infoContainer}>
                <TouchableOpacity style={styles.close} onPress={() => props.onPress(false)}>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>X</Text>
                </TouchableOpacity>
                <Image source={{ uri: thumbnails.high.url }} style={styles.image} />
                <View style={{ flex: 1 }}>
                    <Text style={[styles.textDefault, styles.title]}>{title}</Text>
                    <Text style={[styles.textDefault, styles.description]}>{description}</Text>
                    <Text style={[styles.textDefault, styles.from]}>Uploaded from: <Text style={{ fontWeight: 'bold', fontSize: 14 }}>{channelTitle}</Text></Text>
                    <Text style={[styles.textDefault, styles.from]}>Published: {publish.value} {publish.text}</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    modalContainer: {
        width: '100%',
        height: '100%',
        position: 'absolute',
        zIndex: 99,
        backgroundColor: 'rgba(99,99,99,0.50)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoContainer: {
        width: '90%',
        height: '90%',
        backgroundColor: '#414141',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,
        elevation: 6,
        borderRadius: 5,
        padding: 10,
    },
    close: {
        position: 'absolute',
        backgroundColor: '#FFF',
        width: 30,
        height: 30,
        borderRadius: 30 / 2,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 99,
        right: -10,
        top: -10,
    },
    image: {
        flex: 1,
        marginBottom: 20
    },
    textDefault: {
        color: '#FFF'
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    description: {
        marginTop: 20,
        borderBottomWidth: 2,
        borderBottomColor: '#d1d1d1',
        paddingBottom: 10,
    },
    from: {
        alignSelf: 'flex-end',
        marginTop: 20
    }
})

export default VideoModal