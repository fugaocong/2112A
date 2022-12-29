<template>
	<div>
		<div id="right-center" style="width: 100%; height: 300px"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},
		mounted() {
			var chartDom = document.getElementById('right-center');
			var myChart = echarts.init(chartDom);
			var option;
			var dimensionData = [
				{ name: '盈利能力', max: 10 },
				{ name: '企业规模', max: 10 },
				{ name: '技术能力', max: 10 },
				{ name: '融资能力', max: 10 },
				{ name: '发展水平', max: 10 },
			];
			var color = ['#135794', '#0bbd71'];
			var data = [
				{
					value: [7, 3, 4, 5, 8],
					areaStyle: {
						color: '#135794',
					},
					emphasis: {
						areaStyle: {
							color: '#135794',
						},
					},
				},
				{
					value: [2, 8, 7, 1, 2],
					areaStyle: {
						color: '#0bbd71',
					},
					emphasis: {
						areaStyle: {
							color: '#0bbd71',
						},
					},
				},
			];
			var radius = '60%';
			option = {
				color: color,
				animation: false,
				legend: {},
				radar: {
					name: {
						show: true,
						textStyle: {
							color: '#fff',
							borderRadius: 3,
						},
					},
					indicator: dimensionData,
					center: ['50%', '50%'],
					radius: radius,
					shape: 'circle',
					splitArea: {
						areaStyle: {
							color: ['rgba(0, 21, 102, 0.4)'],
						},
					},
					splitLine: {
						show: true,
						lineStyle: {
							color: ['rgba(238,238,238, 0.2)'],
						},
					},
					axisLine: {
						lineStyle: {
							color: ['rgba(238,238,238, 0.2)'],
						},
					},
				},
				tooltip: {
					show: false,
					trigger: 'item',
					axisPointer: {
						snap: true,
					},
				},
				//极坐标系
				polar: {
					radius: radius,
					center: ['50%', '50%'],
				},

				angleAxis: {
					triggerEvent: true,
					axisLine: {
						lineStyle: {
							color: 'rgba(238,238,238, 0.2)',
						},
					},
				},
				radiusAxis: {
					type: 'category',
					axisLabel: {
						show: true,
						interval: 7,
						fontSize: 0,
					},
					data: data,
				},
				series: [
					{
						name: '',
						type: 'radar',
						data: data,
					},
				],
			};

			option && myChart.setOption(option);
		},
	};
</script>

<style lang="scss" scoped></style>
