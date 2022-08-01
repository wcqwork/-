import { ref, defineEmits, watch, computed, onMounted,nextTick  } from "vue";
// api
import { getProductList, getProductCate, getArticleList, getArticleLibList, getArticleCateList, getVideoWebsiteCate, getVideoList, getVideoWebsiteList, getCommentList, getKeyWordList } from "@/api/global"

export default function useRelateContent(prodName, props, chooseArr, chooseEncodeGroupId, emit,twoTabsMultipCheckAll) {
    let pageCurrent = ref(1);
    let totalContet = ref(0);

    // 表格
    let multipleTableRef = ref(null);
    let multipleSelection = ref([])

    let tableListArr = ref([  //表格数据
    ])


    let handleSelectionChange = (val) => {
        multipleSelection.value = val;
    }

    let toggleSelection = (prodItem) => { //取消选中
        if (prodItem) {
            multipleTableRef.value.toggleRowSelection(prodItem, false);
            tableListArr.value.forEach(row => {
                if (row.encodeId == prodItem.encodeId) {
                    multipleTableRef.value.toggleRowSelection(row, false);
                }
            })
        }
        // //文章\视频弹窗 tab数据同步
        emit('toggleSelectionNotify',prodItem);
    }

    let towTabstoggleSelection = (prodItem) => { //取消选中
        if (prodItem) {
            multipleTableRef.value.toggleRowSelection(prodItem, false);
            tableListArr.value.forEach(row => {
                if (row.encodeId == prodItem.encodeId) {
                    multipleTableRef.value.toggleRowSelection(row, false);
                }
            })
        }
    }

    let initSetupCheck = () => { //初始化选中
        console.log('初始化选中');
        // debugger
        multipleSelection.value.forEach((row) => {
            multipleTableRef.value.toggleRowSelection(row, true);
        })
    }

    // //文章\视频弹窗 tab数据同步
    // watch(multipleSelection, () => {
    //     emit('synchronizeTabData', multipleSelection);
    // })

    // watch(() => props.chooseProduct, () => {
    //     multipleSelection.value = props.chooseProduct;
    // })

    // 相关产品
    let getList = async (type, currentActive) => {
        let settingMap = {
            'relateProduct': getRelateProduct,
            'radomProduct': getRadomProduct,
            'relateArticle': getRelateArticle,
            'relateVideo': getRelateVideo,
            'relateComment': getRelateComment,
            'relateKeyWord': getRelateKeyWord
        }
        // debugger
        nextTick(async () => {
            await settingMap[props.currentEdit](type, currentActive);
            emit('asyncDataFinsh', { pageCurrent, totalContet });
        })
      
    };

    let getRelateProduct = async (type) => {
        if (type == "init") {
            multipleSelection.value = props.chooseProduct;  // 初始化数据
            getProductCateFun();//获取产品分类
            initSetupCheck();//初始化选中
        }
        let params = {
            encodeGroupId: (chooseEncodeGroupId.value && chooseEncodeGroupId.value.slice(-1) && chooseEncodeGroupId.value.slice(-1)[0]) || '',
            prodName: prodName.value,
            pageNum: props.f_pageCurrent,
            pageSize: 10,
        }
        // 发送请求
        await getProductList(params).then(res => {
            if (res) {
                tableListArr.value = res.list || [];
                pageCurrent.value = res.pageNum;
                totalContet.value = res.total;
            }
        })
    }

    let getProductCateFun = async () => {
        // 筛选分类
        await getProductCate().then(res => {
            if (res) {
                chooseArr.value = res;
            }
        })
    }

    let getRadomProduct = async (type) => {
        if (type == "init") {
            multipleSelection.value = props.randomProducts;  // 初始化数据
            getProductCateFun();//获取产品分类
            initSetupCheck();//初始化选中
        }
        let params = {
            encodeGroupId: (chooseEncodeGroupId.value && chooseEncodeGroupId.value.slice(-1) && chooseEncodeGroupId.value.slice(-1)[0]) || '',
            prodName: prodName.value,
            pageNum: props.f_pageCurrent,
            pageSize: 10,
        }
        // 发送请求
        await getProductList(params).then(res => {
            if (res) {
                tableListArr.value = res.list || [];
                pageCurrent.value = res.pageNum;
                totalContet.value = res.total;
            }
        })
    }

    let getRelateArticle = async (type, currentActive) => {
        if (type == "init") {
            multipleSelection.value = props.chooseProduct;  // 初始化数据
            initSetupCheck();//初始化选中
        }
        if (currentActive == 1) {
            getRelateArticleCate();//获取分类
            let params = {
                encodeGroupId: (chooseEncodeGroupId.value && chooseEncodeGroupId.value.slice(-1) && chooseEncodeGroupId.value.slice(-1)[0]) || '',
                articleTitle: prodName.value,
                pageNum: props.f_pageCurrent,
                pageSize: 10,
            }
            // 发送请求
            await getArticleList(params).then(res => {
                if (res) {
                    tableListArr.value = res.list || [];
                    pageCurrent.value = res.pageNum;
                    totalContet.value = res.total;
                }
            })
        }
        if (currentActive == 2) {
            getRelateArticleLib();
        }
    }

    let getRelateArticleLib = async () => {
        let params = {
            searchValue: prodName.value,
            pageNum: props.f_pageCurrent,
            pageSize: 10,
        }
        // 发送请求
        await getArticleLibList(params).then(res => {
            if (res) {
                tableListArr.value = res.list || [];
                pageCurrent.value = res.pageNum;
                totalContet.value = res.total;
            }
        })
    }

    let getRelateArticleCate = async () => {
        await getArticleCateList().then(res => {
            if (res) {
                chooseArr.value = res;
            }
        })
    }

    let getRelateVideo = async (type, currentActive) => {
        if (type == "init") {
            multipleSelection.value = props.chooseProduct;  // 初始化数据
            initSetupCheck();//初始化选中
        }
        if (currentActive == 1) {
            getVideoWebsiteCateList();//获取分类
            let params = {
                encodeGroupId: (chooseEncodeGroupId.value && chooseEncodeGroupId.value.slice(-1) && chooseEncodeGroupId.value.slice(-1)[0]) || '',
                videoName: prodName.value,
                pageNum: props.f_pageCurrent,
                pageSize: 10,
            }
            // 发送请求
            await getVideoWebsiteList(params).then(res => {
                if (res) {
                    tableListArr.value = res.list || [];
                    pageCurrent.value = res.pageNum;
                    totalContet.value = res.total;
                }
            })
        }

        if (currentActive == 2) {
            getRelateVideoLib();
        }

    }

    let getRelateVideoLib = async () => {
        let params = {
            videoTitle: prodName.value,
            pageNum: props.f_pageCurrent,
            pageSize: 10,
        }
        // 发送请求
        await getVideoList(params).then(res => {
            if (res) {
                tableListArr.value = res.list || [];
                pageCurrent.value = res.pageNum;
                totalContet.value = res.total;
            }
        })
    }

    let getVideoWebsiteCateList = async () => {
        await getVideoWebsiteCate().then(res => {
            if (res) {
                chooseArr.value = res;
            }
        })
    }

    let getRelateComment = async (type, currentActive) => {
        if (type == "init") {
            multipleSelection.value = props.chooseProduct;  // 初始化数据
            initSetupCheck();//初始化选中
        }
        let params = {
            discussContent: prodName.value,
            pageNum: props.f_pageCurrent,
            pageSize: 10,
        }
        // 发送请求
        await getCommentList(params).then(res => {
            if (res) {
                tableListArr.value = res.list || [];
                pageCurrent.value = res.pageNum;
                totalContet.value = res.total;
            }
        })
    }

    let getRelateKeyWord = async (type, currentActive) => {
        if (type == "init") {
            multipleSelection.value = props.chooseProduct;  // 初始化数据
            initSetupCheck();//初始化选中
        }
        let params = {
            cpKeyword: prodName.value,
            pageNum: props.f_pageCurrent,
            pageSize: 10,
        }
        // 发送请求
        await getKeyWordList(params).then(res => {
            if (res) {
                tableListArr.value = res.list || [];
                pageCurrent.value = res.pageNum;
                totalContet.value = res.total;
            }
        })
    }

    let handlerIsCheck = (row) => {
        let newCheckAll = multipleSelection.value.map((item) => {
            return item.encodeId
        })
        let isHas = newCheckAll.includes(row.encodeId);
        if (isHas) {
            return true;
        }
        return multipleSelection.value.length >= 10 ? false : true;
    }

    let handlerIsCheck20 = (row) => {
        let newCheckAll = multipleSelection.value.map((item) => {
            return item.encodeId
        })
        let isHas = newCheckAll.includes(row.encodeId);
        if (isHas) {
            return true;
        }
        return multipleSelection.value.length >= 20 ? false : true;
    }

    let handlerTwoTabsCheck = (row) => {
        let newCheckAll = twoTabsMultipCheckAll.value.map((item) => {
            return item.encodeId
        })
        let isHas = newCheckAll.includes(row.encodeId);
        if (isHas) {
            return true;
        }
        return twoTabsMultipCheckAll.value.length >= 10 ? false : true;
    }

    return {
        pageCurrent,
        totalContet,
        getList,
        multipleTableRef,
        multipleSelection,
        handleSelectionChange,
        toggleSelection,
        tableListArr,
        handlerIsCheck,
        handlerIsCheck20,
        handlerTwoTabsCheck,
        towTabstoggleSelection
    }
}