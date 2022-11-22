<template>
	<div>
		<el-form
			:model="ruleForm"
			:rules="rules"
			ref="ruleForm"
			label-width="100px"
			class="demo-ruleForm"
		>
			<el-form-item label="店铺名称" prop="name">
				<el-input v-model="ruleForm.name"></el-input>
			</el-form-item>
			<el-form-item label="详细地址" prop="address">
				<el-input v-model="ruleForm.address"></el-input>
			</el-form-item>
			<el-form-item label="联系电话" prop="phone">
				<el-input v-model="ruleForm.phone"></el-input>
			</el-form-item>
			<el-form-item label="店铺介绍">
				<el-input v-model="ruleForm.introduce"></el-input>
			</el-form-item>
			<el-form-item label="店铺标语">
				<el-input v-model="ruleForm.slogan"></el-input>
			</el-form-item>
			<el-form-item label="店铺分类" prop="classify">
				<el-select
					v-model="ruleForm.classify"
					placeholder="请选择活动区域"
				>
				</el-select>
			</el-form-item>
			<el-form-item label="店铺特色" prop="feature">
				<el-switch v-model="value1" active-text="品牌保证"> </el-switch>
				<el-switch v-model="value2" active-text="蜂鸟专送"> </el-switch>
				<el-switch v-model="value3" active-text="新开店铺"> </el-switch>
				<el-switch v-model="value4" active-text="外卖保"> </el-switch>
				<el-switch v-model="value5" active-text="准时达"> </el-switch>
				<el-switch v-model="value6" active-text="开发票"> </el-switch>
			</el-form-item>
			<el-form-item label="配送费">
				<el-input-number
					controls-position="right"
					v-model="ruleForm.deliveryCost"
					:min="1"
					:max="10"
					label="描述文字"
				></el-input-number>
			</el-form-item>
			<el-form-item label="起送价">
				<el-input-number
					controls-position="right"
					v-model="ruleForm.min_price"
					:min="1"
					:max="10"
					label="描述文字"
				></el-input-number>
			</el-form-item>
			<el-form-item label="营业时间" required>
				<el-col :span="11">
					<el-form-item prop="date1">
						<el-time-picker
							placeholder="起始时间"
							v-model="ruleForm.date1"
							style="width: 100%"
						></el-time-picker>
					</el-form-item>
				</el-col>
				<el-col class="line" :span="2">-</el-col>
				<el-col :span="11">
					<el-form-item prop="date2">
						<el-time-picker
							placeholder="结束时间"
							v-model="ruleForm.date2"
							style="width: 100%"
						></el-time-picker>
					</el-form-item>
				</el-col>
			</el-form-item>

			<el-form-item label="上传店铺头像" prop="headPortrait">
				<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload"
				>
					<img v-if="imageUrl" :src="imageUrl" class="avatar" />
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item label="上传营业执照" prop="businessLicense">
				<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload"
				>
					<img v-if="imageUrl" :src="imageUrl" class="avatar" />
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>
			<el-form-item label="上传餐饮服务许可证" prop="liceNce">
				<el-upload
					class="avatar-uploader"
					action="https://jsonplaceholder.typicode.com/posts/"
					:show-file-list="false"
					:on-success="handleAvatarSuccess"
					:before-upload="beforeAvatarUpload"
				>
					<img v-if="imageUrl" :src="imageUrl" class="avatar" />
					<i v-else class="el-icon-plus avatar-uploader-icon"></i>
				</el-upload>
			</el-form-item>

			<el-form-item label="优惠活动" prop="specialOffer">
				<el-select
					v-model="ruleForm.specialOffer"
					placeholder="请选择活动区域"
				>
					<el-option label="满减优惠" value="1"></el-option>
					<el-option label="优惠大酬宾" value="2"></el-option>
					<el-option label="新用户立减" value="3"></el-option>
					<el-option label="进店领券" value="4"></el-option>
				</el-select>
			</el-form-item>

			<!-- 表格 -->
			<el-table :data="dataList" stripe style="width: 100%">
				<el-table-column prop="title" label="活动标题" width="180">
				</el-table-column>
				<el-table-column prop="name" label="活动名称" width="180">
				</el-table-column>
				<el-table-column prop="details" label="活动详情">
				</el-table-column>
				<el-table-column fixed="right" label="操作" width="100">
					<template slot-scope="scope">
						<el-button
							size="mini"
							type="danger"
							@click="del(scope.index)"
							>删除</el-button
						>
					</template>
				</el-table-column>
			</el-table>

			<el-form-item>
				<el-button type="primary" @click="submitForm('ruleForm')"
					>立即创建</el-button
				>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				value1: '',
				value2: '',
				value3: '',
				value4: '',
				value5: '',
				value6: '',
				imageUrl: '',
				dataList: [
					{
						title: '减',
						name: '满减优惠',
						details: '满30减5，满60减8',
					},
				],
				ruleForm: {
					name: '',
					address: '',
					phone: '',
					introduce: '',
					slogan: '',
					classify: '',
					feature: '',
					deliveryCost: 1,
					min_price: 1,
					date1: '',
					date2: '',
				},
				rules: {
					name: [
						{
							required: true,
							message: '请输入活动名称',
							trigger: 'blur',
						},
					],
					address: [
						{
							required: true,
							message: '请输入地址',
							trigger: 'blur',
						},
					],
					phone: [
						{
							required: true,
							message: '请输入联系电话',
							trigger: 'blur',
						},
					],
				},
			}
		},
		methods: {
			handleAvatarSuccess(res, file) {
				this.imageUrl = URL.createObjectURL(file.raw)
			},
			beforeAvatarUpload(file) {
				const isJPG = file.type === 'image/jpeg'
				const isLt2M = file.size / 1024 / 1024 < 2

				if (!isJPG) {
					this.$message.error('上传头像图片只能是 JPG 格式!')
				}
				if (!isLt2M) {
					this.$message.error('上传头像图片大小不能超过 2MB!')
				}
				return isJPG && isLt2M
			},
			del(index) {
				this.dataList.splice(index, 1)
			},
            // 创建
			submitForm(formName) {
				this.$refs[formName].validate((valid) => {
					if (valid) {
						alert('submit!')
					} else {
						console.log('error submit!!')
						return false
					}
				})
			},
		},
		created() {},
		mounted() {},
		components: {},
		computed: {},
		watch: {},
	}
</script>

<style lang="scss" scoped>
	.avatar-uploader .el-upload {
		border: 1px dashed #d9d9d9;
		border-radius: 6px;
		cursor: pointer;
		position: relative;
		overflow: hidden;
	}
	.avatar-uploader .el-upload:hover {
		border-color: #409eff;
	}
	.avatar-uploader-icon {
		font-size: 28px;
		color: #8c939d;
		width: 178px;
		height: 178px;
		line-height: 178px;
		text-align: center;
	}
	.avatar {
		width: 178px;
		height: 178px;
		display: block;
	}
</style>
