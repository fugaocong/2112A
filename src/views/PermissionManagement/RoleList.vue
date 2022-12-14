<template>
  <div>
    <el-card>
      <el-button type="primary" class="addButton" @click="openAddOrUpdate">添加按钮</el-button>
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
            <el-button type="primary" icon="el-icon-edit" size="small" @click="openAddOrUpdate(scope.row)"
              >编辑</el-button
            >
            <el-button type="danger" icon="el-icon-delete" size="small" @click="del(scope.row)">删除</el-button>
            <el-button type="warning" icon="el-icon-setting" size="small" @click="rights(scope.row)"
              >分配权限</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
    <!-- 对话框 -->
    <add-or-update-role v-if="dialogVisible" ref="addOrUpdateRole" @changeRole="changeRole"></add-or-update-role>
    <privilege-child ref="TreeRoles" @setRole="setRole"></privilege-child>
  </div>
</template>

<script>
import { getRolesList, setRolesList, DeleteRoles } from "@/utils/api/roleList"
import { rightsList } from "@/utils/api/privilege"
import addOrUpdateRole from "./addOrUpdateRole.vue"
import PrivilegeChild from "./PrivilegeChild.vue"

export default {
  data() {
    return {
      // 展示的数据
      tableData: [],
      // 对话框开启关闭的状态
      dialogVisible: false
    }
  },
  components: { addOrUpdateRole, PrivilegeChild },
  methods: {
    // 获取角色数据
    getRoles() {
      getRolesList().then((res) => {
        // console.log(res)
        this.tableData = res.data
      })
    },
    /**编辑和添加的按钮 */
    openAddOrUpdate(row) {
      this.dialogVisible = true
      if (row.constructor == Object) {
        this.$nextTick(() => {
          this.$refs.addOrUpdateRole.init(row)
        })
      } else {
        this.$nextTick(() => {
          this.$refs.addOrUpdateRole.init()
        })
      }
    },
    /**子传父 */
    changeRole(info) {
      this.dialogVisible = false
      if (info) {
        this.tableData.push(info)
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
    },
    /**分配角色权限 */
    rights(item) {
      this.roleId = item.id
      rightsList().then((res) => {
        let { data } = res
        this.$refs.TreeRoles.getTree(data)
      })
    },
    /**角色授权 */
    setRole(arrID) {
      setRolesList({ roleId: this.roleId, rights: arrID }).then(() => {
        this.getRoles()
      })
    },
    /**删除角色指定权限 */
    delTree(rolesId, rightId) {
      DeleteRoles({ roleId: rolesId, rightId: rightId }).then(() => {})
    }
  },
  created() {
    this.getRoles()
  }
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
