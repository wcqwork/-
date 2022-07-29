export function getExel(url, params) {
    return new Promise(function (resolve, reject) {
        let data = {
            method: "GET",
            url: url,
            responseType: 'arraybuffer',
            params
        }
        resolve(axios(data));
    })
}

this.$getExel("/smartdata/keyword/rank/listExportExcel", obj).then((res, err, xhr) => {
    if (res) {
        const disposition = res.headers['content-disposition'];
        let fileName = disposition.substring(disposition.indexOf('filename=') + 9, disposition.length);
        // iso8859-1的字符转换成中文
        fileName = decodeURI(fileName);
        // fileName = decodeURI(escape(fileName));
        // 去掉双引号
        fileName = fileName.replace(/\"/g, "");
        let a = document.createElement('a');
        // ArrayBuffer 转为 Blob
        let blob = new Blob([res.data], { type: "application/vnd.ms-excel;charset=UTF-8" });
        let objectUrl = URL.createObjectURL(blob);
        a.setAttribute("href", objectUrl);
        a.setAttribute("download", fileName);
        a.click();
        window.URL.revokeObjectURL(a.href);
    } else {
        console.log('下载失败!');
    }
});

/**
* 封装post请求
* @param url
* @param data
* @returns {Promise}
*/

export function post(url, data = {}) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err)
            }).catch((error) => {
                reject(error)
            })
    })
}


