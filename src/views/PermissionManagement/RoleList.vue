<template>
  <div>
    <el-card>
      <el-button type="primary" class="addButton" @click="openAdd">添加按钮</el-button>
      <el-table :data="tableData" border style="width: 100%">
        <el-table-column type="expand">
          <!-- 权限展示 -->
          <template slot-scope="props">
            <div v-for="i in props.row.children" :key="i.id" class="box">
              <div class="left">
                <el-tag closable type="primary" effect="dark">
                  {{ i.authName }}
                </el-tag>
              </div>
              <div class="right">
                <div class="right-son" v-for="item in i.children" :key="item.id">
                  <div class="right-son-one">
                    <el-tag closable type="success" effect="dark">
                      {{ item.authName }}
                    </el-tag>
                  </div>
                  <div class="right-son-two">
                    <span v-for="ele in item.children" :key="ele.id">
                      <el-tag closable type="warning" effect="dark">
                        {{ ele.authName }}
                      </el-tag>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </el-table-column>
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="roleName" label="角色名称"> </el-table-column>
        <el-table-column prop="roleDesc" label="角色描述"> </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="small" @click="openEdit(scope.row)">编辑</el-button>
            <el-button type="danger" icon="el-icon-delete" size="small">删除</el-button>
            <el-button type="warning" icon="el-icon-setting" size="small">分配权限</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 对话框 -->
    <el-dialog :title="editId == -1 ? '添加用户' : '编辑用户'" :visible.sync="dialogVisible" width="50%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="活动名称" prop="roleName">
          <el-input v-model="ruleForm.roleName"></el-input>
        </el-form-item>
        <el-form-item label="活动名称" prop="roleDesc">
          <el-input v-model="ruleForm.roleDesc"></el-input>
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
import { getRolesList, addRolesList, editRolesList } from "@/utils/api"
export default {
  data() {
    return {
      // 展示的数据
      tableData: [],
      // 对话框开启关闭的状态
      dialogVisible: false,
      // 编辑取到的id，也是判断添加和编辑的状态
      editId: -1,
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
    // 获取角色数据
    getRoles() {
      getRolesList().then((res) => {
        // console.log(res)
        this.tableData = res.data
      })
    },
    // 打开添加框
    openAdd() {
      this.dialogVisible = true
    },
    // 确定提交
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // alert("submit!")
          addRolesList(this.ruleForm).then((res) => {
            this.tableData.push({ id: new Date().getTime(), ...this.ruleForm, children: [] })
            this.dialogVisible = false
            this.ruleForm = {
              roleName: "",
              roleDesc: ""
            }
          })
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
    openEdit(row) {
      this.dialogVisible = true
      this.editId = row.id
      this.ruleForm.roleName = row.roleName
      this.ruleForm.roleDesc = row.roleDesc
    },
    editForm() {
      let index = this.tableData.findIndex((i) => i.id == this.editId)
      this.tableData[index].roleName = this.ruleForm.roleName
      this.tableData[index].roleDesc = this.ruleForm.roleDesc
      this.editId = -1
      this.dialogVisible = false
      this.ruleForm = {
        roleName: "",
        roleDesc: ""
      }
    }
  },
  created() {
    this.getRoles()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.addButton {
  float: left;
  margin-bottom: 10px;
}
.box {
  width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #efefef;
  .left {
    width: 30%;
    text-align: center;
    box-sizing: border-box;
  }
  .right {
    width: 70%;
    border-left: 1px solid #efefef;
    box-sizing: border-box;
    .right-son {
      padding: 10px;
      box-sizing: border-box;
      border-bottom: 1px solid #efefef;
      display: flex;
      justify-content: center;
      align-items: center;
      .right-son-one {
        width: 20%;
      }
      .right-son-two {
        width: 80%;
        > span {
          display: inline-block;
          padding: 5px;
          box-sizing: border-box;
        }
      }
    }
  }
}
</style>
