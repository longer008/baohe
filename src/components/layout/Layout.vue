<template>
  <div class="layout">
    <el-container>
      <el-aside>aside</el-aside>
      <el-container>
        <el-header>header</el-header>
        <el-main>
        </el-main>
        <el-footer>footer</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { ElContainer, ElAside, ElHeader, ElMain, ElFooter } from 'element-plus'
export default {
  components: {
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElFooter
  },
  setup() {
    return {}
  }
}
</script>

<style scoped></style>
