/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import MainStackNavigator from './src/navigation/MainStackNavigator';
import AuthStackNavigator from './src/screens/auth/navigation/AuthStackNavigator';
import SplashScreen from './src/screens/SplashScreen';
import {bootstrapAsync} from './src/slices/authSlice';

const App = () => {
  const showSplash = useSelector((state) => state.auth.showSplash);
  const inApp = useSelector((state) => state.auth.inApp);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bootstrapAsync());
  }, []);

  if (showSplash) {
    return <SplashScreen />;
  }

  if (inApp) {
    return <MainStackNavigator />;
  } else {
    return <AuthStackNavigator />;
  }
};

export default App;
