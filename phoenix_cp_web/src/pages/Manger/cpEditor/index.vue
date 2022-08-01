<template>
    <div class="main cp-Edit-container">
        <PageTitle>
            <template #title>
                CP页编辑
            </template>
        </PageTitle>
        <div class="edit-container scrollbar">
            <div v-for="(item, index) in pageContent" :key="index">
                <banner v-if="isHasCpt(item, 'banner')" :cptObj="item"></banner>
                <pageDesc v-if="isHasCpt(item, 'pageDesc')" :cptObj="item"></pageDesc>
                <pageTitle v-if="isHasCpt(item, 'pageTitle')" :cptObj="item"></pageTitle>
                <relateProd v-if="isHasCpt(item, 'relateProd')" :cptObj="item" @handlerSetProd="handlerSetProd">
                </relateProd>
                <randomProd v-if="isHasCpt(item, 'randomProd')" :cptObj="item" @handlerSetProd="handlerSetProd">
                </randomProd>
                <relateArticle v-if="isHasCpt(item, 'relateArticle')" :cptObj="item"
                    @handlerSetArticle="handlerSetArticle"></relateArticle>
                <relateVideo v-if="isHasCpt(item, 'relateVideo')" :cptObj="item" @handlerSetVideo="handlerSetVideo">
                </relateVideo>
                <relateComment v-if="isHasCpt(item, 'relateComment')" :cptObj="item"
                    @handlerSetComment="handlerSetComment"></relateComment>
                <relateKeyword v-if="isHasCpt(item, 'relateKeyword')" :cptObj="item"
                    @handlerSetKeyword="handlerSetKeyword"></relateKeyword>
                <cpform v-if="isHasCpt(item, 'form')" :cptObj="item" :formArr="formArr"></cpform>
            </div>
        </div>

        <div class="pageBottom">
            <el-button plain @click="handlerGoBack">返回</el-button>
            <el-button type="primary" @click="handlerSavePage">保存</el-button>
        </div>

        <!-- 设置相关产品 -->
        <el-dialog v-model="isShowProduct" :title="currentEdit == 'relateProduct' ? '设置相关产品' : '设置随机产品'"
            :before-close="handlerCloseDialog" :destroy-on-close="true" width="800px">
            <setupRelateContent :currentEdit="currentEdit" :f_pageCurrent="f_pageCurrent"
                :chooseProduct="relatedProducts" :randomProducts="randomProducts" @asyncDataFinsh="asyncDataFinsh"
                ref="refSetupRelate">
                <template #setupTip>
                    <div>
                        勾选下方产品，选择当前CP页展示的相关产品，最多关联<span>{{ currentEdit == 'relateProduct' ? '10' : '20' }}</span>个产品。
                    </div>
                </template>
            </setupRelateContent>
            <template #footer>
                <div class="footer">
                    <div class="f-pagination">
                        <el-pagination :page-size="pageSize" :pager-count="5" layout="prev, pager, next"
                            :total="f_totalContet" @current-change="currentChange" :hide-on-single-page="true" />
                    </div>
                    <span class="dialog-footer">
                        <el-button @click="handlerCalc">取消</el-button>
                        <el-button type="primary" @click="handlerSetUpOk">确定</el-button>
                    </span>
                </div>
            </template>
        </el-dialog>

        <!-- 设置相关文章 -->
        <el-dialog v-model="isShowArticle" title="设置相关文章" :before-close="handlerCloseDialog" custom-class="twoDialog"
            :destroy-on-close="true" width="800px">
            <el-tabs v-model="articleCurrent" class="demo-tabs"
                @tab-click="handleSwitchClick(articleCurrent == 'website' ? 1 : 2)">
                <el-tab-pane label="网站文章" name="website">
                    <setupRelateContent :currentEdit="currentEdit" :f_pageCurrent="f_pageCurrent"
                        :chooseProduct="relatedArticle2" :pSetup="1" @asyncDataFinsh="asyncDataFinsh"
                        @synchronizeTabData="synchronizeTabData" @toggleSelectionNotify="toggleSelectionNotify"
                        ref="refSetupRelate">
                        <template #setupTip>
                            <div>
                                勾选下方文章，选择当前CP页展示的相关文章，可以从网站后台已上传的文章中选择，最多关联10篇文章。
                            </div>
                        </template>
                    </setupRelateContent>
                </el-tab-pane>
                <el-tab-pane label="文章库" name="articleLib">
                    <setupRelateContent :currentEdit="currentEdit" :f_pageCurrent="f_pageCurrent"
                        :chooseProduct="relatedArticle" :pSetup="2" @asyncDataFinsh="asyncDataFinsh"
                        @synchronizeTabData="synchronizeTabData" @toggleSelectionNotify="toggleSelectionNotify"
                        ref="refSetupRelate2">
                        <template #setupTip>
                            <div>
                                勾选下方文章，选择当前CP页展示的相关文章，可以从网站后台已上传的文章中选择，最多关联10篇文章。
                            </div>
                        </template>
                    </setupRelateContent>
                </el-tab-pane>
            </el-tabs>
            <template #footer>
                <div class="footer">
                    <div class="f-pagination">
                        <el-pagination :page-size="pageSize" :pager-count="5" layout="prev, pager, next"
                            :total="f_totalContet"
                            @current-change="(val) => currentChange(val, articleCurrent == 'website' ? 1 : 2)"
                            :hide-on-single-page="true" />
                    </div>
                    <span class="dialog-footer">
                        <el-button @click="handlerCalc">取消</el-button>
                        <el-button type="primary" @click="handlerSetUpOk">确定</el-button>
                    </span>
                </div>
            </template>
        </el-dialog>

        <!-- 设置相关视频 -->
        <el-dialog v-model="isShowVideo" title="设置相关视频" :before-close="handlerCloseDialog" custom-class="twoDialog"
            :destroy-on-close="true" width="800px">
            <el-tabs v-model="videoCurrent" class="demo-tabs"
                @tab-click="handleSwitchClick(videoCurrent == 'website' ? 1 : 2)">
                <el-tab-pane label="网站" name="website">
                    <setupRelateContent :currentEdit="currentEdit" :f_pageCurrent="f_pageCurrent"
                        :chooseProduct="relatedVideo2" :pSetup="1" @asyncDataFinsh="asyncDataFinsh"
                        @synchronizeTabData="synchronizeTabData" @toggleSelectionNotify="toggleSelectionNotify"
                        ref="refSetupRelate">
                        <template #setupTip>
                            <div>
                                勾选下方视频，选择当前CP页展示的相关视频，最多关联10个视频。
                            </div>
                        </template>
                    </setupRelateContent>
                </el-tab-pane>
                <el-tab-pane label="库" name="articleLib">
                    <setupRelateContent :currentEdit="currentEdit" :chooseProduct="relatedVideo"
                        :f_pageCurrent="f_pageCurrent" :pSetup="2" @asyncDataFinsh="asyncDataFinsh"
                        @synchronizeTabData="synchronizeTabData" @toggleSelectionNotify="toggleSelectionNotify"
                        ref="refSetupRelate2">
                        <template #setupTip>
                            <div>
                                勾选下方视频，选择当前CP页展示的相关视频，最多关联10个视频。
                            </div>
                        </template>
                    </setupRelateContent>
                </el-tab-pane>
            </el-tabs>
            <template #footer>
                <div class="footer">
                    <div class="f-pagination">
                        <el-pagination :page-size="pageSize" :pager-count="5" layout="prev, pager, next"
                            :total="f_totalContet"
                            @current-change="(val) => currentChange(val, videoCurrent == 'website' ? 1 : 2)"
                            :hide-on-single-page="true" />
                    </div>
                    <span class="dialog-footer">
                        <el-button @click="handlerCalc">取消</el-button>
                        <el-button type="primary" @click="handlerSetUpOk">确定</el-button>
                    </span>
                </div>
            </template>
        </el-dialog>

        <!-- 设置相关评论 -->
        <el-dialog v-model="isShowComment" title="设置相关评论" :before-close="handlerCloseDialog" :destroy-on-close="true"
            width="800px">
            <setupRelateContent :currentEdit="currentEdit" :f_pageCurrent="f_pageCurrent"
                :chooseProduct="relatedComment" @asyncDataFinsh="asyncDataFinsh" ref="refSetupRelate">
                <template #setupTip>
                    <div>
                        勾选下方评论内容，评论人随机从库里选择，最多关联10条评论。
                    </div>
                </template>
            </setupRelateContent>
            <template #footer>
                <div class="footer">
                    <div class="f-pagination">
                        <el-pagination :page-size="pageSize" :pager-count="5" layout="prev, pager, next"
                            :total="f_totalContet" @current-change="currentChange" :hide-on-single-page="true" />
                    </div>
                    <span class="dialog-footer">
                        <el-button @click="handlerCalc">取消</el-button>
                        <el-button type="primary" @click="handlerSetUpOk">确定</el-button>
                    </span>
                </div>
            </template>
        </el-dialog>

        <!-- 设置相关关键词 -->
        <el-dialog v-model="isShowKeyword" title="设置相关关键词" :before-close="handlerCloseDialog" :destroy-on-close="true"
            width="800px">
            <setupRelateContent :currentEdit="currentEdit" :f_pageCurrent="f_pageCurrent"
                :chooseProduct="relatedkeywords" @asyncDataFinsh="asyncDataFinsh" :limitNum="20" ref="refSetupRelate">
                <template #setupTip>
                    <div>
                        勾选下方关键词，选择当前CP页展示的相关关键词，仅展示已生成CP页的关键词，最多关联20个关键词。
                    </div>
                </template>
            </setupRelateContent>
            <template #footer>
                <div class="footer">
                    <div class="f-pagination">
                        <el-pagination :page-size="pageSize" :pager-count="5" layout="prev, pager, next"
                            :total="f_totalContet" @current-change="currentChange" :hide-on-single-page="true" />
                    </div>
                    <span class="dialog-footer">
                        <el-button @click="handlerCalc">取消</el-button>
                        <el-button type="primary" @click="handlerSetUpOk">确定</el-button>
                    </span>
                </div>
            </template>
        </el-dialog>

    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from "vue-router";
