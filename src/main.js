import Vue from "vue";
// 引入异步请求库
import axios from "axios";
// 引入路由
import router from "./router/router.js";
// 引入store
import store from "./store/store.js";

// 安装
// Vue.prototype.$ickt = axios;
Vue.prototype.$http = axios;


// 创建vue实例化对象
new Vue({
	// 绑定视图
	el: '#ickt',
	// 绑定数据
	data: {},
	// 定义模板
	template: `
		<router-view></router-view>
	`,
	// 使用路由
	router: router,
	// 注册store
	store: store
})