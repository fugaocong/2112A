<template>
	<section>
		<p>父组件收到</p>
		<p>祖父的名字：{{ name }}</p>
		<children v-bind="$attrs" v-on="$listeners"></children>
	</section>
</template>

<script>
	import Children from './Children';

	export default {
		name: 'Parent',
		components: {
			Children,
		},
		// 父组件接收了name,所以name值是不会传到子组件的
		props: ['name'],
		data() {
			return {};
		},
	
	};
</script>
