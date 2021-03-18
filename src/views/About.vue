<template>
  <div class="about-container">
    <h1>{{ color }}</h1>
    <!-- <div class="time-box">
      <label>请输入倒计时时间</label>

      <el-input
        v-model="count"
        type="number"
        @blur="setTime()"
        placeholder="请输入倒计时时间"
      />
    </div>
    <p class="time">
      倒计时：{{ count }}
      <el-button>停止计时</el-button>
    </p> -->
    <details class="details">
      <summary>style变量测试</summary>
      <pre>
        <p class="template"> {{ code.html }}</p>
        <p class="javascript">{{ code.js }}</p>
        <p class="css">{{ code.css }}</p>
      </pre>
    </details>
    <el-button :type="btnType" @click="modalOpen = true">
      Open full screen modal! (With teleport!)
    </el-button>
    <teleport to="body">
      <div v-if="modalOpen" class="modal">
        <div>
          I'm a teleported modal! (My parent is "body")
          <el-button type="info" @click="modalOpen = false">Close</el-button>
        </div>
      </div>
    </teleport>
    <h2>hooks测试</h2>
    <p>count: {{ count }}</p>
    <p>倍数： {{ multiple }}</p>
    <div>
      <button @click="increase()">加1</button>
      <button @click="decrease()">减一</button>
    </div>
  </div>
  <Dialog
    v-if="dialogVisible"
    ref="refDialog"
    :title="title"
    :open="dialogVisible"
    @closed="closeDialog"
  >
    <template #header>
      <div>header</div>
    </template>
    <template #default="{ item }">
      我是dialog的内容
      <div>
        {{ item.name }}
      </div>
      <p>{{ item.age }}</p>
    </template>
    <template #footer>
      <div>footer</div>
    </template>
  </Dialog>
  <el-button type="success" @click="openDialog">打开Dialog</el-button>
</template>

<script lang="ts">
// setup简写
import useCount from '@hooks/useCount'
// import { ElInput } from 'element-plus'
import Dialog from '@com/common/Dialog.vue'
import {
  getCurrentInstance,
  reactive,
  ref,
  toRefs,
  // watch,
  // watchEffect,
  defineComponent,
} from 'vue'
export default defineComponent({
  components: {
    // ElInput,
    Dialog,
  },
  setup() {
    const { increase, decrease, count, multiple } = useCount(10)
    // const foo = ref(1)
    // const bar = ref(10)
    // watch(
    //   [foo, bar],
    //   ([foo, bar], [preFoo, preBar]) => {
    //     console.log('foo:' + foo + ' prefoo:' + preFoo)
    //     console.log('bar:' + bar + ' preBar:' + preBar)
    //   },
    //   {
    //     immediate: true,
    //   },
    // )
    // setTimeout(() => {
    //   foo.value++, bar.value++
    // }, 1000)
    const state = reactive({
      color: 'green',
      code: {
        html: '<h1>{{ color }}</h1>',
        js: `
        import { reactive, toRefs } from "vue";
        export default {
          setup() {
            const state = reactive({
              color: "green",
            });
            return {
              ...toRefs(state),
            };
          },
        };
        `,
        css: `h1 {
                  color: v-bind(color);
        }`,
      },
      btnType: 'primary',
      modalOpen: false,
      dialogVisible: false,
      title: 'dialog测试',
    })
    // const refDialog = ref()
    // const { proxy } = getCurrentInstance()

    const openDialog = () => {
      state.dialogVisible = true
      // document.querySelector('#dialog')?.classList.add('z1')
      // proxy.$this.$refs.dialog.onOpen()
      // refDialog.value.onOpen()
    }
    const closeDialog = () => {
      state.dialogVisible = false
      // document.querySelector('#dialog')?.classList.remove('z1')
    }
    return {
      ...toRefs(state),
      increase,
      decrease,
      count,
      multiple,
      openDialog,
      closeDialog,
    }
  },
})
</script>

<style lang="scss">
.about-container {
  font-size: 14px;
}
.modal {
  background-color: #ccc;
  z-index: 1;
  position: absolute;
  top: 0;
}
.time {
  font-size: 20px;
  font-weight: bold;
}
details {
  width: 80vw;
  min-height: 200px;
  font-size: 16px;
  margin: 0 auto;
}
/* details summary::-webkit-details-marker { display:none; } 去三角形 */
summary {
  /* 去边框 */
  outline: none;
}
p {
  margin: 0;
  padding: 0;
}
pre {
  background-color: #fff;
}
.template {
  position: relative;
  background-color: turquoise;
}
.javascript {
  position: relative;
  background-color: thistle;
}
.css {
  background-color: wheat;
  position: relative;
}

@mixin codeTitle($content) {
  content: $content;
  position: absolute;
  left: 0;
  top: 0;
  color: black;
}
.template::before {
  @include codeTitle('html:');
}
.javascript::before {
  @include codeTitle('javascript:');
}
.css::before {
  @include codeTitle('css:');
}

h1 {
  color: v-bind(color);
}
</style>
