<template>
	<div>
		<div id="left-bottom" style="width: 100%; height: 280px"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},
		methods: {},
		mounted() {
			var chartDom = document.getElementById('left-bottom');
			var myChart = echarts.init(chartDom);
			var option;

			let color = [
				'#dbdb6d',
				'#36CE9E',
				'#FFC005',
				'#FF515A',
				'#8B5CFF',
				'#00CA69',
			];
			let echartData = [
				{
					name: '8:00',
					value1: 600,
				},
				{
					name: '10:00',
					value1: 138,
				},
				{
					name: '12:00',
					value1: 650,
				},
				{
					name: '14:00',
					value1: 173,
				},
				{
					name: '16:00',
					value1: 480,
				},
				{
					name: '18:00',
					value1: 150,
				},
				{
					name: '20:00',
					value1: 180,
				},
				{
					name: '22:00',
					value1: 230,
				},
			];
			let xAxisData = echartData.map((v) => v.name);
			//  ["1", "2", "3", "4", "5", "6", "7", "8"]
			let yAxisData1 = echartData.map((v) => v.value1);
			// [100, 138, 350, 173, 180, 150, 180, 230]
			const hexToRgba = (hex, opacity) => {
				let rgbaColor = '';
				let reg = /^#[\da-f]{6}$/i;
				if (reg.test(hex)) {
					rgbaColor = `rgba(${parseInt('0x' + hex.slice(1, 3))},${parseInt(
						'0x' + hex.slice(3, 5),
					)},${parseInt('0x' + hex.slice(5, 7))},${opacity})`;
				}
				return rgbaColor;
			};
			option = {
				color: color,
				legend: {
					right: 10,
					top: 10,
				},
				grid: {
					top: 10,
                    bottom:10,
                    right:10,
                    left:10,
					containLabel: true,
				},
				xAxis: [
					{
						type: 'category',
						boundaryGap: false,
						data: xAxisData,
					},
				],
				
				yAxis: [
					{
						type: 'value',
					},
				],
				series: [
					{
						type: 'line',
						smooth: true,
						lineStyle: {
							normal: {
								color: color[0],
								shadowBlur: 3,
								shadowColor: hexToRgba(color[0], 0.5),
								shadowOffsetY: 8,
							},
						},
						areaStyle: {
							normal: {
								color: new echarts.graphic.LinearGradient(
									0,
									0,
									0,
									1,
									[
										{
											offset: 0,
											color: hexToRgba(color[0], 0.3),
										},
										{
											offset: 1,
											color: hexToRgba(color[0], 0.1),
										},
									],
									false,
								),
								shadowColor: hexToRgba(color[0], 0.1),
								shadowBlur: 10,
							},
						},
						data: yAxisData1,
					},
				],
			};
			option && myChart.setOption(option);
		},
	};
</script>

<style lang="scss" scoped></style>
