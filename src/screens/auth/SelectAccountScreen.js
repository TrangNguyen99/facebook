import {Thumbnail} from 'native-base';
import React from 'react';
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
import {loginRequestFromSelectAccountScreen} from '../../slices/authSlice';
import * as colors from './../../constants/colors';

function SelectAccountScreen({navigation}) {
  const haveDataPersist = useSelector((state) => state.auth.haveDataPersist);
  const avatarPersist = useSelector((state) => state.auth.avatarPersist);
  const usernamePersist = useSelector((state) => state.auth.usernamePersist);
  const phoneNumberPersist = useSelector(
    (state) => state.auth.phoneNumberPersist,
  );
  const passwordPersist = useSelector((state) => state.auth.passwordPersist);
  const loadingLoginRequestFromSelectAccountScreen = useSelector(
    (state) => state.auth.loadingLoginRequestFromSelectAccountScreen,
  );
  const dispatch = useDispatch();

  const onLogin = () => {
    if (passwordPersist) {
      dispatch(
        loginRequestFromSelectAccountScreen({
          phonenumber: phoneNumberPersist,
          password: passwordPersist,
        }),
      );
    } else {
      navigation.navigate('SignInPersistScreen');
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('./../../../assets/images/facebookIcon.jpg')}
          style={styles.facebookIcon}
        />
        {haveDataPersist && (
          <TouchableOpacity onPress={onLogin}>
            <View style={styles.signInPersist}>
              <Thumbnail
                source={
                  avatarPersist
                    ? {uri: avatarPersist}
                    : require('./../../../assets/images/defaultAvatar.jpg')
                }
                style={styles.avatar}
              />
              <Text style={styles.username}>{usernamePersist}</Text>
              <Ionicons
                name="ellipsis-vertical"
                color={colors.grey900}
                size={20}
              />
            </View>
          </TouchableOpacity>
        )}
        <TouchableOpacity onPress={() => navigation.navigate('SignInScreen')}>
          <View style={styles.signInOther}>
            <View style={styles.viewIcon}>
              <Ionicons name="add" color={colors.blue800} size={24} />
            </View>
            <Text style={styles.text}>Đăng nhập bằng tài khoản khác</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.signInOther}>
            <View style={styles.viewIcon}>
              <Ionicons
                name="search-outline"
                color={colors.blue800}
                size={24}
              />
            </View>
            <Text style={styles.text}>Tìm tài khoản</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => navigation.navigate('CreateAccountScreen')}>
          <View style={styles.bottomView}>
            <Text style={styles.bottomText}>TẠO TÀI KHOẢN FACEBOOK MỚI</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        visible={loadingLoginRequestFromSelectAccountScreen}
        transparent={true}>
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
    justifyContent: 'center',
    padding: 40,
  },
  facebookIcon: {
    alignSelf: 'center',
    height: 50,
    width: 50,
  },
  signInPersist: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 20,
    paddingVertical: 10,
  },
  avatar: {
    height: 50,
    width: 50,
  },
  username: {
    color: colors.grey900,
    flexGrow: 1,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  signInOther: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingVertical: 4,
  },
  viewIcon: {
    backgroundColor: colors.blue50,
    borderRadius: 6,
    padding: 2,
  },
  text: {
    color: colors.blue800,
    fontWeight: 'bold',
    marginLeft: 10,
  },
  bottom: {
    bottom: 40,
    left: 40,
    position: 'absolute',
    right: 40,
  },
  bottomView: {
    backgroundColor: colors.blue50,
    borderRadius: 8,
    padding: 8,
  },
  bottomText: {
    color: colors.blue800,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modal: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
});

export default SelectAccountScreen;