import PageTitle from '@/components/PageTitle'
import setupRelateContent from './child/setupRelateContent'
import footerDilog from './child/footerDilog'
import usePageInfo from "./child/usePageInfo"
import usePageDialog from "./child/usePageDialog"

import banner from "./editorItem/banner"
import pageDesc from "./editorItem/pageDesc"
import pageTitle from "./editorItem/pageTitle"
import relateProd from "./editorItem/relateProd"
import randomProd from "./editorItem/randomProd"
import relateArticle from "./editorItem/relateArticle"
import relateVideo from "./editorItem/relateVideo"
import relateComment from "./editorItem/relateComment"
import relateKeyword from "./editorItem/relateKeyword"
import cpform from "./editorItem/form"
// api
import { getPageInfo, setSaveInfo, } from "@/api/manger/cpEditApi"

let router = useRouter();

let refSetupRelate = ref(null);
let refSetupRelate2 = ref(null);

let { currentEdit,
    bannerUrl,
    titleContent,
    rateval,
    relatedProducts,
    randomProducts,
    relatedArticle,
    relatedArticle2,
    relatedVideo,
    relatedVideo2,
    relatedComment,
    relatedkeywords,
    formArrActive,
    formArr
} = usePageInfo();

let {
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
    handlerOkDialog } = usePageDialog(currentEdit, refSetupRelate, refSetupRelate2, relatedProducts, randomProducts,
        relatedArticle,
        relatedArticle2,
        relatedVideo,
        relatedVideo2,
        relatedComment,
        relatedkeywords);

