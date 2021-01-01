import {Thumbnail} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from '../../constants/colors';

function CreatePostCard({avatar, handleCreatePost}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <TouchableOpacity>
          <Thumbnail
            source={
              avatar
                ? {uri: avatar}
                : require('./../../../assets/images/defaultAvatar.jpg')
            }
            style={styles.thumbnail}
          />
        </TouchableOpacity>
        <View style={styles.topView}>
          <TouchableOpacity onPress={handleCreatePost}>
            <View style={styles.topViewView}>
              <Text style={styles.topText}>Bạn đang nghĩ gì?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* <View style={styles.bottom}>
        <View style={styles.bottomView}>
          <TouchableOpacity>
            <View style={styles.bottomViewView}>
              <Ionicons
                name="create-outline"
                color={colors.deepPurple300}
                size={16}
              />
              <Text style={styles.bottomText}> Trạng thái</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomMidView}>
          <TouchableOpacity>
            <View style={styles.bottomViewView}>
              <Ionicons name="images" color={colors.lightGreen500} size={16} />
              <Text style={styles.bottomText}> Ảnh</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity>
            <View style={styles.bottomViewView}>
              <Ionicons
                name="videocam-outline"
                color={colors.purple400}
                size={16}
              />
              <Text style={styles.bottomText}> Phòng họp mặt</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 12,
    // borderBottomColor: colors.blueGrey100,
    // borderBottomWidth: 1,
  },
  thumbnail: {
    height: 40,
    width: 40,
  },
  topView: {
    flexGrow: 1,
    marginLeft: 8,
  },
  topViewView: {
    borderColor: colors.blueGrey100,
    borderRadius: 24,
    borderWidth: 1,
    paddingBottom: 6,
    paddingLeft: 20,
    paddingTop: 6,
  },
  topText: {
    color: colors.grey900,
    fontSize: 16,
  },
  // bottom: {
  //   flexDirection: 'row',
  //   padding: 12,
  // },
  // bottomView: {
  //   flexBasis: 1,
  //   flexGrow: 1,
  // },
  // bottomMidView: {
  //   borderLeftColor: colors.blueGrey100,
  //   borderLeftWidth: 1,
  //   borderRightColor: colors.blueGrey100,
  //   borderRightWidth: 1,
  //   flexBasis: 1,
  //   flexGrow: 1,
  // },
  // bottomViewView: {
  //   alignItems: 'center',
  //   flexDirection: 'row',
  //   justifyContent: 'center',
  // },
  // bottomText: {
  //   color: colors.grey700,
  // },
});

export default CreatePostCard;
