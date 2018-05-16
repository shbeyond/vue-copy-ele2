import Vue from 'vue'
import vuex from 'vuex'

import getters from './getters.js'
import mutations from './mutation.js'
import actions from './action.js'

Vue.use(vuex)
const state = {
    geohash:"",
    latitude: '', // 当前位置纬度
	longitude: '', // 当前位置经度
}
export default new vuex.Store({
    state,
	getters,
	actions,
	mutations,
})