let handlerCalc = () => {
    handlerCloseDialog();
}
let handlerSetUpOk = () => {
    handlerOkDialog();
}

let asyncDataFinsh = ({ pageCurrent, totalContet }) => {
    f_pageCurrent.value = pageCurrent.value;
    f_totalContet.value = totalContet.value;
}

//文章\视频弹窗 tab数据同步
let synchronizeTabData = () => {
    let refObj2 = refSetupRelate2.value.handlerExportFooter();
    let refObj1 = refSetupRelate.value.handlerExportFooter();
    let newArr = [...refObj2.multipleSelection.value, ...refObj1.multipleSelection.value]

    refSetupRelate2.value.setTwoTabsData(newArr);
    refSetupRelate.value.setTwoTabsData(newArr);
}

let toggleSelectionNotify = (prodItem) => {
    refSetupRelate2.value.towTabstoggleSelection(prodItem);
    refSetupRelate.value.towTabstoggleSelection(prodItem);
}

onMounted(() => {
    handlerGetPageInfo();
})

let encodeId = ref(null);
let supportSetting = ref([]);
let pageContent = ref([]);

let isHasCpt = (item, key) => {
    let arr = Object.keys(item)
    return arr.includes(key);
}

let handlerGetPageInfo = () => {
    let hashArr = location.hash.split("encodeId=");
    if (hashArr && hashArr[1]) {
        let params = {
            infoId: hashArr[1]
        }
        getPageInfo(params).then(res => {
            if (res != 'error') {
                encodeId.value = res.encodeId;
                supportSetting.value = res.supportSetting;
                pageContent.value = res.pageContent && JSON.parse(res.pageContent) || [];
                // debugger;
                formArrActive.value = res.defaultForm;
                formArr.value = res.formList;
                // debugger;
            }
        })
    }

}

