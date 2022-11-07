<template>
    <div class="main cp-setup-container">
        <PageTitle>
            <template #title>
                CP页设置
                <span class="setTip">修改设置后，将会在下次生成页面时生效</span>
            </template>
        </PageTitle>
        <div class="setup-container scrollbar">
            <div class="setup-item">
                <div class="item-title">
                    页面模板
                </div>
                <div class="f-item-titel">
                    选择模板
                </div>
                <div class="item-content chooseTemplateCon">
                    <div class="currentChooseTemplate" v-if="componentId">
                        <img :src="templateUrl" alt="">
                        <span class="zhezhao" @click="removeCptId">
                            <i class="el-icon el-icon--delete"><svg viewBox="0 0 1024 1024"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="currentColor"
                                        d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32V256zm448-64v-64H416v64h192zM224 896h576V256H224v640zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32zm192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32z">
                                    </path>
                                </svg></i>
                        </span>
                    </div>
                    <div class="addChoose" @click="AddchooseTemplate" v-else>
                        <svg-icon name="添加_选择" className="添加_选择" size="20"></svg-icon>
                        <div class="chooseName">选择</div>
                    </div>
                </div>
            </div>
            <div v-for="(item, index) in settingValue">
                <banner v-if="isHasCpt(item, 'banner')" :cptObj="item"></banner>
                <pageDesc v-if="isHasCpt(item, 'pageDesc')" :cptObj="item"></pageDesc>
                <relateProd v-if="isHasCpt(item, 'relateProd')" :cptObj="item"></relateProd>
                <randomProd v-if="isHasCpt(item, 'randomProd')" :cptObj="item"></randomProd>
                <relateArticle v-if="isHasCpt(item, 'relateArticle')" :cptObj="item"></relateArticle>
                <relateVideo v-if="isHasCpt(item, 'relateVideo')" :cptObj="item"></relateVideo>
                <relateComment v-if="isHasCpt(item, 'relateComment')" :cptObj="item"></relateComment>
                <relateKeyword v-if="isHasCpt(item, 'relateKeyword')" :cptObj="item"></relateKeyword>
                <cpform v-if="isHasCpt(item, 'form')" :cptObj="item" :formArr="formArr"></cpform>
            </div>
        </div>

        <div class="pageBottom">
            <el-button type="primary" @click="handlerSaveSetting">保存</el-button>
        </div>

        <!-- 选择模板 -->
        <el-dialog v-model="chooseTemplateVisible" custom-class="chooseTemplateVisible" title="选择模板" width="1072px"
            :before-close="handlerChooseTemCalc">
            <div class="chooseTemplateAll">
                <Waterfallsflow @testhandlerChooseTemp="testhandlerChooseTemp"></Waterfallsflow>
            </div>
        </el-dialog>


        <!-- 发布提醒 -->
        <el-dialog v-model="pushTipVisible" title="发布提醒" width="460px" :before-close="pushTipCalc">
            <div class="pushTipTile">
                检测到您修改了页面模版！
            </div>
            <div class="f-push-title">
                请前往网站编辑后台进行整站发布，否则新模版无法生效
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="pushTipCalc">取消</el-button>
                    <el-button type="primary" @click="pushTipOk">确认</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import PageTitle from '@/components/PageTitle'
import IndustryDialog from "@/components/IndustryDialog"
import Waterfallsflow from "@/components/Waterfallsflow"
import { Plus } from '@element-plus/icons-vue'
import { UploadProps, UploadUserFile } from 'element-plus'
import useUpload from '@/composables/Upload'
import useChooseTemplate from './child/useChooseTemplate.js'
import useSetting from './child/useSetting.js'
// 子组件
import banner from "./setupItem/banner"
import pageDesc from "./setupItem/pageDesc"
import relateProd from "./setupItem/relateProd"
import randomProd from "./setupItem/randomProd"
import relateArticle from "./setupItem/relateArticle"
import relateVideo from "./setupItem/relateVideo"
import relateComment from "./setupItem/relateComment"
import relateKeyword from "./setupItem/relateKeyword"
import cpform from "./setupItem/form"


// api
import { getSetting, setUpload, saveSetting, getComponentSetting, getCommentList } from "@/api/manger/setupApi"

let { fileList,
    dialogImageUrl,
    istrueVisible,
    handleRemove,
    handlePictureCardPreview } = useUpload();

let { activeTemlate,
    handlerChooseTemp,
    chooseTemplateVisible,
    chooseTemplateList,
    handlerChooseTemCalc } = useChooseTemplate();

