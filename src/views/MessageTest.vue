<template>
  <div>
    <h3>弹出message</h3>
    <button @click="showMessage('122256666', goback)" class="btn">show Message</button>
    <div class="blank"></div>
    <hr />
    <h3>修改字符串</h3>
    <button @click="updateUser('o1k1')" class="btn">pop</button>
    <div>{{ users }}</div>
    <div class="blank"></div>
    <hr />
    <h3>全局变量</h3>
    <h3>{{ bb.userinfo.id }}</h3>
    <button @click="editGlb" class="btn">修改全局异步数据</button>
    <div class="blank"></div>
    <hr />
    <h3>多个v-model</h3>
    <TestVmodel v-model="txt" v-model:text="message" />
    {{ txt }} -- {{ message }}
    <div class="blank"></div>
    <hr />
    <h3>挂载全局组件Toast</h3>
    <button @click="showToast" class="btn">showToast</button>
    <!-- 测试标签引入toast组件，不建议 -->
    <Toast v-model="isshow" msg="message" />
    <div class="blank"></div>
    <hr />
    <h3>Dialog组件</h3>
    <button @click="showDialog" class="btn">showDialog</button>
    <!-- 测试标签引入toast组件，不建议 -->
    <Dialog v-model="visible" title="标题" type="confirm" :hasHead="true" content="内容" @ok="onOk" />
  </div>
</template>
<script>
import { inject, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import TestVmodel from '../components/TestVmodel.vue';
import Dialog from '../components/Dialog.vue';
import Toast from '../components/toast/Toast.vue';
export default {
  name: 'MessageTest',
  components: { TestVmodel, Toast, Dialog },
  inject: ['showMessage', 'showToast'],
  setup() {
    let users = inject('users');
    const temp = inject('temp');
    const state = reactive({
      message: 'msg...',
      txt: 'txt...',
      isshow: true,
      visible: false
    });
    console.log(temp);
    const updateUser = inject('updateUser');
    // 返回，显示message一秒后路由返回
    const router = useRouter();
    const goback = () => {
      setTimeout(() => {
        router.back(-1);
      }, 5000);
    };
    // 全局异步请求数据
    const bb = inject('userinfo');
    console.log(bb);

    // onOk
    const onOk = () => {
      console.log('onok1...');
    };
    // return
    return {
      updateUser,
      users,
      goback,
      onOk,
      bb,
      ...toRefs(state)
    };
  },
  methods: {
    editGlb() {
      // this.$router.push('/Order');
      this.bb.userinfo.id = '1225558--ok'; // 方法一：在method中才能取值，并修改
    },
    showDialog() {
      this.visible = true;
    }
  }
};
</script>
<style scoped lang="scss">
.btn {
  border: 1px solid #000;
}
.blank {
  height: 50px;
}
</style>
