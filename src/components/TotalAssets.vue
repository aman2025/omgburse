<template>
  <div class="total-assets">
    <div>
      <h3 class="total-title">
        <!-- todo: 异步问题,或数据问题 -->
        <span>{{ userinfo.ymoney }}</span>
        <em>{{ lang.locale.yourTotalAssets }}</em>
      </h3>
      <div class="total-info">
        <ul>
          <li>
            <h3>{{ lang.locale.interest }}</h3>
            <em>{{ depositLogs.interest }}</em>
          </li>
          <li>
            <h3>{{ lang.locale.totalRevenue }}</h3>
            <em>{{ depositLogs.total }}</em>
          </li>
          <li>
            <h3>{{ lang.locale.yesterdayEarnings }}</h3>
            <em>{{ depositLogs.yesterday }}</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue';
import request from '../utils/request';
export default {
  name: 'TotalAssets',
  props: {
    depositLogs: Object
  },
  inject: ['lang'],
  setup() {
    // 团队
    const state = reactive({
      userinfo: {}
    });
    const url = '/Api/Account/UserInfo';
    const getUserinfo = () => request.get(url);
    getUserinfo()
      .then(res => {
        state.userinfo = res.data;
      })
      .catch(() => {});
    // return
    return {
      ...toRefs(state)
    };
  }
};
</script>

<style scoped lang="scss">
.total-title {
  text-align: center;
  padding: 58px 10px 0;
}
.total-title span {
  font-size: 18px;
  color: #f00;
}
.total-title em {
  font-size: 10px;
  margin-left: 5px;
}
.total-info ul {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  align-items: center;
  -webkit-box-align: center;
  justify-content: center;
}
.total-info li {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  padding: 10px 0px;
  position: relative;
  white-space: nowrap;
}

.total-info li h3 {
  -webkit-flex: 1;
  -ms-flex: 1;
  flex: 1;
  text-align: center;
  color: #666;
  font-size: 12px;
}
.total-info li em {
  font-size: 16px;
  color: #f00;
}
</style>
