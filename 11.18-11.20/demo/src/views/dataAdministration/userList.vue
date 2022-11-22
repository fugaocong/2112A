<template>
	<div>
		<el-table :data="userList" style="width: 100%">
			<el-table-column type="index" label="#"> </el-table-column>
			<el-table-column prop="registe_time" label="注册日期">
			</el-table-column>
			<el-table-column prop="username" label="用户名称">
			</el-table-column>
			<el-table-column prop="city" label="注册地址"> </el-table-column>
		</el-table>
	</div>
</template>

<script>
	import { userList } from '../../utils/api'
	export default {
		data() {
			return {
				userList: [],
			}
		},
		methods: {
			getUserList() {
				userList().then((res) => {
					// console.log(res)
					this.userList = res
				})
			},
		},
		created() {
			this.getUserList()
		},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped></style>
