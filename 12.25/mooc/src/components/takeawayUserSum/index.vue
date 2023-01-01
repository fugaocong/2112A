<template>
	<div class="wrap">
		<h5>慕课外卖用户总数</h5>
		<p>Total number of users who want to be sold outside the classroom</p>
		<h1>1,739,919</h1>
		<div class="text">
			<span>每日增长率：73.90%</span>
			&nbsp;
			<span>每月增长率：117.37%</span>
		</div>
		<el-progress
        :percentage="73.9"
        type="line"
        color="#939496"
        :stroke-width="8"
        :show-text="false"
        ></el-progress>
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
				tooltip: {
					trigger: 'axis',
					axisPointer: {
						type: 'shadow',
					},
				},
				legend: {},
				grid: {
                    top:"10%",
					left: '2%',
					right: '22%',
					bottom: '10%',
					// containLabel: true,
				},
				// 不显示x轴的相关信息
				xAxis: {
					show: false,
				},
				yAxis: [
					{
						type: 'category',
						data: [],
						// 不显示y轴的线
						axisLine: {
							show: false,
						},
						// 不显示刻度
						axisTick: {
							show: false,
						},
					},
					{
						data: ['253560件', '253560封', '243570笔'],
						// 不显示y轴的线
						axisLine: {
							show: false,
						},
						// 不显示刻度
						axisTick: {
							show: false,
						},
						axisLabel: {
							color: '#dcd01f',
						},
						inverse: true,
					},
				],
				series: [
					{
						// name:'条',
						type: 'bar',
						data: [243570, 253560, 253560],
						yAxisIndex: 0,
						// 修改柱子的圆角
						itemStyle: {
							borderRadius: 20,
							color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [
								{
									offset: 0,
									color: '#8ce8ff',
								},
								{
									offset: 1,
									color: '#0094F9',
								},
							]),
						},
						// 柱子之间的距离
						barCategoryGap: 50,
						// 柱子宽度
						barWidth: 10,
					},
					{
						type: 'bar',
						data: [300000, 300000, 300000],
						barCategoryGap: 50,

						yAxisIndex: 1,
						// 柱子宽度
						barWidth: 15,
						itemStyle: {
							color: 'none',
							borderColor: '#00a1c9',
							borderWidth: 2,
							borderRadius: 15,
						},
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
