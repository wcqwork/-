<template>
    <div>
        <!-- 顶部 -->
        <div class="flex-j-s-b" style="margin-bottom: 15px;">
            <el-row class="flex-a-center">
                <strong class="company-title">生成记录</strong>
            </el-row>
            <el-row>
                <el-button type="primary" :icon="Plus" @click="handerCpGenerate">CP页生成</el-button>
            </el-row>
        </div>
        <!-- 表格 -->
        <div class="intelligenceTable">
            <!-- 时间筛选、搜索 -->
            <div class="flex-j-s-b t-set">
                <el-row class="r-serch">
                    <div class="stateChoose">
                        <el-select v-model="stateChoose" class="m-2" placeholder="状态选择" size="large" clearable >
                            <el-option v-for="item in stateArr" :key="item.value" :label="item.label"
                                :value="item.value" />
                        </el-select>
                    </div>
                </el-row>
                <el-row class="r-serch">
                    <el-button type="primary" @click="searchBtn(getList)" style="margin-left: 12px;">筛选</el-button>
                    <el-button @click="resetInput(getList)">重置</el-button>
                </el-row>
            </div>
            <Tables :configTable="configTable" @sortChange="sortChange" headerCellClassName="HeadTh" :getList="getList" height="calc(100vh - 270px)"
                rowClassName="indexTable">
                <!-- 操作时间 -->
                <template v-slot:addTime="slotData">
                    <div style="display: flex; align-items: center;">
                        <span>{{ slotData.data.addTime }}</span>
                    </div>
                </template>
                <!-- 进度条 -->
                <template v-slot:schedule="slotData">
                    <div style="display: flex; align-items: center;flex-direction: column;">
                        <el-progress :format="() => ''"
                            :percentage="((slotData.data.generateNum / slotData.data.totalNum) * 100) || 0" />
                        <div style="margin-top:6px;"><span class="progreeName">{{ slotData.data.generateNum }}</span>/{{
                                slotData.data.totalNum
                        }}
                        </div>
                    </div>
                </template>
                <!-- 状态 -->
                <template v-slot:queueStatus="slotData">
                    <div style="display: flex; align-items: center;">
                        <span class="activitystateIcon"
                            :style="{ background: handlerState(slotData.data.queueStatus).stateBColor, color: handlerState(slotData.data.queueStatus).stateFColor }">
                            <svg-icon :name="handlerState(slotData.data.queueStatus).stateIcon"
                                :className="handlerState(slotData.data.queueStatus).stateIcon" size="18"
                                style="margin-left:6px;"></svg-icon>
                            <span style="margin-left:8px;">{{ handlerState(slotData.data.queueStatus).stateDesc }}</span>
                        </span>
                    </div>
                </template>
                <!-- 发布人 -->
                <template v-slot:adderName="slotData">
                    <div style="display: flex; align-items: center;">
                        {{ slotData.data.adderName }}
                    </div>
                </template>
                <!-- 操作 -->
                <template v-slot:setUp="slotData">
                    <div>
                        <div class="operate_item" @click="handlerView(slotData.data.encodeId)">
                            <el-tooltip class="box-item" effect="dark" content="查看" placement="top">
                                <svg-icon name="查看" className="查看" size="17"></svg-icon>
                            </el-tooltip>
                        </div>

                        <div class="operate_item" v-if="slotData.data.queueStatus == '0' || slotData.data.queueStatus == '1'" @click="handlerChangeState(slotData.data.encodeId,'4')">
                            <el-tooltip class="box-item" effect="dark" content="暂停" placement="top">
                                <svg-icon name="暂停" className="暂停" size="17"></svg-icon>
                            </el-tooltip>
                        </div>

                        <div class="operate_item" v-if="slotData.data.queueStatus == '4' || slotData.data.queueStatus == '5'" @click="handlerChangeState(slotData.data.encodeId,'1')">
                            <el-tooltip class="box-item" effect="dark" content="继续生成" placement="top">
                                <svg-icon name="继续生成" className="继续生成" size="17"></svg-icon>
                            </el-tooltip>
                        </div>
                        
                        <div class="operate_item" v-if="slotData.data.queueStatus == '3'" @click="handlerChangeState(slotData.data.encodeId,'1')">
                            <el-tooltip class="box-item" effect="dark" content="重新生成" placement="top">
                                <svg-icon name="重新生成" className="重新生成" size="17"></svg-icon>
                            </el-tooltip>
                        </div>

                    </div>
                </template>
            </Tables>
            <Pagination :total="totalRecord" :pageSize="pageSize" :showMax="false" @currentChange="currentChange" :getList="getList"
                @perPageSize="perPageSize" ref="paginationRef"></Pagination>
        </div>
        <!-- 删除 -->
        <el-dialog v-model="delDialogVisible" title="您确定要删除该页面吗？" width="460px">
            <span>如果页面已生成，删除后会影响页面收录，请谨慎操作！</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="delDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="handlerDeleteOk">确定</el-button>
                </span>
            </template>
        </el-dialog>
        <TipDialog :isTipDialog ="isTipDialog" ref="tipDialogref"></TipDialog>
    </div>
