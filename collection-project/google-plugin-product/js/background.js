chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    var tools = {
        apiUrl: function () {
            var apiUrl = {
                data: 'http://products-in.leadongshop.com/checkToken', // 开发
                // data: 'http://127.0.0.1:8900/checkToken', // 开发
                import: 'https://products-in.leadongshop.com/multi/plugin/import', // 开发
                // import: 'https://127.0.0.1:8900/multi/plugin/import', // 开发
                judge: 'https://products-in.leadongshop.com/multi/plugin/judge' // 开发-是否抓取过该产品
                // judge: 'http://10.10.12.53:8900/multi/plugin/judge' // 开发-是否抓取过该产品
            };

            return apiUrl;
        },
        /**
         * 封装一下ajax请求
         *
         * @param  {string} url 接口地址
         * @param  {Object} data  传给后端的参数数据
         * @param  {string} type 接口请求类型
         * @param  {Object} header 传给后端补充的header数据
         *
         * @return {Object}  返回ajax对象
         * */
        fetchAjax: function (url, data, type, header) {
            var headerData = {};

            return $.ajax({
                url: url,
                type: type || 'get',
                headers: $.extend(headerData, header),
                beforeSend: function (xhr) {
                    xhr.withCredentials = true;
                },
                data: data,
            });
        },
    };
    var eventSwitch = {
        'tasks json': function (params) {
            tools.fetchAjax(tools.apiUrl().data + '/plugin/tasks.json', params, 'post', {
                    'X-LOCALE': window.navigator.language
                })
                .done((res) => {
                    sendResponse({
                        status: 200,
                        data: JSON.stringify(res),
                    });
                })
                .fail(function (err) {
                    sendResponse({
                        status: 500,
                        data: JSON.stringify(err),
                    });
                });
        },
        'setUser': function (params) {
            if (params && params.Authorization) {
                localStorage.setItem("Authorization", params.Authorization);
            }
            var Authorization = localStorage.getItem("Authorization");
            if (Authorization) {
                sendResponse({
                    status: 200,
                    data: {
                        Authorization: Authorization
                    }
                });
            } else {
                sendResponse({
                    status: 500,
                    data: '未登录'
                });
            }
        },
        'crawlStatus': function (params) {
            if (params && params.type == 'success') {
                localStorage.setItem("crawlStatus", "success");
            }
            else if (params && params.type == 'error') {
                localStorage.setItem("crawlStatus", "error");
            }             else if (params && params.type == 'repetition') {
                localStorage.setItem("crawlStatus", "repetition");
            }else {
                localStorage.setItem("crawlStatus", "");
            }
        },
        'setCookie': function (params) {
            if (params && params.Authorization) {
                localStorage.setItem("Authorization", params.Authorization);
                tools.fetchAjax(tools.apiUrl().data, {}, 'post', {
                    "Authorization": params.Authorization
                })
                .done((res) => {
                    sendResponse({
                        status: 200,
                        data: JSON.stringify(res),
                    });
                })
                .fail(function (err) {
                    sendResponse({
                        status: 500,
                        data: JSON.stringify(err),
                    });
                });
            }
        },
        'pluginImport': function (params) {
            if (params && params.data) {
                tools.fetchAjax(tools.apiUrl().import, params.data, 'post', {
                    "Authorization": params.Authorization,
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true"
                })
                .done((res) => {
                    sendResponse({
                        status: 200,
                        data: JSON.stringify(res),
                    });
                })
                .fail(function (err) {
                    sendResponse({
                        status: 500,
                        data: JSON.stringify(err),
                    });
                });
            }
        },
        'importJudge': function (params) {
            if (params && params.data) {
                tools.fetchAjax(tools.apiUrl().judge, params.data, 'post', {
                    "Authorization": params.Authorization,
                    "Access-Control-Allow-Methods": "*",
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Credentials": "true"
                })
                .done((res) => {
                    sendResponse({
                        status: 200,
                        data: JSON.stringify(res),
                    });
                })
                .fail(function (err) {
                    sendResponse({
                        status: 500,
                        data: JSON.stringify(err),
                    });
                });
            }
        }
    };
    eventSwitch[request.type] && eventSwitch[request.type](request.params);
    return true;
});


function backgroundFunction() {
    var doc = document.cookie;
    return chrome.cookies;
}