import AsyncStorage from '@react-native-community/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import authApi from '../apis/authApi';
import * as responses from './../constants/responses';

export const bootstrapAsync = createAsyncThunk(
  'auth/bootstrapAsync',
  async () => {
    try {
      let token, data;
      token = await AsyncStorage.getItem('tokenPersist');
      const jsonData = await AsyncStorage.getItem('dataPersist');
      data = jsonData !== null ? JSON.parse(jsonData) : null;
      console.log('bootstrapAsync token:', token);
      console.log('bootstrapAsync data:', data);
      if (token) {
        return {
          key: 'TD',
          token,
          data,
        };
      } else {
        if (data) {
          return {
            key: 'nTD',
            data,
          };
        } else {
          return {
            key: 'nTnD',
          };
        }
      }
    } catch (error) {
      console.log('Error at bootstrapAsync:', error.message);
    }
  },
);

export const signUpRequest = createAsyncThunk(
  'auth/signUpRequest',
  async (params) => {
    try {
      const response = await authApi.signUp(params);
      console.log('signUpRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at signUpRequest:', error.message);
    }
  },
);

export const loginRequestFromSignInAlertScreen = createAsyncThunk(
  'auth/loginRequestFromSignInAlertScreen',
  async (params) => {
    try {
      const response = await authApi.login(params);
      console.log('loginRequestFromSignInAlertScreen response:', response);
      return response;
    } catch (error) {
      console.log('Error at loginRequestFromSignInAlertScreen:', error.message);
    }
  },
);

export const saveTokenDataFromSignInAlertScreen = createAsyncThunk(
  'auth/saveDataFromSignInAlertScreen',
  async (params) => {
    try {
      await AsyncStorage.setItem('tokenPersist', params.token);
      let data;
      if (params.savePassword) {
        data = {
          id: params.id,
          username: params.username,
          phoneNumber: params.phoneNumber,
          password: params.password,
        };
      } else {
        data = {
          id: params.id,
          username: params.username,
          phoneNumber: params.phoneNumber,
        };
      }
      const jsonData = JSON.stringify(data);
      await AsyncStorage.setItem('dataPersist', jsonData);
      if (params.savePassword) {
        return {
          key: true,
          data: {
            id: params.id,
            username: params.username,
            phoneNumber: params.phoneNumber,
            password: params.password,
          },
        };
      } else {
        return {
          key: false,
          data: {
            id: params.id,
            username: params.username,
            phoneNumber: params.phoneNumber,
          },
        };
      }
    } catch (error) {
      console.log(
        'Error at saveTokenDataFromSignInAlertScreen:',
        error.message,
      );
    }
  },
);

export const getVerifyCodeRequest = createAsyncThunk(
  'auth/getVerifyCodeRequest',
  async (params) => {
    try {
      const response = await authApi.getVerifyCode(params);
      console.log('getVerifyCodeRequest response:', response);
    } catch (error) {
      console.log('Error at getVerifyCodeRequest:', error.message);
    }
  },
);

export const checkVerifyCodeRequest = createAsyncThunk(
  'auth/checkVerifyCodeRequest',
  async (params) => {
    try {
      const response = await authApi.checkVerifyCode(params);
      if (response.code === responses.OK) {
        await AsyncStorage.setItem('tokenPersist', response.data.token);
        // const jsonData = await AsyncStorage.getItem('dataPersist');
        // const data = JSON.parse(jsonData);
        // const newData = {
        //   ...data,
        //   id: response.data.id,
        // };
        // const newJsonData = JSON.stringify(newData);
        // await AsyncStorage.setItem('dataPersist', newJsonData);
      }
      console.log('checkVerifyCodeRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at checkVerifyCodeRequest:', error.message);
    }
  },
);

// is_blocked online
export const changeInfoAfterSignUpRequest = createAsyncThunk(
  'auth/changeInfoAfterSignUpRequest',
  async (params) => {
    try {
      const response = await authApi.changeInfoAfterSignUp(params);
      const jsonData = await AsyncStorage.getItem('dataPersist');
      const data = JSON.parse(jsonData);
      const newData = {
        ...data,
        avatar: response.data.avatar,
      };
      const newJsonData = JSON.stringify(newData);
      await AsyncStorage.setItem('dataPersist', newJsonData);
      console.log('changeInfoAfterSignUpRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at changeInfoAfterSignUpRequest:', error.message);
    }
  },
);

