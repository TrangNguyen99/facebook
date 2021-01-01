import React, {useEffect, useState} from 'react';
import {Modal, ScrollView} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useDispatch, useSelector} from 'react-redux';
import PostWithImageList from '../../components/post/PostWIthImageList';
import {getPostById, likeRequest} from '../../slices/postSlice';

function PostWithImageListScreen({navigation, route}) {
  const [showGallery, setShowGallery] = useState(route.params.showGallery);
  const postGetById = useSelector((state) => state.post.postGetById);
  const dispatch = useDispatch();

  const handleCommentClick = (postId) => {
    navigation.navigate('CommentScreen', {
      postId,
    });
  };

  useEffect(() => {
    dispatch(getPostById({id: route.params.postId}));
  }, []);

  if (postGetById?.id === route.params.postId) {
    let imageUrls = [];
    if (postGetById.image) {
      imageUrls = postGetById.image.map((element) => {
        return {url: element.url};
      });
    }

    return (
      <>
        {!route.params.showGallery && (
          <ScrollView>
            <PostWithImageList
              id={postGetById.id}
              author={postGetById.author}
              state={postGetById.state}
              created={postGetById.created}
              described={postGetById.described}
              image={postGetById.image}
              video={postGetById.video}
              like={postGetById.like}
              comment={postGetById.comment}
              is_liked={postGetById.is_liked}
              // ...
              handleImageListClick={() => {
                setShowGallery(true);
              }}
              handleLikeClick={async (postId) => {
                await dispatch(likeRequest({postId}));
                dispatch(getPostById({id: route.params.postId}));
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

export default PostWithImageListScreen;
