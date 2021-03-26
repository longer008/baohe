<template>
  <el-container class="container">
    <el-header class="header">
      <div class="header_left">
        <i
          class="icon"
          :class="isCollapse ? 'el-icon-s-unfold' : 'el-icon-s-fold'"
          @click="isCollapse = !isCollapse"
        ></i>
        <span class="title">后台管理系统</span>
      </div>
      <div class="header_right">
        {{ tagList }}
        <el-tooltip
          content="全屏"
          class="el-tooltip"
          :effect="effect"
          placement="top"
        >
          <i class="icon el-icon-full-screen el-tooltip" @click="screen"></i>
        </el-tooltip>

        <el-tooltip content="你有2条未读消息" effect="dark">
          <el-badge is-dot type="danger" class="badge_style">
            <i class="icon el-icon-bell"></i>
          </el-badge>
        </el-tooltip>

        <el-avatar class="avatar" :size="40" fit="cover" :src="url"></el-avatar>
        <el-dropdown>
          <span class="el-dropdown-link">
            {{ username }}<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item icon="el-icon-plus">项目仓库</el-dropdown-item>
              <el-dropdown-item icon="el-icon-circle-plus-outline">
                退出
              </el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </el-header>

    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'" class="aside">
        <el-menu
          :default-active="currentRoute"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          menu-trigger="click"
          :router="true"
          :collapse="isCollapse"
          :collapse-transition="false"
          @open="handleOpen"
          @close="handleClose"
          @select="selectMenu"
        >
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-location"></i>
              <span>导航一</span>
            </template>
            <el-menu-item-group>
              <template #title>新闻</template>
              <el-menu-item index="zhihu">知乎</el-menu-item>
              <el-menu-item index="weibo">微博</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <template #title>好玩</template>
              <el-menu-item index="joke">笑话</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="/">
              <template #title>选项四</template>
              <el-menu-item index="/">选项无</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="fund">
            <i class="el-icon-coin"></i>
            <template #title>基金</template>
          </el-menu-item>
          <el-menu-item index="about">
            <i class="el-icon-chat-line-square"></i>
            <template #title>about</template>
          </el-menu-item>
          <el-menu-item index="hello">
            <i class="el-icon-orange"></i>
            <template #title>嗨</template>
          </el-menu-item>
        </el-menu>
      </el-aside>
      <el-main class="main">
        <!-- tags  面包屑 -->
        <div class="tag_list">
          <el-tag
            v-for="(item, index) in tagList"
            :key="item"
            closable
            class="tag_style"
            size="medium"
            :type="index === activeIndex ? '' : 'info'"
            :effect="index === activeIndex ? 'dark' : 'plain'"
            @close="closeTag(item, index)"
            @click="clickTag(item, index)"
          >
            {{ item }}
          </el-tag>
        </div>
        <router-view />
      </el-main>
      <el-footer v-if="hasFooter" class="footer">footer</el-footer>
    </el-container>
  </el-container>
  <ElBacktop />
</template>

<script lang="ts">
import {
  ElContainer,
  ElAside,
  ElHeader,
  ElMain,
  ElFooter,
  ElMenu,
  ElMenuItem,
  ElMenuItemGroup,
  ElSubmenu,
  ElBacktop,
  ElAvatar,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElTooltip,
  ElBadge,
  ElTag
} from 'element-plus'
import {
  onMounted,
  getCurrentInstance,
  reactive,
  toRefs,
  ref,
  provide,
  computed,
  nextTick,
  onBeforeMount
} from 'vue'
import screenfull from 'screenfull'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
export default {
  components: {
    ElContainer,
    ElAside,
    ElHeader,
    ElMain,
    ElFooter,
    ElMenu,
    ElMenuItem,
    ElMenuItemGroup,
    ElSubmenu,
    ElBacktop,
    ElAvatar,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem,
    ElTooltip,
    ElBadge,
    ElTag
  },
  setup() {
    const route = useRoute()
    const store = useStore()
    const state = reactive({
      hasFooter: false,
      isFirst: true,
      isCollapse: false, //展开
      url:
        'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      username: 'admin',
      themeColor: '',
      effect: 'dark',
      tagList: [] as any,
      activeIndex: 0,
      currentRoute:'/'
    })
    const { proxy } = getCurrentInstance()
    console.log(proxy)

    state.tagList.push(location.hash.split('/')[1])
    state.currentRoute=location.hash.split('/')[1]

    onMounted(() => {
      state.hasFooter = route.meta.hasFooter as any
      // 谷歌浏览器onresize事件会执行2次，这里加个标志位控制
      window.addEventListener('resize', handleSize)
    })

    let isPhone = ref(false)
    const handleSize = () => {
      let width =
        document.documentElement.clientWidth || document.body.clientWidth
      if (state.isFirst) {
        if (width > 375) {
          isPhone.value = false
          store.commit('updateDevice', false)
        } else {
          isPhone.value = true
          store.commit('updateDevice', true)
        }
        state.isFirst = false
        //0.5秒之后将标志位重置（Chrome的window.onresize默认执行两次）
        setTimeout(() => {
          state.isFirst = true
        }, 100)
      }
    }
    // 依赖注入
    provide('isPhone', isPhone)

    const screen = () => {
      if (!screenfull.isEnabled) {
        proxy.$notify({
          type: 'error',
          message: '您的浏览器不支持全屏！'
        })
        return false
      }
      screenfull.toggle()

      proxy.$notify({
        message: '全屏触发啦',
        type: 'success'
      })
    }

    const selectMenu = (index, indexPath) => {
      let idx = state.tagList.indexOf(index)
      if (idx > -1) {
        // state.tagList.splice(idx, 1)
        proxy.$router.push({ name: index })
        state.activeIndex = idx
      } else {
        state.tagList.push(index)
        state.activeIndex = state.tagList.length - 1
      }
    }
    const closeTag = (item, index) => {
      let length = state.tagList.length

      state.tagList.splice(index, 1)
      // 删除最后一个
      if (index == length - 1) {
        // 将新的最后一个放入main
        proxy.$router.push({ name: state.tagList[length - 2] })
        state.activeIndex = length - 2
      } else {
        state.activeIndex = index
      }
    }
    const clickTag = (item, index) => {
      console.log(item)
      proxy.$router.push({ name: item })
      state.activeIndex = index
      // state.tagList.splice(index, 1)
      // state.tagList.push(item)
    }
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    return {
      ...toRefs(state),
      selectMenu,
      closeTag,
      clickTag,
      handleOpen,
      handleClose,
      screen
      // tagSetList
    }
  }
}
</script>

<style lang="scss" scoped>
:root {
  --headerHeight: 60px;
}
.container {
  width: 100%;
  height: 100%;
}
.aside {
  background-color: rgb(238, 241, 246);
}
.header {
  background-color: #fff;
  height: var(--headerHeight);
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  .icon {
    font-size: 24px;
    // line-height: 60px;
    margin-right: 20px;
    cursor: pointer;
  }

  .header_left {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .title {
      font-size: 24px;
      display: inline-block;
    }
  }
  .header_right {
    display: flex;
    justify-content: space-around;
    align-items: center;
    .avatar {
      margin-right: 10px;
    }
    .badge_style {
      .icon {
        margin: 0;
      }
      margin-right: 20px;
    }
  }
}
.main {
  width: 100%;
  // height: 100%;
  min-height: calc(100vh - 60px);
  background-color: #f6f6f6;
}
.tag_list {
  .tag_style {
    cursor: pointer;
  }
  .tag_style:not(:nth-child(1)) {
    margin-left: 10px;
  }
}
</style>
