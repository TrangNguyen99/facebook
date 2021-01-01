import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import ListRequestedFriend from '../components/friend/ListRequestedFriend';
import {getRequestedFriendRequest} from '../slices/friendSlice';
import * as colors from './../constants/colors';

function FriendScreen({navigation}) {
  const listRequestedFriend = useSelector(
    (state) => state.friend.listRequestedFriend,
  );
  const total = useSelector((state) => state.friend.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRequestedFriendRequest());
  }, []);

  return (
    <View style={styles.container}>
      <ListRequestedFriend
        listRequestedFriend={listRequestedFriend}
        total={total}
        handleSearchClick={() => navigation.navigate('SearchScreen')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
});

export default FriendScreen;
