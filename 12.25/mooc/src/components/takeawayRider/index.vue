<template>
	<div>
		<h5>慕课外卖棋手概况</h5>
		<p>User Total Count</p>
		<div id="takeaway-rider" style="width: 100%; height: 90px"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},
		mounted() {
			var chartDom = document.getElementById('takeaway-rider');
			var myChart = echarts.init(chartDom);
			var option;

			option = {
				title: {
				
					textStyle: {
						color: '#fff',
						fontWeight: 'bolder',
						fontSize: 14,
					},
					subtextStyle: {
						color: '#ccc',
						fontWeight: 'bolder',
						fontSize: 8,
					},
				},
				tooltip: {
					trigger: 'axis',
				},
				grid: {
                    top:"3%",
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true,
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: [
						'01月',
						'02月',
						'03月',
						'04月',
						'05月',
						'06月',
						'07月',
						'08月',
						'09月',
						'10月',
						'11月',
						'12月',
					],
				},
				yAxis: {
					type: 'value',
				},
				series: [
					{
						name: '今日接单骑手',
						type: 'line',
						stack: 'Total',
						data: [150, 30, 20, 34, 160, 16, 163, 79, 111, 68, 43, 78],
					},
					{
						name: '今日接单骑手',
						type: 'line',
						stack: 'Total',
						data: [20, 120, 30, 54, 110, 46, 113, 39, 101, 28, 83, 58],
					},
				],
			};
			window.onresize = function () {
				myChart.resize();
			};
			option && myChart.setOption(option);
		},
	};
</script>

<style lang="scss" scoped></style>
