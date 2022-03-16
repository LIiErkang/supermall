<template>
	<div class="params">
		<table class="rule">
			<tr v-for="items in detailParams[0]">
				<td v-for="item in items">{{ item }}</td>
			</tr>
		</table>
		<table class="set">
			<tr v-for="item in detailParams[1]">
				<td>{{ item.key }}</td>
				<td style="color: var(--color-tint)">{{ item.value }}</td>
			</tr>
		</table>
	</div>
</template>
<script>
	export default {
		props: {
			detailParams: {
				type: Array,
				default () {
					return []
				}
			}
		},
	}
</script>
<style scoped>
	.params {
		display: flex;
		flex-wrap: wrap;
		flex-direction: column;
		font-size: 16px;
	}
	table {
		flex: 1;
	}
	.rule tr {
		text-align: center;
	}
	.set tr {
		padding: 0 20px;
	}
	.rule tr,
	.set tr {
		width: 100%;
		display: flex;
		border-bottom: 1px solid #999;
	}
	.rule td,
	.set td {
		flex: 1;
		padding: 10px 0;
	}
</style>