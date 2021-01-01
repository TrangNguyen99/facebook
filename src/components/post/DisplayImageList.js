import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {WINDOW_WIDTH} from '../../helpers/dimension';
import * as colors from './../../constants/colors';

function DisplayImageList({images, handleImageListClick}) {
  if (!images) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleImageListClick}>
        <AutoHeightImage
          source={{uri: images[0].url}}
          width={WINDOW_WIDTH}
          style={styles.image}
        />
      </TouchableWithoutFeedback>
      {images[1] && (
        <TouchableWithoutFeedback onPress={handleImageListClick}>
          <AutoHeightImage
            source={{uri: images[1].url}}
            width={WINDOW_WIDTH}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
      )}
      {images[2] && (
        <TouchableWithoutFeedback onPress={handleImageListClick}>
          <AutoHeightImage
            source={{uri: images[2].url}}
            width={WINDOW_WIDTH}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
      )}
      {images[3] && (
        <TouchableWithoutFeedback onPress={handleImageListClick}>
          <AutoHeightImage
            source={{uri: images[3].url}}
            width={WINDOW_WIDTH}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueGrey100,
  },
  image: {
    marginTop: 5,
  },
});

export default DisplayImageList;
