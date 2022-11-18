<template>
	<div>
		<el-menu
			default-active="2"
			class="el-menu-vertical-demo"
			background-color="#324057"
			text-color="#fff"
			active-text-color="#20a0ff"
		>
			<el-menu-item index="2">
				<i class="el-icon-menu"></i>
				<span slot="title">导航二</span>
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>导航一</span>
				</template>
				<el-menu-item index="1-3">选项3</el-menu-item>
			</el-submenu>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>导航一</span>
				</template>
				<el-menu-item index="1-3">选项3</el-menu-item>
			</el-submenu>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-location"></i>
					<span>导航一</span>
				</template>
				<el-menu-item index="1-3">选项3</el-menu-item>
			</el-submenu>
		</el-menu>
	</div>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {},
		created() {},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped></style>
