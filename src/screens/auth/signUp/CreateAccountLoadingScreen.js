import React, {useEffect} from 'react';
import {
  ActivityIndicator,
  Animated,
  Easing,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {signUpRequest} from '../../../slices/authSlice';
import * as colors from './../../../constants/colors';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const scaleValue = new Animated.Value(0);

const AnimatedIcon = new Animated.createAnimatedComponent(FontAwesome5);

function CreateAccountLoadingScreen({navigation}) {
  const scaleIconFirst = () => {
    scaleValue.setValue(0);
    Animated.timing(scaleValue, {
      toValue: 4,
      duration: 6000,
      easing: Easing.linear,
      useNativeDriver: false,
    }).start();
  };

  const iconSize = scaleValue.interpolate({
    inputRange: [0, 1.5, 2.5, 4],
    outputRange: [30, 80, 50, 70],
  });

  const phoneNumberCreated = useSelector(
    (state) => state.auth.phoneNumberCreated,
  );
  const passwordCreated = useSelector((state) => state.auth.passwordCreated);
  const loadingSignUpRequest = useSelector(
    (state) => state.auth.loadingSignUpRequest,
  );
  const createAccountStatus = useSelector(
    (state) => state.auth.createAccountStatus,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      signUpRequest({
        phonenumber: phoneNumberCreated,
        password: passwordCreated,
        uuid: `${Math.trunc(1000 + 9000 * Math.random())}`,
      }),
    );
    scaleIconFirst();
  }, []);

  useEffect(() => {
    if (createAccountStatus === 'SUCCESS') {
      setTimeout(() => {
        navigation.navigate('SignInAlertScreen');
      }, 1500);
    } else if (createAccountStatus === 'FAILED') {
      navigation.navigate('PhoneNumberScreen', {
        error: true,
      });
    }
  });

  if (createAccountStatus === 'SUCCESS') {
    return (
      <View style={styles.container}>
        <AnimatedIcon
          name={'thumbs-up'}
          color={'#0091EA'}
          solid
          size={iconSize}
        />
      </View>
    );
  }

  if (!loadingSignUpRequest) {
    return <View style={styles.container} />;
  } else {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={colors.grey700} />
        <Text style={styles.text}>Đang tạo tài khoản...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.white,
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: colors.grey700,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CreateAccountLoadingScreen;
