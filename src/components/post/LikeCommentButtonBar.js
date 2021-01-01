import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../../constants/colors';

function LikeCommentButtonBar({liked, handleLikeClick, handleCommentClick}) {
  const likeButton = liked ? (
    <View style={styles.button}>
      {/* <Ionicons name="thumbs-up-sharp" color={colors.blueA400} size={20} /> */}
      <AntDesign name="like1" color={colors.blueA400} size={20} />
      <Text style={styles.textLiked}>Thích</Text>
    </View>
  ) : (
    <View style={styles.button}>
      {/* <Ionicons name="thumbs-up-outline" color={colors.grey700} size={20} /> */}
      <AntDesign name="like2" color={colors.grey700} size={20} />
      <Text style={styles.text}>Thích</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <TouchableOpacity onPress={handleLikeClick}>
          {likeButton}
        </TouchableOpacity>
      </View>
      <View style={styles.view}>
        <TouchableOpacity onPress={handleCommentClick}>
          <View style={styles.button}>
            <Ionicons name="chatbox-outline" color={colors.grey700} size={20} />
            <Text style={styles.text}>Bình luận</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderTopColor: colors.blueGrey100,
    borderTopWidth: 1,
    flexDirection: 'row',
  },
  view: {
    flexBasis: 1,
    flexGrow: 1,
  },
  button: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 8,
  },
  text: {
    color: colors.grey700,
    marginLeft: 5,
  },
  textLiked: {
    color: colors.blueA400,
    marginLeft: 5,
  },
});

export default LikeCommentButtonBar;
