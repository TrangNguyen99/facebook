import queryString from 'query-string';
import axiosClient from './axiosClient';

const postApi = {
  addPost: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // image x [file, file,...]
    // video x file
    // described x
    // status x
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
          data: {
            id: `${Math.trunc(100000 + 900000 * Math.random())}`,
            url: '', // co the de trong
          },
        });
      }, 3000);
    });
  },
  getPost: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o type?
    // id o type? id cua bai
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
          data: {
            id: `${Math.trunc(100000 + 900000 * Math.random())}`,
            author: {
              id: '1',
              name: 'Tường Vy',
              avatar: 'https://picsum.photos/id/1027/2848/4272',
              online: '1',
            },
            state: '',
            created: `${Math.trunc(Date.now() / 1000)}`,
            modified: '',
            described: `Recently posted fixed post with random id ${Math.trunc(
              100000 + 900000 * Math.random(),
            )}`,
            image: '',
            video: '',
            like: '', // so luong like
            comment: '', // so luong comment
            is_liked: '0', // 1 da like, 0 chua like
            // is_blocked: '',
            // can_comment: '', // x
            // can_edit: '',
            // banned: '',
          },
        });
      }, 1000);
    });
  },
  editPost: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // id o int id bai
    // described x
    // status x
    // image x array
    // image_del x array
    // image_sort x array
    // video x file
    // thumb x file
    // auto_block x string
    // auto_accept x string
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
        });
      }, 0);
    });
  },
  deletePost: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // id o int id bai
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
        });
      }, 0);
    });
  },
  reportPost: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // id o int id bai
    // subject o
    // details o
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
        });
      }, 0);
    });
  },
  like: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // id int o id bai viet
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
          data: {
            like: '10', // so like hien tai
          },
        });
      }, 0);
    });
  },
  getComment: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // id int o id bai viet
    // index o
    // count o
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
          data: [
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              comment: 'Có câu ca trong gió hát ngân nga ru trời mây ❤',
              created: '1605275104',
              poster: {
                id: '1',
                name: 'Tường Vy',
                avatar: 'https://picsum.photos/id/1027/2848/4272',
              },
            },
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              comment: 'Nhẹ nhàng đón ban mai ngang qua trao nụ cười 😍',
              created: '1605275104',
              poster: {
                id: '1',
                name: 'Tường Vy',
                avatar: 'https://picsum.photos/id/1027/2848/4272',
              },
            },
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              comment: 'Nắng đua chen khoe sắc vui đùa giữa muôn ngàn hoa',
              created: '1605275104',
              poster: {
                id: '2',
                name: 'Quỳnh Anh',
                avatar: 'https://picsum.photos/id/1059/7360/4912',
              },
            },
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              comment: 'Dịu dàng đến nhân gian âu yếm tâm hồn người',
              created: '1605275104',
              poster: {
                id: '3',
                name: 'Thủy Tiên',
                avatar: 'https://picsum.photos/id/1060/5598/3732',
              },
            },
          ],
          // data: '',
          is_blocked: [],
        });
      }, 2000);
    });
  },
  setComment: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token o
    // id int o id bai viet
    // comment
    // index o
    // count o
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
          data: [
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              comment: 'Anh ngẩn ngơ cứ ngỡ, đó chỉ là giấc mơ 😛',
              created: '1605275104',
              poster: {
                id: '2',
                name: 'Quỳnh Anh',
                avatar: 'https://picsum.photos/id/1059/7360/4912',
              },
            },
            {
              id: `${Math.trunc(100000 + 900000 * Math.random())}`,
              comment: 'Hình như chính em, cho anh mong chờ 😛',
              created: '1605275104',
              poster: {
                id: '3',
                name: 'Thủy Tiên',
                avatar: 'https://picsum.photos/id/1060/5598/3732',
              },
            },
          ],
          // data: '',
          is_blocked: [],
        });
      }, 0);
    });
  },
  getListPost: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // token x
    // user_id x
    // in_campaign x ???
    // campaign_id x ???
    // latitude x toa do nguoi dung
    // longitude x toa do nguoi dung
    // last_id x last_id tra ve lan truoc
    // index o index start select
    // count o so bai trong 1 lan gui yeu cau
    if (params.last_id === undefined) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            code: '1000',
            data: {
              posts: [
                {
                  id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                  name: '',
                  author: {
                    id: '1',
                    name: 'Tường Vy',
                    avatar: 'https://picsum.photos/id/1027/2848/4272',
                    online: '1',
                  },
                  state: 'hạnh phúc',
                  created: '1605275104',
                  described: `post fixed 1 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                  image: [
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1/5616/3744',
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
                    id: '1',
                    name: 'Tường Vy',
                    avatar: 'https://picsum.photos/id/1027/2848/4272',
                    online: '1',
                  },
                  state: 'chỉ có một mình',
                  created: '1605275104',
                  described: `post fixed 3 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}`,
                  image: [
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1004/5616/3744',
                    },
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1006/3000/2000',
                    },
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1008/5616/3744',
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
                    id: '1',
                    name: 'Tường Vy',
                    avatar: 'https://picsum.photos/id/1027/2848/4272',
                    online: '1',
                  },
                  state: 'tổ chức sinh nhật',
                  created: '1605275104',
                  described: `post fixed 4 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}`,
                  image: [
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1026/4621/3070',
                    },
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1035/5854/3903',
                    },
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1043/5184/3456',
                    },
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1050/6000/4000',
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
                    id: '1',
                    name: 'Tường Vy',
                    avatar: 'https://picsum.photos/id/1027/2848/4272',
                    online: '1',
                  },
                  state: 'tổ chức sinh nhật',
                  created: '1605275104',
                  described: `post fixed 5 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}`,
                  image: '',
                  video: {
                    url:
                      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    thumb: 'https://picsum.photos/id/1027/1600/900',
                  },
                  like: `${Math.trunc(1 + 100 * Math.random())}`,
                  comment: `${Math.trunc(1 + 100 * Math.random())}`,
                  is_liked: `${Math.trunc(0 + 2 * Math.random())}`,
                },
              ],
            },
          });
        }, 1000);
      });
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            code: '1000',
            data: {
              posts: [
                {
                  id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                  name: '',
                  author: {
                    id: '1',
                    name: 'Tường Vy',
                    avatar: 'https://picsum.photos/id/1027/2848/4272',
                    online: '1',
                  },
                  state: 'hạnh phúc',
                  created: '1605275104',
                  described: `post fixed 1 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
                  image: [
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1/5616/3744',
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
                    id: '1',
                    name: 'Tường Vy',
                    avatar: 'https://picsum.photos/id/1027/2848/4272',
                    online: '1',
                  },
                  state: 'chỉ có một mình',
                  created: '1605275104',
                  described: `post fixed 3 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}`,
                  image: [
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1004/5616/3744',
                    },
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1006/3000/2000',
                    },
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1008/5616/3744',
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
                    id: '1',
                    name: 'Tường Vy',
                    avatar: 'https://picsum.photos/id/1027/2848/4272',
                    online: '1',
                  },
                  state: 'tổ chức sinh nhật',
                  created: '1605275104',
                  described: `post fixed 4 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}`,
                  image: [
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1026/4621/3070',
                    },
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1035/5854/3903',
                    },
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1043/5184/3456',
                    },
                    {
                      id: `${Math.trunc(100000 + 900000 * Math.random())}`,
                      url: 'https://picsum.photos/id/1050/6000/4000',
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
                    id: '1',
                    name: 'Tường Vy',
                    avatar: 'https://picsum.photos/id/1027/2848/4272',
                    online: '1',
                  },
                  state: 'tổ chức sinh nhật',
                  created: '1605275104',
                  described: `post fixed 5 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}`,
                  image: '',
                  video: {
                    url:
                      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    thumb: 'https://picsum.photos/id/1027/1600/900',
                  },
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
                  state: 'nghe nhạc',
                  created: '1605275104',
                  described: `post fixed 7 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}`,
                  image: '',
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
                  described: `post fixed 8 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}`,
                  image: '',
                  video: {
                    url:
                      'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
                    thumb: 'https://picsum.photos/id/1064/1600/900',
                  },
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
                  state: 'kiệt sức',
                  created: '1605275104',
                  described: `post fixed 9 with random id ${Math.trunc(
                    100000 + 900000 * Math.random(),
                  )}`,
                  image: '',
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
              new_items: '', // so bai viet moi dang
              last_id: '', // id bai viet cuoi
            },
            in_campaign: '', // cap nhat in_campaign
            campaign_id: '', // cap nhat id cua campaign
          });
        }, 1000);
      });
    }
  },
  checkNewItem: (params) => {
    // const url = `/link?${queryString.stringify(params)}`;
    // return axiosClient.post(url);
    // last_id o
    // category_id x default 0, 0 -> 3
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          code: '1000',
          data: {
            new_items: '10',
          },
        });
      }, 1000);
    });
  },
};

export default postApi;
