import {Thumbnail} from 'native-base';
import React, {useState} from 'react';
import {
  ActivityIndicator,
  Modal,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {loginRequestFromSignInPersistScreen} from '../../../slices/authSlice';
import * as colors from './../../../constants/colors';

function SignInPersistScreen() {
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const avatarPersist = useSelector((state) => state.auth.avatarPersist);
  const usernamePersist = useSelector((state) => state.auth.usernamePersist);
  const phoneNumberPersist = useSelector(
    (state) => state.auth.phoneNumberPersist,
  );
  const loadingLoginRequestFromSignInPersistScreen = useSelector(
    (state) => state.auth.loadingLoginRequestFromSignInPersistScreen,
  );
  const loginRequestFromSignInPersistScreenStatus = useSelector(
    (state) => state.auth.loginRequestFromSignInPersistScreenStatus,
  );
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(
      loginRequestFromSignInPersistScreen({
        phonenumber: phoneNumberPersist,
        password,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <Thumbnail
        source={
          avatarPersist
            ? {uri: avatarPersist}
            : require('./../../../../assets/images/defaultAvatar.jpg')
        }
        style={styles.avatar}
      />
      <Text style={styles.username}>{usernamePersist}</Text>
      {loginRequestFromSignInPersistScreenStatus === 'FAILED' && (
        <Text style={styles.error}>Mật khẩu không đúng!</Text>
      )}
      <View style={styles.viewPassword}>
        <TextInput
          style={styles.password}
          onChangeText={(v) => setPassword(v)}
          value={password}
          secureTextEntry={!display}
        />
        {password !== '' && (
          <TouchableOpacity
            onPress={() => {
              setDisplay(!display);
            }}>
            <Text style={styles.textDisplay}>
              {display ? 'ẨN' : 'HIỂN THỊ'}
            </Text>
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity disabled={password === ''} onPress={onSubmit}>
          <View style={styles.button}>
            <Text
              style={
                password === ''
                  ? styles.buttonTextDisabled
                  : styles.buttonTextNotDisabled
              }>
              ĐĂNG NHẬP
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <Modal
        visible={loadingLoginRequestFromSignInPersistScreen}
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
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 32,
  },
  avatar: {
    height: 70,
    width: 70,
  },
  username: {
    color: colors.grey900,
    marginTop: 10,
  },
  error: {
    color: colors.redA400,
  },
  viewPassword: {
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 16,
  },
  password: {
    borderColor: colors.blueGrey100,
    borderRadius: 4,
    borderWidth: 1,
    flexGrow: 1,
    height: 40,
  },
  textDisplay: {
    color: colors.grey900,
    fontWeight: 'bold',
    marginLeft: 4,
  },
  viewButton: {
    alignSelf: 'stretch',
    marginTop: 16,
  },
  button: {
    backgroundColor: colors.blueA400,
    borderRadius: 4,
    padding: 12,
  },
  buttonTextDisabled: {
    color: colors.blue200,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonTextNotDisabled: {
    color: colors.white,
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

export default SignInPersistScreen;
