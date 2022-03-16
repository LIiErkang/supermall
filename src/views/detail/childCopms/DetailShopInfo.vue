<template>
	<div class="detail-shop-info">
		<div class="title">
			<img :src="shopInfo.logo" class="logo" />
			<span class="name">{{ shopInfo.name }}</span>
		</div>
		<div class="shop-info">
			<div class="sell-info">
				<span class="sell">
					<div>{{ shopInfo.sell }}</div>
					<span>总销量</span>
				</span>
				<span class="goods">
					<div>{{ shopInfo.goods }}</div>
					<span>全部宝贝</span>
				</span>
			</div>
			<div class="score">
				<p v-for="item in shopInfo.score">
					<span>{{ item.name }}</span>
					<span
						:style="{ color: item.isBetter ? 'var(--color-tint)' : 'green' }"
						>{{ item.score }}
					</span>
					<span
						:style="{
							backgroundColor: item.isBetter ? 'var(--color-tint)' : 'green',
						}"
						class="isBetter"
					>
						{{ item.isBetter ? "高" : "低" }}
					</span>
				</p>
			</div>
		</div>
		<button class="button">进店逛逛</button>
	</div>
</template>
<script>
	export default {
		props: {
			shopInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		},
	}
</script>
<style scoped>
	.detail-shop-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		border-bottom: var(--border-bottom);
		padding-bottom: 15px;
	}
	.title {
		padding: 15px;
		display: flex;
		align-items: center;
		justify-content: flex-start;
	}
	.logo {
		width: 40px;
		height: 40px;
		border-radius: 50%;
		border: 1px solid rgb(128, 128, 128);
		margin-right: 10px;
	}
	.name {
		font-size: 16px;
	}
	.shop-info {
		display: flex;
		font-size: 16px;
	}
	.shop-info > div {
		flex: 1;
	}
	.sell div,
	.goods div {
		margin-bottom: 5px;
	}
	.isBetter {
		color: #fff;
		padding: 2px;
		border-radius: 2px;
	}
	.sell-info {
		display: flex;
		text-align: center;
		border-right: 1px solid #999;
		align-items: center;
		justify-content: space-evenly;
	}
	.score {
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.score p {
		padding: 2px 15px;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
	.button {
		margin: 20px auto 10px auto;
		background-color: #eee;
		border: none;
		color: var(--color-text);
		width: 125px;
		font-size: 16px;
		border-radius: 5px;
		padding: 5px 0;
	}
</style>