<template>
  <div class="about-container">
    <details class="details">
      <summary>style变量测试</summary>
      <pre>
         <h3>color：{{ color }}</h3>
        <p class="template"> {{ code.html }}</p>
        <p class="javascript">{{ code.js }}</p>
        <p class="css">{{ code.css }}</p>
      </pre>
    </details>

    <div class="box">
      <h2>hooks测试</h2>
      <p>count: {{ count }}</p>
      <p>倍数： {{ multiple }}</p>
      <div class="btn-group">
        <el-button type="success" @click="increase()">加1</el-button>
        <el-button type="primary" @click="decrease()">减一</el-button>
        <el-button type="success" @click="openDialog">打开Dialog</el-button>
      </div>
      <p>测试nextTick：{{ message }}</p>
    </div>
  </div>
  <Dialog
    v-if="dialogVisible"
    ref="refDialog"
    :title="title"
    :open="dialogVisible"
    @closed="closeDialog($event)"
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
</template>

<script lang="ts">
import useCount from '@hooks/useCount'
import Dialog from '@com/common/Dialog.vue'
import {
  reactive,
  ref,
  toRefs,
  nextTick,
  inject,
  defineComponent,
} from 'vue'
export default defineComponent({
  components: {
    Dialog,
  },
  setup() {
    const { increase, decrease, count, multiple } = useCount(10)

    const state = reactive({
      color: 'green',
      code: {
        html: `
  <h1>{{ color }}</h1>
        `,
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
        css:`
  h3{
      color: v-bind(color);
    }
          `,
      },
      btnType: 'primary',
      modalOpen: false,
      dialogVisible: false,
      title: 'dialog测试',
      nextTickText:'我是测试的内容',
    })
    // const refDialog = ref()

    const openDialog = () => {
      state.dialogVisible = true
    }
    const closeDialog = e => {
      state.dialogVisible = e

    }
    const message = ref('Hello!')
    const changeMessage = async newMessage => {
      message.value = newMessage
      await nextTick()
      console.log('Now DOM is updated')
    }
    changeMessage('hahaha')

    let testInject=inject('provideTest')
    console.log(testInject)

    return {
      ...toRefs(state),
      increase,
      decrease,
      count,
      multiple,
      openDialog,
      closeDialog,
      changeMessage,
      message,
    }
  },
})
</script>

<style lang="scss">
.about-container {
  min-height: 77vh;
  margin-top: 14px;
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
.details,.box {
  width: 80vw;
  font-size: 16px;
  margin: 0 auto;
  background: #fff;
  overflow: hidden;
}
.box {
  margin-top: 30px;
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
.template,.javascript,.css{
  position: relative;
  text-align: left;
  padding-left: 200px;
}
@media screen and (max-width: 750px) {
  .details,.box{
    width: 98vw;
  }
  .template,.javascript,.css{
    padding-left: 0;
  }

  }
.template {
  background-color: turquoise;
}
.javascript {
  background-color: thistle;
}
.css {
  background-color: wheat;
}

@mixin codeTitle($content) {
  content: $content;
  position: absolute;
  left: 8px;
  top: 0;
  color: black;
  font-weight: bold;
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

h3 {
  color: v-bind(color);
  margin:0;
}

.btn-group{
  widows: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
