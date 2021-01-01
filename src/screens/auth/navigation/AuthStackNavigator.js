import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import SelectAccountScreen from '../SelectAccountScreen';
import SignInPersistScreen from '../signIn/SignInPersistScreen';
import SignInScreen from '../signIn/SignInScreen';
import AddYourPhotoScreen from '../signUp/AddYourPhotoScreen';
import BirthdayScreen from '../signUp/BirthdayScreen';
import CreateAccountLoadingScreen from '../signUp/CreateAccountLoadingScreen';
import CreateAccountScreen from '../signUp/CreateAccountScreen';
import LicenseScreen from '../signUp/LicenseScreen';
import NameScreen from '../signUp/NameScreen';
import PasswordScreen from '../signUp/PasswordScreen';
import PhoneNumberScreen from '../signUp/PhoneNumberScreen';
import SeeYourPhotoScreen from '../signUp/SeeYourPhotoScreen';
import SignInAlertScreen from '../signUp/SignInAlertScreen';
import VerifyAccountScreen from '../signUp/VerifyAccountScreen';

const Stack = createStackNavigator();

function AuthStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="SelectAccountScreen">
      <Stack.Screen
        name="SelectAccountScreen"
        component={SelectAccountScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CreateAccountScreen"
        component={CreateAccountScreen}
        options={{
          title: 'Tạo tài khoản',
        }}
      />
      <Stack.Screen
        name="NameScreen"
        component={NameScreen}
        options={{
          title: 'Tên',
        }}
      />
      <Stack.Screen
        name="BirthdayScreen"
        component={BirthdayScreen}
        options={{
          title: 'Ngày sinh',
        }}
      />
      <Stack.Screen
        name="PhoneNumberScreen"
        component={PhoneNumberScreen}
        options={{
          title: 'Số di động',
        }}
      />
      <Stack.Screen
        name="PasswordScreen"
        component={PasswordScreen}
        options={{
          title: 'Mật khẩu',
        }}
      />
      <Stack.Screen
        name="LicenseScreen"
        component={LicenseScreen}
        options={{
          title: 'Điều khoản & quyền riêng tư',
        }}
      />
      <Stack.Screen
        name="CreateAccountLoadingScreen"
        component={CreateAccountLoadingScreen}
        options={{
          title: 'Tạo tài khoản',
        }}
      />
      <Stack.Screen
        name="SignInAlertScreen"
        component={SignInAlertScreen}
        options={{
          headerLeft: () => null,
          title: 'Đang đăng nhập...',
        }}
      />
      <Stack.Screen
        name="VerifyAccountScreen"
        component={VerifyAccountScreen}
        options={{
          headerLeft: () => null,
          title: 'Xác nhận Tài khoản',
        }}
      />
      <Stack.Screen
        name="AddYourPhotoScreen"
        component={AddYourPhotoScreen}
        options={{
          headerLeft: () => null,
          title: 'Thêm ảnh của bạn',
        }}
      />
      <Stack.Screen
        name="SeeYourPhotoScreen"
        component={SeeYourPhotoScreen}
        options={{
          title: 'Xem trước',
        }}
      />
      <Stack.Screen
        name="SignInPersistScreen"
        component={SignInPersistScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default AuthStackNavigator;
