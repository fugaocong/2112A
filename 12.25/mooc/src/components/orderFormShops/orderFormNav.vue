<template>
	<div>
		<ul>
			<li v-for="item in list" :key="item.id">{{ item.title }}</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				list: [
					{ title: '订单量', id: 1 },
					{ title: '销售额', id: 2 },
					{ title: '用户数', id: 3 },
					{ title: '退单量', id: 4 },
				],
			};
		},
	};
</script>

<style lang="scss" scoped>
	ul {
		display: flex;
		height: 100%;
		width: 100%;
		justify-content: space-between;
		text-align: center;
        border-bottom: 4px solid #1b1b1b;
        padding: 4px;
        box-sizing: border-box;
		li {
			flex: 1;
            font-size: 12px;
            line-height: 100%;
            height: 100%;
		}
	}
</style>
