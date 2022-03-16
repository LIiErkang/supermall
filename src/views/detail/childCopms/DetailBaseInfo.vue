<template>
	<div class="base-info">
		<div class="shop-info">
			<div class="title">
				<p>{{ baseInfo.title }}</p>
			</div>
			<div class="prices">
				<span class="price real">{{ baseInfo.realPrice }}</span>
				<span class="price old">{{ baseInfo.oldPrice }}</span>
				<span class="desc">{{ baseInfo.desc }}</span>
			</div>
			<div class="columns">
				<span v-for="item in baseInfo.columns">
					{{ item }}
				</span>
			</div>
		</div>
		<div class="services">
			<span v-for="item in baseInfo.services">
				<img :src="item.icon" />
				<span>{{ item.name }}</span>
			</span>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			baseInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		},
	}
</script>
<style scoped>
	.base-info {
		display: flex;
		flex-direction: column;
		border-bottom: var(--border-bottom);
	}
	.shop-info {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 10px;
		padding-bottom: 15px;
		border-bottom: 2px solid #eee;
	}
	.title {
		font-size: 18px;
	}
	.prices {
		margin: 5px 0 5px 5px;
	}
	.real {
		color: var(--color-tint);
		font-size: 35px;
		font-weight: 500;
		margin-right: 5px;
	}
	.old {
		text-decoration: line-through;
		margin-right: 10px;
		font-size: 14px;
	}
	.desc {
		color: #fff;
		transform: translateY(-10px);
		display: inline-block;
		background-color: var(--color-tint);
		padding: 2px;
		border-radius: 5px;
		font-size: 14px;
	}
	.columns {
		display: flex;
		justify-content: space-between;
		font-size: 15px;
		transform: translateY(10px);
	}
	.services {
		display: flex;
		justify-content: space-evenly;
		flex-wrap: nowrap;
		font-size: 14px;
		text-align: center;
		margin: 15px 0;
	}
	.services img {
		height: 15px;
		width: 15px;
		vertical-align: middle;
	}
</style>