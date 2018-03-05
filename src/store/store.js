// 引入vue
import Vue from "vue";
// 引入vuex
import Vuex, { Store } from "vuex";

// 安装插件
Vue.use(Vuex);

// 创建store
export default new Store({
	// 定义数据
	state: {
		// 购物车中的总价
		num: 0
	},
	// 定义改变数据的方法
	mutations: {
		// 增加商品
		addNum(state, num) {
			// 更新购物车中的总价
			state.num += +num;
		},
		reduceNum(state, num) {
			// 更新购物车中的总价
			state.num -= num;
		}
	}
})