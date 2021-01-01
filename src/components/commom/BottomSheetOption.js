import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../../constants/colors';

function BottomSheetOption({icon, title, description, handler}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handler}>
        <View style={styles.view}>
          <Ionicons
            name={icon}
            color={colors.grey700}
            size={24}
            style={styles.icon}
          />
          {description ? (
            <View>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.description}>{description}</Text>
            </View>
          ) : (
            <Text style={styles.title}>{title}</Text>
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 8,
  },
  view: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 8,
  },
  title: {
    color: colors.grey900,
    fontSize: 16,
  },
  description: {
    color: colors.grey700,
  },
});

export default BottomSheetOption;
