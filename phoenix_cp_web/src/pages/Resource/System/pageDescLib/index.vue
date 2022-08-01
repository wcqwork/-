<template>
    <div>
        <!-- 顶部 -->
        <div class="flex-j-s-b" style="margin-bottom: 15px;">
            <el-row class="flex-a-center">
                <strong class="company-title">页面描述库</strong>
            </el-row>
            <el-row>
                <el-button type="primary" :icon="Plus" @click="handleraddPageDesc(handlerCalcState)">添加页面描述</el-button>
            </el-row>
        </div>
        <!-- 表格 -->
        <div class="intelligenceTable">
            <!-- 时间筛选、搜索 -->
            <div class="flex-j-s-b t-set">
                <el-row class="r-serch">
                    <div class="searchval">
                        <i class="iconfont icon-sousuo"></i>
                        <el-input v-model="searchkeyWords" placeholder="请输入描述文本" clearable />
                    </div>
                    <div class="stateChoose">
                        <el-select v-model="bfChoose" class="m-2" placeholder="前/后缀" size="large" clearable >
                            <el-option v-for="item in bfChooseArr" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                    <div class="stateChoose">
                        <el-select v-model="stateChoose" class="m-2" placeholder="适用行业" size="large" clearable >
                            <el-option v-for="item in stateArr" :key="item.id" :label="item.industryName"
                                :value="item.id" />
                        </el-select>
                    </div>
                </el-row>
                <el-row class="r-serch">
                    <el-button type="primary" @click="searchBtn(getList)" style="margin-left: 12px;">筛选</el-button>
                    <el-button @click="resetInput(getList)">重置</el-button>
                </el-row>
            </div>
            <Tables :configTable="configTable" @sortChange="sortChange" headerCellClassName="HeadTh" :getList="getList"
                height="calc(100vh - 268px)" rowClassName="indexTable">
                <!-- 描述文本 -->
                <template v-slot:pageDesText="slotData">
                    <div class="overflow-text4">
                        <el-tooltip class="box-item" effect="dark" placement="top">
                            <template #content>
                                <div style="max-width:450px">{{ slotData.data.pageDesText }}</div>
                            </template>
                            <span>{{ slotData.data.pageDesText }}</span>
                        </el-tooltip>
                    </div>
                </template>
                <!-- 前/后缀 -->
                <template v-slot:desType="slotData">
                    <div style="display: flex; align-items: center;">
                        {{ slotData.data.desType == "0" ? "前缀句" : "后缀句" }}
                    </div>
                </template>
                <template v-slot:industryList="slotData">
                    <div class="overflow-text2">
                        <div v-for="(item, index) in slotData.data.industryList" :key="index">{{ item }}</div>
                    </div>
                </template>
                <template v-slot:count="slotData">
                    <div style="display: flex; align-items: center;">
                        {{ slotData.data.count }}
                    </div>
                </template>
                <template v-slot:adderName="slotData">
                    <div style="display: flex; align-items: center;">
                        {{ slotData.data.adderName }}
                    </div>
                </template>
                <!-- 启用 -->
                <template v-slot:openStatus="slotData">
                    <div style="display: flex; align-items: center;">
                        <el-switch v-model="slotData.data.openStatus" active-value="1" inactive-value="0" :disabled ="!hasCpOperateAuth"
                            :before-change="handlerChangeStatus(slotData.data.encodeId, slotData.data.openStatus)" />
                    </div>
                </template>
                <!-- 操作 -->
                <template v-slot:setUp="slotData">
                    <div style="display: flex; align-items: center;">
                        <div class="operate_item" @click="handlerEdit(hasCpOperateAuth,slotData.data)">
                            <el-tooltip class="box-item" effect="dark" content="编辑" placement="top">
                                <svg-icon name="编辑1" className="编辑1" size="17"></svg-icon>
                            </el-tooltip>
                        </div>

                        <div class="operate_item" @click="handlerDelete(hasCpOperateAuth,slotData.data.encodeId)">
                            <el-tooltip class="box-item" effect="dark" content="删除" placement="top">
                                <svg-icon name="删除" className="删除" size="17"></svg-icon>
                            </el-tooltip>
                        </div>

                    </div>
                </template>
            </Tables>
            <Pagination :total="totalRecord" :pageSize="pageSize" :showMax="false" :getList="getList"
                @currentChange="currentChange" @perPageSize="perPageSize" ref="paginationRef"></Pagination>
        </div>
        <!-- 删除 -->
        <el-dialog v-model="delDialogVisible" title="删除提醒" width="460px">
            <span style="line-height: 1.8;">您确定要删除当前描述吗？删除后下次再生成页面时将不会调用该描述，但是不影响已生成的页面。</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="delDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="handlerDeleteOk(handlerDeleteFun)">确定</el-button>
                </span>
            </template>
        </el-dialog>

        <!-- 添加/编辑页面描述 -->
        <el-dialog v-model="addPageDescVisible" :title="editEncodeId ? '编辑页面描述' : '添加页面描述'" width="620px">
            <div class="addPageContent">
                <div class="addpage-item">
                    <div class="addpage-title">
                        描述文本
                    </div>
                    <div class="addpage-cont">
                        <el-input v-model="addpageTextArea" maxlength="1000" placeholder="请输入描述文本" show-word-limit
                            type="textarea" />
                    </div>
                </div>
                <div class="addpage-item">
                    <div class="addpage-title">
                        组合顺序
                        <div class="f-title">
                            前缀句会出现在关键词变量之前，后缀句会在关键词变量之后进行排列组合展示。为确保句子可读性，切勿标记错前后缀句。
                        </div>
                    </div>
                    <div class="addpage-cont">
                        <el-radio-group v-model="addPageAsc">
                            <el-radio :label="0">前缀句</el-radio>
                            <el-radio :label="1">后缀句</el-radio>
                        </el-radio-group>
                    </div>
                </div>
                <div class="addpage-item">
                    <div class="addpage-title">
                        适用行业
                    </div>
                    <div class="addpage-cont">
                        <IndustryDialog ref="industryDialog" :industryType="'1'"></IndustryDialog>
                    </div>
                </div>
            </div>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="handlerAddPageDescCalc()">取消</el-button>
                    <el-button v-if="editEncodeId" type="primary" @click="handlerAddPageDescOk(handlerUpdate)">确定
                    </el-button>
                    <el-button v-else type="primary" @click="handlerAddPageDescOk(handlerAddDesc)">确定</el-button>
                </span>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import {
    ref,
    computed,
    reactive,
    onMounted
} from 'vue';
import { useStore } from "vuex";
import { Plus } from '@element-plus/icons-vue'
import Tables from "@/components/Tables.vue";
import Pagination from "@/components/Pagination.vue";
import IndustryDialog from "@/components/IndustryDialog"
import useAddPageDesc from "./child/useAddPageDesc"
import useFilterSearch from './child/useFilterSearch';
import delDialog from "@/composables/Dialog/delDialog"
import useTable from '@/composables/Table/useTable'

