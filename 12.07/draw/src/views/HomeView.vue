<template>
	<div>
		<div class="box">
			<div class="son" v-for="i in personnelList" :key="i.id">{{ i.name }}</div>
			<el-button type="primary" class="add" round @click="openAdd">
				添加
			</el-button>
		</div>
		<!-- 弹出框 -->
		<el-dialog title="添加人员" :visible.sync="dialogVisible" width="30%">
			<el-form
				:model="ruleForm"
				:rules="rules"
				ref="ruleForm"
				label-width="100px"
				class="demo-ruleForm"
			>
				<el-form-item label="姓名" prop="name">
					<el-input v-model="ruleForm.name" placeholder="请输入姓名"></el-input>
				</el-form-item>
				<el-form-item label="手机号" prop="phone">
					<el-input
						v-model="ruleForm.phone"
						placeholder="请输入手机号 正则校验"
					></el-input>
				</el-form-item>

				<el-form-item label="验证码" prop="verificationCode">
					<el-input
						v-model="ruleForm.verificationCode"
						class="code"
						placeholder="请输入验证码"
					></el-input>
					<el-button
						type="primary"
						class="getCode"
						:class="{ disabled: !this.canClick }"
						@click="countDown"
					>
						{{this.content}}
					</el-button>
				</el-form-item>

				<el-form-item label="充值" prop="recharge">
					<el-input
						maxlength="5"
						minlength="0"
						class="code"
						v-model="ruleForm.recharge"
						placeholder="最多2位小数"
					></el-input>
				</el-form-item>
				<el-form-item>
					<div class="getCode">
						<el-button>取消</el-button>
						<el-button type="primary">确定</el-button>
					</div>
				</el-form-item>
			</el-form>
		</el-dialog>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				personnelList: [
					{
						name: '张三',
						phone: '',
						verificationCode: '',
						recharge: '',
						id: new Date().getTime(),
					},
					{
						name: '李四',
						phone: '',
						verificationCode: '',
						recharge: '',
						id: new Date().getTime(),
					},
				],
				dialogVisible: false,
				ruleForm: {
					name: '',
					phone: '',
					verificationCode: '',
					recharge: '',
				},
				rules: {
					name: [
						{ required: true, message: '请输入姓名', trigger: 'blur' },
						{
							min: 1,
							max: 4,
							message: '长度在 1 到 4 个字符',
							trigger: 'blur',
						},
					],
					phone: [
						{ required: true, message: '请输入手机号', trigger: 'blur' },
						{
							pattern: /^1[35789]\d{9}$/,
							message: '格式不正确',
							trigger: 'blur',
						},
					],
					verificationCode: [
						{ required: true, message: '请输入验证码', trigger: 'blur' },
						{ pattern: /^\d{6}$/, message: '格式不正确', trigger: 'blur' },
					],
				},
				content: '获取验证码', // 按钮里显示的内容
				timer: 60, //记录具体倒计时时间
				canClick: true, //控制不可再次点击
			};
		},
		methods: {
			openAdd() {
				this.dialogVisible = true;
			},
			countDown() {
				if (!this.canClick) return;
				this.canClick = false;
				this.content = this.timer + 's后重新发送';
				let clock = setInterval(() => {
					this.timer--;
					this.content = this.timer + 's后重新发送';
					if (this.timer < 0) {
						clearInterval(clock);
						this.content = '重新发送验证码';
						this.timer = 60;
						this.canClick = true;
					}
				}, 1000);
			},
		},
		created() {},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	};
</script>

<style lang="scss" scoped>
	.box {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		padding: 10px;
		box-sizing: border-box;
		.son {
			margin: 0px 10px;
		}
		.add {
			background-color: #3b3968;
		}
	}
	.code {
		width: 40%;
	}
	.getCode {
		float: right;
		cursor: pointer;
	}
	.disabled {
		background-color: #ddd;
		border-color: #ddd;
		color: #57a3f3;
		cursor: not-allowed;
	}
</style>
