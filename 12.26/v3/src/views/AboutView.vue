<template>
	<div class="">
		<h1>姓名：{{ text }}</h1>
		<button @click="getAge">获取数据</button>
	</div>
</template>

<script>
	export default {
        data() {
			return {
				text: '我是李四',
			};
		},
		methods: {
			getAge() {
				console.log('我是v2的一个方法');
			},
		},
		beforeCreate() {
			console.log('beforeCreate');
		},
		created() {
			console.log('created');
		},
		beforeMount() {
			console.log('beforeMount');
		},
		mounted() {
			console.log('beforeMount');
		},
		setup(props) {
			console.log('setup');
			let text = '我是张三';
			const getAge = () => {
				console.log('我是一个方法');
			};
			return { text, getAge };
		},
		
	};
</script>

<style lang="scss" scoped></style>
