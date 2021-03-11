<template>
  <div
    class="news"
    :style="index === 0 ? { borderTop: '1px solid var(--border-color)' } : ''"
  >
    <div class="news-number" :class="index < 3 ? 'top-three-num' : 'other-num'">
      {{ index + 1 }}
      <div class="is-new" v-if="newsInfo.debut">新</div>
    </div>
    <a
      :href="
        newsInfo.target.url
          .replace('api', 'www')
          .replace('questions', 'question')
      "
      rel="noopener noreferrer"
      data-za-not-track-link="true"
      class="news-info"
      :style="
        newsInfo.children[0].thumbnail === ''
          ? isPhone
            ? { maxWidth: '342px' }
            : { width: '621px' }
          : ''
      "
    >
      <h2 class="news-title common-pointer" :title="newsInfo.target.title">
        {{ newsInfo.target.title }}
      </h2>
      <p
        :title="newsInfo.target.title"
        class="news-desc common-pointer"
        :class="
          newsInfo.target.title.length > 22 &&
          newsInfo.children[0].thumbnail !== ''
            ? 'text-overflow'
            : newsInfo.target.title.length > 33 &&
              newsInfo.children[0].thumbnail === ''
            ? 'text-overflow'
            : 'multiLine multline'
        "
      >
        {{ newsInfo.target.excerpt }}
      </p>

      <div class="hot-box" v-show="!isPhone">
        <span> <i class="io io-huo"></i>{{ newsInfo.detail_text }}</span>
        <span class="share-box common-pointer">
          <i class="io io-sharearrow"></i> 分享</span
        >
      </div>
    </a>
    <a
      href=""
      class="news-img common-pointer"
      v-if="newsInfo.children[0].thumbnail"
      :title="newsInfo.target.title"
    >
      <img :src="newsInfo.children[0].thumbnail" alt="" srcset="" />
    </a>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import {
  ref,
  onMounted,
  defineComponent,
  watch,
  onUnmounted,
  computed,
  reactive,
  toRefs,
  inject,
} from "vue";
export default defineComponent({
  props: {
    index: {
      default: 0,
    },
    hasNewsImg: {
      default: false,
    },
    newsInfo: {
      default: {},
    },
    // isPhone:{
    //   default:false
    // },
  },

  setup() {
    let isPhone:any = inject("isPhone");

    watch(isPhone, (value) => {
      console.log(value);
    });
    return {
      isPhone,
    };
  },
});
</script>

<style lang="scss" scoped>
a {
  display: block;
}
.news {
  width: 694px;
  height: 138px;
  background-color: #fff;
  padding: 16px 16px 16px 0;
  display: flex;
  position: relative;
  border-bottom: 1px solid var(--border-color);
  .news-number {
    width: 57px;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.8;
    text-align: center;
    .is-new {
      width: 19px;
      height: 19px;
      border-radius: 4px;
      background-color: rgb(255, 150, 7);
      color: #fff;
      margin: 0 auto;
      font-size: 12px;
    }
  }
  .top-three-num {
    color: #ff9607;
  }
  .other-num {
    color: #999;
  }
  .news-info {
    width: 415px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    .news-title {
      width: 100%;
      text-align: left;
      font-size: 18px;
      line-height: 28px;
      max-height: 56px;
      text-overflow: ellipsis;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      color: #121212;
    }
    .news-desc {
      font-size: 15px;
      width: 100%;
      line-height: 25px;
      margin-top: 2px;
      min-height: 25px;
      text-align: left;
      color: #444;
    }
    .multline {
      max-height: 50px;
    }
    .hot-box {
      font-size: 14px;
      height: 16px;
      margin-top: 8px;
      color: #9fadc7;
      pointer-events: none;
      .share-box {
        display: inline-block;
        margin-left: 40px;
      }
    }
  }
  .news-img img {
    border-radius: 4px;
    width: 190px;
    height: 105px;
    margin-left: 16px;
  }
}
@media screen and (max-width: 376px) {
  .news {
    width: 100%;
    height: 116px;
    background-color: #fff;
    padding: 8px 8px 8px 0;
    display: flex;
    position: relative;
    border-bottom: 1px solid var(--border-color);
    .news-number {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      width: 26px;
      font-weight: 600;
      font-size: 18px;
      // line-height: 1.8;
      text-align: center;
      .is-new {
        width: 19px;
        height: 19px;
        border-radius: 4px;
        background-color: rgb(255, 150, 7);
        color: #fff;
        margin: 0 auto;
        font-size: 12px;
      }
    }
    .top-three-num {
      color: #ff9607;
    }
    .other-num {
      color: #999;
    }
    .news-info {
      max-width: 200px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: flex-start;
      .news-title {
        width: 100%;
        text-align: left;
        font-size: 16px;
        line-height: 32px;
        max-height: 56px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        color: #121212;
      }
      .news-desc {
        font-size: 14px;
        width: 100%;
        line-height: 25px;
        margin-top: 2px;
        min-height: 25px;
        text-align: left;
        color: #444;
      }
      .multline {
        max-height: 50px;
      }
      .hot-box {
        display: none;
        // font-size: 14px;
        // height: 16px;
        // margin-top: 8px;
        // color: #9fadc7;
        // pointer-events: none;
        // .share-box {
        //   display: inline-block;
        //   margin-left: 40px;
        // }
      }
    }
    .news-img img {
      border-radius: 4px;
      width: 136px;
      height: 100px;
      margin-left: 8px;
    }
  }
}
.io-huo,
.io-sharearrow {
  color: var(--zhihu-color);
}
.common-pointer {
  cursor: pointer;
}
</style>

