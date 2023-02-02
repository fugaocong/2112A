<template>
	<section>我是chidlren2 ------ children1传过来的消息：{{ msg }}</section>
</template>

<script>
	import eventBus from './EventBus';

	export default {
		name: 'Children2',
		components: {},
		data() {
			return {
				msg: '',
			};
		},
		mounted() {
			// 通过事件总线监听消息
			eventBus.$on('pushMsg', (children1Msg) => {
				this.msg = children1Msg;
			});
		},
	};
</script>
