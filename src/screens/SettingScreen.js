import {Thumbnail} from 'native-base';
import React from 'react';
import {
  ActivityIndicator,
  BackHandler,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {WINDOW_WIDTH} from '../helpers/dimension';
import {logoutRequest} from '../slices/authSlice';
import * as colors from './../constants/colors';

function SettingScreen({navigation}) {
  const avatarMain = useSelector((state) => state.auth.avatarMain);
  const usernameMain = useSelector((state) => state.auth.usernameMain);
  const tokenMain = useSelector((state) => state.auth.tokenMain);
  const loadingLogoutRequest = useSelector(
    (state) => state.auth.loadingLogoutRequest,
  );
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(
      logoutRequest({
        token: tokenMain,
      }),
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textHeader}>Bạn bè</Text>
        <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')}>
          <View style={styles.searchIcon}>
            <Ionicons name="search-sharp" color={colors.grey900} size={24} />
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('PersonalScreen');
        }}>
        <View style={styles.viewPersonal}>
          <Thumbnail
            source={
              avatarMain
                ? {uri: avatarMain}
                : require('./../../assets/images/defaultAvatar.jpg')
            }
            style={styles.avatar}
          />
          <View style={styles.viewPersonalRight}>
            <Text style={styles.textUsername}>{usernameMain}</Text>
            <Text style={styles.textUsernameSecondary}>
              Xem trang cá nhân của bạn
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <Image
        source={require('./../../assets/images/setting.jpg')}
        style={styles.setting}
      />
      <TouchableOpacity onPress={onLogout}>
        <Text style={styles.textQuit}>Đăng xuất</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          BackHandler.exitApp();
        }}>
        <Text style={styles.textQuit}>Thoát</Text>
      </TouchableOpacity>
      <Modal visible={loadingLogoutRequest} transparent={true}>
        <View style={styles.modal}>
          <View style={styles.modalView}>
            <ActivityIndicator size="small" color={colors.grey700} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.blueGrey50,
    flex: 1,
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  textHeader: {
    color: colors.grey900,
    fontSize: 24,
    fontWeight: 'bold',
  },
  searchIcon: {
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 4,
  },
  viewPersonal: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  avatar: {
    height: 40,
    width: 40,
  },
  viewPersonalRight: {
    marginLeft: 12,
  },
  textUsername: {
    color: colors.grey900,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textUsernameSecondary: {
    color: colors.grey700,
    fontSize: 16,
  },
  setting: {
    height: WINDOW_WIDTH / (1023 / 1392),
    width: WINDOW_WIDTH,
  },
  textQuit: {
    color: colors.grey900,
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
    marginTop: 4,
  },
  modal: {
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
  },
  modalView: {
    backgroundColor: colors.white,
    margin: 30,
    padding: 30,
  },
});

export default SettingScreen;
