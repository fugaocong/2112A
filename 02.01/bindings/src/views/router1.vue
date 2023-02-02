<template>
	<div>传参在控制台</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		created() {
			console.log(this.$route.query.name);
		},
	};
</script>

<style lang="scss" scoped></style>
