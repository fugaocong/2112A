<template>
	<div>
		<h2>管理员信息</h2>
		<div class="box">
			<p>姓名：</p>
			<p>注册时间：</p>
			<p>管理员权限：</p>
			<p>管理员 ID：</p>
			<p>更换头像</p>
			<el-upload
				action="http://elm.cangdu.org/img/default.jpg"
				list-type="picture-card"
				:on-preview="handlePictureCardPreview"
				:on-remove="handleRemove"
			>
				<img :src="'http://elm.cangdu.org/img/default.jpg'" alt="">
			</el-upload>
			<el-dialog :visible.sync="dialogVisible">
				<img width="100%" :src="dialogImageUrl" alt="" />
			</el-dialog>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				dialogImageUrl: '',
				dialogVisible: false,
			}
		},
		methods: {
			handleRemove(file, fileList) {
				console.log(file, fileList)
			},
			handlePictureCardPreview(file) {
				this.dialogImageUrl = file.url
				this.dialogVisible = true
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
	h2 {
		text-align: center;
	}
	.box {
        margin: 0 auto;
		width: 400px;
		background-color: #f9fafc;
		padding: 10px;
		box-sizing: border-box;
        img{
            width: 145px;
            height: 145px;
        }
        p{
            margin: 20px 0;
        }
	}
</style>
