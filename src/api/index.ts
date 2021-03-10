import request from "./axios";

/**
 * 首页新闻列表
 * @start {int} 起始页 default: 1
 * @num {int}	获取数量 default: 10
 */
 export const getNewList = (params) => {
  return request({
    url: "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total",
    method: "get",
    params,
  });
};

export const getWeiboList = (params) => {
  return request({
    url: "https://m.weibo.cn/api/container/getIndex?containerid=106003type%3D25%26t%3D3%26disable_hot%3D1%26filter_type%3Drealtimehot",
    method: "get",
    params,
  });
};

/**
 * 首页新闻列表
 * @start {int} 起始页 default: 1
 * @num {int}	获取数量 default: 10
 */
// export const getNewList = (params) => {
//   return request({
//     url: "/new/toutiao",
//     method: "get",
//     params,
//   });
// };

/**
 * 网易新闻详情
 * @param {string} docid 网易新闻的docid
 */
export const getNewDetails = (docid) => {
  return request({
    url: "/new/detail",
    method: "get",
    params: {
      docid,
    },
  });
};

/**
 * 获取随机头像
 * @param {Number} type 性别
 */
export const getAvatar = (type = 2) => {
  const types = ["男", "女", "动漫"];
  return request({
    url: "https://api.66mz8.com/api/rand.portrait.php",
    method: "get",
    params: {
      type: types[type],
      format: "json",
    },
  });
};

/**
 * 获取随机背景图片
 */
export const getBackgroundImg = () => {
  return request.get("https://api.66mz8.com/api/bg.img.php?format=json");
};
