<template>
  <div>
    <!-- 对话框 -->
    <el-dialog :title="!ruleForm.id ? '添加用户' : '编辑用户'" :visible.sync="AddDialog" width="50%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" :disabled="!ruleForm.id ? false : true"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="!ruleForm.id ? true : false">
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item label="邮箱" prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <el-form-item label="电话" prop="mobile">
          <el-input v-model="ruleForm.mobile"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
          <el-button type="primary" @click="closeDialog('ruleForm')">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      AddDialog: false,
      // 对话框数据
      ruleForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      },
      // 对话框的正则验证
      rules: {
        username: [{ required: true, message: "请输入用户名", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
        email: [{ required: true, message: "请输入邮箱", trigger: "blur" }],
        mobile: [{ required: true, message: "请输入电话", trigger: "blur" }]
      }
    }
  },
  methods: {
    /** 确定提交或修改*/
    closeDialog() {
      // 关闭对话框
      this.AddDialog = false
      // 把数据传递给父组件
      this.$emit("closeChildDialog", this.ruleForm)
    },
    /**用来让父组件调用的方法 */
    init(info) {
      // 打开对话框用的
      // 编辑的回填
      if (info instanceof Object) {
        this.AddDialog = true
        // console.log(info)
        this.ruleForm = { ...info }
      } else {
        this.AddDialog = true
      }
    },
    // 取消提交
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss" scoped></style>
