/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, View} from 'react-native';
import * as colors from './../../constants/colors';
import Author from './Author';
import Describe from './Describe';
import DisplayImageList from './DisplayImageList';
import LikeCommentAmountBar from './LikeCommentAmountBar';
import LikeCommentButtonBar from './LikeCommentButtonBar';

function PostWithImageList({
  id,
  author,
  state,
  created,
  described,
  image,
  like,
  comment,
  is_liked,
  handleImageListClick,
  handleLikeClick,
  handleCommentClick,
}) {
  return (
    <View style={styles.container}>
      <Author
        author={author}
        created={created}
        state={state}
        showOption={false}
      />
      <Describe describe={described} />
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
      <DisplayImageList
        images={image}
        handleImageListClick={handleImageListClick}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
});

export default PostWithImageList;
