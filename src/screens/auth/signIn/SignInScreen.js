import {Form, Input, Item} from 'native-base';
import React, {useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {
  ActivityIndicator,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import * as colors from '../../../constants/colors';
import {loginRequestFromSignInScreen} from '../../../slices/authSlice';

function SignInScreen({navigation}) {
  const {control, handleSubmit, errors} = useForm();
  const [focused, setFocused] = useState(false);
  const loadingLoginRequestFromSignInScreen = useSelector(
    (state) => state.auth.loadingLoginRequestFromSignInScreen,
  );
  const loginRequestFromSignInScreenStatus = useSelector(
    (state) => state.auth.loginRequestFromSignInScreenStatus,
  );
  const dispatch = useDispatch();

  let errorMsg = null;
  if (errors.phoneNumber || errors.password) {
    errorMsg = (
      <Text style={styles.error}>
        Vui lòng nhập đủ thông tin tài khoản của bạn.
      </Text>
    );
  }

  const onSubmit = (data) => {
    dispatch(
      loginRequestFromSignInScreen({
        phonenumber: data.phoneNumber,
        password: data.password,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        {focused ? (
          <Image
            source={require('./../../../../assets/images/facebookIcon.jpg')}
            style={styles.imageFocused}
          />
        ) : (
          <Image
            source={require('./../../../../assets/images/signInBackground.jpg')}
            style={styles.imageNotFocused}
          />
        )}
      </View>
      <View
        style={focused ? styles.viewFormFocused : styles.viewFormNotFocused}>
        {loginRequestFromSignInScreenStatus === 'FAILED' && (
          <Text style={styles.loginError}>Thông tin tài khoản không đúng!</Text>
        )}
        {errorMsg}
        <Form>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Item style={styles.item}>
                <Input
                  underlineColorAndroid={colors.blueA400}
                  selectionColor={colors.blue800}
                  onChangeText={(v) => onChange(v)}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Số điện thoại"
                  onFocus={() => {
                    setFocused(true);
                  }}
                />
              </Item>
            )}
            name="phoneNumber"
            rules={{required: true}}
            defaultValue=""
          />
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Item style={styles.item}>
                <Input
                  underlineColorAndroid={colors.blueA400}
                  selectionColor={colors.blue800}
                  onChangeText={(v) => onChange(v)}
                  onBlur={onBlur}
                  value={value}
                  placeholder="Mật khẩu"
                  secureTextEntry={true}
                  onFocus={() => {
                    setFocused(true);
                  }}
                />
              </Item>
            )}
            name="password"
            rules={{required: true}}
            defaultValue=""
          />
        </Form>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Đăng nhập</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomViewButton}>
          {focused ? (
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAccountScreen')}>
              <View style={styles.bFButton}>
                <Text style={styles.bFText}>Tạo tài khoản Facebook mới</Text>
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              onPress={() => navigation.navigate('CreateAccountScreen')}>
              <View style={styles.bNFButton}>
                <Text style={styles.bNFText}>Tạo tài khoản Facebook mới</Text>
              </View>
            </TouchableOpacity>
          )}
        </View>
      </View>
      <Modal visible={loadingLoginRequestFromSignInScreen} transparent={true}>
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
  },
  top: {
    alignItems: 'center',
    height: 200,
    justifyContent: 'center',
  },
  imageNotFocused: {
    height: '100%',
    resizeMode: 'cover',
    width: '100%',
  },
  imageFocused: {
    height: 60,
    width: 60,
  },
  error: {
    color: colors.redA400,
    marginTop: 12,
    textAlign: 'center',
  },
  loginError: {
    color: colors.redA400,
    textAlign: 'center',
  },
  viewFormNotFocused: {
    marginTop: 48,
    paddingLeft: 16,
    paddingRight: 32,
  },
  viewFormFocused: {
    paddingLeft: 16,
    paddingRight: 32,
  },
  item: {
    borderBottomWidth: 0,
  },
  viewButton: {
    alignSelf: 'stretch',
    marginHorizontal: 32,
    marginTop: 12,
  },
  button: {
    backgroundColor: colors.blueA400,
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottom: {
    bottom: 36,
    left: 0,
    position: 'absolute',
    right: 0,
  },
  bottomViewButton: {
    alignItems: 'center',
  },
  bNFButton: {
    backgroundColor: colors.green600,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  bNFText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bFButton: {
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 6,
  },
  bFText: {
    color: colors.blue800,
    fontSize: 16,
    fontWeight: 'bold',
  },
  modal: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
});

export default SignInScreen;
