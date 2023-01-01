<template>
	<div>
		<div id="center-bottom" style="width: 100%; height: 280px"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},

		mounted() {
			var chartDom = document.getElementById('center-bottom');
			var myChart = echarts.init(chartDom);
			var option;
			option = {
				title: {
					text: '模块标题',
					top: '5%',
					left: '2%',
					textStyle: {
						color: '#fff',
					},
				},
				tooltip: {
					trigger: 'axis',
				},
				legend: {
					top: '5%',
					data: ['字段1', '字段2'],
					textStyle: {
						color: '#fff',
					},
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true,
				},
				xAxis: [
					{
						type: 'category',
						boundaryGap: false,
						data: [
							'8:00',
							'',
							'10:00',
							'',
							'12:00',
							'',
							'14:00',
							'',
							'16:00',
							'',
							'18:00',
							'',
							'20:00',
							'',
							'22:00',
						],
						axisLabel: {
							textStyle: {
								color: 'rgba(255,255,255,.6)',
							},
						},
						axisLine: {
							lineStyle: {
								color: 'rgba(255,255,255,.2)',
							},
						},
					},
				],
				yAxis: [
					{
						type: 'value',
						axisTick: { show: false },
						axisLabel: {
							textStyle: {
								color: 'rgba(255,255,255,.6)',
							},
						},
						axisLine: {
							lineStyle: {
								color: 'rgba(255,255,255,.1)',
							},
						},
						splitLine: {
							lineStyle: {
								color: 'rgba(255,255,255,.1)',
							},
						},
					},
				],
				series: [
					{
						name: '字段1',
						type: 'line',
						smooth: true,
						lineStyle: {
							color: '#be687f',
							width: '2',
						},
						areaStyle: {
							color: new echarts.graphic.LinearGradient(
								0,
								0,
								0,
								1,
								[
									{
										offset: 0,
										color: 'rgba(195, 98, 124,0.9)',
									},
									{
										offset: 0.8,
										color: 'rgba(195, 98, 124,0)',
									},
								],
								false,
							),
						},
						emphasis: {
							focus: 'series',
						},
						// 设置拐点
						symbol: 'circle',
						// 拐点大小
						symbolSize: 6,
						// 进入页面不显示拐点，鼠标经过显示
						showSymbol: false,
						// 设置拐点的颜色
						itemStyle: {
							color: '#be687f',
							borderColor: 'rgba(195, 98, 124,0.1)',
							borderWidth: 10,
						},
						data: [
							300, 100, 300, 400, 300, 400, 300, 600, 200, 400, 200, 400, 100,
							300, 400,
						],
					},
					{
						name: '字段2',
						type: 'line',
						smooth: true,
						lineStyle: {
							color: '#c0c57e',
							width: '2',
						},
						areaStyle: {
							color: new echarts.graphic.LinearGradient(
								0,
								0,
								0,
								1,
								[
									{
										offset: 0,
										color: 'rgba(186, 192, 126,0.8)',
									},
									{
										offset: 0.8,
										color: 'rgba(186, 192, 126,0.2)',
									},
								],
								false,
							),
						},
						emphasis: {
							focus: 'series',
						},
						// 设置拐点
						symbol: 'circle',
						// 拐点大小
						symbolSize: 6,
						// 进入页面不显示拐点，鼠标经过显示
						showSymbol: false,
						// 设置拐点的颜色
						itemStyle: {
							color: '#c0c57e',
							borderColor: 'rgba(186, 192, 126,0.1)',
							borderWidth: 10,
						},
						data: [
							600, 200, 600, 200, 400, 200, 400, 300, 400, 300, 400, 300, 200,
							400, 200,
						],
					},
				],
			};
			option && myChart.setOption(option);
		},
	};
</script>

<style lang="scss" scoped></style>
