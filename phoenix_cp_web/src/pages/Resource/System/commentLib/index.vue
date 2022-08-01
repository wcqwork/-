<template>
    <div>
        <!-- 顶部 -->
        <div class="flex-j-s-b" style="margin-bottom: 15px;">
            <el-row class="flex-a-center">
                <strong class="company-title">评论库</strong>
            </el-row>
            <el-row>
                <el-button v-if="activeTabName == 'comment'" type="primary" :icon="Plus"
                    @click="handleraddPageDesc">
                    添加评论内容</el-button>
                <el-button v-else type="primary" :icon="Plus" @click="handlerComentator">添加评论人</el-button>
            </el-row>
        </div>
        <!-- 表格 -->
        <div class="intelligenceTable">
            <el-tabs v-model="activeTabName" class="demo-tabs" @tab-click="handleTabsClick(handlerTabSwitch)"> 
                <el-tab-pane label="评论库" name="comment">
                   <comment ref="commentTem"></comment>
                </el-tab-pane>
                <el-tab-pane label="评论人库" name="commentator">
                    <commentator ref="commentatorTem"></commentator>
                </el-tab-pane>
            </el-tabs>
        </div>
    </div>
</template>

<script setup>
import {
    ref
} from 'vue';
// import { useRouter } from "vue-router";
import { Plus } from '@element-plus/icons-vue'
import useTabs from './child/useTabs'
import comment from "./comment"
import commentator from "./commentator"

let {
    activeTabName,
    handleTabsClick
} = useTabs();


// let router = useRouter();

let commentTem = ref(null);
let commentatorTem = ref(null);

// tabs切换
let handlerTabSwitch = (activeTabName) => {
    console.log(activeTabName);
}

let handleraddPageDesc = () => {
    commentTem.value.handlerExport();
}

let handlerComentator = () => {
     commentatorTem.value.handlerExport();
}

</script>

<style lang="scss" scoped>
.company-title {
    font-size: 18px;
    margin-right: 10px;
}

.company-out {
    color: $df-blue;
    font-size: 14px;
    cursor: pointer;
}

.total-c {
    margin-left: 10px;
    font-size: 14px;

    .companyNum {
        color: $df-blue;
        margin-left: 10px;
        font-size: 16px;
        font-weight: 600;
    }
}

.tips {
    height: 32px;
    border-radius: 4px;
    font-size: 14px;
    color: $df-blue;
    line-height: 32px;
    margin-bottom: 15px;
    padding-left: 16px;
    position: relative;

    background: #ffeed9;
    border: 1px solid #ff8d00;
    color: #ff8d00;

    display: flex;
    align-items: center;

    span {
        position: absolute;
        right: 10px;
        cursor: pointer;
        display: inline-flex;
        top: 13px;
    }
}

.seticon {
    margin-right: 5px;
}

.r-serch {
    flex-wrap: inherit;

    :deep(.el-input__inner) {
        width: 280px;
        height: 32px;
        background: #ffffff;
        border-radius: 4px;
        padding-left: 30px;
    }

    :deep(.el-input__inner::-webkit-input-placeholder) {
        font-size: 12px;
    }
}

.t-set {
    margin-bottom: 15px;
}

.selectWebsite {

    // color: $df_blue;
    :deep(.web-site-box) {
        top: 30px;
    }
}

.el-select-dropdown__item.hover.selectWeb,
.el-select-dropdown__item.selectWeb:hover {
    background-color: #e7efff;
}

.el-select-dropdown__item.selected.selectWeb {
    position: relative;
}

.el-select-dropdown__item.selected.selectWeb::before {
    content: "✓";
    position: absolute;
    left: 5px;
    font-size: 12px;
}

.segmentation {
    line-height: 32px;
    color: #d8dbe6;
    margin: 0 10px;
}

.icon-daochu {
    margin-right: 5px;
    margin-left: 5px;
}

.intelligenceTable {
    background: #fff;
    padding: 20px;

    :deep(.el-table__header-wrapper .HeadTh) {
        height: 45px;
        background-color: #f2f5fc;
        color: #333333;
    }

    :deep(.el-tabs__item) {
        padding: 0 !important;
    }

    :deep(.el-tabs__item::before) {
        content: '';
        width: 1px;
        margin-left: 35px;
        display: inline-block;
    }

    :deep(.el-tabs__item::after) {
        content: "";
        width: 1px;
        margin-left: 35px;
        height: 12px;
        background: #92a0bd;
        display: inline-block;
    }

    :deep(.el-tabs__item:last-child::after) {
        width: 0px;
    }
}

