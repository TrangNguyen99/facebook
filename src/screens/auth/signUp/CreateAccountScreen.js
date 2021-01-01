import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as colors from './../../../constants/colors';

function CreateAccountScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image
        source={require('./../../../../assets/images/joinFacebook.jpg')}
        style={styles.image}
      />
      <Text style={styles.textFirst}>Tham gia Facebook</Text>
      <Text style={styles.textSecond}>
        Chúng tôi sẽ giúp bạn tạo tài khoản mới sau vài bước dễ dàng
      </Text>
      <View style={styles.viewButton}>
        <TouchableOpacity onPress={() => navigation.navigate('NameScreen')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tiếp</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.bottomText}>Bạn đã có tài khoản?</Text>
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
    padding: 16,
  },
  image: {
    height: 180,
    marginTop: 36,
    width: 300,
  },
  textFirst: {
    color: colors.grey900,
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 32,
  },
  textSecond: {
    color: colors.grey700,
    marginTop: 16,
    textAlign: 'center',
  },
  viewButton: {
    alignSelf: 'stretch',
    marginTop: 50,
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
    color: colors.blue800,
    fontWeight: 'bold',
  },
});

export default CreateAccountScreen;
