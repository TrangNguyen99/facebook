import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../../constants/colors';
import RequestedFriend from './RequestedFriend';

function ListRequestedFriend({listRequestedFriend, total, handleSearchClick}) {
  const renderItem = ({item}) => (
    <RequestedFriend
      id={item.id}
      name={item.name}
      avatar={item.avatar}
      same_friends={item.same_friends}
      created={item.created}
    />
  );

  return (
    <FlatList
      ListHeaderComponent={() => (
        <>
          <View style={styles.header}>
            <Text style={styles.textHeader}>Bạn bè</Text>
            <TouchableOpacity onPress={handleSearchClick}>
              <View style={styles.searchIcon}>
                <Ionicons
                  name="search-sharp"
                  color={colors.grey900}
                  size={24}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.viewButton}>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Gợi ý</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Tất cả bạn bè</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.total}>
            <Text style={styles.textTotal}>
              Lời mời kết bạn{' '}
              <Text style={styles.textTotalPrimary}>{total}</Text>
            </Text>
            <TouchableOpacity>
              <Text style={styles.textViewAll}>Xem tất cả</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
      data={listRequestedFriend}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  textHeader: {
    color: colors.grey900,
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    backgroundColor: colors.blueGrey50,
    borderRadius: 16,
    padding: 4,
  },
  viewButton: {
    alignItems: 'center',
    borderBottomColor: colors.blueGrey50,
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  button: {
    backgroundColor: colors.blueGrey50,
    borderRadius: 16,
    marginRight: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  buttonText: {
    color: colors.grey900,
    fontSize: 16,
    fontWeight: 'bold',
  },
  total: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  textTotal: {
    color: colors.grey900,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textTotalPrimary: {
    color: colors.redA400,
    fontSize: 24,
    fontWeight: 'bold',
  },
  textViewAll: {
    color: colors.blue800,
    fontSize: 18,
  },
});

export default ListRequestedFriend;
