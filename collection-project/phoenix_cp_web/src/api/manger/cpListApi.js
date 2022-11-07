import request from "@/utils/request";
import Qs from 'qs'

// /operateManage/cp/page/list列表
export function getCpList(data) {
  return request({
    url: "/operateManage/cp/page/list",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/page/delete删除
export function setDelete(data) {
  return request({
    url: "/operateManage/cp/page/delete",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/page/setting获取设置
export function getSetting(params) {
  return request({
    url: "/operateManage/cp/pageDesc/add",
    method: "get",
    data: params
  });
}

// /operateManage/cp/page/setting保存设置
export function saveSetting(data) {
  return request({
    url: "/operateManage/cp/page/setting",
    method: "post",
    data: Qs.stringify(data)
  });
}


// /operateManage/cp/page/regenerate重新生成
export function regenerate(data) {
  return request({
    url: "/operateManage/cp/page/regenerate",
    method: "post",
    data: Qs.stringify(data)
  });
}
