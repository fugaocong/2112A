<template>
  <div>
    <el-card>
      <header>
        <el-input placeholder="请输入内容" v-model="params.query" class="input-with-select search">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
        <el-button type="primary">添加商品</el-button>
      </header>
      <el-table :data="pagesList" border style="width: 100%">
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="goods_name" label="商品名称"> </el-table-column>
        <el-table-column prop="goods_price" label="商品价格(元)" width="110"> </el-table-column>
        <el-table-column prop="goods_weight" label="商品重量" width="110"> </el-table-column>
        <el-table-column label="创建时间" width="180">
          <template slot-scope="scope">
            {{ scope.row.add_time | filTime }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="small"></el-button>
            <el-button type="danger" icon="el-icon-delete" size="small" @click="del(scope.row)"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.pageNum"
        :page-sizes="[1, 3, 5, 10]"
        :page-size="params.pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </el-card>
  </div>
</template>
<script>
import { goodsList } from "@/utils/api.js"
export default {
  data() {
    return {
      params: {
        query: "",
        pageNum: 1,
        pageSize: 5
      },
      goodList: []
    }
  },
  methods: {
    // 获取后台数据
    getGoodList() {
      goodsList({ params: this.params }).then((res) => {
        // console.log(res)
        this.goodList = res.data.goods
      })
    },
    // 搜索
    search() {},
    handleSizeChange(val) {
      this.params.pageSize = val
    },
    handleCurrentChange(val) {
      this.params.pageNum = val
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
          let index = this.goodList.findIndex((i) => i.goods_id == row.goods_id)
          this.goodList.splice(index, 1)
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
    this.getGoodList()
  },
  filters: {
    filTime(val) {
      let time = new Date(val * 1000)
      let year = time.getFullYear()
      let month = String(time.getMonth() + 1).padStart(2, "0")
      let day = (time.getDate() + "").padStart(2, "0")
      let h = (time.getHours() + "").padStart(2, "0")
      let m = (time.getMinutes() + "").padStart(2, "0")
      let s = (time.getSeconds() + "").padStart(2, "0")
      return `${year}-${month}-${day} ${h}:${m}:${s}`
    }
  },
  computed: {
    total() {
      return this.goodList.length
    },
    // 计算分页展示数据
    pagesList() {
      return this.goodList.slice(
        this.params.pageSize * (this.params.pageNum - 1),
        this.params.pageSize * this.params.pageNum
      )
    }
  }
}
</script>
<style lang="scss" scoped>
header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .search {
    width: 40%;
    margin-right: 2%;
  }
}
</style>
