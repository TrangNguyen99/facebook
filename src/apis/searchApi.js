import queryString from 'query-string';
import axiosClient from './axiosClient';

const searchApi = {
  getSavedSearch: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // index o
    // count o
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
          data: [
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              keyword: 'Sơn Tùng',
              created: '',
            },
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              keyword: 'MTP',
              created: '',
            },
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              keyword: 'Sky',
              created: '',
            },
          ],
        });
      }, 1000);
    });
  },
  delSavedSearch: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // search_id x
    // all x 1 or 0
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
        });
      }, 1000);
    });
  },
  search: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // keyword o
    // user_id o
    // index o
    // count o
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
          data: [
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              name: '',
              author: {
                id: '1',
                name: 'Tường Vy',
                avatar: 'https://picsum.photos/id/1027/2848/4272',
                online: '1',
              },
              state: 'ngốc nghếch',
              created: '1605275104',
              described: `post fixed 2 with random id ${Math.trunc(
                100000 + 900000 * Math.random(),
              )}. 😀😁😂🤣😍❤`,
              image: [
                {
                  id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                  url: 'https://picsum.photos/id/10/2500/1667',
                },
                {
                  id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                  url: 'https://picsum.photos/id/1003/1181/1772',
                },
              ],
              video: '',
              like: `${Math.trunc(1 + 100 * Math.random())}`,
              comment: `${Math.trunc(1 + 100 * Math.random())}`,
              is_liked: `${Math.trunc(0 + 2 * Math.random())}`,
            },
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              name: '',
              author: {
                id: '2',
                name: 'Quỳnh Anh',
                avatar: 'https://picsum.photos/id/1059/7360/4912',
                online: '0',
              },
              state: 'thật phong cách',
              created: '1605275104',
              described: `post fixed 6 with random id ${Math.trunc(
                100000 + 900000 * Math.random(),
              )}`,
              image: [
                {
                  id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                  url: 'https://picsum.photos/id/1061/3264/2448',
                },
              ],
              video: '',
              like: `${Math.trunc(1 + 100 * Math.random())}`,
              comment: `${Math.trunc(1 + 100 * Math.random())}`,
              is_liked: `${Math.trunc(0 + 2 * Math.random())}`,
            },
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              name: '',
              author: {
                id: '3',
                name: 'Thủy Tiên',
                avatar: 'https://picsum.photos/id/1060/5598/3732',
                online: '1',
              },
              state: 'hân hoan',
              created: '1605275104',
              described: `post fixed 10 with random id ${Math.trunc(
                100000 + 900000 * Math.random(),
              )}`,
              image: '',
              video: {
                url:
                  'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                thumb: 'https://picsum.photos/id/107/1600/900',
              },
              like: `${Math.trunc(1 + 100 * Math.random())}`,
              comment: `${Math.trunc(1 + 100 * Math.random())}`,
              is_liked: `${Math.trunc(0 + 2 * Math.random())}`,
            },
          ],
        });
      }, 1000);
    });
  },
};

export default searchApi;
