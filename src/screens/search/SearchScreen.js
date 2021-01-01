import React, {useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  Alert,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import ListSavedSearch from '../../components/search/ListSavedSearch';
import {
  delSavedSearchRequest,
  getSavedSearchRequest,
} from '../../slices/searchSlice';
import * as colors from './../../constants/colors';

function SearchScreen({navigation, route}) {
  const [keyword, setKeyword] = useState('');
  const inputRef = useRef(null);

  const listSavedSearch = useSelector((state) => state.search.listSavedSearch);
  const loadingGetSavedSearchRequest = useSelector(
    (state) => state.search.loadingGetSavedSearchRequest,
  );
  const loadingDelSavedSearchRequest = useSelector(
    (state) => state.search.loadingDelSavedSearchRequest,
  );
  const dispatch = useDispatch();

  const handleSavedSearchClick = (receiveKeyword) => {
    // navigation.navigate('SearchResultScreen', {keyword: receiveKeyword});
  };

  const handleDeleteClick = (id, receiveKeyword) => {
    Alert.alert(
      'Xóa tìm kiếm này khỏi lịch sử của bạn?',
      `Bạn đã tìm kiếm nội dung này trước đây. Nếu bạn xóa ${receiveKeyword} khỏi lịch sử, tìm kiếm đó sẽ bị gỡ khỏi lịch sử trên tất cả các thiết bị.`,
      [
        {
          text: 'HỦY',
          onPress: () => {},
        },
        {
          text: 'XÓA',
          onPress: () => {
            dispatch(delSavedSearchRequest({id}));
          },
        },
      ],
      {cancelable: false},
    );
  };

  useEffect(() => {
    dispatch(getSavedSearchRequest());
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.fakeView} />
      <View style={styles.top}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back-sharp" color={colors.grey900} size={28} />
        </TouchableOpacity>
        <View style={styles.inputView}>
          <TextInput
            ref={inputRef}
            onChangeText={(v) => {
              setKeyword(v);
            }}
            value={keyword}
            placeholder="Tìm kiếm"
            autoFocus={true}
            style={styles.input}
          />
          {keyword !== '' && (
            <TouchableOpacity
              onPress={() => {
                setKeyword('');
              }}>
              <Ionicons name="close" color={colors.grey700} size={20} />
            </TouchableOpacity>
          )}
        </View>
      </View>
      {keyword === '' ? (
        <>
          {loadingGetSavedSearchRequest ? (
            <ActivityIndicator
              size="small"
              color={colors.grey700}
              style={styles.loading}
            />
          ) : (
            <ListSavedSearch
              listSavedSearch={listSavedSearch}
              handleSavedSearchClick={handleSavedSearchClick}
              handleDeleteClick={handleDeleteClick}
            />
          )}
        </>
      ) : (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('SearchResultScreen', {keyword});
          }}>
          <Text style={styles.textSearchSecondary}>
            Xem kết quả cho{' '}
            <Text style={styles.textSearchPrimary}>{keyword}</Text>
          </Text>
        </TouchableOpacity>
      )}
      <Modal visible={loadingDelSavedSearchRequest} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <ActivityIndicator
              size="small"
              color={colors.grey700}
              style={styles.loading}
            />
            <Text style={styles.textModal}>Đang xử lý...</Text>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  top: {
    alignItems: 'center',
    borderBottomColor: colors.blueGrey100,
    borderBottomWidth: 1,
    flexDirection: 'row',
    left: 0,
    paddingHorizontal: 14,
    paddingVertical: 6,
    position: 'absolute',
    right: 0,
    top: 0,
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
    paddingVertical: 4,
  },
  input: {
    padding: 2,
    fontSize: 16,
    width: '85%',
  },
  fakeView: {
    height: 50,
  },
  loading: {
    marginTop: 12,
  },
  modal: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flexDirection: 'row',
    margin: 30,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  textModal: {
    marginLeft: 12,
  },
  textSearchSecondary: {
    color: colors.blueA400,
    fontSize: 16,
    marginLeft: 50,
    marginTop: 8,
  },
  textSearchPrimary: {
    color: colors.blueA400,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default SearchScreen;
