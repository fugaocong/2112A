<template>
	<section>
		<div @click="pushMsg">push message</div>
		<br />
	</section>
</template>

<script>
	import eventBus from './EventBus';
	export default {
		name: 'Children1',
		components: {},
		data() {
			return {
				childNum: 0,
			};
		},
		methods: {
			pushMsg() {
				// 通过事件总线发送消息
				eventBus.$emit('pushMsg', this.childNum++);
			},
		},
	};
</script>
