<template>
	<div class="tabBarItem" :class="{ show: isShow }" @click="itemClick">
		<div class="icon"><slot name="icon"></slot></div>
		<div class="text"><slot name="text"></slot></div>
	</div>
</template>
<script>
	export default {
		props: {
			path: {
				type: String,
				default () {
					return ''
				}
			}
		},
		methods: {
			itemClick () {
				this.$router.push(this.path)
			}
		},
		computed: {
			isShow () {
				return this.$route.path.indexOf(this.path) !== -1
			}
		}
	}
</script>
<style>
	.tabBarItem {
		flex: 1;
		text-align: center;
	}
	.show {
		color: var(--color-tint);
	}
	.icon {
		font-size: 20px;
	}
	.text {
		font-size: 16px;
		margin-bottom: 2px;
	}
</style>