<template>
  <div>
    <el-button type="primary" @click="addOrUpdate">添加分类</el-button>

    <zk-table
      class="tb-cate"
      index-text="#"
      show-index
      stripe
      border
      :data="tableData"
      :columns="columns"
      :expand-type="false"
      :selection-type="false"
    >
      <template slot="isok" slot-scope="scope">
        <i class="el-icon-success" v-if="!scope.row.cat_deleted" style="color: lightGreen"></i>
        <i class="el-icon-error" v-else style="color: red"></i>
      </template>
      <template slot="level" scope="scope">
        <el-tag type="primary" effect="plain" size="mini" v-if="scope.row.cat_level === 0">一级</el-tag>
        <el-tag type="success" effect="plain" size="mini" v-else-if="scope.row.cat_level === 1">二级</el-tag>
        <el-tag type="warning" effect="plain" size="mini" v-else>三级</el-tag>
      </template>
      <template slot="opt" scope="scope">
        <el-button type="primary" icon="el-icon-edit" size="mini" @click="addOrUpdate(scope.row)">编辑</el-button>
        <el-button type="danger" icon="el-icon-delete" size="mini" @click="del(scope.row.cat_id)">删除</el-button>
      </template>
    </zk-table>
    <add-cate-child v-if="dialogVisible" ref="addOrUpdateCate"></add-cate-child>
    <!-- 分页器 -->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="params.pagenum"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="params.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
import { categoriesList } from "@/utils/api/goods.js"
import AddCateChild from "../CommodityManagement/AddCateChild.vue"
export default {
  data() {
    return {
      tableData: [],
      columns: [
        { label: "分类名称", prop: "cat_name" },
        {
          label: "是否有效",
          prop: "cat_deleted",
          type: "template",
          template: "isok"
        },
        {
          label: "分类等级",
          prop: "cat_level",
          type: "template",
          template: "level"
        },
        {
          label: "操作",
          type: "template",
          template: "opt"
        }
      ],
      props: {
        expandType: false,
        selectionType: false
      },
      dialogVisible: false,
      cate: [],
      params: {
        type: "",
        pagenum: 1,
        pagesize: 5
      }
    }
  },
  components: { AddCateChild },
  methods: {
    getCategoriesList() {
      categoriesList(this.params).then((res) => {
        console.log(res)
        this.tableData = res.data.result
        this.cate = res.data.result
      })
    },
    addOrUpdate(row) {
      this.dialogVisible = true
      if (row.constructor == Object) {
        this.$nextTick(() => {
          this.$refs.addOrUpdateCate.init(row)
        })
      } else {
        this.$nextTick(() => {
          this.$refs.addOrUpdateCate.init(this.cate)
        })
      }
    },
    handleSizeChange(val) {
      this.params.pagenum = val
      this.getCategories()
    },
    handleCurrentChange(val) {
      this.params.pagesize = val
      this.getCategories()
    }
  },
  created() {
    this.getCategoriesList()
  },
  mounted() {},

  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped></style>
