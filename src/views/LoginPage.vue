<template>
  <div class="wrap">
    <div class="box">
      <div class="son">
        <img src="https://img0.baidu.com/it/u=2042947613,4107697083&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500" />
      </div>
      <el-form ref="form" :model="form" class="form">
        <el-input class="input" v-model="form.username" prefix-icon="el-icon-user-solid"></el-input>
        <el-input class="input" v-model="form.password" prefix-icon="el-icon-lock" type="password"></el-input>
        <el-form-item class="but">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button>重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import router from "@/router"
import { loginList } from "../utils/api"
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      }
    }
  },
  methods: {
    login() {
      loginList({ params: this.form }).then((res) => {
        // console.log(res)
        this.$router.push("/WelcomePage")
      })
      // 'http://heima.9yuecloud.com:9988/api/private/v1/api/login
      // this.$http({ method: "post", data: this.form, url: "/api/login" }).then((res) => {
      //   console.log(res, 1111)
      // })
    }
  },
  created() {},
  mounted() {},
  components: {},
  computed: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.wrap {
  height: 100vh;
  background-image: url(../assets/bg.gif);
  display: flex;
  justify-content: center;
  align-items: center;
  .box {
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    border-radius: 3px;
    padding: 20px;
    box-sizing: border-box;
    width: 450px;
    position: relative;
    height: 300px;
    .son {
      width: 130px;
      height: 130px;
      padding: 10px;
      border: 1px solid #efefef;
      border-radius: 50%;
      background-color: #fff;
      position: absolute;
      left: 50%;
      transform: translate(-50%, -50%);
      box-shadow: 0 0 10px #ddd;
      > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background-color: #efefef;
      }
    }
    .form {
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
      .input {
        margin-bottom: 20px;
      }
      .but {
        float: right;
      }
    }
  }
}
</style>
