import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {numberWithDot} from '../../helpers/numberWithDot';
import * as colors from './../../constants/colors';

function LikeCommentAmountBar({like, comment, liked}) {
  const usernameMain = useSelector((state) => state.auth.usernameMain);

  if (!like && !comment) {
    return null;
  }

  let likeWithoutMe = 0;
  if (like) {
    if (liked) {
      likeWithoutMe = like - 1;
    } else {
      likeWithoutMe = like;
    }
  }

  let likeComponent = null;
  if (likeWithoutMe) {
    likeComponent = (
      <View style={styles.viewLeft}>
        <Image
          source={require('./../../../assets/images/like.jpg')}
          style={styles.like}
        />
        <Text style={styles.textLike}>
          {liked
            ? `Bạn và ${numberWithDot(likeWithoutMe)} người khác`
            : numberWithDot(likeWithoutMe)}
        </Text>
      </View>
    );
  } else {
    if (liked) {
      likeComponent = (
        <View style={styles.viewLeft}>
          <Image
            source={require('./../../../assets/images/like.jpg')}
            style={styles.like}
          />
          <Text style={styles.textLike}>{usernameMain}</Text>
        </View>
      );
    }
  }

  return (
    <View>
      <TouchableOpacity
      // onPress={handleAmountBarClick}
      >
        <View style={styles.view}>
          {likeComponent}
          <View>
            {comment ? (
              <Text style={styles.textComment}>{`${numberWithDot(
                comment,
              )} bình luận`}</Text>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 8,
  },
  viewLeft: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  like: {
    height: 16,
    width: 16,
  },
  textLike: {
    color: colors.grey700,
    marginLeft: 4,
  },
  textComment: {
    color: colors.grey700,
  },
});

export default LikeCommentAmountBar;
