/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import CommentHeader from '../../components/comment/CommentHeader';
import ListComment from '../../components/comment/ListComment';
import {WINDOW_WIDTH} from '../../helpers/dimension';
import {parseEmojis} from '../../helpers/parseEmojis';
import {
  getCommentRequest,
  getMoreCommentRequest,
  getPostById,
  setCommentRequest,
} from '../../slices/postSlice';
import * as colors from './../../constants/colors';

const spinValue = new Animated.Value(0);

function CommentScreen({route}) {
  const [size, setSize] = useState([
    {width: Math.trunc(200 + 100 * Math.random()), height: 50},
    {width: Math.trunc(200 + 100 * Math.random()), height: 50},
    {width: Math.trunc(200 + 100 * Math.random()), height: 50},
    {width: Math.trunc(200 + 100 * Math.random()), height: 50},
    {width: Math.trunc(200 + 100 * Math.random()), height: 50},
    {width: Math.trunc(200 + 100 * Math.random()), height: 50},
    {width: Math.trunc(200 + 100 * Math.random()), height: 50},
    {width: Math.trunc(200 + 100 * Math.random()), height: 50},
  ]);

  const spin = () => {
    let temp = [
      {
        width: Math.trunc(200 + 100 * Math.random()),
        height: 50,
      },
      {
        width: Math.trunc(200 + 100 * Math.random()),
        height: 50,
      },
      {
        width: Math.trunc(200 + 100 * Math.random()),
        height: 50,
      },
      {
        width: Math.trunc(200 + 100 * Math.random()),
        height: 50,
      },
      {
        width: Math.trunc(200 + 100 * Math.random()),
        height: 50,
      },
      {
        width: Math.trunc(200 + 100 * Math.random()),
        height: 50,
      },
      {
        width: Math.trunc(200 + 100 * Math.random()),
        height: 50,
      },
      {
        width: Math.trunc(200 + 100 * Math.random()),
        height: 50,
      },
    ];
    setSize(temp);
    spinValue.setValue(0);
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(() => {});
  };

  const spinA = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['#FFFFFF', 'rgba(218, 215, 215, 1)'],
  });

  const [isFirst, setIsFirst] = useState(true);
  const postGetById = useSelector((state) => state.post.postGetById);
  const network = useSelector((state) => state.post.network);
  const listCommentGetById = useSelector(
    (state) => state.post.listCommentGetById,
  );
  const loadingGetCommentRequest = useSelector(
    (state) => state.post.loadingGetCommentRequest,
  );
  const loadingGetMoreCommentRequest = useSelector(
    (state) => state.post.loadingGetMoreCommentRequest,
  );
  const [comment, setComment] = useState('');
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPostById({id: route.params.postId}));
    setIsFirst(false);
    spin();
  }, []);

  useEffect(() => {
    if (!isFirst) {
      dispatch(
        getCommentRequest({
          postId: route.params.postId,
        }),
      );
    }
  }, [isFirst]);

  if (isFirst) {
    return <View style={styles.container} />;
  }

  if (loadingGetCommentRequest) {
    return (
      <View style={styles.container}>
        <CommentHeader
          like={postGetById.like}
          isLiked={parseInt(postGetById.is_liked, 10) === 1}
        />
        <ScrollView>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 15,
            }}>
            <Animated.View
              style={{
                width: WINDOW_WIDTH / 8,
                height: WINDOW_WIDTH / 8,
                borderRadius: WINDOW_WIDTH / 8,
                backgroundColor: spinA,
              }}
            />
            <Animated.View
              style={{
                width: size[0].width,
                height: size[0].height,
                borderRadius: 20,
                backgroundColor: spinA,
                marginLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 15,
            }}>
            <Animated.View
              style={{
                width: WINDOW_WIDTH / 8,
                height: WINDOW_WIDTH / 8,
                borderRadius: WINDOW_WIDTH / 8,
                backgroundColor: spinA,
              }}
            />
            <Animated.View
              style={{
                width: size[1].width,
                height: size[1].height,
                borderRadius: 20,
                backgroundColor: spinA,
                marginLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 15,
            }}>
            <Animated.View
              style={{
                width: WINDOW_WIDTH / 8,
                height: WINDOW_WIDTH / 8,
                borderRadius: WINDOW_WIDTH / 8,
                backgroundColor: spinA,
              }}
            />
            <Animated.View
              style={{
                width: size[2].width,
                height: size[2].height,
                borderRadius: 20,
                backgroundColor: spinA,
                marginLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 15,
            }}>
            <Animated.View
              style={{
                width: WINDOW_WIDTH / 8,
                height: WINDOW_WIDTH / 8,
                borderRadius: WINDOW_WIDTH / 8,
                backgroundColor: spinA,
              }}
            />
            <Animated.View
              style={{
                width: size[3].width,
                height: size[3].height,
                borderRadius: 20,
                backgroundColor: spinA,
                marginLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 15,
            }}>
            <Animated.View
              style={{
                width: WINDOW_WIDTH / 8,
                height: WINDOW_WIDTH / 8,
                borderRadius: WINDOW_WIDTH / 8,
                backgroundColor: spinA,
              }}
            />
            <Animated.View
              style={{
                width: size[4].width,
                height: size[4].height,
                borderRadius: 20,
                backgroundColor: spinA,
                marginLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 15,
            }}>
            <Animated.View
              style={{
                width: WINDOW_WIDTH / 8,
                height: WINDOW_WIDTH / 8,
                borderRadius: WINDOW_WIDTH / 8,
                backgroundColor: spinA,
              }}
            />
            <Animated.View
              style={{
                width: size[5].width,
                height: size[5].height,
                borderRadius: 20,
                backgroundColor: spinA,
                marginLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 15,
            }}>
            <Animated.View
              style={{
                width: WINDOW_WIDTH / 8,
                height: WINDOW_WIDTH / 8,
                borderRadius: WINDOW_WIDTH / 8,
                backgroundColor: spinA,
              }}
            />
            <Animated.View
              style={{
                width: size[6].width,
                height: size[6].height,
                borderRadius: 20,
                backgroundColor: spinA,
                marginLeft: 20,
              }}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 8,
              paddingVertical: 15,
            }}>
            <Animated.View
              style={{
                width: WINDOW_WIDTH / 8,
                height: WINDOW_WIDTH / 8,
                borderRadius: WINDOW_WIDTH / 8,
                backgroundColor: spinA,
              }}
            />
            <Animated.View
              style={{
                width: size[7].width,
                height: size[7].height,
                borderRadius: 20,
                backgroundColor: spinA,
                marginLeft: 20,
              }}
            />
          </View>
        </ScrollView>
        <View style={styles.bottom}>
          <Ionicons name="camera-outline" color={colors.grey500} size={28} />
          <View style={styles.commentView}>
            <TextInput
              onChangeText={(v) => setComment(v)}
              value={comment}
              placeholder="Viết bình luận công khai..."
              style={styles.input}
              multiline={true}
            />
            {comment === '' ? (
              <Ionicons name="happy-outline" color={colors.grey500} size={28} />
            ) : (
              <TouchableOpacity>
                <Ionicons
                  name="paper-plane"
                  color={colors.blueA400}
                  size={28}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <CommentHeader
        like={postGetById.like}
        isLiked={parseInt(postGetById.is_liked, 10) === 1}
      />
      {network ? (
        <>
          {listCommentGetById.length ? (
            <>
              {loadingGetMoreCommentRequest ? (
                <ActivityIndicator
                  size="small"
                  color={colors.grey700}
                  style={styles.loading}
                />
              ) : (
                <TouchableOpacity
                  onPress={() => {
                    dispatch(
                      getMoreCommentRequest({
                        postId: route.params.postId,
                      }),
                    );
                  }}>
                  <Text style={styles.loadMoreComment}>
                    Xem các bình luận trước...
                  </Text>
                </TouchableOpacity>
              )}
              <ListComment listComment={listCommentGetById} />
              <View style={styles.fakeView} />
            </>
          ) : (
            <View style={styles.viewFirstComment}>
              <Image
                source={require('./../../../assets/images/firstComment.jpg')}
                style={styles.firstComment}
              />
            </View>
          )}
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            dispatch(
              getCommentRequest({
                postId: route.params.postId,
              }),
            );
          }}>
          <View style={styles.viewCommentOffline}>
            <Image
              source={require('./../../../assets/images/commentOffline.jpg')}
              style={styles.commentOffline}
            />
          </View>
        </TouchableOpacity>
      )}
      <View style={styles.bottom}>
        <Ionicons name="camera-outline" color={colors.grey500} size={28} />
        <View style={styles.commentView}>
          <TextInput
            ref={inputRef}
            onChangeText={(v) => {
              v = parseEmojis(v);
              setComment(v);
            }}
            value={comment}
            placeholder="Viết bình luận công khai..."
            autoFocus={true}
            multiline={true}
            style={styles.input}
          />
          {comment === '' ? (
            <Ionicons name="happy-outline" color={colors.grey500} size={28} />
          ) : (
            <TouchableOpacity
              onPress={() => {
                setComment('');
                inputRef.current.blur();
                dispatch(
                  setCommentRequest({
                    id: route.params.postId,
                    comment,
                  }),
                );
              }}>
              <Ionicons name="paper-plane" color={colors.blueA400} size={28} />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  bottom: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderTopColor: colors.blueGrey100,
    borderTopWidth: 1,
    bottom: 0,
    flexDirection: 'row',
    left: 0,
    paddingHorizontal: 14,
    paddingVertical: 4,
    position: 'absolute',
    right: 0,
  },
  commentView: {
    alignItems: 'center',
    backgroundColor: colors.blueGrey50,
    borderRadius: 24,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    marginLeft: 14,
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  input: {
    padding: 2,
    fontSize: 16,
    width: '85%',
  },
  viewCommentOffline: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  commentOffline: {
    height: 200,
    marginTop: -80,
    resizeMode: 'stretch',
    width: 220,
  },
  viewFirstComment: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  firstComment: {
    height: 250,
    marginTop: -180,
    resizeMode: 'stretch',
    width: 240,
  },
  loadMoreComment: {
    color: colors.grey900,
    fontWeight: 'bold',
    marginLeft: 12,
    marginVertical: 6,
  },
  fakeView: {
    height: 50,
  },
  loading: {
    marginVertical: 6,
  },
});

export default CommentScreen;
