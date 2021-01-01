import {Thumbnail} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../../constants/colors';

function CreatePostCard({avatar, handleCreatePost}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.text}>Bài viết</Text>
        <TouchableOpacity>
          <View style={styles.button1}>
            <Ionicons name="options-outline" color={colors.grey900} size={16} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.button2}>
            <Ionicons name="settings" color={colors.grey900} size={16} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity onPress={handleCreatePost}>
        <View style={styles.bottom}>
          <Thumbnail
            source={
              avatar
                ? {uri: avatar}
                : require('./../../../assets/images/defaultAvatar.jpg')
            }
            style={styles.thumbnail}
          />
          <Text style={styles.textSecondary}>Bạn đang nghĩ gì?</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    marginTop: 10,
  },
  top: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
  },
  text: {
    color: colors.grey900,
    flexGrow: 1,
    fontSize: 20,
    fontWeight: 'bold',
  },
  button1: {
    backgroundColor: colors.blueGrey50,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  button2: {
    backgroundColor: colors.blueGrey50,
    borderRadius: 4,
    marginLeft: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  bottom: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 8,
  },
  thumbnail: {
    height: 40,
    width: 40,
  },
  textSecondary: {
    color: colors.grey500,
    fontSize: 16,
    marginLeft: 12,
  },
});

export default CreatePostCard;
