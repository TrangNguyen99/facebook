import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import searchApi from '../apis/searchApi';
import * as responses from './../constants/responses';

export const getSavedSearchRequest = createAsyncThunk(
  'auth/getSavedSearchRequest',
  async (params, thunkAPI) => {
    try {
      const response = await searchApi.getSavedSearch({
        token: thunkAPI.getState().auth.tokenMain,
        index: '0',
        count: '20',
      });
      console.log('getSavedSearchRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at getSavedSearchRequest:', error.message);
    }
  },
);

export const delSavedSearchRequest = createAsyncThunk(
  'auth/delSavedSearchRequest',
  async (params, thunkAPI) => {
    try {
      const response = await searchApi.getSavedSearch({
        token: thunkAPI.getState().auth.tokenMain,
        search_id: params.id,
        all: '0',
      });
      console.log('delSavedSearchRequest response:', response);
      return {
        ...response,
        id: params.id,
      };
    } catch (error) {
      console.log('Error at delSavedSearchRequest:', error.message);
    }
  },
);

export const searchRequest = createAsyncThunk(
  'auth/searchRequest',
  async (params, thunkAPI) => {
    try {
      const response = await searchApi.search({
        token: thunkAPI.getState().auth.tokenMain,
        keyword: params.keyword,
        user_id: thunkAPI.getState().auth.idMain,
        index: '0',
        count: '20',
      });
      console.log('searchRequest response:', response);
      return {
        ...response,
        keyword: params.keyword,
      };
    } catch (error) {
      console.log('Error at searchRequest:', error.message);
    }
  },
);

const search = createSlice({
  name: 'search',
  initialState: {
    listSavedSearch: [],

    loadingGetSavedSearchRequest: false,
    loadingDelSavedSearchRequest: false,

    listPostGetBySearch: [],

    loadingSearchRequest: false,
  },
  reducers: {},
  extraReducers: {
    [getSavedSearchRequest.pending]: (state) => {
      state.loadingGetSavedSearchRequest = true;
    },
    [getSavedSearchRequest.rejected]: () => {},
    [getSavedSearchRequest.fulfilled]: (state, action) => {
      state.loadingGetSavedSearchRequest = false;
      if (action.payload.code === responses.OK) {
        state.listSavedSearch = action.payload.data;
      }
    },

    [delSavedSearchRequest.pending]: (state) => {
      state.loadingDelSavedSearchRequest = true;
    },
    [delSavedSearchRequest.rejected]: () => {},
    [delSavedSearchRequest.fulfilled]: (state, action) => {
      state.loadingDelSavedSearchRequest = false;
      if (action.payload.code === responses.OK) {
        const index = state.listSavedSearch.findIndex(
          (element) => element.id === action.payload.id,
        );
        state.listSavedSearch.splice(index, 1);
      }
    },

    [searchRequest.pending]: (state) => {
      state.loadingSearchRequest = true;
    },
    [searchRequest.rejected]: () => {},
    [searchRequest.fulfilled]: (state, action) => {
      state.loadingSearchRequest = false;
      if (action.payload.code === responses.OK) {
        state.listPostGetBySearch = action.payload.data;
        const index = state.listSavedSearch.findIndex(
          (element) => element.keyword === action.payload.keyword,
        );
        if (index !== -1) {
          state.listSavedSearch.splice(index, 1);
        }
        state.listSavedSearch.unshift({
          id: `${Math.trunc(100000 + 900000 * Math.random())}`,
          keyword: action.payload.keyword,
          created: '',
        });
      }
    },
  },
});

const {reducer, actions} = search;

export const {} = actions;
export default reducer;
