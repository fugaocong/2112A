<template>
	<div>
		<el-table :data="businessListings" style="width: 100%">
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form
						label-position="left"
						inline
						class="demo-table-expand"
					>
						<el-form-item label="店铺名称">
							<span>{{ props.row.name }}</span>
						</el-form-item>
						<el-form-item label="店铺介绍">
							<span>{{ props.row.description }}</span>
						</el-form-item>
						<el-form-item label="联系电话">
							<span>{{ props.row.phone }}</span>
						</el-form-item>
						<el-form-item label="销售量">
							<span>{{ props.row.recent_order_num }}</span>
						</el-form-item>
						<el-form-item label="商品地址">
							<span>{{ props.row.address }}</span>
						</el-form-item>
						<el-form-item label="店铺 ID">
							<span>{{ props.row.id }}</span>
						</el-form-item>
						<el-form-item label="评分">
							<span>{{ props.row.rating }}</span>
						</el-form-item>
						<el-form-item label="分类">
							<span>{{ props.row.category }}</span>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="店铺名称"> </el-table-column>
			<el-table-column prop="address" label="店铺地址"> </el-table-column>
			<el-table-column prop="description" label="店铺介绍">
			</el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button size="mini">编辑</el-button>
					<el-button size="mini">添加食品</el-button>
					<el-button size="mini" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import { businessListings } from '../../utils/api'
	export default {
		data() {
			return {
				businessListings: [],
			}
		},
		methods: {
			getBusinessListings() {
				businessListings().then((res) => {
					// console.log(res)
					this.businessListings = res
				})
			},
		},
		created() {
			this.getBusinessListings()
		},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped>
	.demo-table-expand {
		font-size: 0;
	}
	.demo-table-expand label {
		width: 90px;
		color: #99a9bf;
	}
	.demo-table-expand .el-form-item {
		margin-right: 0;
		margin-bottom: 0;
		width: 50%;
	}
</style>
