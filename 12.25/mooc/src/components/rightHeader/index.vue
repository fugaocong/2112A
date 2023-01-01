<template>
	<div class="wrap">
		<ul>
			<li>
				<div>
					<img src="@/assets/11.png" alt="" />
				</div>
				<div>
					<div class="title">今日销售额</div>
					<div class="small">Today's payed Users</div>
					<h3 class="big">99,999,999</h3>
				</div>
			</li>
			<li>
				<div>
					<img src="@/assets/2.png" alt="" />
				</div>
				<div>
					<div class="title">今日订单量</div>
					<div class="small">Today's payed Users</div>
					<h3 class="big">381,022</h3>
				</div>
			</li>
			<li>
				<div>
					<img src="@/assets/3.png" alt="" />
				</div>
				<div>
					<div class="title">今日交易用户数</div>
					<div class="small">Today's payed Users</div>
					<h3 class="big">13,220,495</h3>
				</div>
			</li>
			<li>
				<div>
					<img src="@/assets/4.png" alt="" />
				</div>
				<div>
					<div class="title">今日新增用户数</div>
					<div class="small">Today's payed Users</div>
					<h3 class="big">441,572</h3>
				</div>
			</li>
			<li>
				<div class="box">
					<img class="images" src="@/assets/dui.png" alt="" />
					<div class="lv">转化率</div>
					<div class="shu">10.14%</div>
				</div>
				<div class="box">
					<img class="images" src="@/assets/heng.png" alt="" />
					<div class="lv">退单率</div>
					<div class="shu">5.14%</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		height: 100%;
		// background-color: #424446;
		overflow: hidden;
	}
	ul {
		height: 100%;
		display: flex;
		justify-content: space-around;
		color: #fff;
		li {
			flex: 1;
			display: flex;
			height: 100%;
			align-items: center;
			padding: 5px;
			box-sizing: border-box;
			img {
				width: 80px;
				height: 100%;
				margin-right: 10px;
			}
			.title {
				font-size: 12px;
				font-weight: 900;
			}
			.small {
				font-size: 10px;
				transform: scale(0.8); // 缩放0.8
			}
			.big {
				margin: 0;
				font-size: 22px;
				font-family: DIN;
			}
		}
		> li:nth-child(5) {
			justify-content: space-evenly;
			.images {
				width: 30px;
				height: 25px;
			}
			.lv {
				font-size: 10px;
				text-align: center;
			}
			.shu {
				font-size: 10px;
				font-weight: 900;
				text-align: center;
			}
		}
	}
</style>
