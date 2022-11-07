import request from "@/utils/request";
import Qs from 'qs'

//获取用户信息
export function userInfo() {
  return request({
    url: "/userInfo",
    method: "get",
  });
}
//获取网站列表
export function siteList() {
  return request({
    url: "/site/list",
    method: "get",
  });
}



// /operateManage/cp/siteInfo网站信息
export function getWebsiteInfo() {
  return request({
    url: "/operateManage/cp/siteInfo",
    method: "get",
  });
}


// 行业列表
export function getIndustryList() {
  return request({
    url: "/operateManage/cp/industryList",
    method: "post"
  });
}

// 关键词列表
export function getKeyWordList(data) {
  return request({
    url: "/operateManage/cp/page/list",
    method: "post",
    data: Qs.stringify(data)
  });
}

// 产品列表
export function getProductList(data) {
  return request({
    url: "/operateManage/cp/prodList",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/prodGroupList产品分类
export function getProductCate(data) {
  return request({
    url: "/operateManage/cp/prodGroupList",
    method: "post",
    data: Qs.stringify(data)
  });
}


// /operateManage/cp/coreKeywordNum核心关键词数量
export function getCoreKeywordNum(data) {
  return request({
    url: "/operateManage/cp/coreKeywordNum",
    method: "post",
    data: Qs.stringify(data)
  });
}


// /operateManage/cp/articleList文章列表
export function getArticleList(data) {
  return request({
    url: "/operateManage/cp/articleList",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/article/list 文章库列表
export function getArticleLibList(data) {
  return request({
    url: "/operateManage/cp/article/list",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/articleCateList文章分类
export function getArticleCateList(data) {
  return request({
    url: "/operateManage/cp/articleCateList",
    method: "post",
    data: Qs.stringify(data)
  });
}



// /operateManage/cp/video/list 视频库列表
export function getVideoList(data) {
  return request({
    url: "/operateManage/cp/video/list",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/videoList视频列表
export function getVideoWebsiteList(data) {
  return request({
    url: "/operateManage/cp/videoList",
    method: "post",
    data: Qs.stringify(data)
  });
}

// /operateManage/cp/videoGroupList视频分类
export function getVideoWebsiteCate(data) {
  return request({
    url: "/operateManage/cp/videoGroupList",
    method: "post",
    data: Qs.stringify(data)
  });
}



// /operateManage/cp/discuss/list列表
export function getCommentList(data) {
  return request({
    url: "/operateManage/cp/discuss/list",
    method: "post",
    data: Qs.stringify(data)
  });
}


// /operateManage/cp/page/check网站设置检查
export function checkWebisiteSet(params) {
  return request({
    url: "/operateManage/cp/page/check",
    method: "get",
    params
  });
}
