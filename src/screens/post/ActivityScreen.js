import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {ACTIVITY} from '../../constants/feelingActivity';
import {WINDOW_WIDTH} from '../../helpers/dimension';
import * as colors from './../../constants/colors';

function ActivityScreen({navigation, route}) {
  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CreatePostScreen', {
          type: 'ACTIVITY',
          emoji: item.emoji.props.children,
          name: item.name,
        });
      }}>
      <View style={styles.item}>
        <Text style={styles.emoji}>{item.emoji.props.children}</Text>
        <Text style={styles.text}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {route.params?.type === 'ACTIVITY' && (
        <View style={styles.feel}>
          <Text style={styles.emoji}>{route.params.emoji}</Text>
          <Text style={styles.textFeel}>{route.params.name}</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreatePostScreen', {
                type: 'DELETE',
              });
            }}>
            <Ionicons name="close" color={colors.grey900} size={24} />
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        data={ACTIVITY}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        horizontal={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  feel: {
    alignItems: 'center',
    borderColor: colors.grey500,
    borderWidth: 0.5,
    flexDirection: 'row',
    padding: 10,
  },
  textFeel: {
    color: colors.grey900,
    flexGrow: 1,
    marginLeft: 10,
  },
  item: {
    alignItems: 'center',
    borderColor: colors.grey500,
    borderWidth: 0.5,
    flexDirection: 'row',
    padding: 10,
    width: WINDOW_WIDTH / 2,
  },
  emoji: {
    fontSize: 30,
  },
  text: {
    color: colors.grey900,
    marginLeft: 10,
  },
});

export default ActivityScreen;
