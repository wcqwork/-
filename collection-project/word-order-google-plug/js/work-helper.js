var setAllHelper = function () {
    window.workerHelper = {
        state: {
            workOrderList: null, // 筛选需要分类的所有工单 {}
            currentWorkOrderIndex: 0,
            workerInstance: null,// 工单实例
            startBtn: null,
            toggleBtn: null,
            prevBtn: null,
            nextBtn: null,
            continueBtn: null,
            injectWorkerHtml: `
            <div class="workorder-plug">
                <div class="workorder-plug-start-btn plug-btn">
                    <svg t="1670207631120" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="9834" width="32" height="32"><path d="M512 0C229.228 0 0 229.228 0 512s229.228 512 512 512c282.773 0 512-229.228 512-512S794.772 0 512 0z m0 954.183C267.818 954.183 69.818 756.205 69.818 512c0-244.205 198-442.182 442.182-442.182 244.228 0 442.182 197.977 442.182 442.182S756.228 954.183 512 954.183z" p-id="9835"></path><path d="M750.545 481.772l-349.09-201.545a34.843 34.843 0 0 0-34.91 0 34.897 34.897 0 0 0-17.454 30.228v403.09c0 12.478 6.659 24 17.454 30.228A34.85 34.85 0 0 0 384 748.456a34.85 34.85 0 0 0 17.455-4.683l349.09-201.545A34.896 34.896 0 0 0 768 512c0-12.477-6.659-24-17.455-30.228zM418.909 653.079V370.92L663.272 512 418.909 653.079z" p-id="9836"></path></svg>
                    开始
                </div>
                <div class="workorder-plug-continue-btn plug-btn">
                    <svg t="1670208942615" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="11250" width="32" height="32"><path d="M512 88.086022c234.121634 0 423.913978 189.792344 423.913978 423.913978s-189.792344 423.913978-423.913978 423.913978-423.913978-189.792344-423.913978-423.913978 189.792344-423.913978 423.913978-423.913978z m0 66.064516c-197.637505 0-357.849462 160.211957-357.849462 357.849462s160.211957 357.849462 357.849462 357.849462 357.849462-160.211957 357.849462-357.849462-160.211957-357.849462-357.849462-357.849462z m13.119312 170.666666c0-28.892215 34.337032-43.674151 55.312516-24.388817l0.902882 0.858839 187.182795 184.430107a33.032258 33.032258 0 0 1 0.985463 46.046968l-0.985463 1.012989-187.182795 184.430108c-20.579097 20.276301-55.207914 6.193548-56.193377-22.280258l-0.022021-1.249721V324.817204zM357.849462 291.784946a33.032258 33.032258 0 0 1 33.010237 31.793549L390.88172 324.817204v368.860215a33.032258 33.032258 0 0 1-66.042494 1.23871L324.817204 693.677419V324.817204a33.032258 33.032258 0 0 1 33.032258-33.032258z m233.328861 111.946323v211.02658L698.268903 509.247312l-107.09058-105.516043z" fill="#3A3A3A" p-id="11251"></path></svg>
                    继续分类
                </div>
                <div class="workorder-plug-toggle-btn">
                    <div class="workorder-plug-prev-btn item-btn">
                        <svg t="1670206913182" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4158" width="32" height="32"><path d="M87.428571 106.285714m22.857143 0l0 0q22.857143 0 22.857143 22.857143l0 765.714286q0 22.857143-22.857143 22.857143l0 0q-22.857143 0-22.857143-22.857143l0-765.714286q0-22.857143 22.857143-22.857143Z" p-id="4159"></path><path d="M863.52 45.714286C874.857143 45.714286 890.857143 54.148571 890.857143 72.891429v878.217142c0 18.742857-16 27.165714-27.337143 27.165715a26.091429 26.091429 0 0 1-16-5.645715L270.102857 533.52a27.051429 27.051429 0 0 1 0-43.04L847.428571 51.428571a26.091429 26.091429 0 0 1 16-5.645714m0-45.714286a71.657143 71.657143 0 0 0-43.714285 14.971429L242.434286 454.091429a72.754286 72.754286 0 0 0 0 115.817142l577.371428 439.12a71.657143 71.657143 0 0 0 43.714286 14.971429c37.714286 0 73.051429-29.714286 73.051429-72.891429V72.891429C936.571429 29.771429 901.2 0 863.52 0z" p-id="4160"></path></svg>
                        上一条
                    </div>
                    <div class="workorder-plug-next-btn item-btn">
                        <svg t="1670206872596" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3855" width="32" height="32"><path d="M925.869229 917.714286m-22.857143 0l0 0q-22.857143 0-22.857143-22.857143l0-765.714286q0-22.857143 22.857143-22.857143l0 0q22.857143 0 22.857143 22.857143l0 765.714286q0 22.857143-22.857143 22.857143Z" p-id="3856"></path><path d="M149.7778 45.714286A26.091429 26.091429 0 0 1 165.869229 51.428571l577.371428 439.108572a27.051429 27.051429 0 0 1 0 43.04L165.869229 972.628571a26.091429 26.091429 0 0 1-16 5.645715c-11.428571 0.011429-27.428571-8.422857-27.428572-27.165715V72.891429C122.440657 54.148571 138.440657 45.714286 149.7778 45.714286m0-45.714286C112.154943 0 76.726371 29.771429 76.726371 72.891429v878.217142C76.726371 994.285714 112.154943 1024 149.7778 1024a71.657143 71.657143 0 0 0 43.714286-14.971429l577.371428-439.12a72.754286 72.754286 0 0 0 0-115.817142L193.492086 14.971429A71.657143 71.657143 0 0 0 149.7778 0z" p-id="3857"></path></svg>
                        下一条
                    </div>
                </div>
            </div>
            `
        },
        initWorker: function () {
            var _that = this;
            return new Promise((resolve, reject) => {
                try {
                    // 设置工单实例
                    this.setWorkerInstance();
                    // 注入第三方资源
                    this.injectDetectionLinkJs((isload) => {
                        if (isload) {
                            // 注入页面dom
                            _that.injectWorkOrderHtml();
                            // 工单是否已经分过类 初始化数据
                            _that.initWorkStateData();
                            // 初始化按钮对应事件
                            _that.bindBtnEvent();
                            resolve('success');
                        }
                    });

                } catch (e) {
                    console.log(e);
                    reject('error');
                }
            })
        },
        /**
         * 设置工单实例
         */
        setWorkerInstance: function () {
            if (window.WorkOrder) {
                this.state.workerInstance = new window.WorkOrder();
            }
        },
        /**
         * 注入第三方资源
         */
        injectDetectionLinkJs: function (linkJsCallback) {
            let isloadFullNum = 0;
            var jsArr = [
                "//cdn.bootcdn.net/ajax/libs/jquery/1.8.3/jquery.min.js",
                '//code.jquery.com/ui/1.10.4/jquery-ui.js'
            ]
            jsArr.forEach(link => {
                loadScript(link, function () {
                    isloadFullNum++;
                    if (isloadFullNum == jsArr.length) {
                        linkJsCallback(true);
                    }
                    console.log(link);
                });
            })
            function loadScript(url, callback) {
                var script = document.createElement('script')
                script.type = 'text/javascript'
                script.async = 'async'
                script.src = url
                document.head.appendChild(script)
                if (script.readyState) {
                    //IE
                    script.onreadystatechange = function () {
                        if (script.readyState == 'complete' || script.readyState == 'loaded') {
                            script.onreadystatechange = null
                            callback()
                        }
                    }
                } else {
                    //非IE
                    script.onload = function () {
                        callback()
                    }
                }
            }
        },
        /**
         * 注入页面dom
         */
        injectWorkOrderHtml: function () {
            var _wordHtml = $(this.state.injectWorkerHtml);
            this.state.startBtn = _wordHtml.find(".workorder-plug-start-btn");
            this.state.prevBtn = _wordHtml.find(".workorder-plug-prev-btn");
            this.state.nextBtn = _wordHtml.find(".workorder-plug-next-btn");
            this.state.toggleBtn = _wordHtml.find(".workorder-plug-toggle-btn");
            this.state.continueBtn = _wordHtml.find(".workorder-plug-continue-btn");
            $("body").append(_wordHtml);
        },
        /**
         * 按钮事件绑定
         */
        bindBtnEvent: function () {
            var btnEvent = {
                /**
                 * 开始初始化工单需要的数据
                 */
                startBtnFun: function () {
                    var _that = this;
                    if (_that.state.startBtn) {
                        _that.state.startBtn.unbind('click').bind('click', function () {
                            // 隐藏开始按钮
                            _that.state.startBtn.hide();
                            // 获取筛选条件对应的工单记录
                            let result = _that.state.workerInstance.getWordListProxy();
                            result.then(res => {
                                if (res) {
                                    // 保存数据
                                    _that.state.workOrderList = res.value;
                                    _that.setLocalStorageWorkOrder.set("workOrderList", JSON.stringify(_that.state.workOrderList));
                                    let currentWorkOrderIndex = 0
                                    _that.setLocalStorageWorkOrder.set("currentWorkOrderIndex", currentWorkOrderIndex);

                                    // 打开详情
                                    _that.state.currentWorkOrderIndex = currentWorkOrderIndex;
                                    _that.openWorkOrderDetail();
                                }
                            })
                        })
                    }
                },
                /**
                 * 继续上次未完成的工单分类
                 */
                continueBtnFun: function () {
                    var _that = this;
                    if(_that.state.continueBtn){
                        _that.state.continueBtn.unbind('click').bind('click',function(){
                            // 隐藏按钮
                            _that.state.continueBtn.hide();
                            _that.openWorkOrderDetail();
                        })
                    }
                },
                /**
                 * 上一条
                 */
                prevBtnFun: function(){
                    var _that = this;
                    if(_that.state.prevBtn){
                        _that.state.prevBtn.unbind('click').bind('click',function(){
                            _that.state.currentWorkOrderIndex--;
                            if(_that.state.currentWorkOrderIndex < 0){
                                _that.state.currentWorkOrderIndex = 0;
                                alert('哎呀,已经到顶了');
                                return;
                            }
                            _that.setLocalStorageWorkOrder.set("currentWorkOrderIndex", _that.state.currentWorkOrderIndex);
                            _that.openWorkOrderDetail();
                        })
                    }
                },
                /**
                 * 下一条
                 */
                nextBtnFun: function () {
                    var _that = this;
                    if(_that.state.nextBtn){
                        _that.state.nextBtn.unbind('click').bind('click',function(){
                            _that.state.currentWorkOrderIndex++;
                            let {workOrderList,currentWorkOrderIndex} = _that.state;
                            if(workOrderList && workOrderList.list && currentWorkOrderIndex > workOrderList.list.length -1 ){
                                _that.state.currentWorkOrderIndex = 0;
                            }
                            _that.setLocalStorageWorkOrder.set("currentWorkOrderIndex", _that.state.currentWorkOrderIndex);
                            _that.openWorkOrderDetail();
                        })
                    }
                },
            }
            btnEvent.startBtnFun.call(this);
            btnEvent.continueBtnFun.call(this);
            btnEvent.prevBtnFun.call(this);
            btnEvent.nextBtnFun.call(this);
        },
        /**
         * 打开工单详情页面
         */
        openWorkOrderDetail: function () {
            let detailUrl = '/order/viewdetail/';
            let { workOrderList, currentWorkOrderIndex } = this.state;
            let id = workOrderList && workOrderList.list && workOrderList.list[currentWorkOrderIndex] && workOrderList.list[currentWorkOrderIndex].id;
            location.href = detailUrl + id;
        },
        /**
         * 保存数据
         */
        setLocalStorageWorkOrder: {
            set: function (name, list) {
                localStorage.setItem(name, list);
            },
            get: function (name) {
                return localStorage.getItem(name);
            }
        },
        /**
         * 初始化工单状态  || 工单是否之前已经分过类别
         */
        initWorkStateData: function () {
            // 初始化数据
            let _workOrderListStorage = this.setLocalStorageWorkOrder.get("workOrderList");
            let _currentWorkOrderIndexStorage = this.setLocalStorageWorkOrder.get("currentWorkOrderIndex");
            this.state.workOrderList = (_workOrderListStorage && JSON.parse(_workOrderListStorage)) || null;
            this.state.currentWorkOrderIndex = (_currentWorkOrderIndexStorage && parseInt(_currentWorkOrderIndexStorage)) || 0;

            // 初始化按钮等页面状态
            let { workOrderList, startBtn, toggleBtn } = this.state;
            if (workOrderList) { // 已经分类过了
                // 隐藏开始按钮
                startBtn.hide();
                // toggleBtn.hide();
            }
        }
    }
}


var script = document.createElement("script");
script.innerHTML = `
window.setAllHelper = ${setAllHelper};
window.setAllHelper();
`
document.head.appendChild(script)