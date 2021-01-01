import React, {useState} from 'react';
import {
  Alert,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import ListDetailProblem from '../../components/reportPost/ListDetailProblem';
import ListSubjectProblem from '../../components/reportPost/ListSubjectProblem';
import OtherProblem from '../../components/reportPost/OtherProblem';
import {REPORT_POST} from '../../constants/reportPost';
import {reportPostRequest} from '../../slices/postSlice';
import * as colors from './../../constants/colors';

function ReportPostScreen({navigation, route}) {
  const [subjectId, setSubjectId] = useState(null);
  const [detailId, setDetailId] = useState(null);

  const dispatch = useDispatch();

  const disabled =
    subjectId === null ||
    (subjectId !== null &&
      REPORT_POST[parseInt(subjectId, 10)].details.length > 0 &&
      detailId === null);

  const handleSubjectProblemPress = (id, key) => {
    setDetailId(null);
    if (key === 'NOT_ACTIVE') {
      setSubjectId(id);
    } else {
      // ACTIVE
      setSubjectId(null);
    }
  };

  const handleDetailProblemPress = (id, key) => {
    if (key === 'NOT_ACTIVE') {
      setDetailId(id);
    } else {
      // ACTIVE
      setDetailId(null);
    }
  };

  const onReport = () => {
    dispatch(
      reportPostRequest({
        id: route.params.postId,
        subject: REPORT_POST[parseInt(subjectId, 10)].subject,
        details: detailId
          ? REPORT_POST[parseInt(subjectId, 10)].details[parseInt(detailId, 10)]
              .name
          : '',
      }),
    );
    Alert.alert(
      'Báo cáo bài viết',
      'Chúng tôi đã nhận được báo cáo của bạn. Cảm ơn bạn đã phản hồi!',
      [
        {
          text: 'OK',
          onPress: () => navigation.goBack(),
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.hearder}>
        <Text style={styles.textHeader}>Báo cáo</Text>
        <View style={styles.close}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" color={colors.grey900} size={24} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.viewProblems}>
          <Image
            source={require('./../../../assets/images/reportPost.jpg')}
            style={styles.reportImage}
          />
          <Text style={styles.textPrimary}>
            Vui lòng chọn vấn đề để tiếp tục
          </Text>
          <Text style={styles.textSecondary}>
            Bạn có thể báo cáo bài viết sau khi chọn vấn đề
          </Text>
          <View style={styles.problems}>
            <ListSubjectProblem
              activeId={subjectId}
              handleSubjectProblemPress={handleSubjectProblemPress}
            />
            <OtherProblem />
          </View>
          {subjectId !== null &&
            REPORT_POST[parseInt(subjectId, 10)].details.length > 0 && (
              <Text style={styles.textThree}>
                Hãy giúp chúng tôi hiểu vấn đề.
              </Text>
            )}
          <View style={styles.problems}>
            <ListDetailProblem
              subjectId={subjectId}
              activeId={detailId}
              handleDetailProblemPress={handleDetailProblemPress}
            />
          </View>
        </View>
      </ScrollView>
      <View style={styles.viewButton}>
        <TouchableOpacity disabled={disabled} onPress={onReport}>
          <View style={disabled ? styles.buttonDisabled : styles.button}>
            <Text
              style={disabled ? styles.buttonTextDisabled : styles.buttonText}>
              Báo cáo
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flex: 1,
  },
  hearder: {
    borderBottomColor: colors.blueGrey100,
    borderBottomWidth: 1,
    padding: 12,
  },
  textHeader: {
    color: colors.grey900,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  close: {
    position: 'absolute',
    right: 12,
    top: 10,
  },
  viewProblems: {
    borderBottomColor: colors.blueGrey100,
    borderBottomWidth: 1,
    padding: 8,
  },
  reportImage: {
    height: 25,
    width: 25,
  },
  textPrimary: {
    color: colors.grey900,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textSecondary: {
    color: colors.grey700,
    marginBottom: 10,
  },
  textThree: {
    color: colors.grey900,
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    marginLeft: 3,
  },
  problems: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  viewButton: {
    borderTopColor: colors.blueGrey100,
    borderTopWidth: 1,
    padding: 8,
  },
  button: {
    backgroundColor: colors.blueA400,
    borderRadius: 6,
    padding: 8,
  },
  buttonText: {
    color: colors.white,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonDisabled: {
    backgroundColor: colors.blueGrey50,
    borderRadius: 6,
    padding: 8,
  },
  buttonTextDisabled: {
    color: colors.blueGrey100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default ReportPostScreen;
