<!-- 定义模板 -->
<template>
<div class="type">
	<ul>
		<li v-for="(item, index) in list" :key="index">
			<img :src="'img/item/' + item.img" alt="">
			<div class="content">
				<h3>{{item.title}}</h3>
				<p class="text">已售{{item.sales}}份</p>
				<p>
					<span class="price">¥{{item.price}}</span>
					<span class="add" @click="addItemNum(item); $store.commit('addNum', item.price)">+</span>
					<span class="num" v-show="item.num > 0">{{item.num}}</span>
					<span class="reduce" @click="reduceItemNum(item); $store.commit('reduceNum', item.price)" v-show="+item.num">-</span>
				</p>
			</div>
		</li>
	</ul>
</div>
</template>
<!-- 定义样式 -->
<style type="text/css" lang="less">
.type {
	padding: 10px 0;
	li {
		padding: 10px;
		border-bottom: 1px solid #ccc;
		img {
			width: 65px;
			height: 50px;
			float: left;
		}
		.content {
			margin-left: 75px;
			h3 {
				font-size: 14px;
				text-overflow: ellipsis;
				white-space: nowrap;
				overflow: hidden;
			}
			.text {
				color: #666;
				font-size: 12px;
			}
			.price,
			.add,
			.reduce {
				color: red;
				font-size: 14px;
			}
			.num {
				font-size: 14px;
				margin: 0 5px;
				position: relative;
				top: 3px;
			}
			.num,
			.add,
			.reduce {
				float: right;
			}
			.add,
			.reduce {
				display: inline-block;
				height: 20px;
				width: 20px;
				border: 1px solid #ccc;
				border-radius: 50%;
				text-align: center;
				line-height: 20px;
				font-size: 16px;
			}
		}
	}
}
</style>
<!-- 定义脚本 -->
<script type="text/javascript">
export default {
	// 定义数据
	data: () => ({
		list: [],
		// 缓存数据
		all: {}
	}),
	// 将请求数据的业务逻辑封装在方法中，得以复用
	methods: {
		getData() {
			// 当前数据的id
			let id = this.$route.params.id;
			// 如果已经缓存了数据，直接读取，
			if (this.all[id]) {
				// 直接读取数据，更新
				this.list = this.all[id]
			// 否则重新加载
			} else {
				// 请求数据
				this.$http
					.get('data/' + id + '.json')
					// 存储数据
					.then(({ data }) => {
						// 更新数据
						this.list = data.data
						// 缓存数据
						this.all[id] = this.list
					})
			}
		},
		// 点击加号，商品数量加一
		addItemNum(item) {
			item.num++;
		},
		// 点击减号，商品数量减一
		reduceItemNum(item) {
			item.num--;
		}
	},	
	// 组件创建完成，请求数据
	created() {
		this.getData();
	},
	// 监听路由的改变
	watch: {
		$route() {
			// 请求数据
			this.getData();
		}
	}
}
</script>