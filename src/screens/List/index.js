import React, {useEffect, useState} from 'react';
import {
  View,
  FlatList
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import { fetchData } from '../../actions'


const List = (props) => {
  const dispatch = useDispatch();
  const videoData = useSelector(state => state.videos.data)
  useEffect(() => {
    if(props.route.params.location){
      dispatch(fetchData(props.route.params.location))
    }
  }, [])
  
  return (
    <>
     <View style={{flex: 1}}>
        <FlatList 
          data={videoData}
        />
     </View>
    </>
  );
};

export default List;