export const loginRequestFromSelectAccountScreen = createAsyncThunk(
  'auth/loginRequestFromSelectAccountScreen',
  async (params) => {
    try {
      const response = await authApi.login(params);
      if (response.code === responses.OK) {
        await AsyncStorage.setItem('tokenPersist', response.data.token);
      }
      console.log('loginRequestFromSelectAccountScreen response:', response);
      return response;
    } catch (error) {
      console.log(
        'Error at loginRequestFromSelectAccountScreen:',
        error.message,
      );
    }
  },
);

export const loginRequestFromSignInPersistScreen = createAsyncThunk(
  'auth/loginRequestFromSignInPersistScreen',
  async (params) => {
    try {
      const response = await authApi.login(params);
      console.log('loginRequestFromSignInPersistScreen response:', response);
      if (response.code === responses.OK) {
        await AsyncStorage.setItem('tokenPersist', response.data.token);
        const jsonData = await AsyncStorage.getItem('dataPersist');
        const data = JSON.parse(jsonData);
        const newData = {
          ...data,
          password: params.password,
        };
        const newJsonData = JSON.stringify(newData);
        await AsyncStorage.setItem('dataPersist', newJsonData);
        return {
          ...response,
          password: params.password,
        };
      }
      return response;
    } catch (error) {
      console.log(
        'Error at loginRequestFromSignInPersistScreen:',
        error.message,
      );
    }
  },
);

export const loginRequestFromSignInScreen = createAsyncThunk(
  'auth/loginRequestFromSignInScreen',
  async (params) => {
    try {
      const response = await authApi.login(params);
      console.log('loginRequestFromSignInScreen response:', response);
      if (response.code === responses.OK) {
        await AsyncStorage.setItem('tokenPersist', response.data.token);
        const data = {
          id: response.data.id,
          username: response.data.username,
          phoneNumber: params.phonenumber,
          password: params.password,
          avatar: response.data.avatar,
        };
        const jsonData = JSON.stringify(data);
        await AsyncStorage.setItem('dataPersist', jsonData);
        return {
          ...response,
          phoneNumber: params.phonenumber,
          password: params.password,
        };
      }
      return response;
    } catch (error) {
      console.log('Error at loginRequestFromSignInScreen', error.message);
    }
  },
);

export const logoutRequest = createAsyncThunk(
  'auth/logoutRequest',
  async (params) => {
    try {
      await AsyncStorage.removeItem('tokenPersist');
      const response = await authApi.logout(params);
      console.log('logoutRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at logoutRequest:', error.message);
    }
  },
);

