import request from '../utils/request';
export default {
  install(app) {
    app.provide('temp', '11a11');
    // 获取用户作为全局的状态
    var url = '/Api/Account/UserInfo';
    const getUserinfo = () => request.get(url);
    getUserinfo()
      .then(() => {
        console.log(app);
        // provide('userinfo', res.data);
      })
      .catch(() => {});
  }
};
