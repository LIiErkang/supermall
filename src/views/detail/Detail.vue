<template>
	<div id="detail">
		<navBar :titles="['商品', '参数', '评论', '推荐']" class="nav-bar" />
		<scroll class="scroll" ref="scroll">
			<detailBaseInfo :baseInfo="baseInfo" />
			<detailShopInfo :shopInfo="shopInfo" />
			<detailInfo :detailInfo="detailInfo" @imageLoad="imageLoad" />
			<detailParams :detailParams="detailParams" />
			<detailRate :rate="rate" />
		</scroll>
	</div>
</template>
<script>
import { getDetailData, BaseInfo, ShopInfo } from 'network/detail'

import Scroll from 'components/comment/scroll/Scroll'

import NavBar from './childCopms/DetailNavBar'
import DetailBaseInfo from './childCopms/DetailBaseInfo'
import DetailShopInfo from './childCopms/DetailShopInfo'
import DetailInfo from './childCopms/DetailInfo'
import DetailParams from './childCopms/DetailParams'
import DetailRate from './childCopms/DetailRate'

export default {
	name: 'detail',
	components: {
		DetailBaseInfo,
		DetailShopInfo,
		DetailInfo,
		DetailParams,
		Scroll,
		NavBar,
		DetailRate
	},
	data() {
		return {
			banners: [],
			baseInfo: {},
			shopInfo: {},
			detailInfo: {},
			detailParams: [],
			rate: {}
		}
	},
	created() {
		const iid = this.$route.params.iid
		getDetailData(iid).then(result => {
			const res = result.result
			this.banners = res.itemInfo.topImages
			this.baseInfo = new BaseInfo(res.itemInfo, res.columns, res.shopInfo)
			this.shopInfo = new ShopInfo(res.shopInfo)
			this.detailInfo = res.detailInfo
			this.detailParams = [
				res.itemParams.rule.tables[0],
				res.itemParams.info.set
			]
			this.rate = res.rate
		})
	},
	methods: {
		imageLoad() {
			this.$refs.scroll.refresh()
		}
	}
}
</script>
<style scoped>
.nav-bar {
	position: relative;
	z-index: 11;
	background-color: #fff;
	font-size: 16px;
}
.scroll {
	position: absolute;
	top: 44px;
	bottom: 49px;
}
</style>
