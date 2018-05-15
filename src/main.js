// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'

import actions from './js/actions.js'
import getters from './js/getters.js'
import mutations from './js/mutations.js'

Vue.use(vuex)

Vue.config.productionTip = false

const state ={
  count:1
}

var store = new vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules:{

  }
})
// Vue.directive('focus', {//先写内容再挂载上去
//   // 当被绑定的元素插入到 DOM 中时……
//   inserted: function (el) {
//     // 聚焦元素
//     el.focus()
//   }
// })
// console.log("当前有没有axios"+axios);
Vue.component('my-component', {
  template: '<div>测试注册一个全局组件!</div>'
});

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { 
    App
  }
})


