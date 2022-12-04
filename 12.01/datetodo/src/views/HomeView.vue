<template>
	<div>
		<el-card>
			<el-button type="primary" @click="openAdd">新增todolist</el-button>
			<el-calendar v-model="value" class="date">
				<template slot="dateCell" slot-scope="{ date, data }">
					<div :class="data.isSelected ? 'is-selected' : ''">
						<p>{{ data.day.split('-').slice(1).join('-') }}</p>
					</div>
					<ul>
						<li v-for="i in list" :key="i.id" @click="openEdit(i)">
							<span
								v-if="i.time == data.day"
								:class="i.status == 'false' ? 'red' : 'blue'"
								>{{ i.name }}</span
							>
						</li>
					</ul>
				</template>
			</el-calendar>
		</el-card>
		<!-- 对话框 -->
		<el-dialog :visible.sync="dialogAdd" width="50%">
			<el-form ref="form" :model="form" label-width="100px">
				<el-form-item label="事件名称">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="待办事项时间">
					<el-col :span="11">
						<el-date-picker
							type="date"
							placeholder="选择日期"
							v-model="form.date1"
							style="width: 100%"
						></el-date-picker>
					</el-col>
				</el-form-item>
				<el-form-item label="事项状态">
					<el-radio-group v-model="form.status">
						<el-radio label="false">待办</el-radio>
						<el-radio label="true">已办</el-radio>
					</el-radio-group>
				</el-form-item>
				<el-button type="primary" @click="onSubmit" v-if="editId == -1"
					>立即创建</el-button
				>
				<el-button type="primary" @click="onSubmit" v-else
					>修改</el-button
				>
				<el-button>取消</el-button>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				// 日历的数据
				value: new Date(),
				// 添加对话框的开关
				dialogAdd: false,
				// 添加表单的数据
				form: {
					name: '',
					date1: '',
					status: false,
				},
				// 定义个状态，判断是添加还是编辑
				editId: -1,
			}
		},
		methods: {
			// 打开添加的对话框
			openAdd() {
				this.from = {
					name: '',
					date1: '',
					status: '',
				}
				this.dialogAdd = true
				this.editId = -1
			},
			// 添加时的创建按钮
			onSubmit() {
				if (this.flag == -1) {
					let year = this.form.date1.getFullYear() + '-'
					let month = this.form.date1.getMonth() + 1
					month = String(month).padStart(2, '0')
					let day = this.form.date1.getDate()
					day = String(day).padStart(2, '0')
					let time = year + month + '-' + day
					this.$store.commit('add', {
						name: this.form.name,
						time,
						status: this.form.status,
						id: new Date().getTime(),
					})
					this.editId = 1
				} else {
					let date = new Date(this.form.date1).getTime()
					let date1 = new Date(date)
					let year = date1.getFullYear() + '-'
					let month = date1.getMonth() + 1
					month = String(month).padStart(2, '0')
					let day = date1.getDate()
					day = String(day).padStart(2, '0')
					let time = year + month + '-' + day
					this.$store.commit('add', {
						name: this.form.name,
						time: time,
						status: this.form.status,
						id: this.editId,
					})
				}
				this.dialogAdd = false
				this.from = {
					name: '',
					date1: '',
					status: '',
				}
				this.editId = -1
			},
			openEdit(i) {
				this.dialogAdd = true
				this.form.name = i.name
				this.form.date1 = i.time
				this.form.status = i.status
				this.editId = i.id
			},
		},
		created() {},
		mounted() {},
		components: {},
		computed: {
			list() {
				return this.$store.state.list
			},
		},
		watch: {},
	}
</script>

<style lang="scss" scoped>
	.blue {
		padding: 2px 10px;
		box-sizing: border-box;
		background-color: #76a04c;
		color: #fff;
		border-radius: 5px;
		margin-bottom: 2px;
	}
	.red {
		padding: 2px 10px;
		box-sizing: border-box;
		background-color: red;
		color: #fff;
		border-radius: 5px;
		margin-bottom: 2px;
	}
</style>