</template>

<script setup>
import {
    ref,
    defineProps,
    computed,
    reactive,
    onActivated,
    defineExpose,
    onMounted
} from 'vue';
import { useRouter } from "vue-router";
import { Search, Plus } from '@element-plus/icons-vue'
import Tables from "@/components/Tables.vue";
import useTip from "./child/useTip"
import useState from "./child/useState"
import Pagination from "@/components/Pagination.vue";
import useTable from '@/composables/Table/useTable'
import useFilterSearch from "./child/useFilterSearch"
import delDialog from "@/composables/Dialog/delDialog"
import TipDialog from "@/components/TipDialog";

// api
import { getCpList, changeStatus } from "@/api/manger/generateRecordApi"

let router = useRouter();

let { delDialogVisible,
    handlerDeleteOk } = delDialog();

let { handlerState } = useState();

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

let { tipFlag,
    closeTip } = useTip();

let { stateChoose,
    stateArr,
    searchBtn,
    resetInput } = useFilterSearch();



//获取表格数据
let getList = () => {
    let params = {
        queueStatus:stateChoose.value,
        orderByField: orderByField.value,
        orderByMode: orderByMode.value,
        pageNum: pageCurrent.value,
        pageSize: pageSize.value,

    }
    getCpList(params).then(res => {
        if (res) {
            configTable.tableData = res.list || [];
            pageCurrent.value = res.pageNum;
            totalRecord.value = res.total;
        }
    })
    // 发送请求
};

let tipDialogref = ref(null);
let isTipDialog = ref({isShow:false});

let handerCpGenerate = () => {
    tipDialogref.value.handerCpGenerate();
}



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
            prop: "addTime",
            label: "操作时间",
            width: 220,
            slot: true,
            sortable: true,
            slotName: "addTime",
        },
        {
            prop: "schedule",
            label: "生成进度",
            width: 220,
            slot: true,
            slotName: "schedule",
        },
        { prop: "queueStatus", label: "状态", width: 120, sortable: true, slot: true, slotName: "queueStatus" },
        { prop: "adderName", label: "发布人", width: 120, sortable: true, slot: true, slotName: "adderName" },
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
let handlerDelete = (id) => {
    delDialogVisible.value = true;
}

let handlerView = (encodeId) => {
    router.push({ path: 'cpManage',query:{encodeId} })
}

let handlerChangeState = (encodeId,state) => {
     let params = {
        encodeId: encodeId,
        status:state
    }
    changeStatus(params).then(res => {
        ElMessage.success('操作成功');
        getList();
    })
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

.intelligenceTable {
    :deep(.el-table td.el-table__cell div) {
        width: 100%;
    }

    .operate_item {
        display: inline;
    }
}

.progreeName {
    font-size: 14px;
    font-weight: 600;
    color: #008cff;
}
</style>

<style>
.r-serch .stateChoose div .el-input__inner {
    width: 104px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>