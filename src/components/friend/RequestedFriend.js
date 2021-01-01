import {Thumbnail} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WINDOW_WIDTH} from '../../helpers/dimension';
import {timeAgo} from '../../helpers/timeAgo';
import * as colors from './../../constants/colors';

function RequestedFriend({id, name, avatar, same_friends, created}) {
  return (
    <View style={styles.container}>
      <Thumbnail source={{uri: avatar}} style={styles.avatar} />
      <View style={styles.right}>
        <View style={styles.rightTop}>
          <Text style={styles.textName}>{name}</Text>
          <Text style={styles.textCreated}>{timeAgo(created)}</Text>
        </View>
        <Text style={styles.textSameFriend}>{`${same_friends} bạn chung`}</Text>
        <View style={styles.rightBottom}>
          <View style={styles.viewButton}>
            <TouchableOpacity>
              <View style={styles.buttonLeft}>
                <Text style={styles.textButtonLeft}>Chấp nhận</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewButton}>
            <TouchableOpacity>
              <View style={styles.buttonRight}>
                <Text style={styles.textButtonRight}>Xóa</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  avatar: {
    borderRadius: WINDOW_WIDTH / 5,
    height: WINDOW_WIDTH / 5,
    width: WINDOW_WIDTH / 5,
  },
  right: {
    flexGrow: 1,
    marginLeft: 12,
  },
  rightTop: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textName: {
    color: colors.grey900,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textCreated: {
    color: colors.grey500,
  },
  textSameFriend: {
    color: colors.grey700,
  },
  rightBottom: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  viewButton: {
    flexBasis: 1,
    flexGrow: 1,
    marginTop: 6,
  },
  buttonLeft: {
    backgroundColor: colors.blueA400,
    borderRadius: 8,
    flexGrow: 1,
    marginRight: 4,
    paddingVertical: 6,
  },
  buttonRight: {
    backgroundColor: colors.blueGrey50,
    borderRadius: 8,
    flexGrow: 1,
    marginLeft: 4,
    paddingVertical: 6,
  },
  textButtonLeft: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textButtonRight: {
    color: colors.grey900,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RequestedFriend;
