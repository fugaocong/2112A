<template>
	<div class="wrap">
		<h5>慕课外卖用户总数</h5>
		<p>User Total Count</p>
		<h1>1,739,919</h1>
		<div class="text">
			<span>每日增长率：73.90%</span>
			&nbsp;
			<span>每月增长率：117.37%</span>
		</div>
		<div id="user-sum" style="width:100%;height:10px "></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},
		mounted() {
			var chartDom = document.getElementById('user-sum');
			var myChart = echarts.init(chartDom);
			var option;

			option = {
				xAxis: {
					type: 'value',
					// data: ['Mon'],
				},
				yAxis: {
					type: 'category',
				},
				series: [
					{
						data: [120],
						type: 'bar',
					},
				],
			};

			option && myChart.setOption(option);
		},
	};
</script>

<style lang="scss" scoped>
	.wrap {
		color: #fff;
		p {
			font-size: 12px;
		}
		.text {
            margin-bottom: 10px;
			font-size: 14px;
			> span:nth-child(1) {
				color: #afd078;
			}
			> span:nth-child(2) {
				color: #597439;
			}
		}
	}
</style>
