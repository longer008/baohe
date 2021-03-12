import request from "./axios";

/**
 * 基金趋势图
 * @param params
 * @returns
 */
 export const getTrendImg = (url) => {
  return request({
    url: "url",
    // url: "https://www.zhihu.com/api/v3/feed/topstory/hot-lists/total",
    method: "get"
  });
};
