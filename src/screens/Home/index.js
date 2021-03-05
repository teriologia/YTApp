import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';

const Home = () => {
  return (
    <>
     <View style={{flex: 1}}>
        <MapView
        provider={PROVIDER_GOOGLE}
        style={{flex: 1}}
        region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
        }}
        />
     </View>
    </>
  );
};

export default Home;
