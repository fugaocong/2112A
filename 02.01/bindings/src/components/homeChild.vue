<template>
	<section>父组件传过来的消息是：{{ myMsg }}</section>
</template>

<script>
	export default {
		name: 'Children',
		components: {},
		props: ['msg'],
		data() {
			return {
				myMsg: this.msg,
			};
		},
		methods: {},
	};
</script>
