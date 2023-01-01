<template>
	<div>
		<div class="wrap">
			<ul>
				<li>
					<div class="left">
                        <img src="../../assets/1.png" alt="">
                    </div>
					<div class="right">
						<h5>男性用户人数</h5>
						<p>Number of man</p>
						<div>
							<h3>869,913</h3>
							<span>万人</span>
						</div>
					</div>
				</li>

				<li>
					<div class="left">
                        <img src="../../assets/1.png" alt="">
                    </div>
					<div class="right">
						<h5>女性用户人数</h5>
						<p>Number of woman</p>
						<div>
							<h3>869,913</h3>
							<span>万人</span>
						</div>
					</div>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		mounted() {},
	};
</script>

<style lang="scss" scoped>
	.wrap {
		> ul {
			display: flex;
			> li {
				flex: 1;
                display: flex;
				.left {
					width: 30%;
                    >img{
                        width: 100%;
                        height: 100%;
                    }
				}
				.right {
					width: 70%;
					> div {
						display: flex;
						> span {
							font-size: 12px;
						}
					}
				}
			}
		}
	}
</style>
