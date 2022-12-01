<template>
	<div>
		<el-card>
			<el-button type="primary" @click="openAdd">新增todolist</el-button>
			<el-calendar v-model="value">
				<template slot="dateCell" slot-scope="{ date, data }">
					<div :class="data.isSelected ? 'is-selected' : ''">
						<p>{{ data.day.split('-').slice(1).join('-') }}</p>
						{{ data.isSelected ? '666' : '' }}
					</div>
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
						<el-radio label="待办"></el-radio>
						<el-radio label="已办"></el-radio>
					</el-radio-group>
				</el-form-item>
				<el-button type="primary" @click="onSubmit">立即创建</el-button>
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
			}
		},
		methods: {
			// 打开添加的对话框
			openAdd() {
				this.dialogAdd = true
			},
			// 添加时的创建按钮
			onSubmit() {},
		},
		created() {},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped></style>
