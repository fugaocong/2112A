<template>
	<section>传过来的消息：{{ msg }}</section>
</template>

<script>
	export default {
		name: 'Children',
		components: {},
		data() {
			return {
				msg: '',
				desc: 'The use of ref',
			};
		},
		methods: {
			// 父组件可以调用这个方法传入msg
			updateMsg(msg) {
				this.msg = msg;
			},
		},
	};
</script>
