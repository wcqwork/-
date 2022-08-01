import request from "@/utils/request";
import Qs from 'qs'

// /operateManage/cp/discuss/list列表
export function getPageDescList(data) {
  return request({
    url: "/operateManage/cp/discuss/list",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/discuss/changeStatus启用/禁用
export function changeStatus(data) {
  return request({
    url: "/operateManage/cp/discuss/changeStatus",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/discuss/delete删除
export function setDelete(data) {
  return request({
    url: "/operateManage/cp/discuss/delete",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/discuss/add新增
export function setAdd(data) {
  return request({
    url: "/operateManage/cp/discuss/add",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/discuss/update更新
export function setUpdate(data) {
  return request({
    url: "/operateManage/cp/discuss/update",
    method: "post",
    data: Qs.stringify(data)
  });
}
