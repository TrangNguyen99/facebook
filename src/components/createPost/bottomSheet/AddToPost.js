import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../../../constants/colors';

function AddToPost({handleAddMedia, handleAddFeel}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <View style={styles.view}>
          <Ionicons name="videocam" color={colors.deepPurple400} size={24} />
          <Text style={styles.text}>Tạo phòng họp mặt</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddMedia}>
        <View style={styles.view}>
          <Ionicons name="images" color={colors.green500} size={24} />
          <Text style={styles.text}>Ảnh/Video</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.view}>
          <Ionicons name="person" color={colors.blueA400} size={24} />
          <Text style={styles.text}>Gắn thẻ bạn bè</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleAddFeel}>
        <View style={styles.view}>
          <Ionicons name="happy-outline" color={colors.yellow700} size={24} />
          <Text style={styles.text}>Cảm xúc/Hoạt động</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.view}>
          <Ionicons name="location-sharp" color={colors.red500} size={24} />
          <Text style={styles.text}>Check in</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.view}>
          <Ionicons name="videocam" color={colors.redA400} size={24} />
          <Text style={styles.text}>Phát trực tiếp</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.view}>
          <Ionicons name="text-sharp" color={colors.cyan300} size={24} />
          <Text style={styles.text}>Màu nền</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={styles.view}>
          <Ionicons name="camera-sharp" color={colors.blueA200} size={24} />
          <Text style={styles.text}>Camera</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopColor: colors.blueGrey100,
    borderTopWidth: 1,
    // height: 375,
  },
  view: {
    alignItems: 'center',
    borderBottomColor: colors.blueGrey100,
    borderBottomWidth: 1,
    flexDirection: 'row',
    padding: 10,
  },
  text: {
    color: colors.grey900,
    fontSize: 16,
    marginLeft: 10,
  },
});

export default AddToPost;
