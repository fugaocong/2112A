<template>
	<div>
		<el-menu
			default-active="0"
			class="el-menu-vertical-demo"
			background-color="#324057"
			text-color="#fff"
			active-text-color="#20a0ff"
			router
		>
			<el-menu-item index="/home">
				<i class="el-icon-menu"></i>
				<span slot="title">首页</span>
			</el-menu-item>
			<el-submenu index="1">
				<template slot="title">
					<i class="el-icon-document"></i>
					<span>数据管理</span>
				</template>
				<el-menu-item index="/userList">用户列表</el-menu-item>
				<el-menu-item index="/businessListings">商家列表</el-menu-item>
				<el-menu-item index="/foodstuffList">食品列表</el-menu-item>
				<el-menu-item index="/orderManagement">订单列表</el-menu-item>
				<el-menu-item index="/administratorList"
					>管理员列表</el-menu-item
				>
			</el-submenu>
			<el-submenu index="2">
				<template slot="title">
					<i class="el-icon-plus"></i>
					<span>添加数据</span>
				</template>
				<el-menu-item index="/addShops">添加商铺</el-menu-item>
				<el-menu-item index="/addGoods">添加商品</el-menu-item>
			</el-submenu>
			<el-submenu index="3">
				<template slot="title">
					<i class="el-icon-star-on"></i>
					<span>图表</span>
				</template>
				<el-menu-item index="/userProfile">用户分布</el-menu-item>
			</el-submenu>
			<el-submenu index="4">
				<template slot="title">
					<i class="el-icon-edit"></i>
					<span>编辑</span>
				</template>
				<el-menu-item index="/textRedact">文本编辑</el-menu-item>
			</el-submenu>
			<el-submenu index="5">
				<template slot="title">
					<i class="el-icon-s-tools"></i>
					<span>设置</span>
				</template>
				<el-menu-item index="/AdministratorSettings"
					>管理员设置</el-menu-item
				>
			</el-submenu>
			<el-submenu index="6">
				<template slot="title">
					<i class="el-icon-warning"></i>
					<span>说明</span>
				</template>
				<el-menu-item index="/Explain">说明</el-menu-item>
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
