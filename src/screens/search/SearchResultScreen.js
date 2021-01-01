import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../../constants/colors';
import {useDispatch, useSelector} from 'react-redux';
import {searchRequest} from '../../slices/searchSlice';
import Post from '../../components/post/Post';

function SearchResultScreen({navigation, route}) {
  const listPostGetBySearch = useSelector(
    (state) => state.search.listPostGetBySearch,
  );
  const loadingSearchRequest = useSelector(
    (state) => state.search.loadingSearchRequest,
  );
  const dispatch = useDispatch();

  const handlePostOptionClick = () => {};

  const handleImageClick = () => {};

  const handleLikeClick = () => {};

  const handleCommentClick = () => {};

  useEffect(() => {
    dispatch(searchRequest({keyword: route.params.keyword}));
  }, []);

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
        handlePostOptionClick={handlePostOptionClick}
        handleImageClick={handleImageClick}
        handleLikeClick={handleLikeClick}
        handleCommentClick={handleCommentClick}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.fakeView} />
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" color={colors.grey900} size={28} />
        </TouchableOpacity>
        <View style={styles.containerInputView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={styles.inputView}>
              <View style={styles.viewKeyword}>
                <Ionicons name="search" color={colors.grey700} size={16} />
                <Text style={styles.textKeyword}>{route.params.keyword}</Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('SearchScreen', {key: 'DELETE'});
                }}>
                <Ionicons name="close" color={colors.grey700} size={20} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {loadingSearchRequest ? (
        <ActivityIndicator
          size="small"
          color={colors.grey700}
          style={styles.loading}
        />
      ) : (
        <FlatList
          data={listPostGetBySearch}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueGrey100,
    flex: 1,
  },
  top: {
    alignItems: 'center',
    backgroundColor: colors.white,
    borderBottomColor: colors.blueGrey100,
    borderBottomWidth: 1,
    flexDirection: 'row',
    left: 0,
    paddingHorizontal: 14,
    paddingVertical: 4,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  containerInputView: {
    flexGrow: 1,
  },
  inputView: {
    alignItems: 'center',
    backgroundColor: colors.blueGrey50,
    borderRadius: 24,
    flexDirection: 'row',
    flexGrow: 1,
    justifyContent: 'space-between',
    marginLeft: 14,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  viewKeyword: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  textKeyword: {
    fontSize: 16,
    marginLeft: 4,
    padding: 2,
  },
  fakeView: {
    backgroundColor: colors.white,
    height: 36,
  },
  loading: {
    marginTop: 20,
  },
  post: {
    marginTop: 10,
  },
});

export default SearchResultScreen;