:deep(.el-breadcrumb) {
    display: none;
}

.godetail {
    cursor: pointer;
    display: flex;
    align-items: center;
}

.godetail:hover {
    span {
        color: $df_blue;
    }
}

.company-b {
    border: 1px solid #c3cbdd;
    border-radius: 2px;
    width: 40px;
    height: 40px;
    position: relative;

    .circle {
        width: 8px;
        height: 8px;
        background: #ff4642;
        border: 1px solid #e9edf7;
        border-radius: 50%;
        position: absolute;
        right: -5px;
        top: -4px;
    }
}

.companyImg {
    width: 40px;
    height: 40px;

    border-radius: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: bold;
    position: relative;
    box-sizing: border-box;
    flex-shrink: 0;
}

.homePage {
    margin-right: 5px;

    .twitter {
        position: relative;
        top: 1px;
    }
}

.homePage:hover {
    svg {
        color: #008cff !important;
    }
}

.cursor-c {
    cursor: pointer;

    :hover {
        color: $df-blue;
    }
}

.cursor-c:hover {
    color: $df-blue;
}

.icon-yiguanzhu {
    color: #ff4642 !important;
}

:deep(.el-table) .indexTable .cell {
    overflow: initial;
}

.pagelink {
    color: #343a56;
    font-size: 12px;
}
</style>

<style lang="scss" scoped>
.stateChoose {
    margin-right: 12px;
}

.searchval {
    margin-right: 12px;
    position: relative;

    .icon-sousuo {
        position: absolute;
        z-index: 1;
        color: #5f6884;
        font-size: 12px;
        left: 8px;
        top: 10px;
    }

    .searchBox {
        background: #ffffff;
        border-radius: 4px;
        box-shadow: 0px 0px 12px 0px rgba(87, 107, 137, 0.2);
        position: absolute;
        top: 32px;
        width: 100%;
        z-index: 9;
        padding: 15px 10px;
        box-sizing: border-box;
    }

    .searchTips {
        display: flex;
        flex-wrap: wrap;
    }

    .searchBox {
        .history-title {
            font-size: 14px;
            color: #333333;
            margin-bottom: 10px;

            i {
                font-size: 14px;
                color: #848ba4;
                margin-right: 5px;
            }

            .icon-shanchu2 {
                float: right;
                font-weight: bold;
                cursor: pointer;
            }
        }

        .history-item {
            font-size: 12px;
            color: #008cff;
            background: #e7efff;
            border-radius: 4px;
            padding: 5px 8px;
            margin-right: 5px;
            margin-bottom: 5px;
            cursor: pointer;
        }
    }
}

.nodata {
    font-size: 12px;
    color: #bebebe;
}


.activitystateIcon {
    width: 90px;
    height: 28px;
    font-size: 12px;
    line-height: 12px;
    border-radius: 16px;

    display: flex;
    align-items: center;
}

.operate_item {
    margin-right: 20px;
}

.operate_item:last-child {
    margin-right: 0px;
}


.addpage-item {
    margin-bottom: 24px;

    .addpage-title {
        font-size: 14px;
        font-weight: 600;
        color: #343a56;
        margin-bottom: 12px;

        .f-title {
            font-size: 12px;
            font-weight: 400;
            color: #515a75;

            margin-top: 4px;
        }
    }

    .f-title {
        font-size: 12px;
        font-weight: 400;
        color: #515a75;
    }

    :deep(.el-radio__label) {
        font-size: 14px;
        font-weight: 500;
        color: #343a56;
    }

    .industryList {
        margin-top: 4px;
    }

    .industry-list-item {
        display: inline-block;
        padding: 7px 24px;
        background: #f2f5fc;
        border-radius: 4px;

        margin-right: 8px;
        margin-top: 8px;
    }
}

.addpage-cont {
    padding-bottom: 12px;
    // border-bottom: 1px solid #d8dbe6;

    display: flex;
    align-items: center;
}

.addpage-item:last-child {
    margin-bottom: 0px;
}

:deep(.addPageDescVisible .el-dialog__body) {
    min-height: 320px;
}
</style>

<style>
.r-serch .stateChoose div .el-input__inner {
    width: 104px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>