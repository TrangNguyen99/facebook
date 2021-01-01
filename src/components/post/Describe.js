import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import * as colors from './../../constants/colors';

function Describe({describe}) {
  if (!describe) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{describe}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
  },
  text: {
    color: colors.grey900,
    fontSize: 16,
    textAlign: 'justify',
  },
});

export default Describe;
