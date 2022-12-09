<template>
  <div>
    <el-button type="primary">添加分类</el-button>
    <el-table
      :data="tableData"
      style="width: 100%; margin-bottom: 20px"
      row-key="cat_id"
      border
      :tree-props="{ children: 'children' }"
    >
      <el-table-column type="index" label="#"> </el-table-column>
      <el-table-column prop="cat_name" label="分类名称" sortable width="180"> </el-table-column>
      <el-table-column prop="address" label="是否有效"> </el-table-column>
      <el-table-column prop="address" label="排序"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { categoriesList } from "@/utils/api.js"
export default {
  data() {
    return {
      tableData: []
    }
  },
  methods: {
    getCategoriesList() {
      categoriesList().then((res) => {
        console.log(res)
        this.tableData = res.data.result
      })
    }
  },
  created() {
    this.getCategoriesList()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
