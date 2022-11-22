<template>
	<div>
		<el-container>
			<el-aside width="16%">
				<!-- 侧边栏 -->
				<sidebar></sidebar>
			</el-aside>
			<el-container>
				<el-header>
					<div v-if="$route.meta == '首页'">
						<el-breadcrumb separator="/">
							<el-breadcrumb-item :to="{ path: '/home' }"
								>首页</el-breadcrumb-item
							>
						</el-breadcrumb>
					</div>
					<div v-else>
						<el-breadcrumb separator="/">
							<el-breadcrumb-item :to="{ path: '/home' }"
								>首页</el-breadcrumb-item
							>
							<el-breadcrumb-item
								><a href="/">数据管理</a></el-breadcrumb-item
							>
							<el-breadcrumb-item>{{
								$route.meta
							}}</el-breadcrumb-item>
						</el-breadcrumb>
					</div>
                    
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>
	import sidebar from '../components/Sidebar.vue'
	export default {
		data() {
			return {}
		},
		methods: {},
		created() {},
		mounted() {},
		components: {
			sidebar,
		},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped>
	.el-header {
		background-color: #eff2f7;
		color: #333;
		height: 60px;
		line-height: 60px;
	}

	.el-aside {
		background-color: #324057;
		color: #bfcbd9;
		height: 100vh;
	}

	.el-main {
		background-color: #fff;
		color: #333;
		height: calc(100vh - 60px);
	}
</style>
