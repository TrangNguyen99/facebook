import {configureStore} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import authReducer from '../slices/authSlice';
import friendReducer from '../slices/friendSlice';
import postReducer from '../slices/postSlice';
import searchReducer from '../slices/searchSlice';

const rootReducer = {
  auth: authReducer,
  post: postReducer,
  search: searchReducer,
  friend: friendReducer,
};

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export default store;
