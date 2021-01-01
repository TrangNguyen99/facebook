import React, {useEffect, useState} from 'react';
import {Modal, ScrollView} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useDispatch, useSelector} from 'react-redux';
import PostWithImageList from '../../components/post/PostWIthImageList';
import {getMyPostById, likeMyPostRequest} from '../../slices/postSlice';

function MyPostWithImageListScreen({navigation, route}) {
  const [showGallery, setShowGallery] = useState(route.params.showGallery);
  const myPostGetById = useSelector((state) => state.post.myPostGetById);
  const dispatch = useDispatch();

  const handleCommentClick = (postId) => {
    navigation.navigate('CommentMyPostScreen', {
      postId,
    });
  };

  useEffect(() => {
    dispatch(getMyPostById({id: route.params.postId}));
  }, []);

  if (myPostGetById?.id === route.params.postId) {
    let imageUrls = [];
    if (myPostGetById.image) {
      imageUrls = myPostGetById.image.map((element) => {
        return {url: element.url};
      });
    }

    return (
      <>
        {!route.params.showGallery && (
          <ScrollView>
            <PostWithImageList
              id={myPostGetById.id}
              author={myPostGetById.author}
              state={myPostGetById.state}
              created={myPostGetById.created}
              described={myPostGetById.described}
              image={myPostGetById.image}
              video={myPostGetById.video}
              like={myPostGetById.like}
              comment={myPostGetById.comment}
              is_liked={myPostGetById.is_liked}
              // ...
              handleImageListClick={() => {
                setShowGallery(true);
              }}
              handleLikeClick={async (postId) => {
                await dispatch(likeMyPostRequest({postId}));
                dispatch(getMyPostById({id: route.params.postId}));
              }}
              handleCommentClick={handleCommentClick}
            />
          </ScrollView>
        )}
        <Modal visible={showGallery} transparent={true}>
          <ImageViewer
            imageUrls={imageUrls}
            enableSwipeDown
            onSwipeDown={() => {
              setShowGallery(false);
              if (route.params.showGallery) {
                navigation.goBack();
              }
            }}
            saveToLocalByLongPress={false}
          />
        </Modal>
      </>
    );
  } else {
    return null;
  }
}

export default MyPostWithImageListScreen;
