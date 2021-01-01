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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {WINDOW_WIDTH} from '../../../helpers/dimension';
import {changeInfoAfterSignUpRequest} from '../../../slices/authSlice';
import * as colors from './../../../constants/colors';

function SeeYourPhotoScreen({navigation, route}) {
  const tokenMain = useSelector((state) => state.auth.tokenMain);
  const usernameCreated = useSelector((state) => state.auth.usernameCreated);
  const loadingChangeInfoAfterSignUpRequest = useSelector(
    (state) => state.auth.loadingChangeInfoAfterSignUpRequest,
  );
  const dispatch = useDispatch();

  const onSave = () => {
    dispatch(
      changeInfoAfterSignUpRequest({
        token: tokenMain,
        username: usernameCreated,
        avatar: route.params.uri,
      }),
    );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={onSave}>
          <Text style={styles.stackButton}>LƯU</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Đến: <Ionicons name="earth" color={colors.grey700} size={16} /> Công
        khai
      </Text>
      <Image style={styles.image} source={route.params} />
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
    backgroundColor: colors.white,
    flex: 1,
    padding: 20,
  },
  text: {
    color: colors.grey700,
  },
  image: {
    alignSelf: 'center',
    height: WINDOW_WIDTH * 0.85,
    marginTop: 10,
    resizeMode: 'cover',
    width: WINDOW_WIDTH * 0.85,
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

export default SeeYourPhotoScreen;
