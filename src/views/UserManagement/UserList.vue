<template>
  <div>
    <el-card>
      <!-- 搜索添加 -->
      <div class="search-add">
        <el-input placeholder="请输入内容" v-model="params.query" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
        <el-button type="primary" @click="openAddOrUpdate">添加用户</el-button>
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
            <el-switch
              v-model="scope.row.mg_state"
              active-color="#13ce66"
              inactive-color="#ff4949"
              @change="updateStatus(scope.row)"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="small" @click="openAddOrUpdate(scope.row)"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" @click="del(scope.row)"></el-button>
            <el-button
              type="warning"
              icon="el-icon-setting"
              size="small"
              @click="assigningButton(scope.row)"
            ></el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.pagenum"
        :page-sizes="[1, 2, 3, 5]"
        :page-size="params.pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
    <!-- 添加或编辑的对话框 -->
    <user-add-or-update
      v-if="AddDialog"
      ref="UserAddOrUpdate"
      @closeChildDialog="closeChildDialog"
    ></user-add-or-update>
    <!-- 分配角色 -->
    <assigning-roles v-if="assigningDialog" ref="assigningRoles" @changeRoles="changeRoles"></assigning-roles>
  </div>
</template>

<script>
import UserAddOrUpdate from "./UserAddOrUpdate.vue"
import { usersList, addUserList, updateUserStatusList, updateUserList, deleteUserList } from "@/utils/api/user.js"
import { getRolesList } from "@/utils/api/roleList"
import { STATUS } from "@/constStatus"
import AssigningRoles from "./AssigningRoles.vue"
export default {
  data() {
    return {
      // 获取的数据
      tableData: [],
      params: {
        // 分页数据第几页
        pagenum: 1,
        // 分页每页多少个
        pagesize: 5,
        // 搜索
        query: ""
      },
      /**添加或编辑框的子组件的懒加载 */
      AddDialog: false,
      /**分配角色组件的懒加载状态 */
      assigning: false,
      /**角色列表数据 */
      assigningDialog: [],
      total: 0
    }
  },
  components: { UserAddOrUpdate, AssigningRoles },
  computed: {
    // total() {
    //   return this.tableData.length
    // },
    // 计算分页展示数据
    pagingList() {
      return this.tableData.slice(
        this.params.pagesize * (this.params.pagenum - 1),
        this.params.pagesize * this.params.pagenum
      )
    }
  },
  methods: {
    /** 获取数据*/
    getUsersList() {
      usersList(this.params).then((res) => {
        console.log(res)
        let { status } = res.meta
        let { users, total } = res.data
        if (status == STATUS.SUCCESS) {
          this.tableData = users
          this.total = total
        }
      })
    },
    /**获取每页多少条 */
    handleSizeChange(val) {
      // console.log(`每页 ${val} 条`)1
      this.params.pagesize = val
    },
    /**获取第几页数据 */
    handleCurrentChange(val) {
      // console.log(`当前页: ${val}`)
      this.params.pagenum = val
    },
    /**打开添加框或编辑框 */
    openAddOrUpdate(info) {
      /**让组件显示 */
      this.AddDialog = true
      if (info.constructor == Object) {
        this.$nextTick(() => {
          this.$refs.UserAddOrUpdate.init(info)
        })
      } else {
        this.$nextTick(() => {
          this.$refs.UserAddOrUpdate.init()
        })
      }
    },
    /**关闭对话框和修改数据 */
    closeChildDialog(info) {
      this.AddDialog = false
      if (info) {
        addUserList(info).then((res) => {
          let { status, msg } = res.meta
          if (status == STATUS.SUCCESS) {
            this.$message({
              message: msg,
              type: "success"
            })
          } else {
            this.$message({
              message: msg,
              type: "info"
            })
          }
          // console.log(res)
        })
        // this.getUsersList()
        this.tableData.push(info)
      }
    },
    /**修改用户状态 */
    updateStatus(row) {
      console.log(row)
      updateUserStatusList({ uid: row.id, type: row.mg_state }).then((res) => {
        console.log(res)
      })
    },
    /**搜索 */
    search() {
      this.getUsersList(this.params.query)
    },
    // 删除
    del(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          /**删除接口 */
          deleteUserList(row.id).then((res) => {
            console.log(res)
          })
          //一下数据开启接口后删除
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
    },
    /**分配角色的子组件 */
    changeRoles() {},
    /**分配角色按钮 */
    assigningButton(row) {
      // console.log(row)
      this.assigningDialog = true
      this.$nextTick(() => {
        this.$refs.assigningRoles.inits({
          username: row.username,
          role_name: row.role_name,
          roleName: this.rolesList
        })
      })
    },
    getRoleList() {
      getRolesList().then((res) => {
        // console.log(res)
        this.rolesList = res.data
      })
    }
  },

  created() {
    // 调用请求
    this.getUsersList()
    this.getRoleList()
  }
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
