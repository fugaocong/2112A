<template>
	<div>
		<el-container>
			<el-aside width="16%">
                <!-- 侧边栏 -->
				<sidebar></sidebar>
			</el-aside>
			<el-container>
				<el-header> </el-header>
				<el-main>Main</el-main>
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
	}

	.el-aside {
		background-color: #324057;
		color: #bfcbd9;
		height: 100vh;
	}

	.el-main {
		background-color: #fff;
		color: #333;
	}
</style>
