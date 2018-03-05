// 引入vue
import Vue from "vue";
// 引入路由
import VueRouter from "vue-router";
// 引入shop组件
import Shop from "../components/shop.vue";
// 引入Product组件
import Product from "../components/product.vue";
// 引入Type组件
import Type from "../components/type.vue"

// 安装路由
Vue.use(VueRouter)

// 定义路由规则
let routes = [
	// 商店路由
	{
		path: '/shop/:storeName',
		component: Shop,
		// 定义子路由
		children: [
			// 定义商品的
			{
				path: 'product',
				component: Product,
				children: [
					{
						path: 'type/:id',
						component: Type
					}
				]
			},
			// 评价
			{
				path: 'evaluate',
				component: { template: '<h2>evaluate page</h2>' }
			},
			// 商家
			{
				path: 'seller',
				component: { template: '<h2>seller</h2>' }
			}
		]
	}
]
// 创建路由实例化对象
export default new VueRouter({
	routes: routes
})