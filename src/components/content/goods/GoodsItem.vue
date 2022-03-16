<template>
	<div class="goods-item" @click="itemClick()">
		<img :src="goodsItem.show.img" @load="itemLoad" />
		<div class="info">
			<p class="title">{{ goodsItem.title }}</p>
			<p class="goods-info">
				<span>￥{{ goodsItem.price }}</span>
				<span class="fa fa-star-o" style="margin: 0 5px"></span>
				<span>{{ goodsItem.cfav }}</span>
			</p>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			goodsItem: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods: {
			itemClick () {
				this.$router.push(`detail/${this.goodsItem.iid}`)
			},
			itemLoad () {
				this.$bus.$emit('itemLoad')
			}
		}
	}
</script>
<style scoped>
	.goods-item {
		width: 47%;
		position: relative;
		padding-bottom: 43px;
		font-size: 16px;
	}
	img {
		width: 100%;
		border-radius: 5px;
	}
	.info {
		width: 100%;
		position: absolute;
		bottom: 5px;
	}
	.title {
		padding: 0 5px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.goods-info {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.goods-info span:nth-child(1),
	.goods-info span:nth-child(2) {
		color: var(--color-tint);
	}
</style>