import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../../constants/colors';

function SavedSearch({
  id,
  keyword,
  created,
  handleSavedSearchClick,
  handleDeleteClick,
}) {
  return (
    <TouchableOpacity onPress={handleSavedSearchClick(keyword)}>
      <View style={styles.container}>
        <Ionicons
          name="search"
          color={colors.grey700}
          size={18}
          style={styles.search}
        />
        <Text style={styles.text}>{keyword}</Text>
        <TouchableOpacity
          onPress={() => {
            handleDeleteClick(id, keyword);
          }}>
          <Ionicons
            name="close"
            color={colors.grey700}
            size={24}
            style={styles.close}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  search: {},
  text: {
    color: colors.grey900,
    flexGrow: 1,
    marginLeft: 12,
  },
  close: {},
});

export default SavedSearch;
