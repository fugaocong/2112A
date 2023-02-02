<template>
	<section>
		<br />
		<div @click="clickMe">click me</div>
	</section>
</template>

<script>
	export default {
		name: 'Children',
		components: {},
		data() {
			return {
				childNum: 0,
			};
		},
		methods: {
			clickMe() {
				// 通过自定义事件addNum把值传给父组件
				this.$emit('addNum', this.childNum++);
			},
		},
	};
</script>
