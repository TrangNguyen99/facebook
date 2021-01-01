import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useSelector} from 'react-redux';
import {numberWithDot} from '../../helpers/numberWithDot';
import * as colors from './../../constants/colors';

function CommentHeader({like, isLiked}) {
  const usernameMain = useSelector((state) => state.auth.usernameMain);

  let likeWithoutMe = 0;
  if (like) {
    if (isLiked) {
      likeWithoutMe = like - 1;
    } else {
      likeWithoutMe = like;
    }
  }

  let likeComponent;
  if (likeWithoutMe) {
    likeComponent = (
      <View style={styles.left}>
        <Image
          source={require('./../../../assets/images/like.jpg')}
          style={styles.like}
        />
        <Text style={styles.text}>
          {isLiked
            ? `Bạn và ${numberWithDot(likeWithoutMe)} người khác`
            : numberWithDot(likeWithoutMe)}
        </Text>
      </View>
    );
  } else {
    if (isLiked) {
      likeComponent = (
        <View style={styles.left}>
          <Image
            source={require('./../../../assets/images/like.jpg')}
            style={styles.like}
          />
          <Text style={styles.text}>{usernameMain}</Text>
        </View>
      );
    } else {
      likeComponent = <View />;
    }
  }

  return (
    <View style={styles.container}>
      {likeComponent}
      {isLiked ? (
        <AntDesign name="like1" color={colors.blueA400} size={20} />
      ) : (
        <AntDesign name="like2" color={colors.grey700} size={20} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomColor: colors.blueGrey100,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 12,
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  like: {
    height: 16,
    width: 16,
  },
  text: {
    color: colors.grey900,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 4,
  },
});

export default CommentHeader;
