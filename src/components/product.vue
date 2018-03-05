<!-- 定义模板 -->
<template>
<div class="product">
	<div class="menu">
		<router-link v-for="(item, index) in list" :key="index" :to="'/shop/' + $route.params.storeName + '/product/type/' + item.id" v-text="item.text"></router-link>
	</div>
	<div class="main">
		<router-view></router-view>
	</div>
</div>
</template>
<!-- 定义样式 -->
<style type="text/css" lang="less">
@bg: #ebedf0;
@color: #666;
@hoverColor: red;
.product {
	.menu {
		width: 100px;
		background: @bg;
		float: left;
		text-align: center;
		padding: 10px 0;
		a {
			height: 40px;
			line-height: 40px;
			font-size: 16px;
			color: @color;
			display: block;
			text-decoration: none;
			border-left: 2px solid transparent;
			&.router-link-active {
				color: @hoverColor;
				border-left-color: @hoverColor;
				background: #fff;
			}
		}
	}
	.main {
		margin-left: 105px;
	}
}
</style>
<!-- 定义脚本 -->
<script type="text/javascript">
export default {
	// 绑定数据
	data: () => ({
		list: []
	}),
	// 请求数据
	created() {
		// $http发送get请求
		this.$http
			.get('data/menu.json', {
				// 传递query参数
				params: {
					id: this.$route.params.storeName
				}
			})
			// 存储数据
			.then(({ data }) => this.list = data.data)
	}
}
</script>