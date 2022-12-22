<template>
	<div>
		<div class="wrap">
			<header>
				<span></span>
				<span>大数据可视化系统数据分析通用模板</span>
				<span>{{ times }}</span>
			</header>
			<main>
				<div class="left">
					<div class="left-top">
						<ul>
							<li>
								<img src="@/assets/icon1.png" alt="" />
								<div>
									<p>字段名称</p>
									<span>200个</span>
								</div>
							</li>
							<li>
								<img src="@/assets/icon2.png" alt="" />
								<div>
									<p>字段名称</p>
									<span>1200个</span>
								</div>
							</li>
							<li>
								<img src="@/assets/icon3.png" alt="" />
								<div>
									<p>字段名称</p>
									<span>150个</span>
								</div>
							</li>
						</ul>
					</div>
					<div class="left-center">
						<left-center></left-center>
					</div>
				</div>
				<div class="center"></div>
				<div class="right"></div>
			</main>
		</div>
	</div>
</template>

<script>
	import dayjs from 'dayjs';
	import LeftCenter from '../components/LeftCenter.vue';
	export default {
		data() {
			return {
				/** 时间*/
				times: '',
			};
		},
		components: { LeftCenter },
		created() {},
		mounted() {
			/**调用定时器 */
			this.currentTime();
		},
		methods: {
			/** 获取时间*/
			dateEncapsulation() {
				this.times = dayjs().format('YYYY年MM月DD日HH时mm分ss秒');
			},
			/**定时器 每秒刷新一次时间 */
			currentTime() {
				setInterval(this.dateEncapsulation, 1000);
			},
		},
	};
</script>

<style lang="scss" scoped>
	.wrap {
		// width: 100vw;
		height: 100vh;
		background-image: url(@/assets/bg.jpg);
		background-size: 100% 100%;
		> header {
			background-image: url(@/assets/head_bg.png);
			height: 10vh;
			background-size: 100% 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			> span {
				flex: 1;
			}
			> span:nth-child(2) {
				font-weight: 700;
				font-size: 20px;
			}
		}
		main {
			display: flex;
			justify-content: space-between;
			width: 100%;
			height: 90vh;
			.left,
			.right {
				width: 30%;
			}
			.center {
				flex: 1;
			}
			.left-top {
				background-color: #051d52;
				> ul {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
					width: 100%;
					padding: 10px;
					box-sizing: border-box;
					> li {
						flex: 1;
						background-image: url(@/assets/bg01.png);
						background-size: 100% 100%;
						display: flex;
						justify-content: space-evenly;
						align-items: center;
						padding: 10px;
						box-sizing: border-box;
						span {
							color: #fdef1c;
						}
					}
					> li:nth-child(2) {
						margin: 0 10px;
					}
				}
			}
			.left-center {
                background-color: #051d52;
                margin-top: 10px;
				width: 100%;
				height: 40vh;
			}
		}
	}
</style>
