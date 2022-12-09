<template>
  <div>
    <el-card>
      <!-- 搜索添加 -->
      <div class="search-add">
        <el-input placeholder="请输入内容" v-model="search" class="input-with-select">
          <el-button slot="append" icon="el-icon-search"></el-button>
        </el-input>
        <el-button type="primary" @click="openAdd">添加用户</el-button>
      </div>
      <!-- 表格展示 -->
      <el-table :data="pagingList" border style="width: 100%">
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="username" label="姓名"> </el-table-column>
        <el-table-column prop="email" label="邮箱"> </el-table-column>
        <el-table-column prop="mobile" label="电话"> </el-table-column>
        <el-table-column prop="role_name" label="角色"> </el-table-column>
        <el-table-column prop="mg_state" label="状态">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.mg_state" active-color="#13ce66" inactive-color="#ff4949"> </el-switch>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="small" @click="openEdit(scope.row)"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" @click="del(scope.row)"></el-button>
            <el-button type="warning" icon="el-icon-setting" size="small"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNum"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 对话框 -->
    <el-dialog :title="editId == -1 ? '添加用户' : '编辑用户'" :visible.sync="dialogVisible" width="50%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="ruleForm.username" :disabled="editId == -1 ? false : true"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" v-if="editId == -1 ? true : false">
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
          <el-button type="primary" @click="submitForm('ruleForm')" v-if="editId == -1">确定</el-button>
          <el-button type="primary" @click="editForm('ruleForm')" v-else>确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { usersList } from "@/utils/api.js"
export default {
  data() {
    return {
      // 获取的数据
      tableData: [],
      // 分页数据第几页
      pageNum: 1,
      // 分页每页多少个
      pageSize: 5,
      // 搜索
      search: "",
      // 对话框开启关闭的状态
      dialogVisible: false,
      // 编辑的状态和添加框的打开关闭状态
      editId: -1,
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
    // 获取数据
    getUsersList() {
      usersList().then((res) => {
        // console.log(res)
        this.tableData = res.data.users
      })
    },
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)
      this.pageSize = val
    },
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.pageNum = val
    },
    // 打开添加框
    openAdd() {
      this.editId = -1
      this.dialogVisible = true
      this.ruleForm = {
        username: "",
        password: "",
        email: "",
        mobile: ""
      }
    },
    // 确定提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!")
          this.tableData.push({ id: new Date().getTime(), ...this.ruleForm, role_name: "超级管理员" })
          this.dialogVisible = false
          this.ruleForm = {
            username: "",
            password: "",
            email: "",
            mobile: ""
          }
        } else {
          console.log("error submit!!")
          return false
        }
      })
    },
    // 取消提交
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // 打开编辑框和数据回填
    openEdit(row) {
      this.dialogVisible = true
      this.editId = row.id
      this.ruleForm.username = row.username
      this.ruleForm.password = row.password
      this.ruleForm.email = row.email
      this.ruleForm.mobile = row.mobile
    },
    // 确定提交
    editForm() {
      let index = this.tableData.findIndex((i) => i.id == this.editId)
      this.tableData[index].username = this.ruleForm.username
      this.tableData[index].password = this.ruleForm.password
      this.tableData[index].email = this.ruleForm.email
      this.tableData[index].mobile = this.ruleForm.mobile
      this.editId = -1
      this.dialogVisible = false
      this.ruleForm = {
        username: "",
        password: "",
        email: "",
        mobile: ""
      }
    },
    // 删除
    del(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          this.$message({
            type: "success",
            message: "删除成功!"
          })
          let index = this.tableData.findIndex((i) => i.id == row.id)
          this.tableData.splice(index, 1)
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    }
  },
  created() {
    // 调用请求
    this.getUsersList()
  },
  mounted() {},
  components: {},
  computed: {
    total() {
      return this.tableData.length
    },
    // 计算分页展示数据
    pagingList() {
      return this.tableData.slice(this.pageSize * (this.pageNum - 1), this.pageSize * this.pageNum)
    }
  },
  watch: {}
}
</script>

<style lang="scss" scoped>
.search-add {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 10px;
  box-sizing: border-box;
  .input-with-select {
    width: 30%;
    margin-right: 2%;
  }
}
</style>
