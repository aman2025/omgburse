import axios from 'axios';
import qs from 'qs';
import { isPlainObject } from './util';

const API_GENERAL_ERROR_MESSAGE = 'Request error, please try again later!';

function goLogin() {
  const url = window.location.href;
  localStorage.removeItem('token');
  const base_url = url.split('#')[0];
  window.location.href = `${base_url}#/login`;
}

const request = () => {
  const instance = axios.create();

  instance.interceptors.request.use(
    config => {
      const { url, params, data, method, headers, beforesend } = config;
      if (!params) {
        config.params = {};
      }
      if (!url.includes('/Api/User/login')) {
        let token = {};
        try {
          // 如果获取不到token，进入catch去goLogin()
          token = JSON.parse(localStorage.token);
          // token = '1'; //测试token
        } catch (e) {
          console.log(e);
          goLogin();
        }
        config.params.token = token;
        config.headers = Object.assign({}, headers, { Authorization: token });
      }
      if (data && isPlainObject(data) && ['post', 'put'].includes(method)) {
        config.data = qs.stringify(data);
        if (!headers) {
          config.headers = {};
        }
        config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
      }
      // 发送请求前的回调事件
      beforesend && beforesend();
      return config;
    },
    error => Promise.reject(error)
  );

  instance.interceptors.response.use(
    response => {
      // const { success, resultCode, resultMessage = API_GENERAL_ERROR_MESSAGE } = response.data;
      // if (!success && resultCode !== SUCCESS_RESULT_CODE) {
      //   Message.error(resultMessage);
      //   return Promise.reject(new Error(resultMessage));
      // }
      return response.data;
    },
    error => {
      if (error.response) {
        const { data = {}, status } = error.response;
        let message = `HTTP ERROR: ${status}`;
        if (typeof data === 'string') {
          message = data;
        } else if (typeof data === 'object') {
          message = data.message;
        }
        message.indexOf('exist') === -1 && console.log(message);
        if ([401, 403].includes(status) && ['unknown user!', 'token invalid!', 'token expired!'].includes(message)) {
          goLogin();
        }
        return Promise.reject(error.response);
      }
      console.log(API_GENERAL_ERROR_MESSAGE);
      return Promise.reject(error);
    }
  );

  return instance;
};

export default request();
