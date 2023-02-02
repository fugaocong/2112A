<template>
	<section>我是子组件------- 父组件传入的值：{{ getName }}</section>
</template>

<script>
	export default {
		name: 'Children',
		components: {},
		data() {
			return {};
		},
		inject: ['getName'],
	};
</script>
