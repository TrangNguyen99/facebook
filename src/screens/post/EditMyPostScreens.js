import React, {useEffect, useRef, useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import VideoPlayer from 'react-native-video-player';
import {useDispatch, useSelector} from 'react-redux';
import BottomSheet from 'reanimated-bottom-sheet';
import AddToPost from '../../components/createPost/bottomSheet/AddToPost';
import Author from '../../components/post/Author';
import {WINDOW_WIDTH} from '../../helpers/dimension';
import {parseEmojis} from '../../helpers/parseEmojis';
import {editMyPostRequest, getMyPostById} from '../../slices/postSlice';
import * as colors from './../../constants/colors';

function EditMyPostScreen({navigation, route}) {
  const myPostGetById = useSelector((state) => state.post.myPostGetById);
  const dispatch = useDispatch();

  const sheetAddToPostRef = useRef(null);
  const inputRef = useRef(null);

  const [described, setDescribed] = useState('');
  const [feelState, setFeelState] = useState(null);
  if (route.params?.type === 'FEELING' || route.params?.type === 'ACTIVITY') {
    setFeelState(route.params.name);
  }
  const [images, setImages] = useState([]);
  const [video, setVideo] = useState(null);
  const [mediaStatus, setMediaStatus] = useState(null);

  const [show, setShow] = useState(false);

  let gridImages = null;
  if (mediaStatus === 'image') {
    gridImages = (
      <View>
        <View style={styles.gridImagesViewLine}>
          <View style={styles.gridImagesViewView}>
            <Image source={images[0]} style={styles.gridImagesImage} />
            <View style={styles.gridImagesViewIcon}>
              <TouchableOpacity
                onPress={() => {
                  if (images.length === 1) {
                    setMediaStatus(null);
                    setImages([]);
                  } else {
                    const newImages = [...images];
                    newImages.splice(0, 1);
                    setImages(newImages);
                  }
                }}>
                <Ionicons name="close" color={colors.grey500} size={24} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.gridImagesViewView}>
            {images[1] ? (
              <>
                <Image source={images[1]} style={styles.gridImagesImage} />
                <View style={styles.gridImagesViewIcon}>
                  <TouchableOpacity
                    onPress={() => {
                      const newImages = [...images];
                      newImages.splice(1, 1);
                      setImages(newImages);
                    }}>
                    <Ionicons name="close" color={colors.grey500} size={24} />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <Image
                source={require('./../../../assets/images/addImage.png')}
                style={styles.gridImagesImage}
              />
            )}
          </View>
        </View>
        <View style={styles.gridImagesViewLine}>
          <View style={styles.gridImagesViewView}>
            {images[2] ? (
              <>
                <Image source={images[2]} style={styles.gridImagesImage} />
                <View style={styles.gridImagesViewIcon}>
                  <TouchableOpacity
                    onPress={() => {
                      const newImages = [...images];
                      newImages.splice(2, 1);
                      setImages(newImages);
                    }}>
                    <Ionicons name="close" color={colors.grey500} size={24} />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <Image
                source={require('./../../../assets/images/addImage.png')}
                style={styles.gridImagesImage}
              />
            )}
          </View>
          <View style={styles.gridImagesViewView}>
            {images[3] ? (
              <>
                <Image source={images[3]} style={styles.gridImagesImage} />
                <View style={styles.gridImagesViewIcon}>
                  <TouchableOpacity
                    onPress={() => {
                      const newImages = [...images];
                      newImages.splice(3, 1);
                      setImages(newImages);
                    }}>
                    <Ionicons name="close" color={colors.grey500} size={24} />
                  </TouchableOpacity>
                </View>
              </>
            ) : (
              <Image
                source={require('./../../../assets/images/addImage.png')}
                style={styles.gridImagesImage}
              />
            )}
          </View>
        </View>
      </View>
    );
  }

  const handleAddMedia = () => {
    ImagePicker.showImagePicker(
      {
        title: 'Ảnh/Video',
        mediaType: 'mixed',
        takePhotoButtonTitle: null,
        chooseFromLibraryButtonTitle: null,
        customButtons: [
          {
            name: 'myPhotoFromCamera',
            title: 'Chụp ảnh',
          },
          {
            name: 'myVideoFromCamera',
            title: 'Quay video',
          },
          {
            name: 'mylibrary',
            title: 'Thư viện',
          },
        ],
      },
      (response) => {
        if (response.customButton) {
          if (images.length >= 4) {
            // eslint-disable-next-line no-alert
            alert('Bạn đã thêm tối đa 4 ảnh rồi!');
            return;
          }
          if (mediaStatus === 'video') {
            // eslint-disable-next-line no-alert
            alert('Bạn đã thêm tối đa 1 video rồi!');
            return;
          }
        }
        if (response.customButton === 'myPhotoFromCamera') {
          ImagePicker.launchCamera(
            {
              storageOptions: {
                path: 'PhotoCamera',
              },
              mediaType: 'photo',
            },
            (myResponse) => {
              if (myResponse.didCancel) {
              } else if (myResponse.error) {
              } else {
                if (!mediaStatus) {
                  setMediaStatus('image');
                }
                const source = {uri: myResponse.uri};
                setImages([...images, source]);
              }
            },
          );
        } else if (response.customButton === 'myVideoFromCamera') {
          if (mediaStatus === 'image') {
            // eslint-disable-next-line no-alert
            alert(
              'Bạn chỉ được thêm một loại đa phương tiện. Bạn đã thêm ảnh!',
            );
            return;
          }
          ImagePicker.launchCamera(
            {
              storageOptions: {
                path: 'VideoCamera',
              },
              mediaType: 'video',
            },
            (myResponse) => {
              if (myResponse.didCancel) {
              } else if (myResponse.error) {
              } else {
                const source = {uri: myResponse.uri};
                setMediaStatus('video');
                setVideo(source);
              }
            },
          );
        } else if (response.customButton === 'mylibrary') {
          ImagePicker.launchImageLibrary(
            {
              storageOptions: {
                path: 'library',
              },
              mediaType: 'mixed',
            },
            (myResponse) => {
              if (myResponse.didCancel) {
              } else if (myResponse.error) {
              } else {
                const source = {uri: myResponse.uri};
                const type = myResponse.type;
                if (!mediaStatus) {
                  if (type === 'image/jpeg') {
                    setMediaStatus('image');
                    setImages([source]);
                  } else {
                    setMediaStatus('video');
                    setVideo(source);
                  }
                } else {
                  if (type === 'image/jpeg') {
                    setImages([...images, source]);
                  } else {
                    // eslint-disable-next-line no-alert
                    alert(
                      'Bạn chỉ được thêm một loại đa phương tiện. Bạn đã thêm ảnh!',
                    );
                  }
                }
              }
            },
          );
        }
      },
    );
  };

  const handleAddFeel = () => {};

  let disabled = true;
  if (show) {
    if (feelState !== myPostGetById.state) {
      disabled = false;
    } else if (described !== myPostGetById.described) {
      disabled = false;
    }

    if (disabled) {
      if (myPostGetById.image) {
        if (images.length !== myPostGetById.image.length) {
          disabled = false;
        } else {
          for (let i = 0; i < images.length; ++i) {
            if (images[i].uri !== myPostGetById.image[i].url) {
              disabled = false;
              break;
            }
          }
        }
      } else {
        if (images.length) {
          disabled = false;
        }
      }
    }

    if (disabled) {
      if (myPostGetById.video) {
        if (video.uri !== myPostGetById.video.url) {
          disabled = false;
        }
      } else {
        if (video) {
          disabled = false;
        }
      }
    }
  }

  const onGoBack = () => {
    if (!disabled) {
      Alert.alert(
        'Bỏ thay đổi?',
        'Nếu bỏ bây giờ thì bạn sẽ mất mọi thay đổi trên bài viết này.',
        [
          {
            text: 'TIẾP TỤC CHỈNH SỬA',
            onPress: () => {},
          },
          {
            text: 'BỎ',
            onPress: () => {
              navigation.goBack();
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      navigation.goBack();
    }
  };

  const onPost = async () => {
    await dispatch(
      editMyPostRequest({
        postId: route.params.postId,
        described,
        status: feelState,
        image:
          mediaStatus === 'image'
            ? images.map((value) => {
                return {url: value.uri};
              })
            : '',
        video:
          mediaStatus === 'video'
            ? {
                url: video.uri,
                thumb: myPostGetById.video ? myPostGetById.video.thumb : null,
              }
            : '',
      }),
    );
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(getMyPostById({id: route.params.postId}));
  }, []);

  useEffect(() => {
    if (myPostGetById?.id === route.params.postId && !show) {
      setDescribed(myPostGetById.described);
      setFeelState(myPostGetById.state);
      if (myPostGetById.image) {
        setImages(
          myPostGetById.image.map((value) => {
            return {uri: value.url};
          }),
        );
        setMediaStatus('image');
      }
      if (myPostGetById.video) {
        setVideo({uri: myPostGetById.video.url});
        setMediaStatus('video');
      }
      setShow(true);
    }
  }, [myPostGetById]);

  const renderAddToPost = () => (
    <AddToPost handleAddMedia={handleAddMedia} handleAddFeel={handleAddFeel} />
  );

  if (myPostGetById?.id === route.params.postId && show) {
    return (
      <>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={onGoBack}>
              <Ionicons
                name="arrow-back-sharp"
                color={colors.grey900}
                size={24}
              />
            </TouchableOpacity>
            <Text style={styles.headerMid}>Chỉnh sửa bài viết</Text>
            <TouchableOpacity disabled={disabled} onPress={onPost}>
              <Text
                style={
                  disabled
                    ? styles.stackTextDisabled
                    : styles.stackTextNotDisabled
                }>
                LƯU
              </Text>
            </TouchableOpacity>
          </View>
          <ScrollView style={styles.top}>
            <Author
              author={myPostGetById.author}
              state={feelState}
              showOption={false}
              hideCreated={true}
            />
            <TextInput
              ref={inputRef}
              multiline={true}
              placeholder="Bạn đang nghĩ gì?"
              selectionColor={colors.blue800}
              onFocus={() => {
                sheetAddToPostRef.current.snapTo(2);
              }}
              style={styles.input}
              onChangeText={(v) => {
                v = parseEmojis(v);
                setDescribed(v);
              }}
              value={described}
            />
            {mediaStatus === 'image' && gridImages}
            {mediaStatus === 'video' && (
              <>
                <View style={styles.viewCloseVideo}>
                  <TouchableOpacity
                    onPress={() => {
                      setVideo(null);
                      setMediaStatus(null);
                    }}>
                    <Ionicons name="close" color={colors.grey500} size={24} />
                  </TouchableOpacity>
                </View>
                <VideoPlayer
                  video={video}
                  thumbnail={{uri: myPostGetById.video.thumb}}
                  videoWidth={1600}
                  videoHeight={900}
                />
              </>
            )}
          </ScrollView>
          <TouchableOpacity
            onPress={() => {
              inputRef.current.blur();
              sheetAddToPostRef.current.snapTo(1);
            }}>
            <View style={styles.bottom}>
              <Text style={styles.bottomText}>Thêm vào bài viết của bạn</Text>
              <View style={styles.bottomIcons}>
                <Ionicons
                  name="videocam"
                  color={colors.deepPurple400}
                  size={24}
                />
                <Ionicons
                  name="images"
                  color={colors.green500}
                  size={24}
                  style={styles.bottomIcon}
                />
                <Ionicons
                  name="person"
                  color={colors.blueA400}
                  size={24}
                  style={styles.bottomIcon}
                />
                <Ionicons
                  name="happy-outline"
                  color={colors.yellow700}
                  size={24}
                  style={styles.bottomIcon}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <BottomSheet
          ref={sheetAddToPostRef}
          snapPoints={[375, 190, 0]}
          initialSnap={2}
          enabledContentTapInteraction={false}
          renderContent={renderAddToPost}
        />
      </>
    );
  } else {
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'flex-end',
  },
  top: {
    flexGrow: 1,
  },
  header: {
    alignItems: 'center',
    borderBottomColor: colors.grey500,
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    padding: 16,
  },
  headerMid: {
    color: colors.grey900,
    flexGrow: 1,
    fontSize: 18,
    marginLeft: 10,
  },
  // topView: {
  //   flexDirection: 'row',
  //   padding: 10,
  // },
  // authorLeft: {
  //   flexBasis: 1,
  //   flexGrow: 1,
  // },
  // authorRight: {
  //   flexBasis: 8,
  //   flexGrow: 8,
  //   paddingLeft: 10,
  // },
  // avatar: {
  //   height: (WINDOW_WIDTH - 20) / 9,
  //   width: (WINDOW_WIDTH - 20) / 9,
  // },
  // username: {
  //   color: colors.grey900,
  //   fontSize: 16,
  //   fontWeight: 'bold',
  // },
  // usernameFeeling: {
  //   fontWeight: 'normal',
  // },
  input: {
    color: colors.grey900,
    fontSize: 20,
  },
  bottom: {
    alignItems: 'center',
    borderTopColor: colors.blueGrey100,
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  bottomText: {
    color: colors.grey900,
    fontSize: 16,
  },
  bottomIcons: {
    flexDirection: 'row',
  },
  bottomIcon: {
    marginLeft: 2,
  },
  // stackButton: {
  //   marginRight: 10,
  // },
  stackTextDisabled: {
    color: colors.blueGrey100,
  },
  stackTextNotDisabled: {
    color: colors.blueA400,
  },
  gridImagesViewLine: {
    flexDirection: 'row',
  },
  gridImagesViewView: {
    flexBasis: 1,
    flexGrow: 1,
    padding: 3,
  },
  gridImagesImage: {
    height: WINDOW_WIDTH / 2 - 6,
    resizeMode: 'cover',
    width: '100%',
  },
  gridImagesViewIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  viewCloseVideo: {
    alignSelf: 'flex-end',
  },
});

export default EditMyPostScreen;
