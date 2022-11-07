import service from './request.js';

const http = {
  /**
   * methods: 请求
   * @param url 请求地址
   * @param params 请求参数
   */
  get(url, params) {
    const config = {
      method: 'get',
      url: url,
    };
    if (params) config.params = params;
    return service.request(config);
  },
  post(url, params) {
    const config = {
      method: 'post',
      url: url,
    };
    if (params) config.data = params;
    return service.request(config);
  },
  put(url, params) {
    const config = {
      method: 'put',
      url: url,
    };
    if (params) config.params = params;
    return service.request(config);
  },
  delete(url, params) {
    const config = {
      method: 'delete',
      url: url,
    };
    if (params) config.params = params;
    return service.request(config);
  },
};
//导出
export default http;
