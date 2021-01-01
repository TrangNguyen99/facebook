import {Thumbnail} from 'native-base';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WINDOW_WIDTH} from '../../helpers/dimension';
import {timeAgo} from '../../helpers/timeAgo';
import * as colors from './../../constants/colors';

function Comment({id, comment, created, poster}) {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Thumbnail source={{uri: poster.avatar}} style={styles.avatar} />
      </View>
      <View style={styles.right}>
        <View style={styles.viewComment}>
          <Text style={styles.name}>{poster.name}</Text>
          <Text style={styles.comment}>{comment}</Text>
        </View>
        <Text style={styles.created}>{timeAgo(created)}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 8,
  },
  left: {
    flexBasis: 1,
    flexGrow: 1,
  },
  right: {
    flexBasis: 8,
    flexGrow: 8,
  },
  avatar: {
    height: (WINDOW_WIDTH - 16) / 9 - 4,
    width: (WINDOW_WIDTH - 16) / 9 - 4,
  },
  viewComment: {
    alignSelf: 'flex-start',
    backgroundColor: colors.blueGrey50,
    borderRadius: 20,
    padding: 8,
  },
  name: {
    color: colors.grey900,
    fontWeight: 'bold',
  },
  comment: {
    color: colors.grey900,
  },
  created: {
    color: colors.grey700,
    marginLeft: 8,
  },
});

export default Comment;
