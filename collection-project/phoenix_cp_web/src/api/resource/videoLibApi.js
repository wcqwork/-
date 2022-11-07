import request from "@/utils/request";
import Qs from 'qs'

///operateManage/cp/video/list列表
export function getPageDescList(data) {
  return request({
    url: "/operateManage/cp/video/list",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/video/changeStatus启用/禁用
export function changeStatus(data) {
  return request({
    url: "/operateManage/cp/video/changeStatus",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/video/delete删除
export function setDelete(data) {
  return request({
    url: "/operateManage/cp/video/delete",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/video/add新增
export function setAdd(data) {
  return request({
    url: "/operateManage/cp/video/add",
    method: "post",
    data: Qs.stringify(data)
  });
}