<template>
  <div>
    <!-- 对话框 -->
    <el-dialog :title="!ruleForm ? '添加用户' : '编辑用户'" :visible.sync="dialogVisible" width="50%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="resetForm('ruleForm')">取消</el-button>
          <el-button type="primary" @click="okRole">确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 对话框开启关闭的状态
      dialogVisible: false,
      // 对话框数据
      ruleForm: {
        roleName: "",
        roleDesc: ""
      },
      // 对话框的正则验证
      rules: {
        roleName: [{ required: true, message: "请输入角色名称", trigger: "blur" }],
        roleDesc: [{ required: true, message: "请输入角色描述", trigger: "blur" }]
      }
    }
  },
  methods: {
    okRole() {
      this.dialogVisible = true
      this.$emit("changeRole", this.ruleForm)
    },
    /**用来让父组件调用的方法 */
    init(info) {
      // 打开对话框用的
      // 编辑的回填
      if (info instanceof Object) {
        this.dialogVisible = true
        // console.log(info)
        this.ruleForm = { ...info }
      } else {
        this.dialogVisible = true
      }
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
