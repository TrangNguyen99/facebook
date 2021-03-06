import {Form, Input, Item, Label} from 'native-base';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {
  resetCreateAccountStatus,
  savePhoneNumberCreated,
} from '../../../slices/authSlice';
import * as colors from './../../../constants/colors';

function PhoneNumberScreen({navigation, route}) {
  const {control, handleSubmit, errors} = useForm();
  const dispatch = useDispatch();
  const haveErrorCreateAccount = route.params?.error ? true : false;

  let errorMsg = null;
  if (errors.phoneNumber) {
    errorMsg = (
      <Text style={styles.error}>
        Vui lòng nhập một số điện thoại hợp lệ hoặc dùng địa chỉ email của bạn.
      </Text>
    );
  }

  const onSubmit = (data) => {
    dispatch(
      savePhoneNumberCreated({
        phoneNumberCreated: data.phoneNumber,
      }),
    );
    if (haveErrorCreateAccount) {
      dispatch(resetCreateAccountStatus());
      navigation.navigate('CreateAccountLoadingScreen');
    } else {
      navigation.navigate('PasswordScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nhập số di động của bạn</Text>
      <View style={styles.viewErrorMsg}>
        {errorMsg}
        {haveErrorCreateAccount && (
          <Text style={styles.error}>
            Hiện đã có tài khoản liên kết với số điện thoại này.
          </Text>
        )}
      </View>
      <View style={styles.viewErrorIcon}>
        {errorMsg && (
          <Ionicons name="alert-circle" color={colors.redA400} size={24} />
        )}
        {haveErrorCreateAccount && (
          <Ionicons name="alert-circle" color={colors.redA400} size={24} />
        )}
      </View>
      <View style={styles.viewForm}>
        <Form style={styles.form}>
          <Controller
            control={control}
            render={({onChange, onBlur, value}) => (
              <Item floatingLabel style={styles.item}>
                <Label style={styles.label}>Số di động</Label>
                <Input
                  underlineColorAndroid={colors.blueA400}
                  selectionColor={colors.blue800}
                  keyboardType="phone-pad"
                  autoFocus
                  onChangeText={(v) => onChange(v)}
                  onBlur={onBlur}
                  value={value}
                />
              </Item>
            )}
            name="phoneNumber"
            rules={{
              required: true,
              pattern: /^[0]{1}[1-9]{1}[0-9]{8}$/,
            }}
            defaultValue=""
          />
        </Form>
      </View>
      <View style={styles.viewButton}>
        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tiếp</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity
          onPress={() => {
            // eslint-disable-next-line no-alert
            alert('Hệ thống chỉ cho đăng ký bằng số điện thoại!');
          }}>
          <Text style={styles.bottomText}>Đăng ký bằng địa chỉ email</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 48,
  },
  text: {
    color: colors.grey900,
    fontSize: 18,
    fontWeight: 'bold',
  },
  viewErrorMsg: {
    marginTop: 12,
    paddingHorizontal: 14,
  },
  viewErrorIcon: {
    alignSelf: 'flex-end',
  },
  error: {
    color: colors.redA400,
    textAlign: 'center',
  },
  viewForm: {
    flexDirection: 'row',
  },
  form: {
    flexDirection: 'row',
    flexGrow: 1,
  },
  item: {
    borderBottomWidth: 0,
    flexGrow: 1,
  },
  label: {
    color: colors.blue800,
    fontSize: 12,
  },
  viewButton: {
    alignSelf: 'stretch',
    marginHorizontal: 8,
    marginTop: 92,
  },
  button: {
    backgroundColor: colors.blueA400,
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    color: colors.white,
    textAlign: 'center',
  },
  bottom: {
    bottom: 16,
    position: 'absolute',
  },
  bottomText: {
    color: colors.blueA400,
    fontWeight: 'bold',
  },
});

export default PhoneNumberScreen;
