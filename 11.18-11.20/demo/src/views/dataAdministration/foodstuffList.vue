<template>
	<div>
		<el-table
			:data="foodstuffList"
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
						<el-form-item label="食品名称">
							<span>{{ props.row.name }}</span>
						</el-form-item>
						<el-form-item label="店铺名称">
							<span>{{ list.name }}</span>
						</el-form-item>
						<el-form-item label="食品 ID">
							<span>{{ props.row.category_id }}</span>
						</el-form-item>
						<el-form-item label="餐馆 ID">
							<span>{{ props.row.restaurant_id }}</span>
						</el-form-item>
						<el-form-item label="食品介绍">
							<span>{{ list.description }}</span>
						</el-form-item>
						<el-form-item label="餐馆地址">
							<span>{{ list.address }}</span>
						</el-form-item>
						<el-form-item label="食品评分">
							<span>{{ props.row.rating }}</span>
						</el-form-item>
						<el-form-item label="食品分类">
							<span>{{ list.category }}</span>
						</el-form-item>
						<el-form-item label="月销量">
							<span>{{ props.row.tips }}</span>
						</el-form-item>
					</el-form>
				</template>
			</el-table-column>
			<el-table-column prop="name" label="食品名称"> </el-table-column>
			<el-table-column prop="address" label="食品介绍"> </el-table-column>
			<el-table-column prop="rating" label="评分"> </el-table-column>
			<el-table-column fixed="right" label="操作" width="100">
				<template slot-scope="scope">
					<el-button size="mini" @click="edit(scope.row)"
						>编辑</el-button
					>
					<el-button size="mini" type="danger">删除</el-button>
				</template>
			</el-table-column>
		</el-table>

		<!-- 编辑弹出框 -->
		<el-dialog
			title="修改食品信息"
			:visible.sync="dialogVisible"
			width="50%"
		>
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="食品名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="食品介绍">
					<el-input v-model="form.address"></el-input>
				</el-form-item>
				<el-form-item label="食品分类">
					<el-select v-model="form.category" placeholder="好吃的">
						<el-option value="form.category"></el-option>
					</el-select>
				</el-form-item>
				<el-form-item label="食品介绍">
					<img
						:src="'https://elm.cangdu.org/img/' + form.image_path"
						alt=""
					/>
				</el-form-item>

				<!-- 表格 -->
				<el-table :data="specificationList" stripe style="width: 100%">
					<el-table-column
						prop="specification"
						label="规格"
						width="180"
					>
					</el-table-column>
					<el-table-column prop="packing" label="包装费" width="180">
					</el-table-column>
					<el-table-column prop="price" label="价格">
					</el-table-column>
					<el-table-column fixed="right" label="操作" width="100">
						<template slot-scope="scope">
							<el-button size="mini" type="danger"
								>删除</el-button
							>
						</template>
					</el-table-column>
				</el-table>
				<el-button type="primary" @click="openAddSpecification"
					>添加规格</el-button
				>

				<el-form-item>
					<el-button type="primary" @click="amendOk">确定</el-button>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>

		<!-- 规格弹出框 -->

		<el-dialog
			title="添加规格"
			:visible.sync="specificationDialogVisible"
			width="50%"
		>
			<el-form
				ref="specificationForm"
				:model="specificationForm"
				label-width="80px"
			>
				<el-form-item label="规格">
					<el-input
						v-model="specificationForm.specification"
					></el-input>
				</el-form-item>
				<el-form-item label="包装费">
					<el-input-number
						controls-position="right"
						v-model="specificationForm.packing"
						:min="1"
						:max="10"
						label="描述文字"
					></el-input-number>
				</el-form-item>
				<el-form-item label="包装费">
					<el-input-number
						controls-position="right"
						v-model="specificationForm.price"
						:min="1"
						:max="10"
						label="描述文字"
					></el-input-number>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="addSpecification"
						>立即创建</el-button
					>
					<el-button>取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	import { foodstuffList, business } from '../../utils/api'
	export default {
		data() {
			return {
				foodstuffList: [],
				list: [],
				// 编辑弹出框
				dialogVisible: false,
				// 规格弹出框
				specificationDialogVisible: false,
				// 修改的表单数据
				form: {
					name: '',
					address: '',
					category: '',
					image_path: '',
				},
				// 当前修改的数据的Id
				editId: -1,
				// 添加规格的展示数据
				specificationList: [
					{
						specification: 'asd',
						packing: 2,
						price: 15,
					},
				],
				// 添加规格表单
				specificationForm: {
					specification: '',
					packing: '',
					price: '',
				},
			}
		},
		methods: {
			getFoodstuffList() {
				foodstuffList().then((res) => {
					// console.log(res)
					this.foodstuffList = res
				})
			},
			requestMerchant(row) {
				// console.log(row)
				business(row.restaurant_id).then((res) => {
					console.log(res)
					this.list = res
				})
			},
			// 编辑
			edit(row) {
				// console.log(row)
				this.dialogVisible = true
				this.form.name = row.name
				this.form.address = row.address
				this.form.category = row.category
				this.form.image_path = row.image_path
				this.editId = row.item_id
			},
			// 打开添加规格弹框
			openAddSpecification() {
				this.specificationDialogVisible = true
			},
			// 添加规格
			addSpecification() {
				this.specificationList.push({
					specification: this.specificationForm.specification,
					packing: this.specificationForm.packing,
					price: this.specificationForm.price,
				})
				this.specificationForm.specification = ''
				this.specificationForm.packing = ''
				this.specificationForm.price = ''
				this.specificationDialogVisible = false
			},
			// 确定修改
			amendOk() {
				let index = this.foodstuffList.findIndex((i) => {
					return i.item_id == this.editId
				})
				this.foodstuffList[index].name = this.form.name
				this.foodstuffList[index].address = this.form.address
				this.foodstuffList[index].category = this.form.category
				this.foodstuffList[index].image_path = this.form.image_path
				this.dialogVisible = false
				this.form.image_path = ''
				this.form.category = ''
				this.form.address = ''
				this.form.name = ''
			},
		},
		created() {
			this.getFoodstuffList()
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
