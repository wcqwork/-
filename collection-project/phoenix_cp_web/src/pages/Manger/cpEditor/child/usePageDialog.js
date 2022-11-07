import { ref, nextTick, toRefs } from "vue";

export default function usePageDialog(currentEdit, refSetupRelate, refSetupRelate2, relatedProducts, randomProducts,
    relatedArticle,
    relatedArticle2,
    relatedVideo,
    relatedVideo2,
    relatedComment,
    relatedkeywords) {
    let pageSize = ref(10);
    let f_pageCurrent = ref(1);
    let f_totalContet = ref(0);

    let currentChange = async (current, articleCurrent) => {
        // debugger;
        f_pageCurrent.value = current;


        await nextTick(() => {
            if (articleCurrent == 2) {
                refSetupRelate2.value.getList('', articleCurrent);
            } else {
                refSetupRelate.value.getList('', articleCurrent);
            }
        })
    }

    let handleSwitchClick = async (articleCurrent) => {
        f_pageCurrent.value = 1;
        f_totalContet.value = 0;

        await nextTick(() => {
            if (articleCurrent == 2) {
                refSetupRelate2.value.getList('', articleCurrent);
            } else {
                refSetupRelate.value.getList('', articleCurrent);
            }
        })
    }

    // 双数组去重
    let handlerEquire = (arr1, arr2) => {
        let newArr = [];
        arr1.forEach(item => {
            if (!newArr.includes(item)) {
                newArr.push(item);
            }
        });
        arr2.forEach(item => {
            if (!newArr.includes(item)) {
                newArr.push(item);
            }
        });
        return newArr;
    }

    let relateProd_All; // 相关产品/随机

    /**
     * 设置
     */
    // 设置产品
    let handlerSetProd = (type, dataArr) => {
        currentEdit.value = type;
        isShowProduct.value = true;
        getSetupContent();


        let { relateProd, randomProd } = toRefs(dataArr);
        if (relateProd) {
            relateProd_All = relateProd;
            relatedProducts.value = relateProd.value;
        } else if (randomProd) {
            relateProd_All = randomProd;
            randomProducts.value = randomProd.value;
        }

    }
    let handlerSetArticle = (type, dataArr) => {
        currentEdit.value = type;
        isShowArticle.value = true;
        getSetupContent();

        // 
        let { relateArticle } = toRefs(dataArr);
        relatedArticle.value = relateArticle.value.privateArticle;
        relatedArticle2.value = relateArticle.value.siteArticle;
        relateProd_All = relateArticle;
    }

    let handlerSetVideo = (type, dataArr) => {
        currentEdit.value = type;
        isShowVideo.value = true;
        getSetupContent();

        // 
        let { relateVideo } = toRefs(dataArr);
        relatedVideo.value = relateVideo.value.privateVideo;
        relatedVideo2.value = relateVideo.value.siteVideo;
        relateProd_All = relateVideo;
    }

    let handlerSetComment = (type, dataArr) => {
        currentEdit.value = type;
        isShowComment.value = true;
        getSetupContent();

        // 
        let { relateComment } = toRefs(dataArr);
        relatedComment.value = relateComment.value;
        relateProd_All = relateComment;
    }

    let handlerSetKeyword = (type, dataArr) => {
        currentEdit.value = type;
        isShowKeyword.value = true;
        getSetupContent();

        // 
        let { relateKeyword } = toRefs(dataArr);
        relatedkeywords.value = relateKeyword.value;
        relateProd_All = relateKeyword;
    }

    let getSetupContent = () => {
        // setTimeout(function () {    
        //     // debugger;
        //     let { pageCurrent, totalContet } = refSetupRelate.value.handlerExportFooter();
        //     f_pageCurrent.value = pageCurrent.value;
        //     f_totalContet.value = totalContet.value;
        // }, 2000)
    }


    let isShowProduct = ref(false)
    let isShowArticle = ref(false)
    let isShowVideo = ref(false)
    let isShowComment = ref(false)
    let isShowKeyword = ref(false)
    let articleCurrent = ref('website');
    let videoCurrent = ref('website');

    // 关闭
    let handlerCloseDialog = () => {
        pageSize.value = 10;
        f_pageCurrent.value = 1;
        f_totalContet.value = 0;

        isShowProduct.value = false;
        isShowArticle.value = false;
        isShowVideo.value = false;
        isShowComment.value = false;
        isShowKeyword.value = false;

        // debugger

         articleCurrent.value = 'website'
         videoCurrent.value = 'website'


    }
    let handlerOkDialog = () => {
        // 选择数据保存同步
        let { multipleSelection } = refSetupRelate.value.handlerExportFooter();

        let settingMap = {
            'relateProduct': () => {
                relateProd_All.value = multipleSelection.value;
                // relatedProducts.value = multipleSelection.value;
                // debugger;
            },
            'radomProduct': () => {
                // randomProducts.value = multipleSelection.value;
                relateProd_All.value = multipleSelection.value;
            },
            'relateArticle': () => {
                let mutlipObj = refSetupRelate2.value.handlerExportFooter();
                relateProd_All.value = {
                    siteArticle: multipleSelection.value,
                    privateArticle: mutlipObj.multipleSelection.value
                }
                // relatedArticle.value = multipleSelection.value;
                // relatedArticle2.value = mutlipObj.multipleSelection.value;
            },
            'relateVideo': () => {
                let mutlipObj = refSetupRelate2.value.handlerExportFooter();
                relateProd_All.value = {
                    siteVideo: multipleSelection.value,
                    privateVideo: mutlipObj.multipleSelection.value
                }
                // relatedVideo.value = multipleSelection.value;
                // relatedVideo2.value = mutlipObj.multipleSelection.value;
            },
            'relateComment': () => {
                relateProd_All.value = multipleSelection.value;
                // relatedComment.value = multipleSelection.value;
            },
            'relateKeyWord': () => {
                relateProd_All.value = multipleSelection.value;
                // relatedkeywords.value = multipleSelection.value;
            },
        }
        settingMap[currentEdit.value]();

        handlerCloseDialog();
    }

    return {
        pageSize,
        f_pageCurrent,
        f_totalContet,
        currentChange,
        isShowProduct,
        isShowArticle,
        isShowVideo,
        isShowComment,
        isShowKeyword,
        articleCurrent,
        videoCurrent,

        handlerSetProd,
        handlerSetArticle,
        handlerSetVideo,
        handlerSetComment,
        handlerSetKeyword,
        handlerCloseDialog,
        handleSwitchClick,
        handlerOkDialog
    }
}