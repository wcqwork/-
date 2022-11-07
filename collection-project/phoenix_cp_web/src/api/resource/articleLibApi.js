import request from "@/utils/request";
import Qs from 'qs'

///operateManage/cp/article/list列表
export function getPageDescList(data) {
  return request({
    url: "/operateManage/cp/article/list",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/article/changeStatus启用/禁用
export function changeStatus(data) {
  return request({
    url: "/operateManage/cp/article/changeStatus",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/article/delete删除
export function setDelete(data) {
  return request({
    url: "/operateManage/cp/article/delete",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/article/add新增
export function setAdd(data) {
  return request({
    url: "/operateManage/cp/article/add",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/article/update更新
export function setUpdate(data) {
  return request({
    url: "/operateManage/cp/article/update",
    method: "post",
    data: Qs.stringify(data)
  });
}
