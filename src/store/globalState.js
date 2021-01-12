import { reactive } from 'vue';
import request from '../utils/request';
export default {
  install(app) {
    // 1.提供全局响应数据
    const rdata = reactive({
      name: 'John'
    });
    app.provide('rdata', rdata);
    // 2.普通数据
    app.provide('temp', '11a11');

    // 3.获取异步请求全局数据响应--用户信息
    let userinfoState = reactive({
      userinfo: {}
    });
    app.provide('userinfo', userinfoState);
    var url = '/Api/Account/UserInfo';
    const getUserinfo = () => request.get(url);
    getUserinfo()
      .then(res => {
        userinfoState.userinfo = res.data; // 先provide，然后再then中赋值，这样子组件才能或数据
        console.log(app);
        console.log(res.data);
      })
      .catch(() => {});
  }
};
