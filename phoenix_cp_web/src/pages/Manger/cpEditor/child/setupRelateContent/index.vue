<template>
    <div class="setupContent" :class="isShowFlag ? 'isDisableCheckAll' : ''">
        <!-- 提示 -->
        <div class="setupTip setupContent-item">
            <slot name="setupTip"></slot>
        </div>
        <!-- 筛选表单 -->
        <div class="Setupfilter r-serch setupContent-item">
            <div class="searchval" style="margin-right:8px;"
                v-if="currentEdit == 'relateProduct' || currentEdit == 'radomProduct' || (currentEdit == 'relateArticle' && pSetup == 1) || (currentEdit == 'relateVideo' && pSetup == 1)">
                <el-cascader v-model="chooseEncodeGroupId" :options="chooseArr" :props="props1" clearable
                    placeholder="全部分类" />
            </div>
            <div class="searchval" style="width:100%;">
                <i class="iconfont icon-sousuo"></i>
                <el-input v-model="prodName" :placeholder="getCopuutendTname()" clearable />
            </div>
            <el-row class="r-serch">
                <el-button type="primary" @click="searchBtn(getList('', pSetup))" style="margin-left: 8px;">搜索
                </el-button>
                <el-button @click="resetInput(getList('', pSetup))">重置</el-button>
            </el-row>
        </div>
        <!-- 表格 -->
        <div class="chooseTable">
            <div class="left-content">
                <el-table ref="multipleTableRef" :data="tableListArr" row-key="encodeId" height="485"
                    style="width: 100%" v-if="currentEdit == 'relateProduct'"
                    @selection-change="handleSelectionChange">
                    <el-table-column reserve-selection type="selection" width="30" :selectable="handlerIsCheck" />
                    <el-table-column label="产品" width="350">
                        <template #header>
                            <div class="hederStyle" v-if="isShowFlag">
                                <el-checkbox size="large" disabled />
                                <label>产品</label>
                            </div>
                            <div v-else>
                                <label>产品</label>
                            </div>
                        </template>
                        <template #default="scope">
                            <div class="table-item">
                                <img :src="scope.row.prodImgUrl" />
                                <span>{{ scope.row.prodName }}</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-table ref="multipleTableRef" :data="tableListArr" row-key="encodeId" height="485"
                    style="width: 100%" v-if="currentEdit == 'radomProduct'"
                    @selection-change="handleSelectionChange">
                    <el-table-column reserve-selection type="selection" width="30" :selectable="handlerIsCheck20" />
                    <el-table-column label="产品" width="350">
                        <template #header>
                            <div class="hederStyle" v-if="isShowFlag">
                                <el-checkbox size="large" disabled />
                                <label>产品</label>
                            </div>
                            <div v-else>
                                <label>产品</label>
                            </div>
                        </template>
                        <template #default="scope">
                            <div class="table-item">
                                <img :src="scope.row.prodImgUrl" />
                                <span>{{ scope.row.prodName }}</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-table ref="multipleTableRef" :data="tableListArr" row-key="encodeId" height="485"
                    style="width: 100%" v-if="currentEdit == 'relateArticle'" @selection-change="handleSelectionChange">
                    <el-table-column reserve-selection type="selection" width="30" :selectable="handlerTwoTabsCheck" />
                    <el-table-column label="文章" width="350">
                        <template #header>
                            <div class="hederStyle" v-if="isShowFlag">
                                <el-checkbox size="large" disabled />
                                <label>文章</label>
                            </div>
                            <div v-else>
                                <label>文章</label>
                            </div>
                        </template>
                        <template #default="scope">
                            <div class="table-item">
                                <span>{{ scope.row.articleTitle }}</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-table ref="multipleTableRef" :data="tableListArr" row-key="encodeId" height="485"
                    style="width: 100%" v-if="currentEdit == 'relateVideo'" @selection-change="handleSelectionChange">
                    <el-table-column reserve-selection type="selection" width="30" :selectable="handlerTwoTabsCheck" />
                    <el-table-column label="视频" width="350">
                        <template #header>
                            <div class="hederStyle" v-if="isShowFlag">
                                <el-checkbox size="large" disabled />
                                <label>视频</label>
                            </div>
                            <div v-else>
                                <label>视频</label>
                            </div>
                        </template>
                        <template #default="scope">
                            <div class="table-item">
                                <span>{{ scope.row.videoName || scope.row.videoTitle }}</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-table ref="multipleTableRef" :data="tableListArr" row-key="encodeId" height="485"
                    style="width: 100%" v-if="currentEdit == 'relateComment'" @selection-change="handleSelectionChange">
                    <el-table-column reserve-selection type="selection" width="30" :selectable="handlerIsCheck" />
                    <el-table-column label="评论内容" width="350">
                        <template #header>
                            <div class="hederStyle" v-if="isShowFlag">
                                <el-checkbox size="large" disabled />
                                <label>评论内容</label>
                            </div>
                            <div v-else>
                                <label>评论内容</label>
                            </div>
                        </template>
                        <template #default="scope">
                            <div class="table-item">
                                <span>{{ scope.row.discussContent }}</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
                <el-table ref="multipleTableRef" :data="tableListArr" row-key="encodeId" height="485"
                    style="width: 100%" v-if="currentEdit == 'relateKeyWord'" @selection-change="handleSelectionChange">
                    <el-table-column reserve-selection type="selection" width="30" :selectable="handlerIsCheck20" />
                    <el-table-column label="关键词" width="350">
                        <template #header>
                            <div class="hederStyle" v-if="isShowFlag">
                                <el-checkbox size="large" disabled />
                                <label>关键词</label>
                            </div>
                            <div v-else>
                                <label>关键词</label>
                            </div>
                        </template>
                        <template #default="scope">
                            <div class="table-item">
                                <span>{{ scope.row.cpKeyword }}</span>
                            </div>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
            <div class="right-relate">
                <div class="realte-title">已关联{{getCouputendName()}}</div>
                <div class="choose-content" v-if="currentEdit == 'relateProduct' || currentEdit == 'radomProduct'">
                    <div class="choose-item" v-for="(item, index) in multipleSelection">
                        <div>
                            <span>{{ index + 1 }}、</span>
                            <span>{{ item.prodName }}</span>
                        </div>
                        <div @click="toggleSelection(item)">
                            <svg-icon name="closeblack" className="closeblack" size="10"></svg-icon>
                        </div>
                    </div>
                </div>
                <div class="choose-content" v-if="currentEdit == 'relateArticle'">
                    <div class="choose-item" v-for="(item, index) in twoTabsMultipCheckAll">
                        <div>
                            <span>{{ index + 1 }}、</span>
                            <span>{{ item.articleTitle }}</span>
                        </div>
                        <div @click="toggleSelection(item)">
                            <svg-icon name="closeblack" className="closeblack" size="10"></svg-icon>
                        </div>
                    </div>
                </div>
                <div class="choose-content" v-if="currentEdit == 'relateVideo'">
                    <div class="choose-item" v-for="(item, index) in twoTabsMultipCheckAll">
                        <div>
                            <span>{{ index + 1 }}、</span>
                            <span>{{ item.videoName || item.videoTitle }}</span>
                        </div>
                        <div @click="toggleSelection(item)">
                            <svg-icon name="closeblack" className="closeblack" size="10"></svg-icon>
                        </div>
                    </div>
                </div>
                <div class="choose-content" v-if="currentEdit == 'relateComment'">
                    <div class="choose-item" v-for="(item, index) in multipleSelection">
                        <div>
                            <span>{{ index + 1 }}、</span>
                            <span>{{ item.discussContent }}</span>
                        </div>
                        <div @click="toggleSelection(item)">
                            <svg-icon name="closeblack" className="closeblack" size="10"></svg-icon>
                        </div>
                    </div>
                </div>
                <div class="choose-content" v-if="currentEdit == 'relateKeyWord'">
                    <div class="choose-item" v-for="(item, index) in multipleSelection">
                        <div>
                            <span>{{ index + 1 }}、</span>
                            <span>{{ item.cpKeyword }}</span>
                        </div>
                        <div @click="toggleSelection(item)">
                            <svg-icon name="closeblack" className="closeblack" size="10"></svg-icon>
                        </div>
                    </div>
                </div>
                <!-- <slot name="rightpanel"></slot> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { prop } from 'dom7';
