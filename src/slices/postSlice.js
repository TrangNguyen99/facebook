import AsyncStorage from '@react-native-community/async-storage';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import postApi from '../apis/postApi';
import NetworkUtils from '../helpers/NetworkUtils';
import * as responses from './../constants/responses';

// Kiểm tra listPostPersist và trả về listPostPersist hoặc null
export const checkListPostPersist = createAsyncThunk(
  'post/checkListPostPersist',
  async () => {
    try {
      console.log('f3');
      await AsyncStorage.removeItem('listPostPersist');

      const listPostPersistJson = await AsyncStorage.getItem('listPostPersist');
      if (listPostPersistJson) {
        console.log('f3.1');
        const listPostPersist = JSON.parse(listPostPersistJson);
        return listPostPersist;
      } else {
        console.log('f3.2');
        return null;
      }
    } catch (error) {
      console.log('Error at checkListPostPersist:', error.message);
    }
  },
);

export const getListPostRequest = createAsyncThunk(
  'post/getListPostRequest',
  async (params, thunkAPI) => {
    try {
      console.log('f4');
      const listPostPersist = thunkAPI.getState().post.listPostPersist;
      // Nếu listPostPersist = []
      if (listPostPersist.length === 0) {
        console.log('f4.1');
        // Gọi getListPostRequest với index 0 count 20
        const getListPostResponse = await postApi.getListPost({
          token: thunkAPI.getState().auth.tokenMain,
          user_id: thunkAPI.getState().auth.idMain,
          // ...
          last_id: '',
          index: '0',
          count: '20',
        });
        console.log(
          'getListPostRequest getListPostResponse:',
          getListPostResponse,
        );

        // Cập nhật listPostPersist
        if (getListPostResponse.code === responses.OK) {
          const newListPostPersist = getListPostResponse.data.posts;
          const newListPostPersistJson = JSON.stringify(newListPostPersist);
          await AsyncStorage.setItem('listPostPersist', newListPostPersistJson);

          return {
            posts: newListPostPersist,
            lastId: getListPostResponse.data.last_id,
            // new_items
          };
        }
      } else {
        console.log('f4.2');
        // Nếu có listPostPersist
        // Gọi checkNewItemRequest
        const checkNewItemResponse = await postApi.checkNewItem({
          last_id: thunkAPI.getState().post.lastId,
          category_id: '0',
        });
        console.log(
          'getListPostRequest checkNewItemResponse:',
          checkNewItemResponse,
        );

        if (
          checkNewItemResponse.code === responses.OK &&
          checkNewItemResponse.data.new_items !== '0'
        ) {
          // Gọi getListPostRequest
          const getListPostResponse = await postApi.getListPost({
            token: thunkAPI.getState().auth.tokenMain,
            user_id: thunkAPI.getState().auth.idMain,
            // ...
            last_id: thunkAPI.getState().post.lastId,
            index: `${thunkAPI.getState().post.listPostMain.length}`,
            count: checkNewItemResponse.data.new_items,
          });
          console.log(
            'getListPostRequest getListPostResponse:',
            getListPostResponse,
          );

          // Cập nhật listPostPersist
          if (getListPostResponse.code === responses.OK) {
            const newListPostPersist = listPostPersist.concat(
              getListPostResponse.data.posts,
            );
            const newListPostPersistJson = JSON.stringify(newListPostPersist);
            await AsyncStorage.setItem(
              'listPostPersist',
              newListPostPersistJson,
            );

            return {
              posts: newListPostPersist,
              lastId: getListPostResponse.data.last_id,
              // new_items
            };
          }
        }
      }

      return null;
    } catch (error) {
      console.log('Error at getListPostRequest:', error.message);
    }
  },
);

