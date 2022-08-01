import request from "@/utils/request";
import Qs from 'qs'

// /operateManage/cp/page/pageInfo页面查询
export function getPageInfo(params) {
  return request({
    url: "/operateManage/cp/page/pageInfo",
    method: "get",
    params
  });
}

// /operateManage/cp/page/saveInfo页面保存
export function setSaveInfo(data) {
    return request({
      url: "/operateManage/cp/page/saveInfo",
      method: "post",
      data: Qs.stringify(data)
    });
  }