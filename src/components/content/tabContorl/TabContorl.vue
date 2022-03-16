<template>
	<div class="tab-contorl">
		<span
			v-for="(item, index) in titles"
			@click="itemClick(index)"
			:class="{ show: index === currentIndex }"
			>{{ item }}</span
		>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				currentIndex: 0
			}
		},
		methods: {
			itemClick (index) {
				this.currentIndex = index
				this.$emit('tabContorl', index)
			}
		},
		props: {
			titles: {
				type: Array,
				default () {
					return []
				}
			}
		},
	}
</script>
<style scoped>
	.tab-contorl {
		background-color: #fff;
		width: 100vw;
		display: flex;
		line-height: 44px;
	}
	span {
		flex: 1;
		text-align: center;
	}
</style>