// api
import { getPageDescList, changeStatus, setDelete, setAdd, setUpdate } from "@/api/resource/pageDescApi"

const store = useStore();

// 权限 
const hasCpOperateAuth = computed(() => {
  return store.state.global.webSiteList.hasCpOperateAuth;
})

let { delEncodeId,
    delDialogVisible,
    handlerDeleteOk } = delDialog();

let {
    editEncodeId,
    addPageDescVisible,
    addpageTextArea,
    addPageAsc,
    handlerAddPageDescCalc,
    handlerAddPageDescOk,
    handleraddPageDesc,
    handlerEditSetData } = useAddPageDesc();

let { pageSize,
    totalRecord,
    pageCurrent,
    paginationRef,
    configTable,
    sortChange,
    currentChange,
    perPageSize,
    orderByField,
    orderByMode } = useTable();

let { searchkeyWords,
    stateChoose,
    bfChoose,
    bfChooseArr,
    stateArr,
    searchBtn,
    resetInput } = useFilterSearch();

let industryDialog = ref(null);

//获取表格数据
let getList = () => {
    let params = {
        pageDesText: searchkeyWords.value,
        desType: bfChoose.value,
        industry: stateChoose.value,
        orderByField: orderByField.value,
        orderByMode: orderByMode.value,
        pageNum: pageCurrent.value,
        pageSize: pageSize.value,

    }
    getPageDescList(params).then(res => {
        if (res != 'error') {
            configTable.tableData = res.list || [];
            pageCurrent.value = res.pageNum;
            totalRecord.value = res.total;
        }
    })
    // 发送请求
};