import {
    ref,
    defineProps,
    computed,
    watch,
    reactive,
    onActivated,
    defineExpose,
    defineEmits,
    onMounted
} from 'vue';
import useRelateContent from './child/useRelateContent'
import useSearchFilter from './child/useSearchFilter'
import useCheck from './child/useCheck'

let props = defineProps({
    currentEdit: {
        type: String,
        default: ''
    },
    f_pageCurrent: {
        type: Number,
        default: 1
    },
    pSetup: {
        type: Number,
        default: 1
    },
    chooseProduct: { //选择的数据
        type: Array,
        default: []
    },
    randomProducts: { //选择的数据  随机产品弹窗复用
        type: Array,
        default: []
    },
    limitNum: { // 限制选择的数量
        type: Number,
        default: 10
    }
})

let emit = defineEmits(['asyncDataFinsh', 'synchronizeTabData', 'toggleSelectionNotify']);

let { props1,
    chooseEncodeGroupId,
    chooseArr,
    prodName,
    searchBtn,
    resetInput } = useSearchFilter();

let twoTabsMultipCheckAll = ref([]); //相关文章 || 视频

let {
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
    towTabstoggleSelection,
    handlerTwoTabsCheck } = useRelateContent(prodName, props, chooseArr, chooseEncodeGroupId, emit, twoTabsMultipCheckAll);

