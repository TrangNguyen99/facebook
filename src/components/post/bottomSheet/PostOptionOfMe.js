import React from 'react';
import {StyleSheet, View} from 'react-native';
import BottomSheetOption from '../../commom/BottomSheetOption';
import * as colors from './../../../constants/colors';

function PostOptionOfMe({
  turnOffNotification,
  savePost,
  deletePost,
  editPost,
  copyLink,
}) {
  return (
    <View style={styles.container}>
      <BottomSheetOption
        icon="notifications-outline"
        title="Tắt thông báo về bài viết này"
        handler={turnOffNotification}
      />
      <BottomSheetOption
        icon="bookmark-outline"
        title="Lưu bài viết"
        description="Thêm vào danh sách các mục đã lưu"
        handler={savePost}
      />
      <BottomSheetOption
        icon="trash-outline"
        title="Xóa"
        handler={deletePost}
      />
      <BottomSheetOption
        icon="pencil-outline"
        title="Chỉnh sửa bài viết"
        handler={editPost}
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

export default PostOptionOfMe;
