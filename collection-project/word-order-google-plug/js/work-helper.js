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
            exportExcelBtn:null,
            cfnContainerEl:null,
            workorderSearchKeywords:null,
            workOrderCateList:{}, // 工单分类结果
            workOrderCnfList: [
                {
                    "title": "样式无法编辑",
                    "desc": "间距写死",
                    "cateId": 0
                },
                {
                    "title": "样式无法编辑",
                    "desc": "展示形式无法设置（横向、竖向、对齐方式等）",
                    "cateId": 1
                },
                {
                    "title": "样式无法编辑",
                    "desc": "特殊样式（下划线、色块等）无法取消、修改",
                    "cateId": 2
                },
                {
                    "title": "样式无法编辑",
                    "desc": "文字样式写死，无设置入口（字体、颜色、换行等）",
                    "cateId": 3
                },
                {
                    "title": "样式无法编辑",
                    "desc": "部分样式写死，也无设置入口（按钮、下拉菜单等）",
                    "cateId": 4
                },
                {
                    "title": "移动端样式问题",
                    "desc": "移动端文字样式无法单独设置",
                    "cateId": 5
                },
                {
                    "title": "移动端样式问题",
                    "desc": "移动端间距无法调整",
                    "cateId": 6
                },
                {
                    "title": "移动端样式问题",
                    "desc": "移动端样式不美观",
                    "cateId": 7
                },
                {
                    "title": "多端响应问题",
                    "desc": "文字展示不全、文字展示太多",
                    "cateId": 8
                },
                {
                    "title": "多端响应问题",
                    "desc": "展示错乱",
                    "cateId": 9
                },
                {
                    "title": "多端响应问题",
                    "desc": "响应不美观",
                    "cateId": 10
                },
                {
                    "title": "图片问题",
                    "desc": "图片压缩,非原图",
                    "cateId": 11
                },
                {
                    "title": "图片问题",
                    "desc": "图片拉伸变形",
                    "cateId": 12
                },
                {
                    "title": "图片问题",
                    "desc": "图片展示不全",
                    "cateId": 13
                },
                {
                    "title": "区块样式bug",
                    "desc": "后台编辑问题",
                    "cateId": 14
                },
                {
                    "title": "区块样式bug",
                    "desc": "前台展示问题",
                    "cateId": 15
                },
                {
                    "title": "内容无法编辑",
                    "desc": "内容是否展示无法设置（价格、时间、语言栏等）",
                    "cateId": 16
                },
                {
                    "title": "内容无法编辑",
                    "desc": "文字内容无法修改",
                    "cateId": 17
                },
                {
                    "title": "区块功能bug",
                    "desc": "重复添加导致代码冲突",
                    "cateId": 18
                },
                {
                    "title": "区块功能bug",
                    "desc": "区块功能不可用",
                    "cateId": 19
                },
                {
                    "title": "区块功能bug",
                    "desc": "其他bug",
                    "cateId": 20
                },
                {
                    "title": "功能缺失",
                    "desc": "特效无法设置（动效、悬浮效果等）",
                    "cateId": 21
                },
                {
                    "title": "功能缺失",
                    "desc": "跳转方式无法设置（当前页、新窗口）",
                    "cateId": 22
                },
                {
                    "title": "样式无法编辑",
                    "desc": "间距写死",
                    "cateId": 23
                },
                {
                    "title": "样式无法编辑",
                    "desc": "文字样式写死（字体、颜色、换行等）",
                    "cateId": 24
                },
                {
                    "title": "样式无法编辑",
                    "desc": "样式写死，无法调整",
                    "cateId": 25
                },
                {
                    "title": "图片问题",
                    "desc": "图片压缩,非原图",
                    "cateId": 26
                },
                {
                    "title": "图片问题",
                    "desc": "图片拉伸变形",
                    "cateId": 27
                },
                {
                    "title": "图片问题",
                    "desc": "图片展示不全",
                    "cateId": 28
                },
                {
                    "title": "表格问题",
                    "desc": "表格响应问题",
                    "cateId": 29
                },
                {
                    "title": "多端响应问题",
                    "desc": "文字展示不全、文字展示太多",
                    "cateId": 30
                },
                {
                    "title": "多端响应问题",
                    "desc": "展示错乱",
                    "cateId": 31
                },
                {
                    "title": "移动端样式问题",
                    "desc": "移动端样式不美观",
                    "cateId": 32
                },
                {
                    "title": "移动端样式问题",
                    "desc": "移动端样式无法单独设置",
                    "cateId": 33
                },
                {
                    "title": "组件样式bug",
                    "desc": "展示错乱",
                    "cateId": 34
                },
                {
                    "title": "组件功能bug",
                    "desc": "组件功能不可用",
                    "cateId": 35
                },
                {
                    "title": "组件功能缺失",
                    "desc": "组件内容无法修改",
                    "cateId": 36
                },
                {
                    "title": "组件功能缺失",
                    "desc": "多组件搭建无法对其、响应不好,无法单独设置",
                    "cateId": 37
                },
                {
                    "title": "移动端隐藏",
                    "desc": "",
                    "cateId": 38
                },
                {
                    "title": "系统功能不支持",
                    "desc": "",
                    "cateId": 39
                },
                {
                    "title": "系统功能bug",
                    "desc": "",
                    "cateId": 40
                },
                {
                    "title": "区块样式编辑问题",
                    "desc": "样式代码未生成",
                    "cateId": 41
                },
                {
                    "title": "区块样式编辑问题",
                    "desc": "样式代码生成，但是被覆盖",
                    "cateId": 42
                },
                {
                    "title": "区块样式编辑问题",
                    "desc": "样式编辑影响到区块内部样式（icon等）",
                    "cateId": 43
                },
                {
                    "title": "组件样式编辑问题",
                    "desc": "样式代码未生成",
                    "cateId": 44
                },
                {
                    "title": "组件样式编辑问题",
                    "desc": "样式代码生成，但是被覆盖",
                    "cateId": 45
                },
                {
                    "title": "国际化问题",
                    "desc": "未做国际化",
                    "cateId": 46
                },
                {
                    "title": "国际化问题",
                    "desc": "国际化内容无法修改",
                    "cateId": 47
                },
                {
                    "title": "小语种样式问题",
                    "desc": "右对齐小语种样式问题",
                    "cateId": 48
                },
                {
                    "title": "网站速度优化",
                    "desc": "样式收集失败或错乱",
                    "cateId": 49
                },
                {
                    "title": "网站速度优化",
                    "desc": "css、js加载顺序问题（和预览不一样）",
                    "cateId": 50
                },
                {
                    "title": "网站速度优化",
                    "desc": "模式调整（体验优先，兼容模式）",
                    "cateId": 51
                },
                {
                    "title": "网站速度优化",
                    "desc": "template包裹问题",
                    "cateId": 52
                },
                {
                    "title": "发布相关",
                    "desc": "发布延迟",
                    "cateId": 53
                },
                {
                    "title": "发布相关",
                    "desc": "发布不生效",
                    "cateId": 54
                },
                {
                    "title": "国际化翻译文案",
                    "desc": "无法修改",
                    "cateId": 55
                },
                {
                    "title": "国际化翻译文案",
                    "desc": "翻译错误",
                    "cateId": 56
                },
                {
                    "title": "翻译缺失",
                    "desc": "",
                    "cateId": 57
                },
                {
                    "title": "组件丢失",
                    "desc": "",
                    "cateId": 58
                },
                {
                    "title": "pc端兼容性问题",
                    "desc": "同系统，不同浏览器",
                    "cateId": 59
                },
                {
                    "title": "pc端兼容性问题",
                    "desc": "不同系统，同浏览器",
                    "cateId": 60
                },
                {
                    "title": "手机端兼容性问题",
                    "desc": "同系统，不同浏览器",
                    "cateId": 61
                },
                {
                    "title": "手机端兼容性问题",
                    "desc": "不同系统，同浏览器",
                    "cateId": 62
                },
                {
                    "title": "低版本浏览器不兼容",
                    "desc": "",
                    "cateId": 63
                },
                {
                    "title": "富文本内容问题",
                    "desc": "空格问题",
                    "cateId": 64
                },
                {
                    "title": "富文本内容问题",
                    "desc": "富文本删除完后，无法编辑",
                    "cateId": 65
                },
                {
                    "title": "富文本样式问题",
                    "desc": "样式设置不生效",
                    "cateId": 66
                },
                {
                    "title": "富文本样式问题",
                    "desc": "复制问题",
                    "cateId": 67
                },
                {
                    "title": "设置问题",
                    "desc": "有设置入口未设置",
                    "cateId": 68
                },
                {
                    "title": "设置问题",
                    "desc": "设置项设置有误",
                    "cateId": 69
                },
                {
                    "title": "代码影响",
                    "desc": "第三方代码影响",
                    "cateId": 70
                },
                {
                    "title": "代码影响",
                    "desc": "自定义代码影响（自己写的，技术客服写的）",
                    "cateId": 71
                },
                {
                    "title": "技术咨询",
                    "desc": "第三方代码如何安装",
                    "cateId": 72
                },
                {
                    "title": "技术咨询",
                    "desc": "SEO优化问题",
                    "cateId": 73
                },
                {
                    "title": "技术咨询",
                    "desc": "searchconsole问题",
                    "cateId": 74
                },
                {
                    "title": "技术咨询",
                    "desc": "需求评估",
                    "cateId": 75
                },
                {
                    "title": "技术咨询",
                    "desc": "amp相关问题",
                    "cateId": 76
                },
                {
                    "title": "网站速度问题",
                    "desc": "网站速度不达标",
                    "cateId": 77
                },
                {
                    "title": "个性化需求",
                    "desc": "完全没有共性问题",
                    "cateId": 78
                },
                {
                    "title": "其他",
                    "desc": "前后台不一致",
                    "cateId": 79
                },
                {
                    "title": "其他",
                    "desc": "服务端缓存",
                    "cateId": 80
                }
            ],
            injectWorkerHtml: `
            <div class="workorder-search hide">
                <div class="workorder-search-input">
                    <input type="text" id="workorder-search-keywords">
                </div>
                <div class="workorder-cfn-list">
                    
                </div>
            </div>
            <div class="workorder-plug">
                <div class="workorder-plug-export-excel plug-btn">
                    <svg t="1670320638964" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3260" width="32" height="32"><path d="M942.1 593.9c-22.6 0-41 18.3-41 41v204.8c0 22.6-18.4 41-41 41H163.8c-22.6 0-41-18.4-41-41V634.9c0-22.6-18.3-41-41-41s-41 18.3-41 41v204.8c0 67.8 55.1 122.9 122.9 122.9H860c67.8 0 122.9-55.1 122.9-122.9V634.9c0.1-22.6-18.2-41-40.8-41z" p-id="3261"></path><path d="M309.3 363L471 201.3v515.5c0 22.5 18.4 41 41 41 22.5 0 41-18.4 41-41V201.3L714.7 363c15.9 15.9 42 15.9 57.9 0 15.9-15.9 15.9-42 0-57.9L541.5 73.9c-0.2-0.2-0.3-0.4-0.4-0.5-5.7-5.7-12.7-9.3-20.1-10.9-0.2-0.1-0.5-0.2-0.7-0.2-2.7-0.5-5.4-0.8-8.1-0.8-2.7 0-5.5 0.3-8.1 0.8-0.3 0.1-0.5 0.2-0.7 0.2-7.4 1.6-14.4 5.2-20.1 10.9-0.2 0.2-0.3 0.4-0.4 0.5L251.4 305.1c-15.9 15.9-15.9 42 0 57.9 15.9 15.9 42 15.9 57.9 0z" p-id="3262"></path></svg>
                    导出Excel
                </div>
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
                            // 初始化工单分类列表
                            _that.renderWorkOrderCnfList(_that.state.workOrderCnfList);
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
         * 获取对应值
         */
        getWorkerVal: {
            /**
             * 获取当前工单的id
             */
            getWorkOrderId: function(){
                let workOrderId=  $("section.m-b-md .box-body>div:first-child .color-c").text().replace(/(\s*$)/g,""); //清除空格;
                return workOrderId;
            },
            /**
             * 分类搜索容器
             * @returns 
             */
            getCnfSearchContainer: function(){
                return $(".workorder-search");
            },
            /**
             * 工单类型容器
             */
            getCateTagContainer: function(){
                return $("section.m-b-md .box-body>div:first-child .color-c");
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
            this.state.exportExcelBtn = _wordHtml.find(".workorder-plug-export-excel");
            this.state.cfnContainerEl = _wordHtml.find(".workorder-cfn-list");
            this.state.workorderSearchKeywords = _wordHtml.find("#workorder-search-keywords");
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
                    if (_that.state.continueBtn) {
                        _that.state.continueBtn.unbind('click').bind('click', function () {
                            // 隐藏按钮
                            _that.state.continueBtn.hide();
                            _that.openWorkOrderDetail();
                        })
                    }
                },
                /**
                 * 上一条
                 */
                prevBtnFun: function () {
                    var _that = this;
                    if (_that.state.prevBtn) {
                        _that.state.prevBtn.unbind('click').bind('click', function () {
                            _that.state.currentWorkOrderIndex--;
                            if (_that.state.currentWorkOrderIndex < 0) {
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
                    if (_that.state.nextBtn) {
                        _that.state.nextBtn.unbind('click').bind('click', function () {
                            let { workOrderList, currentWorkOrderIndex } = _that.state;
                            if(!workOrderList){ // 没有对应列表
                                alert('需要先选择日期，点击开始分类');
                                return;
                            }
                            _that.state.currentWorkOrderIndex++;
                            if (workOrderList && workOrderList.list && currentWorkOrderIndex > workOrderList.list.length - 1) {
                                _that.state.currentWorkOrderIndex = 0;
                            }
                            _that.setLocalStorageWorkOrder.set("currentWorkOrderIndex", _that.state.currentWorkOrderIndex);
                            _that.openWorkOrderDetail();
                        })
                    }
                },
                /**
                 * 导出excel
                 */
                exportExcelBtnFun: function(){
                    var _that = this;
                    let { exportExcelBtn } = _that.state;
                    if(exportExcelBtn){
                        exportExcelBtn.unbind('click').bind('click',function(){
                            
                        });
                    }
                },
                /**
                 * 分类列表搜索关键词
                 */
                searchCnfKeyWords: function(){
                    var _that = this;
                    let { workorderSearchKeywords } = _that.state;
                    if(workorderSearchKeywords){
                        workorderSearchKeywords.unbind('input').bind('input',_that.debounce(function(){
                            let keyword = workorderSearchKeywords.val();
                            console.log(keyword);
                            // 关键词搜索
                            if(keyword){
                               let reusltArr = _that.searchCnfKeyWordsFun(keyword,_that.state.workOrderCnfList);
                               _that.renderWorkOrderCnfList(reusltArr);
                            }else{
                                _that.renderWorkOrderCnfList(_that.state.workOrderCnfList);
                            }
                        },200));
                    }
                },
                /**
                 * 选择对应的分类
                 */
                chooseCateFun: function(){
                    var _that = this;
                    let { cfnContainerEl } = _that.state;
                    if(cfnContainerEl){
                        cfnContainerEl.on("click",".workorder-cfn-list-item",function(){
                            cfnContainerEl.find(".workorder-cfn-list-item").removeClass("active");
                            $(this).addClass("active");
                            let cateId = $(this).attr("data-cateid");
                            let workOrderId = _that.getWorkerVal.getWorkOrderId();
                            if(workOrderId){
                                _that.setWorkOrderCateResult(workOrderId,cateId);
                                let cnfContainerEl = _that.getWorkerVal.getCnfSearchContainer();
                                cnfContainerEl.toggleClass('hide');

                                // 设置工单对应tag
                                _that.setWorkerCateTag(cateId);
                            }else{
                                alert('无法获取到当前分类的工单id，请在工单详情页进行工单分类');
                            }
                        })
                    }
                },
                /**
                 * 搜索框快捷键
                 */
                isShowSearchCnfFun: function(){
                    var _that = this;
                    document.onkeydown = function(event){
                        let cnfContainerEl = _that.getWorkerVal.getCnfSearchContainer();
                        if(event.altKey && event.keyCode == 81){
                           cnfContainerEl.toggleClass('hide');
                        }
                        if(event.keyCode == 27){
                            cnfContainerEl.toggleClass('hide');
                        }
                    }
                },
                /**
                 * 路由改变了，数据维护
                 */
                bindLocationChange: function(){
                    var _that = this;
                    const _historyWrap = function(type) { const orig = history[type]; const e = new Event(type); return function() { const rv = orig.apply(this, arguments); e.arguments = arguments; window.dispatchEvent(e); return rv; }; }; history.pushState = _historyWrap('pushState'); history.replaceState = _historyWrap('replaceState');
                    window.addEventListener('pushState', function(e) { 
                        // 工单是否已经分过类 初始化数据
                        setTimeout(function(){
                            _that.initWorkStateData();
                        },1000);
                    }); 
                    window.addEventListener('replaceState', function(e) { 
                        // 工单是否已经分过类 初始化数据
                        setTimeout(function(){
                            _that.initWorkStateData();
                        },1000);
                    });
                }
            }
            btnEvent.startBtnFun.call(this);
            btnEvent.continueBtnFun.call(this);
            btnEvent.prevBtnFun.call(this);
            btnEvent.nextBtnFun.call(this);
            btnEvent.searchCnfKeyWords.call(this);
            btnEvent.chooseCateFun.call(this);
            btnEvent.isShowSearchCnfFun.call(this);
            btnEvent.bindLocationChange.call(this);
        },
        /**
         * 初始化工单分类列表
         */
        renderWorkOrderCnfList(workOrderCnfList){
            var _that = this;
            _that.state.cfnContainerEl.html('');
            workOrderCnfList.forEach((item,index,array) => {
                let _cnfContainerEl = $(`<div class="workorder-cfn-list-item" data-cateid="${item.cateId}"></div>`);
                let _cnfTitle = $(`<div class="workorder-cfn-list-item-title">${item.desc}</div>`);
                let _cnfDesc = $(`<div class="workorder-cfn-list-item-desc">${item.title}</div>`);
                _cnfContainerEl.append(_cnfTitle);
                _cnfContainerEl.append(_cnfDesc);
                _that.state.cfnContainerEl && _that.state.cfnContainerEl.append(_cnfContainerEl);
            })
        },
        /**
         * 关键词搜索
         * 分类关键词过滤
         */
        searchCnfKeyWordsFun: function(keyword,cnfList){
            let resultArr = [];
            cnfList.forEach((item,index,array) => {
                if(Object.prototype.toString.call(item).slice(8,-1) == 'Object'){
                    for(let keyVal of Object.values(item)){
                        var _keywordName = keyword.replace(/(\s*$)/g,""); //清除空格
                        var reg = new RegExp(_keywordName);
                        if(reg.test(keyVal)){
                            resultArr.push(item);
                            return;
                        }
                    }
                }
            })
            return resultArr;
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
            debugger;
            // 初始化数据
            let _workOrderListStorage = this.setLocalStorageWorkOrder.get("workOrderList");
            let _currentWorkOrderIndexStorage = this.setLocalStorageWorkOrder.get("currentWorkOrderIndex");
            let _workOrderCateList = this.setLocalStorageWorkOrder.get("workOrderCateList"); // 工单分类
            this.state.workOrderList = (_workOrderListStorage && JSON.parse(_workOrderListStorage)) || null;
            this.state.currentWorkOrderIndex = (_currentWorkOrderIndexStorage && parseInt(_currentWorkOrderIndexStorage)) || 0;
            this.state.workOrderCateList = (_workOrderCateList && JSON.parse(_workOrderCateList)) || {};

            // 初始化按钮等页面状态
            let { workOrderList, startBtn, toggleBtn,workOrderCateList } = this.state;
            // if (workOrderList) { // 已经分类过了
            //     // 隐藏开始按钮
            //     startBtn.hide();
            //     toggleBtn.hide();
            // }

            // 初始化工单类型
            initWorkerOrderCate.call(this,workOrderCateList);
            function initWorkerOrderCate(workOrderCateList){
                let workOrderId = this.getWorkerVal.getWorkOrderId();
                // 工单是否已经分过类别
                if(workOrderId && workOrderCateList && workOrderCateList[workOrderId]){
                    this.setWorkerCateTag(workOrderCateList[workOrderId]);
                }
            }
        },
        /**workOrderId 工单id
         * cateId 分类id
         * 设置工单分类的结果
         */
        setWorkOrderCateResult: function(workOrderId,cateId){
            this.state.workOrderCateList[workOrderId] = cateId;
            let cnfList = this.setLocalStorageWorkOrder.get("workOrderCateList");
            if(cnfList){
                cnfList = JSON.parse(cnfList);
                let _orginLen = Object.keys(cnfList).length;
                let _len = Object.keys(this.state.workOrderCateList).length;
                if(_len <= 1 && _orginLen.length > 0 ){
                    console.log('异常,补齐');
                    cnfList[workOrderId] = cateId;
                    this.state.workOrderCateList = JSON.parse(JSON.stringify(cnfList));
                }else{
                    this.setLocalStorageWorkOrder.set("workOrderCateList",JSON.stringify(this.state.workOrderCateList));
                }
            }else{
                this.setLocalStorageWorkOrder.set("workOrderCateList",JSON.stringify(this.state.workOrderCateList));
            }
        },
        /**
         * 设置工单的tag标签
         */
        setWorkerCateTag: function(cateId){
            var _that = this;
            let cateName = findCateName(_that,cateId);
            if(!cateName){
                alert('找不到对应分类');
                return;
            }
            $("#cateTags").remove();
            let cateTagEl = $(`<div id="cateTags">${cateName}</div>`);
            let cateTagContainer = this.getWorkerVal.getCateTagContainer();
            cateTagContainer && cateTagContainer.append(cateTagEl);

            function findCateName(_that,cateId){
                for(let item of _that.state.workOrderCnfList){
                    if(item.cateId == parseInt(cateId)){
                        return item.desc;
                    }
                }
            }
        },
        /**
         * 防抖
         */
         debounce: function(fn, delay = 500) {
            // 是闭包中的
            let timer
            
            // input事件调用的函数，相当于obj调用函数 this指向Input
            return function() {
               // 这个if 判断不做也没关系，判断了（除第一次非空的情况）也就是执行从第二次开始，在延迟时间内多次触发才会走该判断
               if(timer) {clearTimeout(timer)}
               // 此时的箭头函数的this 和 arguments 都是从外部函数继承而来
               // 如果用普通函数就要用词法作用域 var that = this var arg = arguments
               timer = setTimeout(() =>{
                  // 使得传入的回调函数的this 指向Input这个元素对象
                  // arguments是该事件的详情，可以获得该函数被调用时的所有参数,是一个event 对象（所有Dom事件都会传event对象进入）
                  // 直接使用 fn() 问题也不大
                  fn.apply(this,arguments) 
                  timer = null
               },delay)
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