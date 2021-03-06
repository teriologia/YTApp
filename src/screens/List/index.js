import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { fetchData, increaseMaxResult } from '../../actions';
import { Card } from '../../components'


const List = (props) => {
  const dispatch = useDispatch();
  const videoData = useSelector(state => state.videos.data)
  const maxResult = useSelector(state => state.videos.maxResult)
  const increment = 10
  const YTApiThreshold = 50; //youtube api maxResult acceptable values are 0 to 50, 

  useEffect(() => {
    if (props.route.params.location) {
      dispatch(fetchData(props.route.params.location, maxResult))
    }else{
      dispatch(fetchData(props.route.params.userLocation, maxResult))
    }
  }, [maxResult])
  useEffect(() => {
    if (props.route.params.location) {
      dispatch(fetchData(props.route.params.location))
    }
  }, [])

  return (
    <>
      <View style={{ flex: 1 }}>
        <FlatList
          contentContainerStyle={{ backgroundColor: '#252525', padding: 10 }}
          data={videoData.items}
          keyExtractor={(videoKeys) => videoKeys.id.videoId}
          onEndReached={() => maxResult < YTApiThreshold ? dispatch(increaseMaxResult(maxResult, increment)): null}
          onEndReachedThreshold={2}
          renderItem={(data) => {
            return (
              <Card data={data} />
            )
          }}
        />
      </View>
    </>
  );
};

export default List;
