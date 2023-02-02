<template>
	<section>
		<p>子组件收到</p>
		<p>祖父的名字：{{ name }}</p>
		<p>祖父的性别：{{ sex }}</p>
		<p>祖父的年龄：{{ age }}</p>
		<p>祖父的爱好：{{ hobby }}</p>

		<button @click="sayKnow">我是孙传祖的按钮</button>
	</section>
</template>

<script>
	export default {
		name: 'Children',
		components: {},
		// 由于父组件已经接收了name属性，所以name不会传到子组件了
		props: ['sex', 'age', 'hobby', 'name'],
		data() {
			return {};
		},
		methods: {
			sayKnow() {
				this.$emit('sayKnow', '我是孙传祖');
			},
		},
	};
</script>
