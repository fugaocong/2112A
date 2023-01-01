<template>
	<div class="twoRightTop">
		<h4>区域销售大盘环比分析</h4>
		<div class="box">
			<div class="list">
				<span>城市订单量</span>
				<span>店铺数</span>
				<span>接单骑手人数</span>
				<span>新店铺数量</span>
				<span>人均订单量</span>
			</div>
			<ul>
				<li>
					<span class="yuan"></span>
					<span>北京+1%</span>
					<span class="color">北京+1%</span>
					<span>北京+1%</span>
					<span class="color">北京+1%</span>
					<span>北京+1%</span>
				</li>
				<li class="li">
					<span class="yuan2"></span>
					<span>广州-2%</span>
					<span class="color">广州-2%</span>
					<span>广州-2%</span>
					<span class="color">广州-2%</span>
					<span>广州-2%</span>
				</li>
				<li>
					<span class="yuan"></span>
					<span>南京+3%</span>
					<span class="color">南京+3%</span>
					<span>南京+3%</span>
					<span class="color">南京+3%</span>
					<span>南京+3%</span>
				</li>
				<li class="li">
					<span class="yuan2"></span>
					<span>杭州-1%</span>
					<span class="color">杭州-1%</span>
					<span>杭州-1%</span>
					<span class="color">杭州-1%</span>
					<span>杭州-1%</span>
				</li>
				<li>
					<span class="yuan"></span>
					<span>北京+1%</span>
					<span class="color">北京+1%</span>
					<span>北京+1%</span>
					<span class="color">北京+1%</span>
					<span>北京+1%</span>
				</li>
				<li>
					<span class="yuan"></span>
					<span>深圳+0%</span>
					<span class="color">深圳+0%</span>
					<span>深圳+0%</span>
					<span class="color">深圳+0%</span>
					<span>深圳+0%</span>
				</li>
				<li class="li">
					<span class="yuan2"></span>
					<span>厦门+5%</span>
					<span class="color">厦门+5%</span>
					<span>厦门+5%</span>
					<span class="color">厦门+5%</span>
					<span>厦门+5%</span>
				</li>
				<li>
					<span class="yuan"></span>
					<span>成都+2%</span>
					<span class="color">成都+2%</span>
					<span>成都+2%</span>
					<span class="color">成都+2%</span>
					<span>成都+2%</span>
				</li>
				<li class="li">
					<span class="yuan2"></span>
					<span>杭州-1%</span>
					<span class="color">杭州-1%</span>
					<span>杭州-1%</span>
					<span class="color">杭州-1%</span>
					<span>杭州-1%</span>
				</li>
				<li>
					<span class="yuan"></span>
					<span>深圳+0%</span>
					<span class="color">深圳+0%</span>
					<span>深圳+0%</span>
					<span class="color">深圳+0%</span>
					<span>深圳+0%</span>
				</li>
				<li class="li">
					<span class="yuan2"></span>
					<span>厦门+5%</span>
					<span class="color">厦门+5%</span>
					<span>厦门+5%</span>
					<span class="color">厦门+5%</span>
					<span>厦门+5%</span>
				</li>
				<li>
					<span class="yuan"></span>
					<span>成都+2%</span>
					<span class="color">成都+2%</span>
					<span>成都+2%</span>
					<span class="color">成都+2%</span>
					<span>成都+2%</span>
				</li>
			</ul>
		</div>
	</div>
</template>

<style lang="scss" scoped>
	.twoRightTop {
		width: 98%;
		height: 100%;
		background-color: #373737;
		padding: 10px;
		box-sizing: border-box;
		overflow: hidden;
		h4 {
			margin: 0;
			margin-bottom: 8px;
		}
		.box {
			width: 100%;
			height: 90%;
			background-color: #282828;
			box-sizing: border-box;
			padding: 10px;
            overflow: hidden;
			.list {
				display: flex;
				font-size: 10px;
				justify-content: space-around;
				background-color: #5a5a5a;
				padding: 4px;
			}
			ul {
				li {
					display: flex;
					justify-content: space-around;
					font-size: 10px;
					align-items: center;
					margin: 6px 0;
					padding: 5px 0;
					.yuan {
						width: 6px;
						height: 6px;
						background-color: #265868;
						border-radius: 6px;
					}
					.color {
						color: #83a748;
					}
					.yuan2 {
						width: 6px;
						height: 6px;
						background-color: #497a49;
						border-radius: 6px;
					}
				}
				.li {
					background-color: #373737;
					padding: 5px 0;
				}
			}
		}
	}
</style>
