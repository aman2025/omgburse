import request from '../utils/request';

export default {
  install(app) {
    var url = '/Api/Account/UserInfo';
    const getUserinfo = () => request.get(url);
    getUserinfo()
      .then(res => {
        app.provide('userinfo', res.data);
      })
      .catch(() => {});
  }
};
