import request from "@/utils/request";
import Qs from 'qs'

// /operateManage/cp/queue/list列表
export function getCpList(data) {
  return request({
    url: "/operateManage/cp/queue/list",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/queue/changeStatus开始/暂停 1: 继续生成；4: 暂停
export function changeStatus(data) {
  return request({
    url: "/operateManage/cp/queue/changeStatus",
    method: "post",
    data: Qs.stringify(data)
  });
}