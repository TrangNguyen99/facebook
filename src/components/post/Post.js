import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as colors from './../../constants/colors';
import Author from './Author';
import Describe from './Describe';
import DisplayImageGrid from './DisplayImageGrid';
import LikeCommentAmountBar from './LikeCommentAmountBar';
import LikeCommentButtonBar from './LikeCommentButtonBar';
import Video from './Video';

function Post({
  id,
  name,
  author,
  state,
  created,
  modified,
  described,
  image,
  video,
  like,
  comment,
  is_liked,
  is_blocked,
  can_comment,
  can_edit,
  banned,
  handlePostOptionClick,
  handleImageClick,
  handleLikeClick,
  handleCommentClick,
}) {
  return (
    <View style={styles.container}>
      <Author
        author={author}
        created={created}
        state={state}
        showOption={true}
        handlePostOptionClick={(key) => {
          handlePostOptionClick(key, id);
        }}
      />
      <Describe describe={described} />
      <DisplayImageGrid
        images={image}
        handleImageClick={(key) => {
          handleImageClick(key, id);
        }}
      />
      <Video video={video} />
      <LikeCommentAmountBar
        like={like}
        comment={comment}
        liked={parseInt(is_liked, 10) === 1}
      />
      <LikeCommentButtonBar
        liked={parseInt(is_liked, 10) === 1}
        handleLikeClick={() => {
          handleLikeClick(id);
        }}
        handleCommentClick={() => {
          handleCommentClick(id);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});

export default Post;