let { isShowFlag } = useCheck(props,multipleSelection,twoTabsMultipCheckAll,tableListArr);

let getCouputendName = () => {
    let mapName = {
        'relateArticle':'相关文章',
        'relateVideo':'相关视频',
        'relateComment':'相关评论',
        'relateKeyWord':'相关关键词'
    }
    return mapName[props.currentEdit] || '产品';
}

let getCopuutendTname = () => {
     let mapName = {
        'relateArticle':'相关文章',
        'relateVideo':'相关视频',
        'relateComment':'相关评论',
        'relateKeyWord':'相关关键词'
    }
    let tname = mapName[props.currentEdit] || '产品'
    return '请输入'+ tname + '名称';
}

let setTwoTabsData = (newData) => {
    twoTabsMultipCheckAll.value = newData;
}

watch(() => multipleSelection.value, () => { ////文章\视频弹窗 tab数据同步
    emit('synchronizeTabData');
})

onMounted(() => {
    getList('init', props.pSetup);
})

let handlerGetCurrentRow = () => {
    return multipleTableRef.value.getSelectionRows();
}

let handlerExportFooter = () => {
    return {
        pageCurrent,
        totalContet,
        multipleSelection
    }
}

//暴露方法
defineExpose({ handlerExportFooter, getList, handlerGetCurrentRow, setTwoTabsData, towTabstoggleSelection });

</script>

<style  lang="scss" scoped>
.chooseTable {
    display: flex;

    .left-content {
        flex: 1;
        margin-right: 8px;
    }

    .right-relate {
        flex: 1;
    }

    .choose-content {
        border: 1px solid #e9edf7;
        border-top: 0px;

        max-height: 439px;
        overflow-x: hidden;

        .choose-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 11.45px 11.5px;
            border-bottom: 1px solid #e9edf7;
        }

        .choose-item:last-child {
            border-bottom: 0px;
        }

        .choose-item:hover {
            background-color: rgb(230, 239, 255);
        }
    }

    .realte-title {
        display: flex;
        align-items: center;
        padding: 0 12px;

        height: 45px;
        background-color: #f2f5fc;
        color: #333333;
    }
}

.setupContent-item {
    margin-bottom: 12px;
}

.setupTip {
    color: #515a75;
    font-size: 12px;
    font-weight: 400;
}

.searchval {
    position: relative;
}

.searchval .icon-sousuo {
    position: absolute;
    z-index: 1;
    color: #5f6884;
    font-size: 12px;
    left: 8px;
    top: 10px;
}

.Setupfilter {
    display: flex;
}

.r-serch {
    flex-wrap: inherit;

    :deep(.el-input__inner) {
        // width: 280px;
        height: 32px;
        background: #ffffff;
        border-radius: 4px;
        padding-left: 30px;
    }

    :deep(.el-select .el-input__inner) {
        width: 104px;
        padding-left: 10px;
        padding-right: 10px;
    }

    :deep(.el-button+.el-button) {
        margin-left: 8px;
    }

    :deep(.el-input__inner::-webkit-input-placeholder) {
        font-size: 12px;
    }
}

.setupContent {
    background: #fff;

    :deep(.el-table th.el-table__cell) {
        height: 45px;
        background-color: #f2f5fc;
        color: #333333;
    }

    :deep(.el-table__header-wrapper) {
        background-color: #f2f5fc;
    }


    :deep(.el-table-column--selection .cell) {
        padding-right: 0px;
    }

    :deep(.el-table__body) {
        box-sizing: content-box;
        border-right: 1px solid #e9edf7;
        border-left: 1px solid #e9edf7;
    }


}

.table-item {
    display: flex;
    align-items: center;

    img {
        width: 40px;
        height: auto;

        margin-right: 14px;
    }
}
</style>

<style lang="scss">
.isDisableCheckAll .el-table__header tr>th:first-child .el-checkbox__inner {
    display: none !important;
}

.el-table__header tr th .hederStyle {
    margin-left: -27px;
}

.el-table__header tr th>.cell {
    overflow: initial;
}

.hederStyle .el-checkbox {
    margin-right: 14px;
    height: 26px;
}
</style>