export const pullDownToRefreshListPostRequest = createAsyncThunk(
  'post/pullDownToRefreshListPostRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.getListPost({
        token: thunkAPI.getState().auth.tokenMain,
        user_id: thunkAPI.getState().auth.idMain,
        // ...
        last_id: thunkAPI.getState().post.lastId,
        index: '0',
        count: '20',
      });

      if (response.code === responses.OK) {
        // Cập nhật listPostPersist
        // const newListPostPersist = response.data.posts;
        // const newListPostPersistJson = JSON.stringify(newListPostPersist);
        // await AsyncStorage.setItem('listPostPersist', newListPostPersistJson);
      }
      console.log('pullDownToRefreshListPostRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at pullDownToRefreshListPostRequest:', error.message);
    }
  },
);

export const pullUpToLoadMoreListPostRequest = createAsyncThunk(
  'post/pullUpToLoadMoreListPostRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.getListPost({
        token: thunkAPI.getState().auth.tokenMain,
        user_id: thunkAPI.getState().auth.idMain,
        // ...
        last_id: thunkAPI.getState().post.lastId,
        index: `${thunkAPI.getState().post.listPostMain.length}`,
        count: '20',
      });

      if (response.code === responses.OK) {
        // Cập nhật listPostPersist
        // const newListPostPersist = thunkAPI
        //   .getState()
        //   .post.listPostMain.concat(response.data.posts);
        // const newListPostPersistJson = JSON.stringify(newListPostPersist);
        // await AsyncStorage.setItem('listPostPersist', newListPostPersistJson);
      }
      console.log('pullUpToLoadMoreListPostRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at pullUpToLoadMoreListPostRequest:', error.message);
    }
  },
);

export const createPostRequest = createAsyncThunk(
  'post/createPostRequest',
  async (params, thunkAPI) => {
    try {
      const addPostResponse = await postApi.addPost({
        token: thunkAPI.getState().auth.tokenMain,
        ...params,
      });
      console.log('createPostRequest addPostResponse:', addPostResponse);

      if (addPostResponse.code === responses.OK) {
        const getPostResponse = await postApi.getPost({
          token: thunkAPI.getState().auth.tokenMain,
          id: addPostResponse.data.id,
        });
        console.log('createPostRequest getPostResponse:', getPostResponse);

        // Cập nhật listPostPersist
        // const newListPostPersist = [
        //   ...thunkAPI.getState().post.listPostMain,
        // ].unshift(getPostResponse.data);
        // const newListPostPersistJson = JSON.stringify(newListPostPersist);
        // await AsyncStorage.setItem('listPostPersist', newListPostPersistJson);

        return getPostResponse;
      }
    } catch (error) {
      console.log('Error at createPostRequest:', error.message);
    }
  },
);

export const editPostRequest = createAsyncThunk(
  'post/editPostRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.editPost({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.postId,
        described: params.described,
        status: params.status,
        image: params.image,
        video: params.video,
      });
      console.log('editPostRequest response:', response);

      return {
        ...response,
        id: params.postId,
        described: params.described,
        status: params.status,
        image: params.image,
        video: params.video,
      };
    } catch (error) {
      console.log('Error at editPostRequest:', error.message);
    }
  },
);

export const deletePostRequest = createAsyncThunk(
  'post/deletePostRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.deletePost({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.postId,
      });
      console.log('deletePostRequest response:', response);

      if (response.code === responses.OK) {
        // Cập nhật listPostPersist
        // const postIndex = thunkAPI
        //   .getState()
        //   .post.listPostMain.findIndex(
        //     (element) => element.id === params.postId,
        //   );
        // const newListPostPersist = [
        //   ...thunkAPI.getState().post.listPostMain,
        // ].splice(postIndex, 1);
        // const newListPostPersistJson = JSON.stringify(newListPostPersist);
        // await AsyncStorage.setItem('listPostPersist', newListPostPersistJson);
      }

      return {
        ...response,
        id: params.postId,
      };
    } catch (error) {
      console.log('Error at deletePostRequest:', error.message);
    }
  },
);

