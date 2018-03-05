<!-- 定义模板 -->
<template>
<div class="shop">
	<div class="header">
		<h2>{{data.title}}</h2>
		<img :src="'img/' + data.logo" alt="">
		<p>{{data.info}}</p>
	</div>
	<div class="nav">
		<router-link v-for="(item, index) in data.menu" :to="'/shop/' + data.store + '/' + item.id" v-text="item.text" :key="index"></router-link>
	</div>
	<!-- 定义子路由渲染位置 -->
	<router-view></router-view>
	<div class="shopping-car">
		<span>共 {{$store.state.num}} 元</span>
		<span class="btn-buy">选好了</span>
	</div>
</div>
</template>
<!-- 定义样式 -->
<style type="text/css" lang="less">
@color: #ed813f;
.shop {
	.header {
		height: 100px;
		background: @color;
		color: #fff;
		h2 {
			font-size: 18px;
			text-align: center;
			line-height: 40px;
			font-weight: normal;
		}
		img {
			width: 50px;
			height: 50px;
			border-radius: 50%;
			float: left;
			margin-left: 10px;
		}
		p {
			margin-left: 70px;
			font-size: 14px;
		}
	}
	.nav {
		height: 60px;
		line-height: 60px;
		background: #f9fdff;
		font-size: 20px;
		text-align: center;
		a {
			display: inline-block;
			height: 60px;
			padding: 0 20px;
			color: #666;
			text-decoration: none;
			border-bottom: 2px solid transparent;
			&.router-link-active {
				color: red;
				border-bottom-color: red;
			}
		}
	}
	.shopping-car {
		background: #484d54;
		position: fixed;
		bottom: 0;
		left: 0;
		right: 0;
		height: 60px;
		line-height: 60px;
		color: #fff;
		font-size: 20px;
		text-align: center;
		.btn-buy {
			background: #fe2947;
			float: right;
			padding: 0 30px;
		}
	}
}
</style>
<!-- 定义脚本 -->
<script type="text/javascript">
// 定义组件
export default {
	// 绑定数据
	data: () => ({
		data: {}
	}),
	// 发送请求
	created() {
		// console.log(this)
		// 发送请求
		this.$http
			.get('data/' + this.$route.params.storeName + '.json')
			// 获取数据
			.then(({data}) => this.data = data.data)
	}
}
</script>