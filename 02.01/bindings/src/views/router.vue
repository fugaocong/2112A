<template>
	<div>
		<button @click="href">路由传参</button>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			href() {
				this.$router.push('/router1?name=你好');
			},
		},
	};
</script>

<style lang="scss" scoped></style>
