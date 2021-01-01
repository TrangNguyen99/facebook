import React from 'react';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {WINDOW_WIDTH} from '../../helpers/dimension';

function DisplayImageGrid({images, handleImageClick}) {
  if (!images) {
    return null;
  }

  if (images.length === 1) {
    return (
      <View>
        <TouchableWithoutFeedback
          onPress={() => {
            handleImageClick('ONE');
          }}>
          <AutoHeightImage source={{uri: images[0].url}} width={WINDOW_WIDTH} />
        </TouchableWithoutFeedback>
      </View>
    );
  } else if (images.length === 2) {
    return (
      <View style={styles.container}>
        <View style={styles.twoViewLeft}>
          <TouchableWithoutFeedback
            onPress={() => {
              handleImageClick('MORE');
            }}>
            <Image source={{uri: images[0].url}} style={styles.imageTwo} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.twoViewRight}>
          <TouchableWithoutFeedback
            onPress={() => {
              handleImageClick('MORE');
            }}>
            <Image source={{uri: images[1].url}} style={styles.imageTwo} />
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  } else if (images.length === 3) {
    return (
      <View style={styles.container}>
        <View style={styles.threeViewLeft}>
          <TouchableWithoutFeedback
            onPress={() => {
              handleImageClick('MORE');
            }}>
            <Image
              source={{uri: images[0].url}}
              style={styles.imageThreeLeft}
            />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.threeViewRight}>
          <View>
            <TouchableWithoutFeedback
              onPress={() => {
                handleImageClick('MORE');
              }}>
              <Image
                source={{uri: images[1].url}}
                style={styles.imageThreeRight}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.threeViewRightBottom}>
            <TouchableWithoutFeedback
              onPress={() => {
                handleImageClick('MORE');
              }}>
              <Image
                source={{uri: images[2].url}}
                style={styles.imageThreeRight}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  } else if (images.length === 4) {
    return (
      <View style={styles.container}>
        <View style={styles.fourViewLeft}>
          <TouchableWithoutFeedback
            onPress={() => {
              handleImageClick('MORE');
            }}>
            <Image source={{uri: images[0].url}} style={styles.imageFourLeft} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.fourViewRight}>
          <View>
            <TouchableWithoutFeedback
              onPress={() => {
                handleImageClick('MORE');
              }}>
              <Image
                source={{uri: images[1].url}}
                style={styles.imageFourRight}
              />
            </TouchableWithoutFeedback>
          </View>
          <View style={styles.fourViewRightMid}>
            <TouchableWithoutFeedback
              onPress={() => {
                handleImageClick('MORE');
              }}>
              <Image
                source={{uri: images[2].url}}
                style={styles.imageFourRight}
              />
            </TouchableWithoutFeedback>
          </View>
          <View>
            <TouchableWithoutFeedback
              onPress={() => {
                handleImageClick('MORE');
              }}>
              <Image
                source={{uri: images[3].url}}
                style={styles.imageFourRight}
              />
            </TouchableWithoutFeedback>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  twoViewLeft: {
    flexBasis: 1,
    flexGrow: 1,
  },
  twoViewRight: {
    flexBasis: 1,
    flexGrow: 1,
    marginLeft: 2,
  },
  imageTwo: {
    height: WINDOW_WIDTH,
    resizeMode: 'cover',
    width: '100%',
  },
  threeViewLeft: {
    flexBasis: 1,
    flexGrow: 1,
  },
  imageThreeLeft: {
    height: WINDOW_WIDTH + 2,
    resizeMode: 'cover',
    width: '100%',
  },
  threeViewRight: {
    flexBasis: 1,
    flexGrow: 1,
    marginLeft: 2,
  },
  threeViewRightBottom: {
    marginTop: 2,
  },
  imageThreeRight: {
    height: WINDOW_WIDTH / 2,
    resizeMode: 'cover',
    width: '100%',
  },
  fourViewLeft: {
    flexBasis: 2,
    flexGrow: 2,
  },
  imageFourLeft: {
    height: WINDOW_WIDTH + 4,
    resizeMode: 'cover',
    width: '100%',
  },
  fourViewRight: {
    flexBasis: 1,
    flexGrow: 1,
    marginLeft: 2,
  },
  fourViewRightMid: {
    marginBottom: 2,
    marginTop: 2,
  },
  imageFourRight: {
    height: WINDOW_WIDTH / 3,
    resizeMode: 'cover',
    width: '100%',
  },
});

export default DisplayImageGrid;
