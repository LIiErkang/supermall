<template>
	<div id="home">
		<navBar class="nav-bar"><div slot="center">首页</div></navBar>
		<tabContorl
			:titles="['流行', '新款', '精选']"
			@tabContorl="tabContorl"
			v-show="showTabContorl"
		/>
		<scroll
			class="scroll"
			ref="scroll"
			@scroll="scroll"
			@pullingUp="getHomeGoods"
			:probeType="3"
			:pullUpLoad="true"
		>
			<homeSwiper :banners="banners" />
			<homeRecommend :recommend="recommend" />
			<tabContorl
				:titles="['流行', '新款', '精选']"
				@tabContorl="tabContorl"
				ref="tabContorl"
				class="tab-contorl"
			/>
			<goods :goods="goods[currentType].list" />
		</scroll>
		<backTop class="back-top" @click.native="backTop" v-show="isBackTopShow" />
	</div>
</template>
<script>
	import { getHomeData, getHomeGoods } from 'network/home'

	import Scroll from 'components/comment/scroll/Scroll'
	import NavBar from 'components/comment/navBar/NavBar'
	import BackTop from 'components/comment/backTop/BackTop'
	import TabContorl from 'components/content/tabContorl/TabContorl'
	import Goods from 'components/content/goods/Goods'

	import HomeSwiper from './childComps/HomeSwiper'
	import HomeRecommend from './childComps/Recommend'

	export default {
		components: {
			HomeSwiper,
			HomeRecommend,
			TabContorl,
			Goods,
			NavBar,
			Scroll,
			BackTop
		},
		data () {
			return {
				goods: {
					'pop': { page: 0, list: [] },
					'new': { page: 0, list: [] },
					'sell': { page: 0, list: [] }
				},
				banners: [],
				recommend: [],
				currentType: 'pop',
				isBackTopShow: false,
				showTabContorl: false,
			}
		},
		methods: {
			getHomeGoods () {
				getHomeGoods(this.currentType, ++this.goods[this.currentType].page)
					.then(res => {
						this.goods[this.currentType].list.push(...res.data.list)
					})
				this.$refs.scroll.finish()
				this.$refs.scroll.refresh()
			},
			tabContorl (index) {
				switch (index) {
					case 0: this.currentType = 'pop'; break
					case 1: this.currentType = 'new'; break
					case 2: this.currentType = 'sell'; break
				}
				this.getHomeGoods()
			},
			backTop () {
				this.$refs.scroll.scrollTo(0, 0)
			},
			scroll (position) {
				this.isBackTopShow = -position.y >= 500
				this.showTabContorl = -position.y >= this.$refs.tabContorl.$el.offsetTop
			}
		},
		mounted () {
			getHomeData().then(res => {
				this.banners = res.data.banner.list
				this.recommend = res.data.recommend.list
				this.getHomeGoods()
			})
			this.$bus.$on('itemLoad', this.$refs.scroll.refresh)
		},
	}
</script>
<style scoped>
	.nav-bar {
		background-color: var(--color-tint);
		color: #fff;
		position: relative;
		z-index: 9;
	}
	.tab-contorl {
		position: relative;
		z-index: 1000;
	}
	.scroll {
		position: absolute;
		top: 44px;
		bottom: 49px;
	}
	.back-top {
		position: fixed;
		bottom: 65px;
		right: 20px;
		z-index: 10;
	}
</style>
