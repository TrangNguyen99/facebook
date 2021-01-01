import React from 'react';
import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../constants/colors';

function NavBar({handleSearchClick}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/facebookTextIcon.jpg')}
        style={styles.logo}
      />
      <View style={styles.left}>
        <TouchableOpacity onPress={handleSearchClick}>
          <View style={styles.viewIcon}>
            <Ionicons name="search-sharp" color={colors.grey900} size={24} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.viewIcon}>
            <FontAwesome5
              name="facebook-messenger"
              color={colors.grey900}
              size={24}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  logo: {
    height: 25,
    resizeMode: 'stretch',
    width: 100,
  },
  left: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewIcon: {
    backgroundColor: colors.blueGrey50,
    borderRadius: 16,
    marginHorizontal: 6,
    padding: 4,
  },
});

export default NavBar;
