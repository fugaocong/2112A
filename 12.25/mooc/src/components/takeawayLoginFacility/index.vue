<template>
	<div>
		<div class="wrap">
			<div class="left">
				<div id="login-facility" style="width: 100%; height: 100%"></div>
			</div>
			<div class="right">
				<div class="top">
					<h5>慕课外卖登录设备</h5>
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
                backgroundColor:"#2b2c2e",
				title: {
					left: 'center',
					top: 20,
					
				},

				
				series: [
					{
						name: '',
						type: 'pie',
						radius: '55%',
						center: ['50%', '50%'],
						data: [{ value: 335 }, { value: 310 }, { value: 274 }].sort(
							function (a, b) {
								return a.value - b.value;
							},
						),
						roseType: 'radius',
                        labelLine:{
                            show:false
                        },
                        itemStyle:{
                            color:"#83a748"
                        }

					},
				],
			};
			option && myChart.setOption(option);
            window.onresize = function(){
                myChart.resize()
            }
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
			// align-items: center;
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
