<template>
	<div>
		<div class="wrap">
			<div class="left">
				<div id="login-facility" style="width: 100%; height: 100%"></div>
			</div>
			<div class="right">
				<div class="top">
					<h5>慕课外卖用户年龄分布&平均年龄</h5>
					<p>of Age</p>
				</div>
				<div class="bottom">
					<ul>
						<li>
							<h5>304,378</h5>
							<p>
								<i></i>
								<span>0-20</span>
							</p>
						</li>
						<li>
							<h5>304,378</h5>
							<p>
								<i></i>
								<span>0-20</span>
							</p>
						</li>
						<li>
							<h5>304,378</h5>
							<p>
								<i></i>
								<span>0-20</span>
							</p>
						</li>
						<li>
							<h5>304,378</h5>
							<p>
								<i></i>
								<span>0-20</span>
							</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import * as echarts from 'echarts';
	export default {
		data() {
			return {};
		},
		methods: {},
		created() {},
		mounted() {
			var chartDom = document.getElementById('login-facility');
			var myChart = echarts.init(chartDom);
			var option;
			option = {
				title: {
					left: 'center',
					top: 20,
					textStyle: {
						color: '#ccc',
					},
				},

				tooltip: {
					trigger: 'item',
					formatter: '{a} <br/>{b} : {c} ({d}%)',
				},

				visualMap: {
					show: false,
					min: 80,
					max: 600,
					inRange: {
						colorLightness: [0, 1],
					},
				},
				series: [
					{
						name: '访问来源',
						type: 'pie',
						radius: '55%',
						center: ['50%', '50%'],
						data: [{ value: 335 }, { value: 310 }, { value: 274 }].sort(
							function (a, b) {
								return a.value - b.value;
							},
						),
						roseType: 'angle',
					},
				],
			};
			option && myChart.setOption(option);
		},
		components: {},
		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	.wrap {
		color: #fff;
		display: flex;
		.left {
			width: 30%;
			height: 100%;
		}
		.right {
			width: 70%;
			height: 100%;
			display: flex;
			flex-wrap: wrap;
			justify-content: space-between;
            flex-direction: column;
			align-items: center;
			.top {
				> p {
					font-size: 12px;
				}
			}
			.bottom {
				> ul {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					> li {
						text-align: center;
						> p {
							> i {
								background-color: #7ea345;
								padding: 4px;
								box-sizing: border-box;
								border-radius: 50%;
								display: inline-block;
								margin-right: 2px;
							}
							> span {
								font-size: 12px;
							}
						}
					}
				}
			}
		}
	}
</style>
