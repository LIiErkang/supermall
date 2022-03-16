<template>
	<navBar>
		<div slot="left" @click="itemClick">
			<i style="font-size: 25px" class="fa fa-angle-left"></i>
		</div>
		<div slot="center" class="center">
			<span v-for="item in titles">{{ item }}</span>
		</div>
	</navBar>
</template>
<script>
	import NavBar from 'components/comment/navBar/NavBar'
	export default {
		components: {
			NavBar
		},
		methods: {
			itemClick () {
				this.$router.back()
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
<style>
	.center {
		display: flex;
		justify-content: space-evenly;
	}
</style>