import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import * as colors from './../constants/colors';

function SplashScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../assets/images/facebookIcon.jpg')}
        style={styles.facebookIcon}
      />
      <View style={styles.view}>
        <Image
          source={require('./../../assets/images/splash.jpg')}
          style={styles.splash}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  facebookIcon: {
    height: 80,
    width: 80,
  },
  view: {
    bottom: 40,
    position: 'absolute',
  },
  splash: {
    height: 40,
    width: 160,
  },
});

export default SplashScreen;
