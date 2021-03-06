import React, { useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Text,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData, increaseMaxResult } from '../../actions';
import { Card, VideoModal } from '../../components'
import { onPressHandle } from './helper'


const List = (props) => {
  const dispatch = useDispatch();
  const [selectedData, setSelectedData] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const videoData = useSelector(state => state.videos.data)
  const maxResult = useSelector(state => state.videos.maxResult)
  const increment = 10
  const YTApiThreshold = 50; //youtube api maxResult acceptable values are 0 to 50, 
  const isvalid = videoData.items

  useEffect(() => {
    if (props.route.params.location) {
      dispatch(fetchData(props.route.params.location, maxResult))
    } else {
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
      {openModal && (<VideoModal data={selectedData} onPress={setOpenModal}  />)}
      <View style={{ flex: 1 }}>
        {isvalid && isvalid.length > 0 ? (
          <FlatList
            style={{ backgroundColor: '#252525', }}
            contentContainerStyle={{ backgroundColor: '#252525', padding: 10 }}
            data={videoData.items}
            keyExtractor={(videoKeys) => videoKeys.id.videoId}
            onEndReached={() => maxResult < YTApiThreshold ? dispatch(increaseMaxResult(maxResult, increment)) : null}
            onEndReachedThreshold={2}
            renderItem={(data) => {
              return (
                <Card data={data} onPress={(data) => onPressHandle(data, setSelectedData, setOpenModal, openModal)} />
              )
            }}
          />
        ) : (
          <View style={{ backgroundColor: '#252525', flex: 1, justifyContent: 'center', alignItems: 'center', }}>
            <Text style={{ color: '#FFF', fontSize: 16 }}>No Data</Text>
          </View>
        )}

      </View>
    </>
  );
};

export default List;
