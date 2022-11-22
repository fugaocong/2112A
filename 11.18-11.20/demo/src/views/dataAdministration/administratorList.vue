<template>
	<div>
		<el-table :data="administratorList" style="width: 100%">
			<el-table-column prop="user_name" label="姓名"></el-table-column>
			<el-table-column prop="create_time" label="注册日期">
			</el-table-column>
			<el-table-column prop="city" label="地址"> </el-table-column>
			<el-table-column prop="admin" label="权限"> </el-table-column>
		</el-table>
	</div>
</template>

<script>
	import { administratorList } from '../../utils/api'
	export default {
		data() {
			return {
				administratorList: [],
			}
		},
		methods: {
			getAdministratorList() {
				administratorList().then((res) => {
					// console.log(res)
					this.administratorList = res.data
				})
			},
		},
		created() {
			this.getAdministratorList()
		},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped></style>
