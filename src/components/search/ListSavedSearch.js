import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import SavedSearch from './SavedSearch';
import * as colors from './../../constants/colors';

function ListSavedSearch({
  listSavedSearch,
  handleSavedSearchClick,
  handleDeleteClick,
}) {
  if (!listSavedSearch || listSavedSearch.length === 0) {
    return (
      <Image
        source={require('./../../../assets/images/search.jpg')}
        style={styles.image}
      />
    );
  }

  const renderItem = ({item}) => (
    <SavedSearch
      id={item.id}
      keyword={item.keyword}
      handleDeleteClick={handleDeleteClick}
      handleSavedSearchClick={handleSavedSearchClick}
    />
  );

  return (
    <FlatList
      ListHeaderComponent={() => (
        <View style={styles.header}>
          <Text style={styles.left}>Mới đây</Text>
          <TouchableOpacity>
            <Text style={styles.right}>CHỈNH SỬA</Text>
          </TouchableOpacity>
        </View>
      )}
      data={listSavedSearch}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    borderBottomColor: colors.blueGrey100,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  left: {
    color: colors.grey900,
    fontSize: 16,
    fontWeight: 'bold',
  },
  right: {
    color: colors.grey700,
    fontSize: 14,
  },
  image: {
    alignSelf: 'center',
    height: 180,
    marginTop: 40,
    resizeMode: 'stretch',
    width: 275,
  },
});

export default ListSavedSearch;
