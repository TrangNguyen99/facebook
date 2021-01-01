import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import CommentMyPostScreen from '../screens/post/CommentMyPostScreen';
import CommentScreen from '../screens/post/CommentScreen';
import CreatePostScreen from '../screens/post/CreatePostScreen';
import EditMyPostScreen from '../screens/post/EditMyPostScreens';
import EditPostScreen from '../screens/post/EditPostScreen';
import MyPostWithImageListScreen from '../screens/post/MyPostWithImageListScreen';
import FeelTabNavigator from '../screens/post/navigation/FeelTabNavigator';
import PostWithImageListScreen from '../screens/post/PostWithImageListScreen';
import ReportPostScreen from '../screens/post/ReportPostScreen';
import SearchResultScreen from '../screens/search/SearchResultScreen';
import SearchScreen from '../screens/search/SearchScreen';
import TopTabNavigator from './TopTabNavigator';

const Stack = createStackNavigator();

function MainStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="TopTabNavigator">
      <Stack.Screen name="TopTabNavigator" component={TopTabNavigator} />
      <Stack.Screen
        name="PostWithImageListScreen"
        component={PostWithImageListScreen}
        options={{
          title: 'Chi tiết bài viết',
        }}
      />
      <Stack.Screen
        name="MyPostWithImageListScreen"
        component={MyPostWithImageListScreen}
        options={{
          title: 'Chi tiết bài viết',
        }}
      />
      <Stack.Screen
        name="CreatePostScreen"
        component={CreatePostScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="FeelTabNavigator"
        component={FeelTabNavigator}
        options={{
          title: 'Cảm xúc/Hoạt động',
        }}
      />
      <Stack.Screen
        name="EditPostScreen"
        component={EditPostScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="EditMyPostScreen"
        component={EditMyPostScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ReportPostScreen"
        component={ReportPostScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CommentScreen"
        component={CommentScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="CommentMyPostScreen"
        component={CommentMyPostScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="SearchResultScreen"
        component={SearchResultScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStackNavigator;
