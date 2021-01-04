<template>
  <div class="total-assets">
    <div>
      <h3 class="total-title">
        <span>{{ userinfo.ymoney }}</span
        ><em>Your total assets</em>
      </h3>
      <div class="total-info">
        <ul>
          <li>
            <h3>Interest</h3>
            <em>{{ depositLogs.interest }}</em>
          </li>
          <li>
            <h3>Total revenue</h3>
            <em>{{ depositLogs.total }}</em>
          </li>
          <li>
            <h3>Yesterday's earnings</h3>
            <em>{{ depositLogs.yesterday }}</em>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TotalAssets',
  props: {
    depositLogs: Object
  },
  inject: ['userinfo']
};
</script>

<style scoped lang="scss">
.total-title {
  text-align: center;
  padding: 10px 10px 0;
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
