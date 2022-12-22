<template>
	<div>
		<div id="main" style="width: 400px; height: 300px"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},
		methods: {},
		created() {},
		mounted() {
			var chartDom = document.getElementById('main');
			var myChart = echarts.init(chartDom);
			var option;
			option = {
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow',
					},
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true,
				},
				xAxis: {
					show: false,
				},
				yAxis: {
					show:true
				},
				series: [
					{
						name: '2012',
						type: 'bar',
						data: [19325, 23438, 31000, 121594, 134141, 681807],
					},
				],
			};

			option && myChart.setOption(option);
		},
		components: {},
	};
</script>

<style lang="scss" scoped></style>
