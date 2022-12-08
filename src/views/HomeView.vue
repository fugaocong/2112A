<template>
  <div>
    <el-container>
      <!-- 左侧 -->
      <el-aside :width="isCollapse ? '65px' : '200px'">
        <h1>电商后台管理</h1>
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#373d41"
          text-color="#fff"
          active-text-color="#ffd04b"
          unique-opened
          :collapse="isCollapse"
          router
        >
          <el-submenu :index="item.path" v-for="item in sidebarData" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{ item.authName }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :index="'/' + ele.path" v-for="ele in item.children" :key="ele.id">
                {{ ele.authName }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右侧 -->
      <el-container>
        <!-- 头部 -->
        <el-header>
          <div>
            <i class="el-icon-s-fold" @click="isCollapse = true" v-if="isCollapse == false"></i>
            <i class="el-icon-s-unfold" @click="isCollapse = false" v-else></i>
          </div>
          <el-button type="primary" @click="quit">退出</el-button>
        </el-header>
        <!-- 面包屑 -->
        <el-breadcrumb class="crumb" separator-class="el-icon-arrow-right" v-if="$route.path != '/WelcomePage'">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in $route.meta" :key="item">{{ item }}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 页面展示的地方 -->
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import { sidebarList } from "../utils/api"
export default {
  data() {
    return {
      isCollapse: false,
      sidebarData: []
    }
  },
  methods: {
    getSidebarList() {
      sidebarList().then((res) => {
        this.sidebarData = res.data
        // console.log(res)
      })
    },
    quit() {
      this.$router.push("/login")
    }
  },
  created() {
    this.getSidebarList()
  },
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #373d41;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  background-color: #373d41;
  color: #fff;
  text-align: center;
  height: 100vh;
  h1 {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    height: 60px;
    line-height: 60px;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #000;
  text-align: center;
}
.crumb {
  background-color: #e9eef3;
  padding: 10px;
  box-sizing: border-box;
}
</style>
