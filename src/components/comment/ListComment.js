import React from 'react';
import {FlatList} from 'react-native';
import Comment from './Comment';

function ListComment({listComment}) {
  const renderItem = ({item}) => (
    <Comment
      comment={item.comment}
      created={item.created}
      poster={item.poster}
    />
  );

  return (
    <FlatList
      data={listComment}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}

export default ListComment;
