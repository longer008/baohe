import request from "./axios";

 export const getJokeText = () => {
  return request({
    url: "/jokeApi/xh?type=json",
    method: "get"
  });
};
