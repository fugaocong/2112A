<template>
  <div>
    <el-dialog title="添加分类" :visible.sync="dialogVisible" width="50%">
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="添加分类" prop="cat_name">
          <el-input v-model="ruleForm.cat_name"></el-input>
        </el-form-item>
        <el-form-item label="父级分类" prop="cat_pid">
          <el-cascader
            v-model="value"
            :options="cate"
            :props="{ label: 'cat_name', value: 'cat_id', checkStrictly: true }"
          ></el-cascader>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      ruleForm: {
        cat_name: "", //分类名称
        cat_pid: "", //父级分类
        cat_level: "" //分类层级
      },
      rules: {
        cat_name: [
          {
            required: true,
            message: "请添加分类",
            trigger: "blur"
          }
        ]
      },
      cate: [],
      value: ""
    }
  },
  methods: {
    init(val) {
      if (val.row instanceof Object) {
        this.dialogVisible = true
        // console.log(info)
        this.ruleForm = { ...val.row }
      } else {
        this.dialogVisible = true
        this.cate = { ...val.cate }
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
