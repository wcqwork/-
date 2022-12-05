class WorkOrder {
    constructor() {
        this.appid = '';
        this.userId = '';
        this.authorization = "";
        this.startTime = "";
        this.endTime = "";
        this.init();
    }
    init() {
        this.setParams();
    }
    setParams() {
        this.appid = localStorage.getItem('appId') || '';
        this.authorization = localStorage.getItem('token') || ''
        this.userId = localStorage.getItem('userId') || ''
        this.startTime = localStorage.getItem("startTime") || ''
        this.endTime = localStorage.getItem("endTime") || ''
    }
    getUserInfo() {
        let _that = this;
        return new Promise((resolve, reject) => {
            $.ajax({
                //请求方式
                type: "get",
                //请求的媒体类型
                contentType: "application/json;charset=UTF-8",
                headers: { authorization: this.authorization, appid: this.appid },
                //请求地址
                url: "/wo/userInfo",
                //请求成功
                success: function (result) {
                    _that.userId = result && result.value && result.value.id;
                    localStorage.setItem('userId', _that.userId);
                    resolve(result)
                    console.log(result);
                },
                //请求失败，包含具体的错误信息
                error: function (e) {
                    reject(e)
                    console.log(e.status);
                    console.log(e.responseText);
                }
            });
        })
    }
    async getWordListProxy() {
        let _that = this;
        if (!this.userId) {
            await _that.getUserInfo()
            let result =await _that.getWorkorderList();
            return result;
        } else {
            let result = await _that.getWorkorderList();
            return result;
        }
    }
    getWorkorderList() {
        if (!this.startTime || !this.endTime) {
            alert('请选择开始时间---结束时间');
            return;
        }
        let pageSize = 200;
        var list = {
            pageNum: 1,
            pageSize,
            workOrderNum: "",
            keyword: "",
            adderName: "",
            startTime: this.startTime,
            endTime: this.endTime,
            orderStatus: "",
            userId: this.userId,
            orderByField: "",
            orderByMode: "",
            organizationName: ""
        };
        return new Promise((resolve, reject) => {
            $.ajax({
                //请求方式
                type: "get",
                //请求的媒体类型
                contentType: "application/json;charset=UTF-8",
                headers: { authorization: this.authorization, appid: this.appid },
                //请求地址
                url: "/wo/workorders",
                //数据，json字符串
                data: list,
                //请求成功
                success: function (result) {
                    console.log(result);
                    resolve(result);
                },
                //请求失败，包含具体的错误信息
                error: function (e) {
                    console.log(e.status);
                    console.log(e.responseText);
                    reject(e)
                }
            });
        })
    }
}

var script = document.createElement("script");
script.innerHTML = `
window.WorkOrder = ${WorkOrder};
`
document.head.appendChild(script)