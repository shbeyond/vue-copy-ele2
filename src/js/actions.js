export default {
    incrementAsync ({ commit },data) { //ES2015 的 参数解构
      setTimeout(() => {    //异步操作拿到回调值后传送给mutations改变，当然也可以直接改变
        commit('increment',data)
      }, 500)
    }
  }