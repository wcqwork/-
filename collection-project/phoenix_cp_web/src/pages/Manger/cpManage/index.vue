<template>
    <div>
        <!-- 顶部 -->
        <div class="flex-j-s-b" style="margin-bottom: 15px;">
            <el-row class="flex-a-center">
                <strong class="company-title">CP页列表</strong>
            </el-row>
            <el-row>
                <el-button type="primary" :icon="Plus" @click="handerCpGenerate">CP页生成</el-button>
            </el-row>
        </div>
        <!-- 提示条 -->
        <div class="tips" v-if="tipFlagState">
            <svg-icon name="提醒" className="提醒" size="12" style="margin-right:12px;"></svg-icon>
            检测到您网站还未发布，请前往网站编辑后台进行整站发布，否则生成的页面无法正常访问！
            <!-- <span @click="closeTip()">
                <svg-icon name="close" className="close" size="8"></svg-icon>
            </span> -->
        </div>
        <!-- 表格 -->
        <div class="intelligenceTable">
            <!-- 时间筛选、搜索 -->
            <div class="flex-j-s-b t-set">
                <el-row class="r-serch">
                    <div class="searchval">
                        <i class="iconfont icon-sousuo"></i>
                        <el-input v-model="searchkeyWords" placeholder="请输入关键词" clearable />
                    </div>
                    <div class="searchval">
                        <i class="iconfont icon-sousuo"></i>
                        <el-input v-model="searchPageLink" placeholder="请输入页面链接" clearable />
                    </div>
                    <div class="stateChoose">
                        <el-select v-model="stateChoose" class="m-2" placeholder="状态选择" size="large" clearable>
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
            <Tables :configTable="configTable" @sortChange="sortChange" headerCellClassName="HeadTh" :getList="getList"
                :height="getComputer" rowClassName="indexTable">
                <!-- 关键词 -->
                <template v-slot:cpKeyword="slotData">
                    <div class="overflow-text4">
                        <el-tooltip class="box-item" effect="dark" placement="top">
                            <template #content>
                                <div style="max-width:450px">{{ slotData.data.cpKeyword }}</div>
                            </template>
                            <span>{{ slotData.data.cpKeyword }}</span>
                        </el-tooltip>
                    </div>
                </template>
                <!-- 页面链接 -->
                <template v-slot:cpUrl="slotData">
                    <div style="display: flex; align-items: center;">
                        <a :href="slotData.data.cpUrl" target="_blank" class="cpUrl"
                            v-if="slotData.data.generateStatus == '2'">
                            {{ getCouputeUrl(slotData.data.cpUrl) }}
                        </a>
                        <span v-else>－</span>
                    </div>
                </template>
                <!-- 状态 -->
                <template v-slot:generateStatus="slotData">
                    <div style="display: flex; align-items: center;">
                        <span class="activitystateIcon"
                            :style="{ background: handlerState(slotData.data.generateStatus).stateBColor, color: handlerState(slotData.data.generateStatus).stateFColor }">
                            <svg-icon :name="handlerState(slotData.data.generateStatus).stateIcon"
                                :className="handlerState(slotData.data.generateStatus).stateIcon" size="18"
                                style="margin-left:6px;"></svg-icon>
                            <span style="margin-left:8px;">{{ handlerState(slotData.data.generateStatus).stateDesc
                            }}</span>
                        </span>
                    </div>
                </template>
                <!-- 生成时间 -->
                <template v-slot:generateTime="slotData">
                    <div style="display: flex; align-items: center;">
                        {{ slotData.data.generateTime }}
                    </div>
                </template>
                <!-- 操作 -->
                <template v-slot:setUp="slotData">
                    <div style="display: flex; align-items: center;">
                        <div class="operate_item" @click="handlerEdit(slotData.data.encodeId)"
                            v-if="slotData.data.generateStatus == '2' || slotData.data.generateStatus == '4'">
                            <el-tooltip class="box-item" effect="dark" content="编辑" placement="top">
                                <svg-icon name="编辑1" className="编辑1" size="17"></svg-icon>
                            </el-tooltip>
                        </div>
                        <!-- <div class="operate_item">
                            <el-tooltip class="box-item" effect="dark" content="暂停" placement="top">
                                <svg-icon name="暂停" className="暂停" size="17"></svg-icon>
                            </el-tooltip>
                        </div> -->

                        <!-- <div class="operate_item">
                            <el-tooltip class="box-item" effect="dark" content="立即更新" placement="top">
                                <svg-icon name="立即更新" className="立即更新" size="17"></svg-icon>
                            </el-tooltip>
                        </div> -->

                        <div class="operate_item" v-if="slotData.data.generateStatus == '3'"
                            @click="handlerReStart(slotData.data.encodeId)">
                            <el-tooltip class="box-item" effect="dark" content="重新生成" placement="top">
                                <svg-icon name="重新生成" className="重新生成" size="17"></svg-icon>
                            </el-tooltip>
                        </div>

                        <!-- <div class="operate_item">
                            <el-tooltip class="box-item" effect="dark" content="继续生成" placement="top">
                                <svg-icon name="继续生成" className="继续生成" size="17"></svg-icon>
                            </el-tooltip>
                        </div> -->

                        <div class="operate_item" @click="handlerDelete(slotData.data.encodeId)"
                            v-if="slotData.data.generateStatus != '5'">
                            <el-tooltip class="box-item" effect="dark" content="删除" placement="top">
                                <svg-icon name="删除" className="删除" size="17"></svg-icon>
                            </el-tooltip>
                        </div>

                    </div>
                </template>
            </Tables>
            <Pagination :total="totalRecord" :pageSize="pageSize" :pageCurrent="pageCurrent" :showMax="false" @currentChange="currentChange"
                :getList="getList" @perPageSize="perPageSize" ref="paginationRef"></Pagination>
        </div>
        <!-- 删除 -->
        <el-dialog v-model="delDialogVisible" title="您确定要删除该页面吗？" width="460px">
            <span>如果页面已生成，删除后会影响页面收录，请谨慎操作！</span>
            <template #footer>
                <span class="dialog-footer">
                    <el-button @click="delDialogVisible = false">取消</el-button>
                    <el-button type="primary" @click="handlerDeleteOk(handlerDeleteFun)">确定</el-button>
                </span>
            </template>
        </el-dialog>
        <TipDialog :isTipDialog="isTipDialog" ref="tipDialogref"></TipDialog>
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
import { useStore } from "vuex";
import { Search, Plus } from '@element-plus/icons-vue'
import Tables from "@/components/Tables.vue";
import TipDialog from "@/components/TipDialog";
import Pagination from "@/components/Pagination.vue";
import useTip from "./child/useTip"
import useTable from '@/composables/Table/useTable'
import useFilterSearch from './child/useFilterSearch'
import useState from "./child/useState"
import delDialog from "@/composables/Dialog/delDialog"