let getIsShow = (istype) => {
    return supportSetting.value.includes(istype);
}

let handlerSavePage = () => {
    handlerSaveFun();
}

let handlerGoBack = () => {
    router.go(-1);
}

let filterPhotoUrl = (pageContent) => {
    return pageContent.map(pItem => {
        if (pItem.banner) {
            let bannerArr = pItem.banner.map(bItem => {
                if (bItem?.response?.data) {
                    return bItem.response.data
                } else {
                    return bItem
                }
            })
            return { banner: bannerArr }
        }
        return pItem;
    })
}


let handlerSaveFun = () => {
    let newArr = filterPhotoUrl(pageContent.value);
    let params = {
        encodeId: encodeId.value,
        pageContent: JSON.stringify(newArr)
    }
    setSaveInfo(params).then(res => {
        if (res != 'error') {
            ElMessage.success('操作成功');
            router.go(-1);
        }
    })
}

</script>

<style lang="scss">
.cp-Edit-container {
    .edit-container {
        background: #ffffff;
        border-radius: 4px;
        padding: 24px;

        height: calc(100vh - 232px);
        overflow-x: hidden;

        .edit-item {
            margin-bottom: 32px;

            .edit-content {
                font-size: 13px;
            }

            .el-upload {
                font-size: 13px;
            }

            .el-button>span {
                font-size: 13px;
            }
        }

        .edit-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 12px;
        }

        .edit-titel {
            color: #343a56;
            font-weight: 600;
            font-size: 14px;
        }

        .prod-board {
            background: #f2f5fc;
            border-radius: 6px;
        }

        .prod-board {
            max-height: 350px;
            overflow-x: hidden;

            .prod-board-item {
                padding: 16px 0px;
                margin: 0 16px;
                border-bottom: 1px solid #d6ddef;

                .comment-data {
                    display: flex;
                    justify-content: space-between;
                }
            }

            .prod-board-item:last-child {
                border-bottom: 0px;
            }
        }

        .prod-keyword-item {
            display: inline-block;
            padding: 11px 24px;

            color: #343a56;
            font-weight: 400;
            background: #f2f5fc;
            border-radius: 6px;

            margin-right: 8px;
            margin-bottom: 8px;
        }

    }



    .footer {
        display: flex;
        justify-content: space-between;
    }
}

.cp-Edit-container {
    .el-dialog__body {
        padding: 20px 20px;
        font-size: 13px;
    }

    .el-pagination .el-icon {
        font-size: 22px;
        font-weight: bold;
    }

    .el-pager li {
        font-size: 14px;
        font-weight: 400;
    }

    .twoDialog {
        .el-dialog__body {
            padding: 10px 20px;
        }
    }
}
</style>