<template>
	<div id="app">
		<keep-alive exclude="detail">
			<router-view></router-view>
		</keep-alive>
		<tabBar class="tab-bar" />
	</div>
</template>
<script>
import TabBar from 'components/comment/tabBar/TabBar'
export default {
	components: {
		TabBar
	}
}
</script>
<style scoped>
@import 'assets/css/base.css';
.tab-bar {
	position: fixed;
	z-index: 9;
	bottom: 0;
}
</style>
