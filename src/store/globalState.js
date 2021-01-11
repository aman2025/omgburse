import { reactive } from 'vue';
import request from '../utils/request';
export default {
  install(app) {
    // 提供全局常量数据，可以响应
    const rdata = reactive({
      name: 'John'
    });
    app.provide('rdata', rdata);
    // 普通数据
    app.provide('temp', '11a11');
    // 获取用户作为全局的状态
    let userinfoState = reactive({
      userinfo: {}
    });
    app.provide('userinfo', userinfoState);
    var url = '/Api/Account/UserInfo';
    const getUserinfo = () => request.get(url);
    getUserinfo()
      .then(res => {
        userinfoState.userinfo = res.data; // 子组件获取不到userinfo
        console.log(app);
        console.log(res.data);
      })
      .catch(() => {});
  }
};
