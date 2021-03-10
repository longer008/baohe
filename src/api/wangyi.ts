import request from "./axios";
/**
 * 网易新闻列表
 * @start {int} 起始页 default: 1
 * @num {int}	获取数量 default: 10
 */
 export const getWangyiNewList = (params) => {
  return request({
    url: "https://v1.alapi.cn/api/new/toutiao",
    method: "get",
    params,
  });
};

/**
 * 网易新闻详情
 * @param {string} docid 网易新闻的docid
 */
export const getNewDetails = (docid) => {
  return request({
    url: "https://v1.alapi.cn/api/new/detail",
    method: "get",
    params: {
      docid,
    },
  });
};
