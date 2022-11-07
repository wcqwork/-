import request from "@/utils/request";
import Qs from 'qs'

//operateManage/cp/discusser/list列表
export function getPageDescList(data) {
  return request({
    url: "/operateManage/cp/discusser/list",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/discusser/changeStatus启用/禁用
export function changeStatus(data) {
  return request({
    url: "/operateManage/cp/discusser/changeStatus",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/discusser/delete删除
export function setDelete(data) {
  return request({
    url: "/operateManage/cp/discusser/delete",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/discusser/add新增
export function setAdd(data) {
  return request({
    url: "/operateManage/cp/discusser/add",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/discusser/update更新
export function setUpdate(data) {
  return request({
    url: "/operateManage/cp/discusser/update",
    method: "post",
    data: Qs.stringify(data)
  });
}
