import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as colors from './../../../constants/colors';

function SaveDraft({saveAsADraft, quitPost, continueToEdit}) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerPrimary}>
          Bạn muốn hoàn thành bài viết của mình sau?
        </Text>
        <Text style={styles.headerSecondary}>
          Lưu làm bản nháp hoặc bạn có thể tiếp tục chỉnh sửa.
        </Text>
      </View>
      <TouchableOpacity onPress={saveAsADraft}>
        <View style={styles.touchableView}>
          <View style={styles.viewIcon}>
            <Ionicons
              name="bookmark-outline"
              color={colors.grey700}
              size={24}
            />
          </View>
          <View>
            <Text style={styles.headerPrimary}>Lưu làm bản nháp</Text>
            <Text style={styles.headerSecondary}>
              Bạn sẽ nhận được thông báo về bản nháp.
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={quitPost}>
        <View style={styles.touchableView}>
          <View style={styles.viewIcon}>
            <Ionicons name="trash-outline" color={colors.grey700} size={24} />
          </View>
          <Text style={styles.headerPrimary}>Bỏ bài viết</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={continueToEdit}>
        <View style={styles.touchableView}>
          <View style={styles.viewIcon}>
            <Ionicons
              name="checkmark-outline"
              color={colors.blueA400}
              size={24}
            />
          </View>
          <Text style={styles.continueText}>Tiếp tục chỉnh sửa</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopColor: colors.blueGrey100,
    borderTopWidth: 1,
    // height: 200,
  },
  header: {
    padding: 8,
  },
  headerPrimary: {
    color: colors.grey900,
    fontSize: 16,
  },
  headerSecondary: {
    color: colors.grey700,
  },
  touchableView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewIcon: {
    padding: 10,
  },
  continueText: {
    color: colors.blueA400,
    fontSize: 16,
  },
});

export default SaveDraft;
