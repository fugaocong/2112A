<template>
	<div>
		<header>
			<dv-decoration-8 style="width: 300px; height: 50px" />
			<dv-decoration-5 style="width: 600px; height: 40px; margintop: 25px" />
			<dv-decoration-8 :reverse="true" style="width: 300px; height: 50px" />
			<p>互联网产业全球布局看板</p>
		</header>
		<main>
			<div class="left">
				<!-- 外卖用户 -->
				<div class="takeaway-user-sum">
					<takeawayUserSum></takeawayUserSum>
				</div>
				<!-- 外卖用户年龄 -->
				<div class="takeaway-user-age">
					<takeawayUserAge></takeawayUserAge>
				</div>
				<!-- 外卖登录设备 -->
				<div class="takeaway-login-facility">
					<takeawayLoginFacility></takeawayLoginFacility>
				</div>
				<!-- 男性女性人数 -->
				<div class="man-woman-user-num"></div>
				<!-- 外卖骑手概况 -->
				<div class="takeaway-rider"></div>
				<!-- 当前热卖品类 -->
				<div class="hot-selling-category"></div>
			</div>
			<div class="right">
				<!-- 今日统计 -->
				<div class="right-header"></div>
				<!-- 地方数据的导航栏 -->
				<div class="right-nav"></div>
				<!-- 外卖销售 -->
				<div class="takeaway-market">
					<!-- 地图数据 -->
					<div class="takeaway-market-left"></div>
					<!-- 区域销售分析 -->
					<div class="takeaway-market-right"></div>
				</div>
				<!-- 订单和商家销售排行 -->
				<div class="order-form-shops">
					<!-- 左侧 -->
					<div class="order-form"></div>
					<!-- 右侧商家排行 -->
					<div class="shops-ranking"></div>
				</div>
			</div>
		</main>
	</div>
</template>

<script>
	import takeawayUserSum from '../components/takeawayUserSum/index.vue';
	import takeawayUserAge from '../components/takeawayUserAge/index.vue';
	import takeawayLoginFacility from '../components/takeawayLoginFacility/index.vue';
	export default {
		data() {
			return {};
		},
		components: { takeawayUserSum, takeawayUserAge, takeawayLoginFacility },
		methods: {},
		created() {},
		mounted() {},

		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	header {
		height: 7vh;
		width: 100vw;
		background-color: #1b1b1b;
		text-align: center;
		color: #fff;
		line-height: 6vh;
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: relative;
		> p {
			position: absolute;
			top: 0;
			left: 50%;
			transform: translate(-50%);
			font-weight: 700;
		}
	}
	main {
		height: 93vh;
		width: 100vw;
		background-color: #1b1b1b;
		display: flex;
		color: #fff;
		.left {
			width: 22%;
			height: 100%;
			background-color: #414244;
			margin-right: 0.5%;
			/**外卖用户 */
			.takeaway-user-sum {
				height: 15vh;
				width: 100%;
				background-color: #414244;
				margin-bottom: 4px;
				border-bottom: 4px solid #292a2c;
				padding: 5px;
				box-sizing: border-box;
			}
			/**外卖用户年龄 */
			.takeaway-user-age {
				height: 15vh;
				width: 100%;
				background-color: #292a2c;
				margin-bottom: 8px;
				padding: 5px;
				box-sizing: border-box;
			}
			/**外卖登陆设备 */
			.takeaway-login-facility {
				height: 15vh;
				width: 100%;
				background-color: #292a2c;
				margin-bottom: 10px;
				padding: 5px;
				box-sizing: border-box;
			}
			/**男性女性人数 */
			.man-woman-user-num {
				height: 12vh;
				width: 100%;
				background-color: #292a2c;
				margin-bottom: 8px;
				padding: 5px;
				box-sizing: border-box;
			}
			/**外卖骑手 */
			.takeaway-rider {
				height: 15vh;
				width: 100%;
				background-color: #292a2c;
				margin-bottom: 8px;
				padding: 5px;
				box-sizing: border-box;
			}
			/**热卖品类 */
			.hot-selling-category {
				height: 15vh;
				width: 100%;
				background-color: #292a2c;
				margin-bottom: 8px;
				padding: 5px;
				box-sizing: border-box;
			}
		}
		.right {
			width: 77.5%;
			height: 100%;
			background-color: #1b1b1b;
			/**今日统计 */
			.right-header {
				height: 10vh;
				width: 100%;
				background-color: #414244;
				margin-bottom: 8px;
			}
			/**地方数据的导航栏  */
			.right-nav {
				height: 3vh;
				width: 100%;
				background-color: #34373e;
				margin-bottom: 8px;
			}
			/**外卖销售 */
			.takeaway-market {
				height: 48vh;
				width: 100%;
				margin-bottom: 8px;
				display: flex;
				/**地图数据 */
				.takeaway-market-left {
					width: 65%;
					height: 100%;
					background-color: #414244;
					margin-right: 0.4%;
				}
				/**区域销售分析 */
				.takeaway-market-right {
					width: 34.6%;
					height: 100%;
					background-color: #353535;
				}
			}
			/** 订单和商家销售排行*/
			.order-form-shops {
				height: 29vh;
				width: 100%;
				display: flex;
				/**左侧订单趋势 */
				.order-form {
					width: 65%;
					height: 100%;
					background-color: #414244;
					margin-right: 0.4%;
				}
				/**商家排行 */
				.shops-ranking {
					width: 34.6%;
					height: 100%;
					background-color: #353535;
				}
			}
		}
	}
</style>
