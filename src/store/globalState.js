import request from '../utils/request';
export default {
  install(app) {
    let userinfo = {};
    app.provide('temp', '11a11');
    app.provide('userinfo', userinfo);
    // 获取用户作为全局的状态
    var url = '/Api/Account/UserInfo';
    const getUserinfo = () => request.get(url);
    getUserinfo()
      .then(res => {
        userinfo = res.data;
        console.log(app);
        console.log(res.data);
      })
      .catch(() => {});
  }
};
