<template>
	<div id="tabbar">
		<tabBarItem v-for="item in tabBarItems" :path="item.path" class="tabBar">
			<div slot="icon"><i :class="item.class"></i></div>
			<span slot="text">{{ item.text }}</span>
		</tabBarItem>
	</div>
</template>
<script>
	import TabBarItem from './TabBarItem'
	export default {
		components: {
			TabBarItem
		},
		data () {
			return {
				tabBarItems: [
					{
						text: '首页',
						class: 'fa fa-home',
						path: 'home'
					},
					{
						text: '分类',
						class: 'fa fa-bars',
						path: 'category'
					},
					{
						text: '购物车',
						class: 'fa fa-shopping-cart',
						path: 'cart'
					},
					{
						text: '我的',
						class: 'fa fa-user',
						path: 'profile'
					}
				]
			}
		}
	}
</script>
<style>
	#tabbar {
		background-color: #fff;
		width: 100%;
		height: 49px;
		display: flex;
		justify-content: space-evenly;
		align-items: center;
	}
</style>