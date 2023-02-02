<template>
	<div class="parent">
		子传父： 这里是计数：{{ parentNum }}
		<Children-Com @addNum="getNum"></Children-Com>
	</div>
</template>

<script>
	import ChildrenCom from '../components/aboutChild';

	export default {
		name: 'Parent',
		components: {
			ChildrenCom,
		},
		data() {
			return {
				parentNum: 0,
			};
		},
		methods: {
			// childNum是由子组件传入的
			getNum(childNum) {
				this.parentNum = childNum;
			},
		},
	};
</script>
