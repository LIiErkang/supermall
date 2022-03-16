<template>
	<div class="img-container">
		<img
			v-for="item in detailInfo.detailImage[0].list"
			:src="item"
			@load="imageLoad"
			class="image"
		/>
	</div>
</template>
<script>
	export default {
		props: {
			detailInfo: {
				type: Object,
				default () {
					return {}
				}
			}
		},
		methods: {
			imageLoad () { this.$emit('imageLoad') }
		}
	}
</script>
<style>
	.img-container {
		width: 100vw;
	}
	.image {
		width: 100%;
		vertical-align: top;
	}
</style>