import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import friendApi from '../apis/friendApi';
import * as responses from './../constants/responses';

export const getRequestedFriendRequest = createAsyncThunk(
  'auth/getRequestedFriendRequest',
  async (params, thunkAPI) => {
    try {
      const response = await friendApi.getRequestedFriend({
        token: thunkAPI.getState().auth.tokenMain,
        index: '0',
        count: '20',
      });
      console.log('getRequestedFriendRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at getRequestedFriendRequest:', error.message);
    }
  },
);

const friend = createSlice({
  name: 'friend',
  initialState: {
    listRequestedFriend: [],
    total: null,
  },
  reducers: {},
  extraReducers: {
    [getRequestedFriendRequest.pending]: () => {},
    [getRequestedFriendRequest.rejected]: () => {},
    [getRequestedFriendRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        state.listRequestedFriend = action.payload.data.request;
        state.total = action.payload.data.total;
      }
    },
  },
});

const {reducer, actions} = friend;

export const {} = actions;
export default reducer;
