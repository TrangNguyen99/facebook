import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../../constants/colors';

function OtherProblem({handleOtherProblemPress}) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleOtherProblemPress}>
        <View style={styles.notActiveView}>
          <Ionicons name="search-sharp" color={colors.grey900} size={14} />
          <Text style={styles.notActiveText}> Vấn đề khác</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginRight: 5,
  },
  notActiveView: {
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: colors.blueGrey50,
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  notActiveText: {
    color: colors.grey900,
    fontWeight: 'bold',
  },
});

export default OtherProblem;
