<template>
	<div>
		<h1>数据统计</h1>
		<ul>
			<li class="orange">当日数据：</li>
			<li>新增数据</li>
			<li>新增订单</li>
			<li>新增管理员</li>
		</ul>
		<ul>
			<li class="blue">总数据：</li>
			<li>注册用户</li>
			<li>订单</li>
			<li>管理员</li>
		</ul>
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
					text: '用户',
				},
				tooltip: {
					trigger: 'axis',
					
				},
				legend: {
					data: ['新注册用户', '新增订单', '新增管理员'],
				},
				grid: {
					left: '3%',
					right: '4%',
					bottom: '3%',
					containLabel: true,
				},
				toolbox: {
					show: true,
						feature: {
							dataZoom: {
								yAxisIndex: 'none',
							},
							dataView: { readOnly: false },
							magicType: { type: ['line', 'bar'] },
							restore: {},
							saveAsImage: {},
						},
				},
				xAxis: {
					type: 'category',
					boundaryGap: false,
					data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				},
				yAxis: {
					type: 'value',
				},
				series: [
					{
						name: '新注册用户',
						type: 'line',
						stack: 'Total',
						data: [120, 132, 101, 134, 90, 230, 210],
					},
					{
						name: '新增订单',
						type: 'line',
						stack: 'Total',
						data: [220, 182, 191, 234, 290, 330, 310],
					},
					{
						name: '新增管理员',
						type: 'line',
						stack: 'Total',
						data: [150, 232, 201, 154, 190, 330, 410],
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
		width: 80%;
		height: 400px;
	}
	h1 {
		text-align: center;
	}
	ul {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-bottom: 20px;
		li {
			padding: 10px 20px;
			background-color: #e5e9f2;
			width: 200px;
			text-align: center;
			margin-left: 10px;
			margin-top: 5px;
			border-radius: 5px;
			box-sizing: border-box;
			color: #666;
		}
		.blue {
			background-color: #20a0ff;
			color: #fff;
		}
		.orange {
			background-color: #ff9800;
			color: #fff;
		}
	}
</style>