const auth = createSlice({
  name: 'auth',
  initialState: {
    showSplash: true,
    inApp: false,

    idMain: null,
    usernameMain: null,
    phoneNumberMain: null,
    passwordMain: null,
    avatarMain: null,

    tokenPersist: null,
    tokenMain: null,

    haveDataPersist: false,
    idPersist: null,
    usernamePersist: null,
    phoneNumberPersist: null,
    passwordPersist: null,
    avatarPersist: null,

    usernameCreated: null,
    birthdayCreated: null,
    phoneNumberCreated: null,
    passwordCreated: null,
    avatarCreated: null,

    loadingSignUpRequest: false,
    createAccountStatus: null,

    loadingLoginRequestFromSignInAlertScreen: true,

    loadingCheckVerifyCodeRequest: false,
    checkVerifyCodeRequestStatus: null,

    loadingChangeInfoAfterSignUpRequest: false,

    loadingLoginRequestFromSelectAccountScreen: false,

    loadingLoginRequestFromSignInPersistScreen: false,
    loginRequestFromSignInPersistScreenStatus: null,

    loadingLoginRequestFromSignInScreen: false,
    loginRequestFromSignInScreenStatus: null,

    loadingLogoutRequest: false,
  },
  reducers: {
    saveUsernameCreated: (state, action) => {
      state.usernameCreated = action.payload.usernameCreated;
    },
    savePhoneNumberCreated: (state, action) => {
      state.phoneNumberCreated = action.payload.phoneNumberCreated;
    },
    savePasswordCreated: (state, action) => {
      state.passwordCreated = action.payload.passwordCreated;
    },
    resetCreateAccountStatus: (state) => {
      state.createAccountStatus = null;
    },
  },
  extraReducers: {
    [bootstrapAsync.pending]: () => {},
    [bootstrapAsync.rejected]: () => {},
    [bootstrapAsync.fulfilled]: (state, action) => {
      state.showSplash = false;
      if (action.payload.key === 'TD') {
        state.inApp = true;

        state.tokenMain = action.payload.token;
        state.idMain = action.payload.data.id;
        state.usernameMain = action.payload.data.username;
        state.phoneNumberMain = action.payload.data.phoneNumber;
        state.passwordMain = action.payload.data.password;
        state.avatarMain = action.payload.data.avatar;

        state.haveDataPersist = true;
        state.tokenPersist = action.payload.token;
        state.idPersist = action.payload.data.id;
        state.usernamePersist = action.payload.data.username;
        state.phoneNumberPersist = action.payload.data.phoneNumber;
        state.passwordPersist = action.payload.data.password;
        state.avatarPersist = action.payload.data.avatar;
      } else if (action.payload.key === 'nTD') {
        state.haveDataPersist = true;
        state.idPersist = action.payload.data.id;
        state.usernamePersist = action.payload.data.username;
        state.phoneNumberPersist = action.payload.data.phoneNumber;
        state.passwordPersist = action.payload.data.password;
        state.avatarPersist = action.payload.data.avatar;
      } // else if (action.payload.key === 'nTnD') {
      // nothing
      // }
    },

    [signUpRequest.pending]: (state) => {
      state.loadingSignUpRequest = true;
    },
    [signUpRequest.rejected]: () => {},
    [signUpRequest.fulfilled]: (state, action) => {
      state.loadingSignUpRequest = false;
      if (action.payload.code === responses.OK) {
        state.createAccountStatus = 'SUCCESS'; // logout
      } else {
        state.createAccountStatus = 'FAILED';
      }
    },

    [loginRequestFromSignInAlertScreen.pending]: () => {},
    [loginRequestFromSignInAlertScreen.rejected]: () => {},
    [loginRequestFromSignInAlertScreen.fulfilled]: (state, action) => {
      state.loadingLoginRequestFromSignInAlertScreen = false; // logout
      if (action.payload.code === responses.OK) {
        state.idMain = action.payload.data.id;
        state.tokenMain = action.payload.data.token;
      }
    },

    [saveTokenDataFromSignInAlertScreen.pending]: () => {},
    [saveTokenDataFromSignInAlertScreen.rejected]: () => {},
    [saveTokenDataFromSignInAlertScreen.fulfilled]: (state, action) => {
      state.haveDataPersist = true;
      state.idPersist = action.payload.data.id;
      state.usernamePersist = action.payload.data.username;
      state.phoneNumberPersist = action.payload.data.phoneNumber;
      state.passwordMain = state.passwordCreated;
      //
      state.usernameMain = action.payload.data.username;
      state.phoneNumberMain = action.payload.data.phoneNumber;
      if (action.payload.key) {
        state.passwordPersist = action.payload.data.password;
      } else {
        state.passwordPersist = null;
      }
    },

    [checkVerifyCodeRequest.pending]: (state) => {
      state.loadingCheckVerifyCodeRequest = true;
    },
    [checkVerifyCodeRequest.rejected]: () => {},
    [checkVerifyCodeRequest.fulfilled]: (state, action) => {
      state.loadingCheckVerifyCodeRequest = false;
      if (action.payload.code === responses.OK) {
        state.checkVerifyCodeRequestStatus = 'SUCCESS'; // logout
        state.tokenPersist = action.payload.data.token;
        state.idPersist = action.payload.data.id;
        state.tokenMain = action.payload.data.token;
        state.idMain = action.payload.data.id;
      } else {
        state.checkVerifyCodeRequestStatus = 'FAILED';
      }
    },

    [changeInfoAfterSignUpRequest.pending]: (state) => {
      state.loadingChangeInfoAfterSignUpRequest = true;
    },
    [changeInfoAfterSignUpRequest.rejected]: () => {},
    [changeInfoAfterSignUpRequest.fulfilled]: (state, action) => {
      state.loadingChangeInfoAfterSignUpRequest = false;
      if (action.payload.code === responses.OK) {
        state.inApp = true;
        state.avatarMain = action.payload.data.avatar;
        state.avatarPersist = action.payload.data.avatar;
        // state.usernameMain = action.payload.data.username;
        // state.phoneNumberMain = action.payload.data.phonenumber;
        // created
        // is_blocked No
        // online No
      }
    },

    [loginRequestFromSelectAccountScreen.pending]: (state) => {
      state.loadingLoginRequestFromSelectAccountScreen = true;
    },
    [loginRequestFromSelectAccountScreen.rejected]: () => {},
    [loginRequestFromSelectAccountScreen.fulfilled]: (state, action) => {
      state.loadingLoginRequestFromSelectAccountScreen = false;
      if (action.payload.code === responses.OK) {
        state.inApp = true;
        state.tokenMain = action.payload.data.token;
        state.idMain = action.payload.data.id;
        state.usernameMain = action.payload.data.username;
        state.phoneNumberMain = state.phoneNumberPersist;
        state.passwordMain = state.passwordPersist;
        state.avatarMain = action.payload.data.avatar;
        state.tokenPersist = action.payload.data.token;
      }
    },

    [loginRequestFromSignInPersistScreen.pending]: (state) => {
      state.loadingLoginRequestFromSignInPersistScreen = true;
    },
    [loginRequestFromSignInPersistScreen.rejected]: () => {},
    [loginRequestFromSignInPersistScreen.fulfilled]: (state, action) => {
      state.loadingLoginRequestFromSignInPersistScreen = false;
      if (action.payload.code === responses.OK) {
        state.inApp = true;
        state.tokenMain = action.payload.data.token;
        state.idMain = action.payload.data.id;
        state.usernameMain = action.payload.data.username;
        state.phoneNumberMain = state.phoneNumberPersist;
        state.passwordMain = action.payload.password;
        state.avatarMain = action.payload.data.avatar;
        state.tokenPersist = action.payload.data.token;
        state.passwordPersist = action.payload.password;
      } else {
        state.loginRequestFromSignInPersistScreenStatus = 'FAILED'; // logout
      }
    },

    [loginRequestFromSignInScreen.pending]: (state) => {
      state.loadingLoginRequestFromSignInScreen = true;
    },
    [loginRequestFromSignInScreen.rejected]: () => {},
    [loginRequestFromSignInScreen.fulfilled]: (state, action) => {
      state.loadingLoginRequestFromSignInScreen = false;
      if (action.payload.code === responses.OK) {
        state.inApp = true;

        state.tokenMain = action.payload.data.token;
        state.idMain = action.payload.data.id;
        state.usernameMain = action.payload.data.username;
        state.phoneNumberMain = action.payload.phoneNumber;
        state.passwordMain = action.payload.password;
        state.avatarMain = action.payload.data.avatar;

        state.haveDataPersist = true;
        state.tokenPersist = action.payload.data.token;
        state.idPersist = action.payload.data.id;
        state.usernamePersist = action.payload.data.username;
        state.phoneNumberPersist = action.payload.phoneNumber;
        state.passwordPersist = action.payload.password;
        state.avatarPersist = action.payload.data.avatar;
      } else {
        state.loginRequestFromSignInScreenStatus = 'FAILED'; // logout
      }
    },

    [logoutRequest.pending]: (state) => {
      state.loadingLogoutRequest = true;
    },
    [logoutRequest.rejected]: () => {},
    [logoutRequest.fulfilled]: (state, action) => {
      state.loadingLogoutRequest = false;
      state.inApp = false;
      state.tokenMain = null;
      state.tokenPersist = null;
      //
      state.createAccountStatus = null;
      state.loadingLoginRequestFromSignInAlertScreen = true;
      state.checkVerifyCodeRequestStatus = null;
      state.loginRequestFromSignInPersistScreenStatus = null;
      state.loginRequestFromSignInScreenStatus = null;
      if (action.payload.code === responses.OK) {
      } else {
      }
    },
  },
});

const {reducer, actions} = auth;

export const {
  saveUsernameCreated,
  savePhoneNumberCreated,
  savePasswordCreated,
  resetCreateAccountStatus,
} = actions;
export default reducer;
