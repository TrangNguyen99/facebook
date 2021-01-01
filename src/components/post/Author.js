import {Thumbnail} from 'native-base';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';
import {ACTIVITY, FEELING} from '../../constants/feelingActivity';
import {WINDOW_WIDTH} from '../../helpers/dimension';
import {timeAgo} from '../../helpers/timeAgo';
import * as colors from './../../constants/colors';

function Author({
  author,
  created,
  state,
  showOption,
  hideCreated,
  handlePostOptionClick,
}) {
  const idMain = useSelector((s) => s.auth.idMain);
  let authorTextComponent;
  if (state) {
    let stateRef = FEELING.find((element) => {
      return element.name === state;
    });

    if (stateRef) {
      authorTextComponent = (
        <Text style={styles.username}>
          {author.name}
          <Text style={styles.usernameFeeling}>
            {` - Đang ${stateRef.emoji.props.children} cảm thấy `}
          </Text>
          {state}
        </Text>
      );
    } else {
      stateRef = ACTIVITY.find((element) => {
        return element.name === state;
      });

      if (stateRef) {
        authorTextComponent = (
          <Text style={styles.username}>
            {author.name}
            <Text style={styles.usernameFeeling}>
              {` - Đang ${stateRef.emoji.props.children} `}
            </Text>
            {state}
          </Text>
        );
      } else {
        authorTextComponent = (
          <Text style={styles.username}>{author.name}</Text>
        );
      }
    }
  } else {
    authorTextComponent = <Text style={styles.username}>{author.name}</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.viewLeft}>
        <Thumbnail source={{uri: author.avatar}} style={styles.avatar} />
        {author.online === '1' && (
          <Ionicons
            style={styles.onlineState}
            name="ellipse"
            color={colors.lightGreenA700}
            size={12}
          />
        )}
      </View>
      <View style={styles.viewMid}>
        <View>
          <Text style={styles.text}>{authorTextComponent}</Text>
        </View>
        {!hideCreated && (
          <View>
            <Text style={styles.text}>{timeAgo(created)}</Text>
          </View>
        )}
      </View>
      <View style={styles.viewRight}>
        {showOption && (
          <TouchableOpacity
            onPress={() => {
              if (idMain === author.id) {
                handlePostOptionClick('ME');
              } else {
                handlePostOptionClick('OTHER');
              }
            }}>
            <Ionicons
              name="ellipsis-horizontal"
              color={colors.grey900}
              size={20}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8,
  },
  viewLeft: {
    flexBasis: 3,
    flexGrow: 3,
  },
  viewMid: {
    flexBasis: 18,
    flexGrow: 18,
  },
  viewRight: {
    flexBasis: 2,
    flexGrow: 2,
  },
  avatar: {
    height: ((WINDOW_WIDTH - 16) / 23) * 3 - 8,
    width: ((WINDOW_WIDTH - 16) / 23) * 3 - 8,
  },
  text: {
    color: colors.grey900,
    fontSize: 16,
  },
  username: {
    color: colors.grey900,
    fontSize: 16,
    fontWeight: 'bold',
  },
  usernameFeeling: {
    fontWeight: 'normal',
  },
  onlineState: {
    position: 'absolute',
    right: 10,
    top: 28,
  },
});

export default Author;
