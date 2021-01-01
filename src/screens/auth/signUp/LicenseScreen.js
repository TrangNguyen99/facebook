import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {WINDOW_WIDTH} from '../../../helpers/dimension';
import * as colors from './../../../constants/colors';

function LicenseScreen({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image
          source={require('./../../../../assets/images/licenseTop.jpg')}
          style={styles.licenseTop}
        />
        <View style={styles.viewButton}>
          <TouchableOpacity
            onPress={() => navigation.navigate('CreateAccountLoadingScreen')}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Đăng ký</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Image
        source={require('./../../../../assets/images/licenseBottom.jpg')}
        style={styles.licenseBottom}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'space-between',
  },
  top: {},
  licenseTop: {
    height: WINDOW_WIDTH / (945 / 483),
    marginVertical: 32,
    resizeMode: 'stretch',
    width: WINDOW_WIDTH,
  },
  licenseBottom: {
    height: WINDOW_WIDTH / (945 / 279),
    marginBottom: 8,
    resizeMode: 'stretch',
    width: WINDOW_WIDTH,
  },
  viewButton: {
    alignSelf: 'stretch',
    marginHorizontal: 20,
  },
  button: {
    backgroundColor: colors.blueA400,
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
  },
});

export default LicenseScreen;
