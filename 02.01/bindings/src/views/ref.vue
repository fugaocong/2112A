<template>
	<div class="parent">
		<!-- 给子组件设置一个ID ref="children" -->
		<Children ref="children"></Children>
		<div @click="pushMsg">push message</div>
	</div>
</template>

<script>
	import Children from '../components/refChildren';

	export default {
		name: 'parent',
		components: {
			Children,
		},
		methods: {
			pushMsg() {
				// 通过这个ID可以访问子组件的方法
				this.$refs.children.updateMsg('Have you received the clothes？');
				// 也可以访问子组件的属性
				console.log('children props:', this.$refs.children.desc);
			},
		},
	};
</script>
