import React from 'react';
import {StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';
import * as colors from './../../constants/colors';

function SubjectProblem({id, subject, isActive, handleSubjectProblemPress}) {
  if (!isActive) {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            handleSubjectProblemPress(id, 'NOT_ACTIVE');
          }}>
          <View style={styles.notActiveView}>
            <Text style={styles.notActiveText}>{subject}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPress={() => {
            handleSubjectProblemPress(id, 'ACTIVE');
          }}>
          <View style={styles.activeView}>
            <Text style={styles.activeText}>{subject}</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginRight: 5,
  },
  notActiveView: {
    borderRadius: 20,
    backgroundColor: colors.blueGrey50,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  notActiveText: {
    color: colors.grey900,
    fontWeight: 'bold',
  },
  activeView: {
    borderRadius: 20,
    backgroundColor: colors.blueA400,
    paddingHorizontal: 10,
    paddingVertical: 4,
  },
  activeText: {
    color: colors.white,
    fontWeight: 'bold',
  },
});

export default SubjectProblem;
