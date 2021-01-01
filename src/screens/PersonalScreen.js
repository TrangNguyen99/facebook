import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import CreatePostCard from '../components/personal/CreatePostCard';
import PostOptionOfMe from '../components/post/bottomSheet/PostOptionOfMe';
import Post from '../components/post/Post';
import {
  deleteMyPostRequest,
  getListMyPostRequest,
  likeMyPostRequest,
} from '../slices/postSlice';
import * as colors from './../constants/colors';

function PersonalScreen({navigation}) {
  const sheetPostOptionOfMeRef = useRef();

  const avatarMain = useSelector((state) => state.auth.avatarMain);
  const [lastIdOfPostOption, setLastIdOfPostOption] = useState(null);

  const listMyPost = useSelector((state) => state.post.listMyPost);
  const loadingCreatePostRequest = useSelector(
    (state) => state.post.loadingCreatePostRequest,
  );
  const dispatch = useDispatch();

  const handleCreatePost = () => {
    navigation.navigate('CreatePostScreen');
  };

  const editPost = () => {
    sheetPostOptionOfMeRef.current.close();
    navigation.navigate('EditMyPostScreen', {
      postId: lastIdOfPostOption,
    });
  };

  const deletePost = () => {
    sheetPostOptionOfMeRef.current.close();
    Alert.alert(
      'Xóa bài viết?',
      'Bạn có thể chỉnh sửa bài viết nếu cần thay đổi.',
      [
        {
          text: 'XÓA',
          onPress: () => {
            dispatch(deleteMyPostRequest({postId: lastIdOfPostOption}));
          },
        },
        {
          text: 'CHỈNH SỬA',
          onPress: () => {
            navigation.navigate('EditMyPostScreen', {
              postId: lastIdOfPostOption,
            });
          },
        },
        {
          text: 'HỦY',
          onPress: () => {},
        },
      ],
      {cancelable: false},
    );
  };

  const handleLikeClick = (postId) => {
    dispatch(likeMyPostRequest({postId}));
  };

  const handleCommentClick = (postId) => {
    navigation.navigate('CommentMyPostScreen', {
      postId,
    });
  };

  const turnOffNotification = () => {};

  const savePost = () => {};

  const copyLink = () => {};

  useEffect(() => {
    dispatch(getListMyPostRequest());
  }, []);

  const handlePostOptionClick = (option, postId) => {
    setLastIdOfPostOption(postId);
    sheetPostOptionOfMeRef.current.open();
  };

  const handleImageClick = (key, postId) => {
    // key: ONE or MORE
    navigation.navigate('MyPostWithImageListScreen', {
      postId,
      showGallery: key === 'ONE',
    });
  };

  const renderItem = ({item}) => (
    <View style={styles.post}>
      <Post
        id={item.id}
        name={item.name}
        author={item.author}
        state={item.state}
        created={item.created}
        described={item.described}
        image={item.image}
        video={item.video}
        like={item.like}
        comment={item.comment}
        is_liked={item.is_liked}
        // is_blocked={item.is_blocked}
        // can_comment={item.can_comment}
        // can_edit={item.can_edit}
        // banned={item.banned}
        handlePostOptionClick={handlePostOptionClick}
        handleImageClick={handleImageClick}
        handleLikeClick={handleLikeClick}
        handleCommentClick={handleCommentClick}
      />
    </View>
  );

  return (
    <>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={() => (
            <>
              <CreatePostCard
                avatar={avatarMain}
                handleCreatePost={handleCreatePost}
              />
              {loadingCreatePostRequest && (
                <View style={styles.postingView}>
                  <Image
                    source={
                      avatarMain
                        ? {uri: avatarMain}
                        : require('./../../assets/images/defaultAvatar.jpg')
                    }
                    style={styles.postingAvatar}
                  />
                  <Text style={styles.postingText}>Đang đăng...</Text>
                  <ActivityIndicator size="small" color={colors.grey700} />
                </View>
              )}
            </>
          )}
          data={listMyPost}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
      <RBSheet
        ref={sheetPostOptionOfMeRef}
        height={230}
        closeOnDragDown={true}
        openDuration={0}
        closeDuration={0}
        customStyles={{
          draggableIcon: {
            display: 'none',
          },
        }}>
        <PostOptionOfMe
          turnOffNotification={turnOffNotification}
          savePost={savePost}
          deletePost={deletePost}
          editPost={editPost}
          copyLink={copyLink}
        />
      </RBSheet>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueGrey100,
    flex: 1,
  },
  post: {
    marginTop: 10,
  },
  postingView: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    padding: 8,
    marginTop: 10,
  },
  postingAvatar: {
    height: 40,
    width: 40,
  },
  postingText: {
    flexGrow: 1,
    marginLeft: 10,
  },
});

export default PersonalScreen;
