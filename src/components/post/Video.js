import React from 'react';
import {View} from 'react-native';
import VideoPlayer from 'react-native-video-player';

function Video({video}) {
  if (!video) {
    return null;
  }

  return (
    <View>
      <VideoPlayer
        video={{uri: video.url}}
        thumbnail={{uri: video.thumb}}
        videoWidth={1600}
        videoHeight={900}
      />
    </View>
  );
}

export default Video;
