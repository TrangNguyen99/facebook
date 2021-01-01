import React, {useLayoutEffect} from 'react';
import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {useDispatch, useSelector} from 'react-redux';
import {changeInfoAfterSignUpRequest} from '../../../slices/authSlice';
import * as colors from './../../../constants/colors';

function AddYourPhotoScreen({navigation}) {
  const tokenMain = useSelector((state) => state.auth.tokenMain);
  const usernameCreated = useSelector((state) => state.auth.usernameCreated);
  const loadingChangeInfoAfterSignUpRequest = useSelector(
    (state) => state.auth.loadingChangeInfoAfterSignUpRequest,
  );
  const dispatch = useDispatch();

  const onIgnore = () => {
    dispatch(
      changeInfoAfterSignUpRequest({
        token: tokenMain,
        username: usernameCreated,
      }),
    );
  };

  const selectFromLibrary = () => {
    ImagePicker.launchImageLibrary(
      {
        storageOptions: {
          path: 'images',
        },
        mediaType: 'photo',
      },
      (response) => {
        if (response.didCancel) {
        } else if (response.error) {
        } else {
          const source = {uri: response.uri};
          console.log('File size:', response.fileSize);
          navigation.navigate('SeeYourPhotoScreen', source);
        }
      },
    );
  };

  const selectFromCamera = () => {
    ImagePicker.launchCamera(
      {
        storageOptions: {
          path: 'images',
        },
        mediaType: 'photo',
      },
      (response) => {
        if (response.didCancel) {
        } else if (response.error) {
        } else {
          const source = {uri: response.uri};
          console.log('File size:', response.fileSize);
          navigation.navigate('SeeYourPhotoScreen', source);
        }
      },
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onIgnore}>
          <Text style={styles.stackButton}>Bỏ qua</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hãy thêm ảnh đại diện để bạn bè dễ dàng tìm thấy bạn hơn
      </Text>
      <Image
        source={require('./../../../../assets/images/addYourPhoto.jpg')}
        style={styles.image}
      />
      <View style={styles.bottom}>
        <TouchableOpacity onPress={selectFromLibrary}>
          <View style={styles.topButton}>
            <Text style={styles.topButtonText}>Chọn từ thư viện</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={selectFromCamera}>
          <View style={styles.bottomButton}>
            <Text style={styles.bottomButtonText}>Chụp ảnh</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal visible={loadingChangeInfoAfterSignUpRequest} transparent={true}>
        <View style={styles.modal}>
          <ActivityIndicator size="large" color={colors.grey700} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    padding: 24,
  },
  text: {
    color: colors.grey900,
    fontSize: 22,
    textAlign: 'center',
  },
  image: {
    height: 140,
    marginTop: 36,
    width: 180,
  },
  bottom: {
    borderTopColor: colors.grey500,
    borderTopWidth: 0.5,
    bottom: 0,
    left: 0,
    padding: 20,
    position: 'absolute',
    right: 0,
  },
  topButton: {
    backgroundColor: colors.blueA400,
    borderRadius: 4,
    padding: 10,
  },
  topButtonText: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomButton: {
    backgroundColor: colors.blue50,
    borderRadius: 4,
    marginTop: 15,
    padding: 10,
  },
  bottomButtonText: {
    color: colors.blueA400,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  stackButton: {
    color: colors.grey700,
    marginRight: 12,
  },
  modal: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
});

export default AddYourPhotoScreen;
