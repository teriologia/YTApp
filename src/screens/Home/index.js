import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { useSelector, useDispatch } from 'react-redux';
import Geolocation from '@react-native-community/geolocation';
import { StackActions } from "@react-navigation/native";
import { fetchData } from '../../actions'

const Home = (props) => {
  const dispatch = useDispatch();
  const [userLocation, setUserLocation] = useState({ longitude: 0, latitude: 0 })
  const [addedPoint, setAddedPoint] = useState(null);

  useEffect(() => {
    Geolocation.getCurrentPosition(
      async(position) => {
        setUserLocation({ longitude: position.coords.longitude, latitude: position.coords.latitude })
        dispatch(fetchData({ longitude: position.coords.longitude, latitude: position.coords.latitude }))
      },
      error => Alert.alert('Error', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }, [])

  return (
    <>
      <View style={{ flex: 1 }}>
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>{'Click the "show points" button or press and hold on the map '}</Text>
        </View>
        <MapView
          provider={PROVIDER_GOOGLE}
          style={{ flex: 1 }}
          showsMyLocationButton={true}
          showsUserLocation={true}
          onLongPress={(coords) => {
            setAddedPoint({ longitude: coords.nativeEvent.coordinate.longitude, latitude: coords.nativeEvent.coordinate.latitude })
          }}
          initialRegion={{
            latitude: userLocation.latitude,
            longitude: userLocation.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          {addedPoint && (
            <Marker
              coordinate={addedPoint}
            />
          )}
        </MapView>
        <TouchableOpacity style={styles.showButton} onPress={() => {
          const { navigation } = props;
          const replaceAction = StackActions.push(
            "List",
            {
              location: addedPoint,
            }
          );
          navigation.dispatch(replaceAction);
        }}>
          <Text style={styles.showButtonText}>{'Show Points'}</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  infoContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    backgroundColor: '#F4D58D'
  },
  infoText: {
    color: '#001427',
    fontSize: 19,
  },
  showButton: {
    position: 'absolute',
    width: '90%',
    bottom: 10,
    backgroundColor: '#001427',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15
  },
  showButtonText: {
    color: '#FFF',
    fontSize: 18
  }
})

export default Home;