let {
    formArrActive,
    formArr } = useSetting();

let bannerRef = ref(null);

let isHasCpt = (item, key) => {
    let arr = Object.keys(item)
    return arr.includes(key);
}

let testhandlerChooseTemp = (encodeId) => {
    handlerChooseTemp(encodeId, handlerGetComponentSetting);
}



let getIsShow = (istype) => {
    return supportSetting.value.includes(istype);
}

let industryDialog1 = ref(null);
let industryDialog2 = ref(null);

let componentId = ref(null);
let supportSetting = ref([]);
let settingValue = ref([]);
let templateUrl = ref([]);

let handlerGetSetting = () => {
    let params = {
    }
    getSetting(params).then(res => {
        if (res != 'error') {
            initTemplateData(res);
        }
    })
}

let initTemplateData = (res) => {
    componentId.value = res.componentId;
    supportSetting.value = res.supportSetting;
    settingValue.value = JSON.parse(res.settingValue) || [];
    formArr.value = res.formList;
    formArrActive.value = res.defaultForm;
    templateUrl.value = res.url || ''
}

let filterPhotoUrl = (pageContent) => {
    return pageContent.map(pItem => {
        if (pItem.banner) {
            let bannerArr = pItem.banner.pic.map(bItem => {
                if (bItem?.response?.data) {
                    return bItem.response.data
                } else {
                    return bItem
                }
            })
            return { banner: { pic: bannerArr, prop: "banner" } }
        }
        return pItem;
    })
}

let handlerSaveSetting = () => {
    // debugger
    let newArr = filterPhotoUrl(settingValue.value);
    console.log(newArr);
    // debugger
    // debugger;
    // let industry1 = industryDialog1.value.getChooseIndustry();
    // let industry2 = industryDialog2.value.getChooseIndustry();

    // settingValue.value.pageDesc.industry = industry1;
    // settingValue.value.relateComment.industry = industry2;
    // // 
    let params = {
        encodeComponentId: componentId.value,
        pageRule: JSON.stringify(newArr)
    }
    saveSetting(params).then(res => {
        if (res != 'error') {
            ElMessage.success('操作成功');
        }
    })
}

let handlerGetComponentSetting = (params) => {
    getComponentSetting(params).then(res => {
        if (res != 'error') {
            initTemplateData(res);
            // ElMessage.success('操作成功');
        }
    })
}

let handlerGetCommentList = () => {
    getCommentList().then(res => {
        if (res != 'error') {
            chooseTemplateList.value = res;
        }

        // chooseTemplateList.value = [
        //     {
        //         "encodeId": "WifApKUfKnPQ",
        //         "appName": "ceshi1",
        //         "previewUrl": "http://a111.leadongcdn.cn:6540/cloud/lkBqmKmiSRmkmrjlqnk/moban.png"
        //     },
        //     {
        //         "encodeId": "WifApKUfKnPQ",
        //         "appName": "ceshi1",
        //         "previewUrl": "http://a111.leadongcdn.cn:6540/cloud/ljBqmKmiSRmkmrjlonk/mb.png"
        //     },{
        //         "encodeId": "WifApKUfKnPQ",
        //         "appName": "ceshi1",
        //         "previewUrl": "http://a111.leadongcdn.cn:6540/cloud/lkBqmKmiSRmkmrjlqnk/moban.png"
        //     },
        //     {
        //         "encodeId": "WifApKUfKnPQ",
        //         "appName": "ceshi1",
        //         "previewUrl": "http://a111.leadongcdn.cn:6540/cloud/ljBqmKmiSRmkmrjlonk/mb.png"
        //     },
        // ];
    })
}


onMounted(() => {
    handlerGetSetting();
})


let removeCptId = () => {
    componentId.value = "";
}
// dialog

let AddchooseTemplate = () => {
    chooseTemplateVisible.value = true;

    handlerGetCommentList();
}

let pushTipVisible = ref(false);

let pushTipCalc = () => {
    pushTipVisible.value = false;
}

let pushTipOk = () => {
    pushTipCalc();
}
</script>

