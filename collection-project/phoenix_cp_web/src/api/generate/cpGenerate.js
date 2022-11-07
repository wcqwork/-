import request from "@/utils/request";
import Qs from 'qs'

// 关键词列表
export function getKeywordList(data) {
  return request({
    url: "/operateManage/cp/keywordList",
    method: "post",
    data: Qs.stringify(data)
  });
}

// 核心关键词数量
export function getCoreKeywordNum() {
    return request({
      url: "/operateManage/cp/coreKeywordNum",
      method: "post",
    });
}

// 生成页面数量检查
export function getCheck(data) {
    return request({
      url: "/operateManage/cp/queue/check",
      method: "post",
      data: Qs.stringify(data)
    });
}

// 保存任务
export function getAdd(data) {
    return request({
      url: "/operateManage/cp/queue/add",
      method: "post",
      data: Qs.stringify(data)
    });
}

