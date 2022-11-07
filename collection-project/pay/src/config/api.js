import http from '../utils/http';
//
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */
let resquest = '/rest';
// 获取支付管理总体数据
export function postPaymanagements(params) {
  return http.post(`${resquest}/shoppay_v2/paymanagements`, params);
}

// 激活分组
// 1：paypal，2：信用卡，3：全球本地支付，4：COD，5：其他
// {payTypeGroup: 1}
export function activegroupusingstatus(params) {
  return http.post(`${resquest}/shoppay_v2/activegroupusingstatus`, params);
}

// 关闭分组
// {payTypeGroup: 1}
export function inactivegroupusingstatus(params) {
  return http.post(`${resquest}/shoppay_v2/inactivegroupusingstatus`, params);
}

// 启用信用卡
// {payTypeId: 1}
export function activecreditcardstatus(params) {
  return http.post(`${resquest}/shoppay_v2/activecreditcardstatus`, params);
}

// 停用信用卡
// {payTypeId: 1}
export function inactivecreditcardstatus(params) {
  return http.post(`${resquest}/shoppay_v2/inactivecreditcardstatus`, params);
}

// 停用信用卡
// {
//   payTypeId: 1,
//   payProperty: JSON.stringify({xxx: xxx})
// }
export function updatepayproperty(params) {
  return http.post(`${resquest}/shoppay_v2/update/payproperty`, params);
}

export function exchange(params) {
  return http.post(`${resquest}/shoppay_v2/coin/exchange`, params);
}

export function support(params) {
  return http.post(`${resquest}/shoppay_v2/coin/support`, params);
}

export function changeRate(params) {
  return http.post(`${resquest}/shoppay_v2/changeRate`, params);
}

// 通用post
export function postMethods(methods='post',url, params) {
  return http[methods](`${resquest}${url}`, params);
}