// api
import { getCpList, setDelete, getSetting, saveSetting, regenerate } from "@/api/manger/cpListApi"


const store = useStore();
let router = useRouter();
let { handlerState } = useState();
let tipDialogref = ref(null);
let isTipDialog = ref({ isShow: false });
let { delEncodeId,
    delDialogVisible,
    handlerDeleteOk } = delDialog();


// logo 
const tipFlagState = computed(() => {
    return store.state.global.webSiteList.isPublish == "0" ? true : false;
})

let { tipFlag,
    closeTip } = useTip(tipFlagState);

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
    searchPageLink,
    stateChoose,
    stateArr,
    searchencodeId,
    searchBtn,
    resetInput,
    setInitParams,
    setParamsData } = useFilterSearch(orderByField, orderByMode, pageCurrent);


/**
 * 表格
 */

//表格默认数据
configTable = reactive({
    tHead: [
        {
            prop: "cpKeyword",
            label: "关键词",
            width: 220,
            slot: true,
            slotName: "cpKeyword",
        },
        {
            prop: "cpUrl",
            label: "页面链接",
            width: 220,
            slot: true,
            slotName: "cpUrl",
        },
        { prop: "generateStatus", label: "状态", width: 100, sortable: true, slot: true, slotName: "generateStatus" },
        { prop: "generateTime", label: "生成时间", width: 100, sortable: true, slot: true, slotName: "generateTime" },
        {
            prop: "setUp",
            label: "操作",
            slot: true,
            slotName: "setUp",
            width: 100,
            fixed: "right",
        },
    ],
    tableData: []
});

//获取表格数据
let getList = () => {
    let params = {
        queueId: searchencodeId.value,
        cpKeyword: searchkeyWords.value,
        cpUrl: searchPageLink.value,
        generateStatus: stateChoose.value,
        orderByField: orderByField.value,
        orderByMode: orderByMode.value,
        pageNum: pageCurrent.value,
        pageSize: pageSize.value,
    }
    // 发送请求
    getCpList(params).then(res => {
        if (res != 'error') {
            configTable.tableData = res.list || [];
            pageCurrent.value = res.pageNum;
            totalRecord.value = res.total;
        }
    })
};


onMounted(() => {
    setInitParams();
    let hashArr = location.hash.split("encodeId=");
    if (hashArr && hashArr[1]) {
        searchencodeId.value = hashArr[1];
    }
    getList();
})

// 重写切换页面
currentChange = (e, getList) => {
    pageCurrent.value = e;
    getList();

    setParamsData();
}

let getComputer = computed(() => {
    if (tipFlagState.value) {
        return 'calc(100vh - 320px)'
    } else {
        return 'calc(100vh - 269px)'
    }
})

let getCouputeUrl = (cpUrl) => {
    let str = '';
    if(cpUrl){
        let mapArr = cpUrl.split('/');
        if(mapArr.length > 2){
           str = '/'+mapArr.slice(-2).join('/');
        }else{
            return cpUrl;
        }
    }
    return str;
}

// 操作
let handlerEdit = (encodeId) => {
    router.push({ path: '/cpEditor', query: { encodeId } })
}

let handlerReStart = (encodeId) => {
    let params = {
        encodeId
    }
    regenerate(params).then(res => {
        if (res != 'error') {
            ElMessage.success('操作成功');
            getList();
        }
    })
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

let handlerDelete = (encodeId) => {
    delEncodeId.value = encodeId;
    delDialogVisible.value = true;
}

let handerCpGenerate = () => {
    tipDialogref.value.handerCpGenerate();
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

.cpUrl {
    color: #343a56;
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
</style>

<style>
.r-serch .stateChoose div .el-input__inner {
    width: 104px;
    padding-left: 10px;
    padding-right: 10px;
}
</style>