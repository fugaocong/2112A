<template>
	<div>
		<div id="main" class="radar"></div>
	</div>
</template>

<script>
	import * as echarts from 'echarts'

	export default {
		data() {
			return {}
		},
		methods: {},
		created() {},
		mounted() {
            
			var chartDom = document.getElementById('main')
			var myChart = echarts.init(chartDom)
			var option

			option = {
				title: {
					text: 'Referer of a Website',
					subtext: 'Fake Data',
					left: 'center',
				},
				tooltip: {
					trigger: 'item',
				},
				legend: {
					orient: 'vertical',
					left: 'left',
				},
				series: [
					{
						name: 'Access From',
						type: 'pie',
						radius: '50%',
						data: [
							{ value: 1048, name: 'Search Engine' },
							{ value: 735, name: 'Direct' },
							{ value: 580, name: 'Email' },
							{ value: 484, name: 'Union Ads' },
							{ value: 300, name: 'Video Ads' },
						],
						emphasis: {
							itemStyle: {
								shadowBlur: 10,
								shadowOffsetX: 0,
								shadowColor: 'rgba(0, 0, 0, 0.5)',
							},
						},
					},
				],
			}

			option && myChart.setOption(option)
		},
		components: {},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped>
	.radar {
		width: 600px;
		height: 400px;
	}
</style>
