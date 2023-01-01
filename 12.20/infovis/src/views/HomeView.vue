<template>
	<div>
		<div class="wrap">
			<header>
				<h2>大数据可视化系统数据分析通用模板</h2>
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
					<div class="left-bottom">
						<div class="text">
							<p></p>
							<p>模块标题</p>
						</div>
						<left-bottom></left-bottom>
					</div>
				</div>
				<div class="center">
					<div class="center-top">
						<centerTop></centerTop>
					</div>
					<div class="center-middle">
						<center-middle></center-middle>
					</div>
					<div class="center-bottom">
						<div class="text">
							<p></p>
							<p>模块标题</p>
						</div>
                        <centerBottom></centerBottom>
					</div>
				</div>
				<div class="right">
					<div class="right-top">
						<ul>
							<li>
								<img src="@/assets/icon7.png" alt="" />
								<div>
									<p>字段名称</p>
									<span>200项</span>
								</div>
							</li>
							<li>
								<img src="@/assets/icon8.png" alt="" />
								<div>
									<p>字段名称</p>
									<span>34家</span>
								</div>
							</li>
							<li>
								<img src="@/assets/icon9.png" alt="" />
								<div>
									<p>字段名称</p>
									<span>150项</span>
								</div>
							</li>
						</ul>
					</div>
					<div class="right-center">
						<div class="text">
							<p></p>
							<p>模块标题</p>
						</div>
						<right-center></right-center>
					</div>
					<div class="right-bottom">
						<div class="text">
							<p></p>
							<p>排行榜</p>
						</div>
                        <rightBottom></rightBottom>
					</div>
				</div>
			</main>
		</div>
	</div>
</template>

<script>
	import dayjs from 'dayjs';
	import LeftCenter from '../components/LeftCenter.vue';
	import LeftBottom from '@/components/LeftBottom.vue';
	import RightCenter from '@/components/RightCenter.vue';
	import CenterMiddle from '@/components/CenterMiddle.vue';
	import centerTop from '@/components/centerTop.vue';
	import rightBottom from '@/components/rightBottom.vue';
	import centerBottom from '@/components/centerBottom.vue';
	export default {
		data() {
			return {
				/** 时间*/
				times: '',
			};
		},
		components: {
			LeftCenter,
			LeftBottom,
			RightCenter,
			CenterMiddle,
			centerTop,
            rightBottom,
            centerBottom
		},
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
			position: relative;
			line-height: 10vh;
			text-align: center;
			> span {
				position: absolute;
				right: 10px;
				top: 0;
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
				padding: 0 10px;
				box-sizing: border-box;
			}
			.text {
				width: 100%;
				display: flex;
				> p:nth-child(1) {
					margin: 10px;
					display: inline-block;
					height: 16px;
					width: 2px;
					background-color: #4accfe;
				}
				> p:nth-child(2) {
					margin-top: 5px;
				}
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
			.left-center,
			.right-center {
				background-color: #051d52;
				margin-top: 10px;
				width: 100%;
				height: 40vh;
			}
			.left-bottom,
			.right-bottom,
			.center-bottom {
				height: 37vh;
				width: 100%;
				margin-top: 10px;
				background-color: #051d52;
			}
			.right-top {
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
						background-image: url(@/assets/bg02.png);
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
			.center-top {
				background-color: #051d52;
				height: 15vh;
				width: 100%;
			}
			.center-middle {
				background-color: #051d52;
				height: calc(90vh - 15vh - 37vh - 28px);
				margin: 10px 0;
			}
		}
	}
</style>
