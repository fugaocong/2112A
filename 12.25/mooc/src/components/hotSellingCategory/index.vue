<template>
	<div>
		<h5>当前热卖品类</h5>
		<p>User Total Count</p>
		<div id="hot-selling-category" style="width: 100%; height: 80%"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},
		mounted() {
			var chartDom = document.getElementById('hot-selling-category');
			var myChart = echarts.init(chartDom);
			var option;

			option = {
				xAxis: {
					type: 'category',
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				},
				yAxis: {
					type: 'value',
				},
				series: [
					{
						data: [120, 200, 150, 80, 70, 110, 130],
						type: 'bar',
					},
				],
			};

			option && myChart.setOption(option);
		},
	};
</script>

<style lang="scss" scoped></style>