<style lang="scss">
.cp-setup-container {
    .setTip {
        margin-left: 8px;
        font-size: 12px;
        font-weight: 400;
        color: #515a75;
    }

    .setup-container {
        background: #ffffff;
        padding: 24px;
        border-radius: 4px;

        height: calc(100vh - 232px);
        overflow-x: hidden;

        .el-upload-list--picture-card .el-upload-list__item {
            width: 156px;
            height: 96px;
        }

        .el-upload--picture-card {
            width: 156px;
            height: 96px;
        }

        .el-upload-list__item-preview {
            display: none !important;
        }

        .el-upload-list__item-delete {
            margin-right: 15px;
        }

        .el-upload {
            display: flex;
            align-items: center;
            flex-direction: column;

            font-size: 12px;
            font-weight: 400;
            color: #4a4a4a;
        }

        .el-upload-list__item-status-label {
            display: none;
        }

        .setup-item {
            padding-top: 28px;
            padding-bottom: 28px;
            border-bottom: 1px solid #e9edf7;

            .item-content {
                .three-content {
                    margin-top: 24px;
                    margin-bottom: 12px;

                    .three-title {
                        font-size: 14px;
                        font-weight: 600;
                        color: #343a56;
                    }
                }
            }

            .item-title {
                font-size: 18px;
                font-weight: 600;
                color: #333333;

                margin-bottom: 24px;
            }

            .f-item-titel {
                font-size: 14px;
                font-weight: 600;
                color: #343a56;
                margin-bottom: 12px;



                .three-title {
                    font-size: 12px;
                    font-weight: 400;
                    color: #515a75;

                    margin-top: 4px;
                    margin-bottom: 14px;
                }
            }

            .relateTotal {
                width: 111px;
                height: 32px;
                position: relative;

                margin-right: 8px;

                display: inline-block;

                .rela-tiao {
                    position: absolute;
                    right: 10px;
                    top: 28%;

                    font-size: 14px;
                    font-weight: 400;
                    color: #343a56;
                }

                :deep(.el-input__inner) {
                    padding-right: 28px;
                }
            }

            .f-item-content {
                margin-top: 12px;
            }

            .fourth-content {
                display: flex;
                margin-top: 12px;
                align-items: baseline;


                font-size: 14px;
                font-weight: 500;
                color: #343a56;

                .item-desc {
                    margin: 0 8px;
                }

                .f-checkbox {
                    margin-right: 8px;
                }

                :deep(.el-select .el-input__inner) {
                    width: 57px;
                    height: 32px;
                    padding: 0 8px;
                }
            }

            .f-tip {
                font-size: 12px;
                font-weight: 400;
                color: #515a75;
            }

            .f-three-title {
                font-size: 12px;
                font-weight: 400;
                color: #515a75;

                margin-top: 4px;
            }

            .industry-item {
                display: inline-block;
                background: #f2f5fc;
                border-radius: 4px;

                padding: 7px 24px;
                margin-right: 8px;

                font-size: 14px;
                font-weight: 400;
                color: #343a56;
            }

            .chooseIndustry {
                display: inline-block;
                padding: 7px 24px;
                border: 1px solid #008cff;
                border-radius: 4px;

                font-size: 14px;
                font-weight: 500;
                color: #008cff;

                cursor: pointer;
            }
        }

        &>.setup-item {
            padding-top: 0;
        }

        .addChoose,
        .currentChooseTemplate {
            width: 120px;
            height: 160px;
            background: #ffffff;
            border: 2px dashed #d8dbe6;
            border-radius: 4px;

            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            .chooseName {
                margin-top: 11px;
                font-size: 12px;
                font-weight: 400;
                color: #4a4a4a;
            }
        }


    }

    .industryFotter {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .Industry-checkbox-item {
        .el-checkbox {
            display: block;
            border-bottom: 1px solid;
            border-color: #e9edf7;
            height: auto;
            padding: 14px;
        }

        .el-checkbox:last-child {
            border-bottom: 0px;
        }

        .el-checkbox__label {
            padding-left: 12px;
        }

    }

    .industryVisible .el-dialog__body {
        padding: 10px 20px;
    }

    .chooseTemplateVisible .el-dialog__header {
        background: #393D41;
        margin: 0;
    }

    .chooseTemplateVisible .el-dialog__title {
        color: #ffffff;
        font-size: 18px;
        font-weight: 600;
    }

    .chooseTemplateVisible .el-dialog__headerbtn {
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAklJREFUWEftlj9oE3EUx7/vl1ihxT9DHbp06SKWLhV0ECGIIIIIIgRNjLhlFqoGJXjmTEkuQV0ziJBLk/bAwUUHlwwuLi6im4uLgy4V2qG5uye/0IMil9zv96tah2Y83nvfD9/fey+PsMc/2mN97AP8nw7YDTeDEJlUirz7Szc+76ZPlpudE0HAWQj0y3cK/d9rxTpg112LBD0E0ScBzppCSPEQ5IF5nkN+VL5XsJQAdiaaQqjWGNkDqgXinkcnd2wT6hSKQHRzEqdAp6BObAScCCADVQqrxMQ9lxJAEoSpuKyrDDAKQn6PRs1kYrQA4iCGtjLPm4hrOxDb6cMq5gtL2wGpV3nSWRABPADHh1D/EqDquItMwgN4DoyPEPIJsGAKoeXAcqN3OkDgETAL4IMgkR82IYcrABZNIJQBKo57VhCtAZgh4H3I6Xz57rUvEsB2VucIfheEU7oQSgB2o30OEGsETIPoXdoP8qXSza87F0vtWXt2MBBdAs7oQCQCVJsrF5h5FcBRAH1Kc+7B7cK3uK1WferOsE9dABlViLEAttO5RAQpPgWmt76gnLWU+zHuQLGa3ek0hz0A51UgRgI8bnSuAEPxCYBfp4ODuVIpu65yHdVq3hE/tSUhLiZBxAJs2/5me1W/8jc2cpZV3FQRj2KsVmsytT7VI8LlcRCxABWnfUuQeAHwy2OHN68Xi8WBjngU22q1Dnz/OdkD6KrWSVavPz+0JSZOxh2RJiDyxoy7B43/C0wgRuUkjuGfFNvVQfK3QPYd+AV0wGYwcT00AwAAAABJRU5ErkJggg==) left no-repeat !important;
        background-size: 26px !important;
    }


    .pushTipTile {
        font-size: 16px;
        font-weight: 600;
        color: #343a56;
    }

    .f-push-title {
        font-size: 14px;
        font-weight: 400;
        color: #343a56;

        margin-top: 3px;

    }

    .chooseTemplateItem {
        width: calc(100% / 3 - 10px);
        position: relative;
        border-radius: 6px 6px 0px 0px;

        margin-bottom: 20px;

        .chooseBtn {
            display: none;
            align-items: center;
            padding: 14.3px 17.18px;

            position: absolute;
        }

        img {
            max-width: 100%;
            min-height: 562px;
            object-fit: contain;
        }

        .chooseTempBtn {
            width: 105px;
            height: 40px;
            background: #008cff;
            border-radius: 4px;

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 14px;
            font-weight: 400;
            color: #ffffff;


            cursor: pointer;
        }

        .chooseTempView {
            display: inline-block;
            width: 40px;
            height: 40px;
            background: #ffffff;
            border-radius: 4px;

            display: flex;
            justify-content: center;
            align-items: center;

            margin-left: 10px;
            cursor: pointer;
        }
    }

    // .chooseTemplateItem.active {
    //     border: 1px solid #ccc;
    // }

    .chooseTemplateItem:hover::before {
        content: "";
        width: 100%;
        height: calc(100% - 5px);
        position: absolute;
        display: inline-block;
        background-color: rgba($color: #000000, $alpha: 0.6);
    }

    .chooseTemplateItem:hover {
        .chooseBtn {
            display: flex;
        }
    }

    .tip-f-checkbox {
        font-size: 14px;
        font-weight: 400;
        color: #343a56;
    }

    .tip-f-checkbox-tip {
        font-size: 12px;
        font-weight: 400;
        color: #515a75;

        margin-top: 4px;
    }

    .chooseTemplateVisible .el-dialog__body {
        max-height: 580px;
        overflow-x: hidden;
        padding: 15px;
    }

    // .chooseTemplateAll {
    //     display: flex;
    //     flex-wrap: wrap;
    //     justify-content: space-between;

    // }

    // .chooseTemplateAll::after {
    //     content: '';
    //     width: calc(33.3333333333% - 10px);
    // }

    .chooseTemplateCon {
        display: flex;

        div+div {
            margin-left: 10px;
        }
    }

    .currentChooseTemplate {
        position: relative;
        background-color: #fff !important;
        border: 1px solid #c0ccda !important;
        border-radius: 6px !important;
        box-sizing: border-box;

        .zhezhao {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            cursor: default;
            display: inline-flex;
            justify-content: center;
            align-items: center;
            color: #fff;
            opacity: 0;
            font-size: 20px;
            background-color: rgba(0, 0, 0, .5);
        }

        &:hover .zhezhao {
            opacity: 1;
            cursor: pointer;
        }

        img {
            width: 100%;
            max-width: 100%;
            max-height: 100%;
            height: auto;
            object-fit: contain;
        }
    }
}
</style>


