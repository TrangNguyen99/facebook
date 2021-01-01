import React, {useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../../../constants/colors';

function BirthdayScreen({navigation}) {
  const [date, setDate] = useState(new Date(95, 9, 16));

  let errorMsg = null;
  if (date.getTime() > new Date(2015, 0, 1).getTime()) {
    errorMsg = (
      <Text style={styles.error}>
        Có vẻ như bạn đã nhập thông tin sai. Hãy đảm bảo sử dụng ngày sinh của
        mình.
      </Text>
    );
  }

  const onSubmit = () => {
    if (!errorMsg) {
      navigation.navigate('PhoneNumberScreen');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sinh nhật của bạn khi nào?</Text>
      <View style={styles.viewErrorMsg}>{errorMsg}</View>
      <View style={styles.viewErrorIcon}>
        {errorMsg && (
          <Ionicons name="alert-circle" color={colors.redA400} size={24} />
        )}
      </View>
      <DatePicker
        date={date}
        onDateChange={setDate}
        mode="date"
        androidVariant="nativeAndroid"
        maximumDate={new Date(2016, 9, 16)}
        minimumDate={new Date(5, 0, 1)}
      />
      <View style={styles.viewButton}>
        <TouchableOpacity onPress={onSubmit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Tiếp</Text>
          </View>
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
    paddingHorizontal: 24,
    paddingTop: 72,
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
  viewButton: {
    alignSelf: 'stretch',
    marginTop: 84,
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
});

export default BirthdayScreen;