onMounted(() => {
    getList();
})

/**
 * 表格
 */


//表格默认数据
configTable = reactive({
    tHead: [
        {
            prop: "pageDesText",
            label: "描述文本",
            width: 220,
            slot: true,
            slotName: "pageDesText",
        },
        {
            prop: "desType",
            label: "前/后缀",
            width: 100,
            slot: true,
            slotName: "desType",
        },
        { prop: "industryList", label: "适用行业", width: 120, slot: true, slotName: "industryList" },
        { prop: "count", label: "调用次数", width: 120, sortable: true, slot: true, slotName: "count" },
        { prop: "adderName", label: "添加人", width: 120, sortable: true, slot: true, slotName: "adderName" },
        { prop: "openStatus", label: "启用", width: 120, sortable: true, slot: true, slotName: "openStatus" },
        {
            prop: "setUp",
            label: "操作",
            slot: true,
            slotName: "setUp",
            width: 100,
            fixed: "right",
        },
    ],
    tableData: [
    ]
});



// 操作

// 新增
let handlerAddDesc = () => {
    let { addPageIndustryRadio, industryStr } = industryDialog.value.getChooseIndustry();
    let params = {
        pageDesText: addpageTextArea.value,
        desType: addPageAsc.value,
        industry: addPageIndustryRadio.value == '-1' ? '-1' : industryStr
    }
    setAdd(params).then(res => {
        if (res != 'error') {
            ElMessage.success('操作成功');
            getList();
        }
    })
}
// 编辑更新
let handlerUpdate = () => {
    let { addPageIndustryRadio, industryStr } = industryDialog.value.getChooseIndustry();
    let params = {
        encodeId: editEncodeId.value.encodeId,
        pageDesText: addpageTextArea.value,
        desType: addPageAsc.value,
        industry: addPageIndustryRadio.value == '-1' ? '-1' : industryStr
    }
    setUpdate(params).then(res => {
        if (res != 'error') {
            ElMessage.success('操作成功');
            getList();
        }
    })
}

// 关闭弹窗 取消状态
let handlerCalcState = () => {
    if (industryDialog.value) {
        industryDialog.value.resetIndustryState();
    }
}

let handlerChangeStatus = (encodeId, status) => {
    return function () {
        let params = {
            encodeId,
            status: status == '1' ? '0' : '1'
        }
        return new Promise(resolve => {
            changeStatus(params).then(res => {
                if (res != 'error') {
                    ElMessage.success('操作成功');
                    return resolve(true);
                }
            }, err => {
                ElMessage.error('操作失败');
                return reject(new Error('Error'));
            })
        })
    }
}

let handlerDeleteFun = () => {
    let params = {
        encodeId: delEncodeId.value
    }
    setDelete(params).then(res => {
        if (res != 'error') {
            ElMessage.success('操作成功');
            getList();
        }
    })
}

let handlerDelete = (isFlag,encodeId) => {
    if(!isFlag) return;
    delEncodeId.value = encodeId;
    delDialogVisible.value = true;
}

let handlerEdit = (isFlag,obj) => {
    if(!isFlag) return;
    editEncodeId.value = obj;
    handlerEditSetData(obj);

    setTimeout(() => {
        // 设置编辑适用行业
        if (industryDialog.value) {
            industryDialog.value.setChooseIndustry(obj);
        }
    }, 100);

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
}

.addpage-item:last-child {
    margin-bottom: 0px;
}

.addPageContent {
    :deep(.el-textarea__inner) {
        height: 177px;
    }
}
</style>

<style>
.r-serch .stateChoose div .el-input__inner {
    width: 104px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>