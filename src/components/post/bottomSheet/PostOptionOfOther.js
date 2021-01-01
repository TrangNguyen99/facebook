import React from 'react';
import {StyleSheet, View} from 'react-native';
import BottomSheetOption from '../../commom/BottomSheetOption';
import * as colors from './../../../constants/colors';

function PostOptionOfOther({
  savePost,
  reportPost,
  turnOnNotification,
  copyLink,
}) {
  return (
    <View style={styles.container}>
      <BottomSheetOption
        icon="bookmark-outline"
        title="Lưu bài viết"
        description="Thêm vào danh sách các mục đã lưu"
        handler={savePost}
      />
      <BottomSheetOption
        icon="trash-bin-outline"
        title="Tìm hỗ trợ hoặc báo cáo bài viết"
        description="Tôi lo ngại về bài viết này"
        handler={reportPost}
      />
      <BottomSheetOption
        icon="notifications-outline"
        title="Bật thông báo về bài viết này"
        handler={turnOnNotification}
      />
      <BottomSheetOption
        icon="copy-outline"
        title="Sao chép liên kết"
        handler={copyLink}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderTopColor: colors.blueGrey100,
    borderTopWidth: 1,
  },
});

export default PostOptionOfOther;