export const reportPostRequest = createAsyncThunk(
  'post/reportPostRequest',
  async (params, thunkAPI) => {
    try {
      console.log('reportPostRequest params:', params);
      const response = await postApi.reportPost({
        token: thunkAPI.getState().auth.tokenMain,
        ...params,
      });
      console.log('reportPostRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at reportPostRequest:', error.message);
    }
  },
);

// Chưa cập nhật AS
export const likeRequest = createAsyncThunk(
  'post/likeRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.like({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.postId,
      });
      console.log('likeRequest response:', response);

      return {
        ...response,
        id: params.postId,
      };
    } catch (error) {
      console.log('Error at likeRequest:', error.message);
    }
  },
);

export const getCommentRequest = createAsyncThunk(
  'post/getCommentRequest',
  async (params, thunkAPI) => {
    try {
      const haveNetwork = await NetworkUtils.isNetworkAvailable();
      if (!haveNetwork) {
        return {
          key: 'NETWORK_ERROR',
        };
      }

      const response = await postApi.getComment({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.id,
        index: '0',
        count: '20',
      });
      console.log('getCommentRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at getCommentRequest:', error.message);
    }
  },
);

export const getMoreCommentRequest = createAsyncThunk(
  'post/getMoreCommentRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.getComment({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.id,
        index: `${thunkAPI.getState().post.listCommentGetById.length}`,
        count: '20',
      });
      console.log('getMoreCommentRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at getMoreCommentRequest:', error.message);
    }
  },
);

export const setCommentRequest = createAsyncThunk(
  'post/setCommentRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.setComment({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.id,
        comment: params.comment,
        index: `${thunkAPI.getState().post.listCommentGetById.length}`,
        count: '20',
      });
      console.log('setCommentRequest response:', response);
      return {
        ...response,
        comment: params.comment,
        id: thunkAPI.getState().auth.idMain,
        name: thunkAPI.getState().auth.usernameMain,
        avatar: thunkAPI.getState().auth.avatarMain,
      };
    } catch (error) {
      console.log('Error at setCommentRequest:', error.message);
    }
  },
);

// PersonalScreen
export const getListMyPostRequest = createAsyncThunk(
  'post/getListMyPostRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.getListPost({
        token: thunkAPI.getState().auth.tokenMain,
        user_id: thunkAPI.getState().auth.idMain,
      });
      console.log('getListMyPostRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at getListMyPostRequest:', error.message);
    }
  },
);

export const editMyPostRequest = createAsyncThunk(
  'post/editMyPostRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.editPost({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.postId,
        described: params.described,
        status: params.status,
        image: params.image,
        video: params.video,
      });
      console.log('editMyPostRequest response:', response);

      return {
        ...response,
        id: params.postId,
        described: params.described,
        status: params.status,
        image: params.image,
        video: params.video,
      };
    } catch (error) {
      console.log('Error at editMyPostRequest:', error.message);
    }
  },
);

export const deleteMyPostRequest = createAsyncThunk(
  'post/deleteMyPostRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.deletePost({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.postId,
      });
      console.log('deleteMyPostRequest response:', response);

      return {
        ...response,
        id: params.postId,
      };
    } catch (error) {
      console.log('Error at deleteMyPostRequest:', error.message);
    }
  },
);

export const likeMyPostRequest = createAsyncThunk(
  'post/likeMyPostRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.like({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.postId,
      });
      console.log('likeMyPostRequest response:', response);

      return {
        ...response,
        id: params.postId,
      };
    } catch (error) {
      console.log('Error at likeMyPostRequest:', error.message);
    }
  },
);

export const getCommentMyPostRequest = createAsyncThunk(
  'post/getCommentMyPostRequest',
  async (params, thunkAPI) => {
    try {
      const haveNetwork = await NetworkUtils.isNetworkAvailable();
      if (!haveNetwork) {
        return {
          key: 'NETWORK_ERROR',
        };
      }

      const response = await postApi.getComment({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.id,
        index: '0',
        count: '20',
      });
      console.log('getCommentMyPostRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at getCommentMyPostRequest:', error.message);
    }
  },
);

