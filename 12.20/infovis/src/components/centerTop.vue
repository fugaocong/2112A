<template>
	<div>
		<div class="wrap">
			<div class="left">
				<h3>业绩总览</h3>
				<p>1938272</p>
			</div>
			<ul class="right">
				<li>
					<p>字段名称</p>
					<div>
						<el-progress
							type="circle"
							width="70"
							:percentage="80"
							define-back-color="#49bcf7"
							color="#e44b4d"
                            text-color="#fff"
						></el-progress>
					</div>
				</li>
				<li>
					<p>字段名称</p>
					<div>
						<el-progress
							type="circle"
							width="70"
							:percentage="80"
							define-back-color="#49bcf7"
							color="#e44b4d"
                            text-color="#fff"
						></el-progress>
					</div>
				</li>
				<li>
					<p>字段名称</p>
					<div>
						<el-progress
							type="circle"
							width="70"
							:percentage="80"
							define-back-color="#49bcf7"
							color="#e44b4d"
                            text-color="#fff"
						></el-progress>
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
		methods: {},
		created() {},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	.wrap {
		padding: 10px;
		box-sizing: border-box;
		display: flex;
		.left {
			width: 50%;
			p {
				font-size: 60px;
				color: #fef000;
			}
		}
		.right {
            width: 50%;
			display: flex;
            justify-content: space-evenly;
            align-items: center;
		}
	}
</style>
