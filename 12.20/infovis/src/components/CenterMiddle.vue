<template>
	<div>
		<div id="center-middle" style="width: 100%; height: 280px"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},

		mounted() {
			var chartDom = document.getElementById('center-middle');
			var myChart = echarts.init(chartDom);
			var option = {
				tooltip: {
					trigger: 'axis',
				},
				grid: {
					left: '2%',
					right: '4%',
					bottom: '14%',
					top: '16%',
					containLabel: true,
				},
				legend: {
					data: ['1', '2', '3'],
					right: 10,
					top: 12,
					textStyle: {
						color: '#fff',
					},
					itemWidth: 12,
					itemHeight: 10,
					// itemGap: 35
				},
				xAxis: {
					type: 'category',
					data: [
						'1月',
						'2月',
						'3月',
						'4月',
						'5月',
						'6月',
						'7月',
						'8月',
						'9月',
						'10月',
						'11月',
						'12月',
					],
					axisLine: {
						lineStyle: {
							color: 'white',
						},
					},
					axisLabel: {
						// interval: 0,
						// rotate: 40,
						textStyle: {
							fontFamily: 'Microsoft YaHei',
						},
					},
				},

				yAxis: {
					type: 'value',
					max: '1200',
					axisLine: {
						show: false,
						lineStyle: {
							color: 'white',
						},
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: 'rgba(255,255,255,0.3)',
						},
					},
					axisLabel: {},
				},
				series: [
					{
						name: '1',
						type: 'bar',
						barWidth: '15%',
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: '#fccb05',
									},
									{
										offset: 1,
										color: '#f5804d',
									},
								]),
								barBorderRadius: 12,
							},
						},
						data: [400, 400, 300, 300, 300, 400, 400, 400, 300, 666, 464, 234],
					},
					{
						name: '2',
						type: 'bar',
						barWidth: '15%',
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: '#8bd46e',
									},
									{
										offset: 1,
										color: '#09bcb7',
									},
								]),
								barBorderRadius: 11,
							},
						},
						data: [400, 500, 500, 500, 500, 400, 400, 500, 500, 323, 435, 763],
					},
					{
						name: '3',
						type: 'bar',
						barWidth: '15%',
						itemStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
									{
										offset: 0,
										color: '#248ff7',
									},
									{
										offset: 1,
										color: '#6851f1',
									},
								]),
								barBorderRadius: 11,
							},
						},
						data: [400, 600, 700, 700, 1000, 400, 400, 600, 700, 343, 565, 275],
					},
				],
			};
			option && myChart.setOption(option);
		},
	};
</script>

<style lang="scss" scoped></style>
