import Vue from 'vue'
import Antd from 'ant-design-vue';
import App from './App';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false

Vue.use(Antd);

Vue.directive('x', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.addEventListener('click', () => {
      console.log("x")
    });
  }
});

new Vue({
  render: h => h(App),
}).$mount('#app');