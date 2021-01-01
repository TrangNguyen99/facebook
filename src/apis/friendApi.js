import queryString from 'query-string';
import axiosClient from './axiosClient';

const friendApi = {
  getRequestedFriend: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // index o
    // count o
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
          data: {
            request: [
              {
                id: '2',
                name: 'Quỳnh Anh',
                avatar: 'https://picsum.photos/id/1059/7360/4912',
                same_friends: `${Math.trunc(1 + 10 * Math.random())}`,
                created: '1605275104',
              },
              {
                id: '3',
                name: 'Thủy Tiên',
                avatar: 'https://picsum.photos/id/1060/5598/3732',
                same_friends: `${Math.trunc(1 + 10 * Math.random())}`,
                created: '1605275104',
              },
              {
                id: '4',
                name: 'Thanh Thảo',
                avatar: 'https://picsum.photos/id/109/4287/2392',
                same_friends: `${Math.trunc(1 + 10 * Math.random())}`,
                created: '1605275104',
              },
              {
                id: '5',
                name: 'Tuyết Dung',
                avatar: 'https://picsum.photos/id/111/4400/2656',
                same_friends: `${Math.trunc(1 + 10 * Math.random())}`,
                created: '1605275104',
              },
              {
                id: '6',
                name: 'Vân Anh',
                avatar: 'https://picsum.photos/id/117/1544/1024',
                same_friends: `${Math.trunc(1 + 10 * Math.random())}`,
                created: '1605275104',
              },
            ],
            total: `${Math.trunc(10 + 41 * Math.random())}`,
          },
        });
      }, 1000);
    });
  },
};

export default friendApi;
