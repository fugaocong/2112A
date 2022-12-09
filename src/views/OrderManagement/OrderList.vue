<template>
  <div>
    <el-card>
      <header>
        <el-input placeholder="请输入内容" v-model="params.query" class="input-with-select search">
          <el-button slot="append" icon="el-icon-search" @click="search"></el-button>
        </el-input>
      </header>
      <el-table :data="pagesList" border style="width: 100%">
        <el-table-column type="index" label="#"> </el-table-column>
        <el-table-column prop="order_number" label="订单编号"> </el-table-column>
        <el-table-column prop="order_price" label="订单价格"> </el-table-column>
        <el-table-column prop="order_pay" label="是否付款">
          <template slot-scope="scope">
            <el-tag type="primary" effect="dark" v-if="scope.row.order_pay == 0"> 已付款 </el-tag>
            <el-tag type="danger" effect="dark" v-if="scope.row.order_pay == 1"> 未付款 </el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="is_send" label="是否发货"> </el-table-column>
        <el-table-column label="创建时间" width="180">
          <template slot-scope="scope">
            {{ scope.row.create_time | filTime }}
          </template>
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button type="primary" icon="el-icon-edit" size="small" @click="openEdit(scope.row)"></el-button>
            <el-button type="success" icon="el-icon-location" size="small" @click="del(scope.row)"></el-button>
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
    <!-- 编辑的对话框 -->

    <el-dialog title="修改地址" :visible.sync="addressDialog" width="50%">
      <el-cascader :options="options">
        <template slot-scope="{ node, data }">
          <span>{{ data.label }}</span>
          <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
      </el-cascader>
    </el-dialog>
  </div>
</template>
<script>
import { ordersList } from "@/utils/api.js"
// 城市信息

export default {
  data() {
    return {
      params: {
        query: "",
        pageNum: 1,
        pageSize: 5
      },
      orderList: [],
      addressDialog: false,
      // 城市数据
      options: [
        {
          value: "",
          label: "CodeToText",
          children: [
            {
              value: "provinceAndCityData",
              label: "设计原则",
              children: [
                {
                  value: "provinceAndCityDataPlus",
                  label: "一致"
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    // 获取后台数据
    getOrdersList() {
      ordersList({ params: this.params }).then((res) => {
        // console.log(res)
        this.orderList = res.data.goods
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
    // 打开编辑框
    openEdit(row) {
      this.addressDialog = true
    }
  },
  created() {
    this.getOrdersList()
  },
  // 过滤时间
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
      return this.orderList.length
    },
    // 计算分页展示数据
    pagesList() {
      return this.orderList.slice(
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
  }
}
</style>