export const getMoreCommentMyPostRequest = createAsyncThunk(
  'post/getMoreCommentMyPostRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.getComment({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.id,
        index: `${thunkAPI.getState().post.listCommentMyPostGetById.length}`,
        count: '20',
      });
      console.log('getMoreCommentMyPostRequest response:', response);
      return response;
    } catch (error) {
      console.log('Error at getMoreCommentMyPostRequest:', error.message);
    }
  },
);

export const setCommentMyPostRequest = createAsyncThunk(
  'post/setCommentMyPostRequest',
  async (params, thunkAPI) => {
    try {
      const response = await postApi.setComment({
        token: thunkAPI.getState().auth.tokenMain,
        id: params.id,
        comment: params.comment,
        index: `${thunkAPI.getState().post.listCommentMyPostGetById.length}`,
        count: '20',
      });
      console.log('setCommentMyPostRequest response:', response);
      return {
        ...response,
        comment: params.comment,
        id: thunkAPI.getState().auth.idMain,
        name: thunkAPI.getState().auth.usernameMain,
        avatar: thunkAPI.getState().auth.avatarMain,
      };
    } catch (error) {
      console.log('Error at setCommentMyPostRequest:', error.message);
    }
  },
);

const post = createSlice({
  name: 'post',
  initialState: {
    listPostMain: [],
    listPostPersist: [],
    lastId: null,

    listMyPost: [],

    checkListPostPersistCalled: false,
    getListPostRequestCalled: false,

    loadingPullDownToRefreshListPostRequest: false,

    postGetById: null,
    myPostGetById: null,

    loadingCreatePostRequest: false,

    listCommentGetById: [],
    loadingGetCommentRequest: false,
    loadingGetMoreCommentRequest: false,

    listCommentMyPostGetById: [],
    loadingGetCommentMyPostRequest: false,
    loadingGetMoreCommentMyPostRequest: false,

    network: true,
  },
  reducers: {
    getPostById: (state, action) => {
      state.postGetById = state.listPostMain.find(
        (element) => element.id === action.payload.id,
      );
    },
    getMyPostById: (state, action) => {
      state.myPostGetById = state.listMyPost.find(
        (element) => element.id === action.payload.id,
      );
    },
  },
  extraReducers: {
    [checkListPostPersist.pending]: () => {},
    [checkListPostPersist.rejected]: () => {},
    [checkListPostPersist.fulfilled]: (state, action) => {
      console.log('f5');
      state.checkListPostPersistCalled = true; // logout
      if (action.payload !== null) {
        console.log('f5.1');
        state.listPostMain = action.payload;
        state.listPostPersist = action.payload;
      }
    },

    [getListPostRequest.pending]: () => {},
    [getListPostRequest.rejected]: () => {},
    [getListPostRequest.fulfilled]: (state, action) => {
      console.log('f6');
      state.getListPostRequestCalled = true; // logout
      if (action.payload !== null) {
        console.log('f6.1');
        state.listPostMain = action.payload.posts;
        state.listPostPersist = action.payload.posts;
        state.lastId = action.payload.lastId;
      }
    },

    [pullDownToRefreshListPostRequest.pending]: (state) => {
      state.loadingPullDownToRefreshListPostRequest = true;
    },
    [pullDownToRefreshListPostRequest.rejected]: () => {},
    [pullDownToRefreshListPostRequest.fulfilled]: (state, action) => {
      state.loadingPullDownToRefreshListPostRequest = false;
      if (action.payload.code === responses.OK) {
        state.listPostMain = action.payload.data.posts;
        // state.listPostPersist = action.payload.data.posts;
        state.lastId = action.payload.data.last_id;
      }
    },

    [pullUpToLoadMoreListPostRequest.pending]: () => {},
    [pullUpToLoadMoreListPostRequest.rejected]: () => {},
    [pullUpToLoadMoreListPostRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        state.listPostMain = state.listPostMain.concat(
          action.payload.data.posts,
        );
        // state.listPostPersist = state.listPostMain;
        state.lastId = action.payload.data.last_id;
      }
    },

    [createPostRequest.pending]: (state) => {
      state.loadingCreatePostRequest = true;
    },
    [createPostRequest.rejected]: () => {},
    [createPostRequest.fulfilled]: (state, action) => {
      state.loadingCreatePostRequest = false;
      if (action.payload.code === responses.OK) {
        state.listPostMain.unshift(action.payload.data);
        // state.listPostPersist = state.listPostMain;

        state.listMyPost.unshift(action.payload.data);
      }
    },

    [editPostRequest.pending]: () => {},
    [editPostRequest.rejected]: () => {},
    [editPostRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        const postIndex = state.listPostMain.findIndex(
          (element) => element.id === action.payload.id,
        );
        state.listPostMain[postIndex].state = action.payload.status;
        state.listPostMain[postIndex].described = action.payload.described;
        if (action.payload.image) {
          state.listPostMain[postIndex].image = [...action.payload.image];
        } else {
          state.listPostMain[postIndex].image = '';
        }
        state.listPostMain[postIndex].video = action.payload.video;
      }
    },

    [deletePostRequest.pending]: () => {},
    [deletePostRequest.rejected]: () => {},
    [deletePostRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        const postIndex = state.listPostMain.findIndex(
          (element) => element.id === action.payload.id,
        );
        state.listPostMain.splice(postIndex, 1);
        // state.listPostPersist = state.listPostMain;
      }
    },

    [reportPostRequest.pending]: () => {},
    [reportPostRequest.rejected]: () => {},
    [reportPostRequest.fulfilled]: () => {},

    [likeRequest.pending]: () => {},
    [likeRequest.rejected]: () => {},
    [likeRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        const postIndex = state.listPostMain.findIndex(
          (element) => element.id === action.payload.id,
        );
        state.listPostMain[postIndex].like = action.payload.data.like;
        if (state.listPostMain[postIndex].is_liked === '1') {
          state.listPostMain[postIndex].is_liked = '0';
        } else {
          state.listPostMain[postIndex].is_liked = '1';
        }
        // listPostPersist
      }
    },

    [getCommentRequest.pending]: (state) => {
      state.loadingGetCommentRequest = true;
    },
    [getCommentRequest.rejected]: () => {},
    [getCommentRequest.fulfilled]: (state, action) => {
      state.loadingGetCommentRequest = false;
      if (action.payload.key === 'NETWORK_ERROR') {
        state.network = false;
        return;
      }
      if (action.payload.code === responses.OK) {
        state.network = true;
        if (action.payload.data) {
          state.listCommentGetById = action.payload.data;
        }
      }
    },

    [getMoreCommentRequest.pending]: (state) => {
      state.loadingGetMoreCommentRequest = true;
    },
    [getMoreCommentRequest.rejected]: () => {},
    [getMoreCommentRequest.fulfilled]: (state, action) => {
      state.loadingGetMoreCommentRequest = false;
      if (action.payload.code === responses.OK) {
        if (action.payload.data) {
          state.listCommentGetById = [
            ...action.payload.data,
            ...state.listCommentGetById,
          ];
        }
      }
    },

    [setCommentRequest.pending]: () => {},
    [setCommentRequest.rejected]: () => {},
    [setCommentRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        const newComment = {
          id: `${Math.trunc(100000 + 900000 * Math.random())}`,
          comment: action.payload.comment,
          created: `${Math.trunc(Date.now() / 1000)}`,
          poster: {
            id: action.payload.id,
            name: action.payload.name,
            avatar: action.payload.avatar,
          },
        };
        if (action.payload.data) {
          state.listCommentGetById = [
            ...state.listCommentGetById,
            ...action.payload.data,
            newComment,
          ];
        } else {
          state.listCommentGetById = [...state.listCommentGetById, newComment];
        }
      }
    },

    // PersonalScreen
    [getListMyPostRequest.pending]: () => {},
    [getListMyPostRequest.rejected]: () => {},
    [getListMyPostRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        state.listMyPost = action.payload.data.posts;
      }
    },

    [editMyPostRequest.pending]: () => {},
    [editMyPostRequest.rejected]: () => {},
    [editMyPostRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        const postIndex = state.listMyPost.findIndex(
          (element) => element.id === action.payload.id,
        );
        state.listMyPost[postIndex].state = action.payload.status;
        state.listMyPost[postIndex].described = action.payload.described;
        if (action.payload.image) {
          state.listMyPost[postIndex].image = [...action.payload.image];
        } else {
          state.listMyPost[postIndex].image = '';
        }
        state.listMyPost[postIndex].video = action.payload.video;
      }
    },

    [deleteMyPostRequest.pending]: () => {},
    [deleteMyPostRequest.rejected]: () => {},
    [deleteMyPostRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        const postIndex = state.listMyPost.findIndex(
          (element) => element.id === action.payload.id,
        );
        state.listMyPost.splice(postIndex, 1);
      }
    },

    [likeMyPostRequest.pending]: () => {},
    [likeMyPostRequest.rejected]: () => {},
    [likeMyPostRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        const postIndex = state.listMyPost.findIndex(
          (element) => element.id === action.payload.id,
        );
        state.listMyPost[postIndex].like = action.payload.data.like;
        if (state.listMyPost[postIndex].is_liked === '1') {
          state.listMyPost[postIndex].is_liked = '0';
        } else {
          state.listMyPost[postIndex].is_liked = '1';
        }
      }
    },

    [getCommentMyPostRequest.pending]: (state) => {
      state.loadingGetCommentMyPostRequest = true;
    },
    [getCommentMyPostRequest.rejected]: () => {},
    [getCommentMyPostRequest.fulfilled]: (state, action) => {
      state.loadingGetCommentMyPostRequest = false;
      if (action.payload.key === 'NETWORK_ERROR') {
        state.network = false;
        return;
      }
      if (action.payload.code === responses.OK) {
        state.network = true;
        if (action.payload.data) {
          state.listCommentMyPostGetById = action.payload.data;
        }
      }
    },

    [getMoreCommentMyPostRequest.pending]: (state) => {
      state.loadingGetMoreCommentMyPostRequest = true;
    },
    [getMoreCommentMyPostRequest.rejected]: () => {},
    [getMoreCommentMyPostRequest.fulfilled]: (state, action) => {
      state.loadingGetMoreCommentMyPostRequest = false;
      if (action.payload.code === responses.OK) {
        if (action.payload.data) {
          state.listCommentMyPostGetById = [
            ...action.payload.data,
            ...state.listCommentMyPostGetById,
          ];
        }
      }
    },

    [setCommentMyPostRequest.pending]: () => {},
    [setCommentMyPostRequest.rejected]: () => {},
    [setCommentMyPostRequest.fulfilled]: (state, action) => {
      if (action.payload.code === responses.OK) {
        const newComment = {
          id: `${Math.trunc(100000 + 900000 * Math.random())}`,
          comment: action.payload.comment,
          created: `${Math.trunc(Date.now() / 1000)}`,
          poster: {
            id: action.payload.id,
            name: action.payload.name,
            avatar: action.payload.avatar,
          },
        };
        if (action.payload.data) {
          state.listCommentMyPostGetById = [
            ...state.listCommentMyPostGetById,
            ...action.payload.data,
            newComment,
          ];
        } else {
          state.listCommentMyPostGetById = [
            ...state.listCommentMyPostGetById,
            newComment,
          ];
        }
      }
    },
  },
});

const {reducer, actions} = post;

export const {getPostById, getMyPostById} = actions;
export default reducer;
