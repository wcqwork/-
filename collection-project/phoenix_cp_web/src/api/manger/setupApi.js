import request from "@/utils/request";
import Qs from 'qs'

// /operateManage/cp/page/setting获取设置
export function getSetting(params) {
  return request({
    url: "/operateManage/cp/page/setting",
    method: "get",
    data: params
  });
}


// /operateManage/cp/upload上传图片
export function setUpload(data) {
    return request({
      url: "/operateManage/cp/upload",
      method: "post",
      data: Qs.stringify(data)
    });
  }

//   /operateManage/cp/page/setting保存设置
export function saveSetting(data){
    return request({
        url: "/operateManage/cp/page/setting",
        method: "post",
        data: Qs.stringify(data)
      });
}


// /operateManage/cp/page/componentSetting获取模板设置
export function getComponentSetting(params){
    return request({
        url: "/operateManage/cp/page/componentSetting",
        method: "get",
        params
      });
}

// /operateManage/cp/page/componentList模板列表
export function getCommentList(data){
    return request({
        url: "/operateManage/cp/page/componentList",
        method: "post",
        data: Qs.stringify(data)
      });
}