<template>
	<div class="goods">
		<goodsItem v-for="item in goods" :goodsItem="item"></goodsItem>
	</div>
</template>
<script>
	import GoodsItem from './GoodsItem'
	export default {
		components: {
			GoodsItem
		},
		props: {
			goods: {
				type: Array,
				default () {
					return []
				}
			}
		},
	}
</script>
<style scoped>
	.goods {
		width: 100vw;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
</style>
