<template>

  <div>
      <el-row class="tac">
      <el-col :span="12">
          <h5>自定义颜色</h5>
          <el-menu
                  default-active="2"
                  class="el-menu-vertical-demo"
                  background-color="#545c64"
                  text-color="#fff"
                  active-text-color="#ffd04b">
              <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">导航二</span>
              </el-menu-item>
              <el-menu-item index="3" disabled>
                  <i class="el-icon-document"></i>
                  <span slot="title">导航三</span>
              </el-menu-item>
              <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">导航四</span>
              </el-menu-item>
          </el-menu>
      </el-col>
      </el-row>

  </div>

</template>

<script>
    export default {
        name: "Index"
    }
</script>

<style scoped>

</style>
