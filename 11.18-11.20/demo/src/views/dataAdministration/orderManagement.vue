<template>
	<div>
		<el-table
			:data="orderManagement"
			style="width: 100%"
			@expand-change="requestMerchant"
		>
			<el-table-column type="expand">
				<template slot-scope="props">
					<el-form
						label-position="left"
						inline
						class="demo-table-expand"
					>
						<el-form-item label="用户名">
							<span>{{ list.name }}</span>
						</el-form-item>
						<el-form-item label="店铺名称">
							<span>{{ props.row.name }}</span>
						</el-form-item>
						<el-form-item label="收货地址">
							<span>{{ list.address_detail }}</span>
						</el-form-item>
						<el-form-item label="店铺 ID">
							<span>{{ props.row.restaurant_id }}</span>
						</el-form-item>
						<el-form-item label="店铺地址">
							<span>{{ list.address }}</span>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column prop="id" label="订单 ID"> </el-table-column>
			<el-table-column prop="total_amount" label="总价格">
			</el-table-column>
			<el-table-column prop="status_bar.title" label="订单状态">
			</el-table-column>
		</el-table>
	</div>
</template>

<script>
	import { orderManagement, business, takeList } from '../../utils/api'
	export default {
		data() {
			return {
				orderManagement: [],
				list: [],
				lists: [],
			}
		},
		methods: {
			getOrderManagement() {
				orderManagement().then((res) => {
					// console.log(res)
					this.orderManagement = res
				})
			},
			requestMerchant(row) {
				// console.log(row)
				business(row.restaurant_id).then((res) => {
					// console.log(res)
					this.lists = res
				})
				takeList(row.address_id).then((res) => {
					// console.log(res);
					this.list = res
				})
			},
		},
		created() {
			this.getOrderManagement()
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
