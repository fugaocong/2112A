<template>
	<div>
		<div class="wrap">
			<slot
				><h2>{{ title }}</h2></slot
			>
			<slot name="list"></slot>
		</div>
	</div>
</template>

<script>
	export default {
		props: ['title'],
		data() {
			return {}
		},
		methods: {},
		created() {},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped>
	.wrap {
        overflow: hidden;
		background-color: #84cae4;
		h2 {
			margin-top: 10px;
			background-color: orange;
		}
	}
</style>
