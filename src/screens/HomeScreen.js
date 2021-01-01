import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  FlatList,
  Image,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';
import {useDispatch, useSelector} from 'react-redux';
import PostOptionOfMe from '../components/post/bottomSheet/PostOptionOfMe';
import PostOptionOfOther from '../components/post/bottomSheet/PostOptionOfOther';
import CreatePostCard from '../components/post/CreatePostCard';
import Post from '../components/post/Post';
import {
  checkListPostPersist,
  deletePostRequest,
  getListPostRequest,
  likeRequest,
  pullDownToRefreshListPostRequest,
  pullUpToLoadMoreListPostRequest,
} from '../slices/postSlice';
import * as colors from './../constants/colors';

function HomeScreen({navigation}) {
  const sheetPostOptionOfMeRef = useRef();
  const sheetPostOptionOfOtherRef = useRef();

  const [lastIdOfPostOption, setLastIdOfPostOption] = useState(null);

  const avatarMain = useSelector((state) => state.auth.avatarMain);
  const listPostMain = useSelector((state) => state.post.listPostMain);
  const checkListPostPersistCalled = useSelector(
    (state) => state.post.checkListPostPersistCalled,
  );
  const getListPostRequestCalled = useSelector(
    (state) => state.post.getListPostRequestCalled,
  );
  const loadingCreatePostRequest = useSelector(
    (state) => state.post.loadingCreatePostRequest,
  );
  const loadingPullDownToRefreshListPostRequest = useSelector(
    (state) => state.post.loadingPullDownToRefreshListPostRequest,
  );
  const dispatch = useDispatch();

  const handleCreatePost = () => {
    navigation.navigate('CreatePostScreen');
  };

  const editPost = () => {
    sheetPostOptionOfMeRef.current.close();
    navigation.navigate('EditPostScreen', {
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
            dispatch(deletePostRequest({postId: lastIdOfPostOption}));
          },
        },
        {
          text: 'CHỈNH SỬA',
          onPress: () => {
            navigation.navigate('EditPostScreen', {
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

  const reportPost = () => {
    sheetPostOptionOfOtherRef.current.close();
    navigation.navigate('ReportPostScreen', {
      postId: lastIdOfPostOption,
    });
  };

  const handleLikeClick = (postId) => {
    dispatch(likeRequest({postId}));
  };

  const handleCommentClick = (postId) => {
    navigation.navigate('CommentScreen', {
      postId,
    });
  };

  const turnOffNotification = () => {};

  const savePost = () => {};

  const copyLink = () => {};

  const turnOnNotification = () => {};

  const onRefresh = () => {
    dispatch(pullDownToRefreshListPostRequest());
  };

  const onEndReached = () => {
    dispatch(pullUpToLoadMoreListPostRequest());
  };

  // Side effect
  useEffect(() => {
    console.log('f1');
    dispatch(checkListPostPersist());
  }, []);

  useEffect(() => {
    console.log('f2');
    if (checkListPostPersistCalled && !getListPostRequestCalled) {
      console.log('f2.1');
      dispatch(getListPostRequest());
    }
  }, [checkListPostPersistCalled, getListPostRequestCalled]);

  const handlePostOptionClick = (option, postId) => {
    setLastIdOfPostOption(postId);
    if (option === 'ME') {
      sheetPostOptionOfMeRef.current.open();
    } else if (option === 'OTHER') {
      sheetPostOptionOfOtherRef.current.open();
    }
  };

  const handleImageClick = (key, postId) => {
    // key: ONE or MORE
    navigation.navigate('PostWithImageListScreen', {
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
          data={listPostMain}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.5}
          refreshControl={
            <RefreshControl
              refreshing={loadingPullDownToRefreshListPostRequest}
              onRefresh={onRefresh}
            />
          }
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
      <RBSheet
        ref={sheetPostOptionOfOtherRef}
        height={200}
        closeOnDragDown={true}
        openDuration={0}
        closeDuration={0}
        customStyles={{
          draggableIcon: {
            display: 'none',
          },
        }}>
        <PostOptionOfOther
          savePost={savePost}
          reportPost={reportPost}
          turnOnNotification={turnOnNotification}
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

export default HomeScreen;
