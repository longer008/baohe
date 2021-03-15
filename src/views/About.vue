<template>
  <div class="about-container">
    <h1>{{ color }}</h1>
    <details class="details">
      <summary>style变量测试</summary>

      <pre>
      <!-- <code> -->
<p class="template"> {{code.html}}</p>
<p class="javascript">{{code.js }}</p>
<p class="css">{{code.css}}</p>
      <!-- </code> -->
      </pre>
    </details>
  </div>
</template>

<script lang='ts'>
// import { translate } from "@util/translateCode";
import { computed, reactive, Ref, ref, toRefs, onMounted } from "vue";
export default {
  setup() {
    const state = reactive({
      color: "green",
      code: {
        html: "<h1>{{ color }}</h1>",
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
        css:`h1 {
                  color: v-bind(color);
}`
      },
    });

    // let color1=ref("yellow")
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss">
.about-container {
  font-size: 14px;
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
p{
  margin: 0;
  padding: 0;
}
pre{
  background-color: #fff;
}
.template{
  position: relative;
  background-color: turquoise;
}
.javascript{
  position: relative;
  background-color: thistle;
}
.css{
  background-color: wheat;
  position: relative;
}

@mixin codeTitle($content){
  content: $content;
  position: absolute;
  left: 0;
  top: 0;
  color: black;
}
.template::before{
  @include codeTitle("html:")
}
.javascript::before{
  @include codeTitle("javascript:")
}
.css::before{
  @include codeTitle("css:")
}

h1 {
  color: v-bind(color);
}
</style>

