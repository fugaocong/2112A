<template>
  <div>
    <el-dialog title="分配角色" :visible.sync="assigningDialog" width="50%">
      <p>
        当前的用户：<span>{{ form.username }}</span>
      </p>
      <p>
        当前的角色：<span>{{ form.role_name }}</span>
      </p>
      <el-select v-model="value" placeholder="请选择">
        <el-option v-for="item in form.rolesList" :key="item.id" :label="item.roleName" :value="item.roleName">
        </el-option>
      </el-select>
      <div>
        <el-button>取消</el-button>
        <el-button type="primary">确定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      assigningDialog: false,
      form: {
        username: "",
        rolesName: "",
        rolesList: []
      },
      value: ""
    }
  },
  methods: {
    inits(val) {
      // console.log(val)
      this.assigningDialog = true
      this.form.username = val.username
      this.form.role_name = val.role_name
      this.form.rolesList = val.roleName
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
