<template>
	<div class="recommend">
		<div v-for="item in recommend" class="recommend-item">
			<img :src="item.image" />
			<span>{{ item.title }}</span>
		</div>
	</div>
</template>
<script>
	export default {
		props: {
			recommend: {
				type: Array,
				default () {
					return []
				}
			}
		},
	}
</script>
<style scoped>
	.recommend {
		display: flex;
	}
	.recommend-item {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	span {
		font-size: 16px;
	}
	img {
		width: 80%;
	}
</style>