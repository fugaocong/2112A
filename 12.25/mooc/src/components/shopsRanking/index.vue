<template>
	<div class="wrap">
		<h5>地区商家销售排行</h5>
		<div class="box">
			<div class="div">
				<p>北京</p>
				<div class="son">
					<div class="son-right"></div>
				</div>
				<img src="@/assets/yuan1.png" alt="" />
				<div class="foot">
					<span class="color">商家</span>
					<span>订单数</span>
					<span>销售额</span>
				</div>
				<ul>
					<li>
						<span>麦当劳</span>
						<span>356</span>
						<span class="green">13542</span>
					</li>
					<li class="li">
						<span>必胜客</span>
						<span>489</span>
						<span class="green">98330</span>
					</li>
					<li>
						<span>麦当劳</span>
						<span>356</span>
						<span class="green">13542</span>
					</li>
					<li class="li">
						<span>必胜客</span>
						<span>489</span>
						<span class="green">98330</span>
					</li>
					<li>
						<span>麦当劳</span>
						<span>356</span>
						<span class="green">13542</span>
					</li>
				</ul>
			</div>
			<div class="div">
				<p>北京</p>
				<div class="son">
					<div class="son-right"></div>
				</div>
				<img src="@/assets/yuan1.png" alt="" />
				<div class="foot">
					<span class="color">商家</span>
					<span>订单数</span>
					<span>销售额</span>
				</div>
				<ul>
					<li>
						<span>麦当劳</span>
						<span>356</span>
						<span class="green">13542</span>
					</li>
					<li class="li">
						<span>必胜客</span>
						<span>489</span>
						<span class="green">98330</span>
					</li>
					<li>
						<span>麦当劳</span>
						<span>356</span>
						<span class="green">13542</span>
					</li>
					<li class="li">
						<span>必胜客</span>
						<span>489</span>
						<span class="green">98330</span>
					</li>
					<li>
						<span>麦当劳</span>
						<span>356</span>
						<span class="green">13542</span>
					</li>
				</ul>
			</div>
			<div class="div">
				<p>北京</p>
				<div class="son">
					<div class="son-right"></div>
				</div>
				<img src="@/assets/yuan1.png" alt="" />
				<div class="foot">
					<span class="color">商家</span>
					<span>订单数</span>
					<span>销售额</span>
				</div>
				<ul>
					<li>
						<span>麦当劳</span>
						<span>356</span>
						<span class="green">13542</span>
					</li>
					<li class="li">
						<span>必胜客</span>
						<span>489</span>
						<span class="green">98330</span>
					</li>
					<li>
						<span>麦当劳</span>
						<span>356</span>
						<span class="green">13542</span>
					</li>
					<li class="li">
						<span>必胜客</span>
						<span>489</span>
						<span class="green">98330</span>
					</li>
					<li>
						<span>麦当劳</span>
						<span>356</span>
						<span class="green">13542</span>
					</li>
				</ul>
			</div>
		
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {};
		},
	};
</script>

<style lang="scss" scoped>
	.wrap {
		width: 100%;
		height: 100%;
		padding: 5px;
		box-sizing: border-box;
		.box {
			width: 100%;
			display: flex;
			justify-content: space-between;
			.div {
				background-color: #2d2d2d;
				flex: 1;
				box-sizing: border-box;
				margin: 0 5px;
				p {
					font-size: 12px;
					height: 12px;
					line-height: 12px;
					text-indent: 10px;
					padding: 2px 0;
				}
				.son {
					width: 100%;
					height: 10px;
					background-color: #5d5d5d;
					position: relative;
					.son-right {
						background-color: #000;
						width: 6px;
						height: 6px;
						position: absolute;
						top: 2px;
						right: 2px;
					}
				}

				.foot {
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					font-size: 12px;
					background-color: #353941;
					color: #798693;
					.color {
						background-color: #b2d17e;
						color: #fff;
						padding: 2px;
						box-sizing: border-box;
					}
					span {
						flex: 1;
						text-align: center;
					}
				}
				ul {
					width: 100%;
					padding: 0;
					li {
						display: flex;
						justify-content: space-between;
						align-items: center;
						font-size: 14px;
						background-color: #373737;
						line-height: 30px;
						padding: 0 3px;
						.green {
							color: #899e65;
						}
					}
					.li {
						background-color: #282828;
					}
				}
			}
		}
	}
</style>
