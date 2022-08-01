import request from "@/utils/request";
import Qs from 'qs'

//获取页面描述库列表
export function getPageDescList(data) {
  return request({
    url: "/operateManage/cp/pageDesc/list",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/pageDesc/changeStatus启用/禁用
export function changeStatus(data) {
  return request({
    url: "/operateManage/cp/pageDesc/changeStatus",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/pageDesc/delete删除
export function setDelete(data) {
  return request({
    url: "/operateManage/cp/pageDesc/delete",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/pageDesc/add新增
export function setAdd(data) {
  return request({
    url: "/operateManage/cp/pageDesc/add",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/pageDesc/update更新
export function setUpdate(data) {
  return request({
    url: "/operateManage/cp/pageDesc/update",
    method: "post",
    data: Qs.stringify(data)
  });
}
