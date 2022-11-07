<template>
    <div class="main cp-generate-container">
        <PageTitle>
            <template #title>
                CP页生成
            </template>
        </PageTitle>
        <div class="intelligenceTable">
            <el-row>
                <el-col :span="24"><span class="row_1_span">关键词选择</span></el-col>
            </el-row>
            <el-radio-group v-model="radio" @change="onChange">
                <div class="input_boder">
                    <el-radio label="0"><span class="rd_sp1">核心关键词（{{ keyWordNum }}）</span><span
                            class="rd_sp2">PMM矩阵核心关键词库中的所有关键词</span></el-radio>
                </div>
                <div class="input_boder" :class="{ border_top: border_top_flag }">
                    <el-radio label="1"><span class="rd_sp1">指定关键词<span v-show="manuallySelect">（{{
                            saveSelectionList.length
                    }}）</span></span><span class="rd_sp2">手动选择关键词</span></el-radio>
                    <el-button v-show="radio == '1'" class="rd_2_bt" @click="onClickSlect()" type="primary">选择
                    </el-button>
                </div>
                <div class="input_boder_1" v-show="manuallySelect">
                    <div class="input_boder_1_banner" v-for="item in saveSelectionList" :key="item.keyword">
                        {{ item.keyword }}
                    </div>
                </div>
                <div class="input_boder" :class="{ border_top: customAdd }">
                    <el-radio label="2"><span class="rd_sp1">自定义关键词<span v-show="customAdd">（{{ customAddList.length
                    }}）</span></span> <span class="rd_sp2">自定义添加关键词进行页面生成</span></el-radio>
                    <el-button v-show="radio == '2'" class="rd_2_bt" @click="dialogAddVisible = true" type="primary">添加
                    </el-button>
                </div>
                <div class="input_boder_1" v-show="customAdd">
                    <div class="input_boder_1_banner" v-for="(item, index) in customAddList" :key="index">
                        {{ item }}
                    </div>
                </div>
            </el-radio-group>
            <el-row class="row_3">
                <el-checkbox v-model="checked" @change="onCheck" /><span
                    class="rd_sp3">更新已生成过的关键词。勾选后，会更新已生成过的关键词CP页面内容，页面链接不会改变。</span>
            </el-row>
            <el-row>
                <span class="row_4_span">生成频率</span>
            </el-row>
            <el-row class="row_5">
                <span class="row_5_span">预计共生成</span><span class="row_5_numbel">{{ total }}</span><span
                    class="row_5_span">个页面，包含</span>
                <span class="row_5_numbel">{{ exist }}</span><span class="row_5_span">个已生成页面，每天生成</span>
                <el-input class="row_input_1" v-model="page" @change="onRateChange">
                    <template #suffix>
                        个
                    </template>
                </el-input>
                <span class="row_5_span">页面</span>
                <el-input class="row_input_1" v-model="day" @change="onDayChange">
                    <template #suffix>
                        天
                    </template>
                </el-input>
                <span class="row_5_span">可全部生成。</span>
            </el-row>
        </div>

        <div class="pageBottom">
            <el-button plain @click="onSavetask()">保存任务</el-button>
            <el-button type="primary" @click="onStartBuild()">开始生成</el-button>
        </div>
        <el-dialog v-model="dialogTableVisible" :width="800" title="选择指定关键词" class="select-word">
            <el-form>
                <el-row>
                    <el-col :span="10">
                        <el-input v-model="seletSeach_1" class="seletSeach_1" clearable placeholder="请输入关键词"
                            :prefix-icon="Search" />
                    </el-col>
                    <el-col :span="8">
                        <el-form-item label="核心关键词:">
                            <el-select v-model="selectCoreKeyWord" class="selectValue " clearable placeholder="核心关键词">
                                <el-option v-for="item in optionsCoreKeyWord" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="关联产品数:">
                            <el-select v-model="selectProduct" class="selectValue select_glcp" clearable
                                placeholder="关联产品数">
                                <el-option v-for="item in optionsProduct" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-col>

                </el-row>
                <el-row class="select_row_2">
                    <el-col :span="6">
                        <el-form-item label="关联文章数:">
                            <el-select v-model="selectArticle" class="selectValue" clearable placeholder="关联文章数">
                                <el-option v-for="item in optionsArticle" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="关联产品分类数:">
                            <el-select v-model="selectProductClassif" class="selectValue" clearable
                                placeholder="关联产品分类树">
                                <el-option v-for="item in optionsProductClassif" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="是否已生成CP页:">
                            <el-select v-model="selectCpFlag" class="selectValue" clearable placeholder="是否已生成CP页">
                                <el-option v-for="item in optionsCpFlag" :key="item.value" :label="item.label"
                                    :value="item.value" />
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="4">
                        <el-button type="primary" class=" select_button" @click="onSeach">搜索</el-button>
                        <el-button class="margin_left_8 select_button" @click="onReset">重置</el-button>
                    </el-col>
                </el-row>
            </el-form>
            <el-table :data="selectWordData.keyWordList" class="margin_top_12" height="317" row-key="encodeId"
                @selection-change="selectionChange">
                <el-table-column type="selection" width="55" :reserve-selection="true" />
                <el-table-column property="keyword" label="关键词" />
                <el-table-column property="relateProdNum" label="关联产品" />
                <el-table-column property="relateArticleNum" label="关联文章" />
                <el-table-column property="relateGroupNum" label="关联产品分类" />
                <el-table-column property="alreadyGenerate" label="是否已生成CP页">
                    <template #default="scope">
                        <span>{{ scope.row.alreadyGenerate == 0 ? '否' : '是' }}</span>
                    </template>
                </el-table-column>
            </el-table>
            <div class="footer">
                <div class="left_box">
                    <el-pagination v-model:page-size="pageSize" layout="prev,pager,next " :total="selectTotal"
                        :current-page="currentPageNum" @current-change="handleCurrentChange">
                    </el-pagination>
                    <span class="left_box_span">已选择{{ selectionListLength }}个关键词</span>
                </div>
                <div class="right_box">
                    <el-button @click="dialogTableVisible = false">取消</el-button>
                    <el-button type="primary" @click="hanleSave">保存</el-button>
                </div>
            </div>
        </el-dialog>

        <el-dialog v-model="dialogAddVisible" :width="620" title="添加关键词" class="add-word">
            <el-row>
                <span class="add_word_span_1">关键词</span>
            </el-row>
            <el-row>
                <span class="add_word_span_2">
                    多个关键词用回车、换行分隔，不要输入标点符号
                </span>
            </el-row>
            <el-row>
                <el-input class="add_word_input_3" v-model="addTextArea" :rows="12" type="textarea" />
            </el-row>
            <div class="footer" style="justify-content: flex-end;">
                <div class="right_box">
                    <el-button @click="dialogAddVisible = false">取消</el-button>
                    <el-button type="primary" @click="hanleAddSave">保存</el-button>
                </div>
            </div>
        </el-dialog>
        <el-dialog v-model="dialogIsShowFlag" :width="620" title="提示!" class="add-word">
            <div style="        padding: 8px 0 15px 0px;line-height: 2;    font-size: 16px;">{{ dialogIsShowFlagTip }}
            </div>
            <div class="footer" style="justify-content: flex-end;">
                <div class="right_box">
                    <el-button @click="flagState == 0 ? onSavetask(0) : onStartBuild(0)">继续生成</el-button>
                    <el-button type="primary" @click="handlerAddData">添加数据</el-button>
                </div>
            </div>
        </el-dialog>
    </div>
</template>

<script setup>
import { ref, onMounted, onUpdated, watch, nextTick } from 'vue'
import { useRouter } from "vue-router";
import PageTitle from '@/components/PageTitle'
import { Search } from '@element-plus/icons-vue'
import useSelectDialog from './child/useSelectDialog'
import useSelectMain from './child/useSelectMain'
import { getKeywordList, getCoreKeywordNum, getCheck, getAdd } from '@/api/generate/cpGenerate'

let router = useRouter();


let { seletSeach_1, selectWordData, manuallySelect, optionsCoreKeyWord, optionsProduct, optionsArticle, optionsProductClassif, optionsCpFlag,
    selectCoreKeyWord, selectProduct, selectArticle, selectProductClassif, selectCpFlag, selectTotal, selectPageNum, pageSize
} = useSelectDialog()

let { radio, checked, page, day, dialogTableVisible, dialogAddVisible, textarea, keyWordNum, keywords, total, exist } = useSelectMain()

let dialogIsShowFlag = ref(false);
let dialogIsShowFlagTip = ref('');
let flagState = ref(0);

let getKeyWordNum = async () => {
    await getCoreKeywordNum().then(res => {
        keyWordNum.value = res;
    })
}

let currentPageNum = ref(1)
//获取关键词列表数据
let getKeywordListx = async () => {
    let data = {
        alreadyGenerate: selectCpFlag.value,
        coreFlag: selectCoreKeyWord.value,
        relateArticlePeriod: selectArticle.value,
        relateGroupPeriod: selectProductClassif.value,
        relateProdPeriod: selectProduct.value,
        keyword: seletSeach_1.value,
        pageNum: currentPageNum.value
    }
    await getKeywordList(data).then(res => {
        if (res.list) {
            selectWordData.keyWordList = res.list;
            selectTotal.value = res.total
        }
    })
}
//获取检查页面数量
let getCheckx = async () => {
    let updateFlag = checked.value ? 1 : 0
    let data = {
        keywordType: radio.value,
        keywords: keywords.value,
        updateFlag: updateFlag
    }
    await getCheck(data).then(res => {
        if (res) {
            total.value = res.total
            exist.value = res.exist
            day.value = Math.ceil(total.value / page.value)
        }
    })
}

//关键词列表分页变化
let handleCurrentChange = (pagenum) => {
    currentPageNum.value = pagenum
    getKeywordListx()
}
//点击指定关键词选择按钮
let onClickSlect = () => {
    dialogTableVisible.value = true
    getKeywordListx();
}
//关键词列表搜索
let onSeach = () => {
    getKeywordListx()
}
//关键词列表重置
let onReset = () => {
    selectCpFlag.value = ''
    selectCoreKeyWord.value = ''
    selectArticle.value = ''
    selectProductClassif.value = ''
    selectProduct.value = ''
    seletSeach_1.value = ''
    getKeywordListx()
}

let selectionListLength = ref(0)
//关键词列表多选按钮变化
let selectionChange = (selection) => {
    selectWordData.selectionList = selection
    selectionListLength.value = selection.length
}

let saveSelectionList = ref([])

let border_top_flag = ref(false)

let customAdd = ref(false)

let customAddList = ref([])

let addTextArea = ref('')

// watch(() => saveSelectionList.value, () => {
//     let newArr = [];
//     saveSelectionList.value.forEach(item => {
//         let flag = true;
//         newArr.forEach(SItem => {
//             if (item.keyword && SItem.keyword && SItem.keyword == item.keyword) {
//                 flag = false;
//             }
//         })
//         if (flag) {
//             newArr.push(item);
//         }
//     });
//     saveSelectionList.value = newArr;
//     let itemArr = newArr.map(item => {
//         return item.keyword;
//     })
//     keywords.value = itemArr.join(';');
// })

// watch(() => customAddList.value, () => {
//     let newArr = [];
//     customAddList.value.forEach(item => {
//         let flag = true;
//         newArr.forEach(SItem => {
//             if (SItem == item) {
//                 flag = false;
//             }
//         })
//         if (flag) {
//             newArr.push(item);
//         }
//     });
//     customAddList.value = newArr;
//     keywords.value = newArr.join(';');
// })
//选择指定关键词弹窗保存按钮
let hanleSave = () => {
    saveSelectionList.value = JSON.parse(JSON.stringify(selectWordData.selectionList))

    if (saveSelectionList.value.length > 0) {
        keywords.value = ''
        saveSelectionList.value.forEach(element => {
            keywords.value += element.keyword + ';'
        });
        keywords.value = keywords.value.slice(0, keywords.value.length - 1)
        manuallySelect.value = true
        border_top_flag.value = true
        getCheckx()
    } else {
        manuallySelect.value = false
        border_top_flag.value = false
        total.value = 0
        exist.value = 0
        keywords.value = ''
    }

    dialogTableVisible.value = false

    let newArr = [];
    saveSelectionList.value.forEach(item => {
        let flag = true;
        newArr.forEach(SItem => {
            if (item.keyword && SItem.keyword && SItem.keyword == item.keyword) {
                flag = false;
            }
        })
        if (flag) {
            newArr.push(item);
        }
    });
    saveSelectionList.value = newArr;
    let itemArr = newArr.map(item => {
        return item.keyword;
    })
    keywords.value = itemArr.join(';');
}

//自定义关键词保存按钮
let str = ''
let saveCustomAdd = ''
let hanleAddSave = () => {
    keywords.value = ''
    str = ''
    saveCustomAdd = ''
    str = addTextArea.value.replace(/\n/g, ';')
    customAddList.value = str.split(';')
    if (customAddList.value.length > 0 && str.trim() != '' && str.trim() != null) {
        customAddList.value.forEach(element => {
            if (element.trim() != '' && element.trim() != null) {
                saveCustomAdd += element + ";"
            }
        })
        saveCustomAdd = saveCustomAdd.slice(0, saveCustomAdd.length - 1)
        customAddList.value = saveCustomAdd.split(';')
        keywords.value = saveCustomAdd
        if (keywords.value != '' && keywords.value != null) {
            customAdd.value = true
        } else {
            customAdd.value = false
        }
        getCheckx()

    } else {
        customAdd.value = false
        total.value = 0
        exist.value = 0
        customAddList.value = []
    }
    dialogAddVisible.value = false


    let newArr = [];
    customAddList.value.forEach(item => {
        let flag = true;
        newArr.forEach(SItem => {
            if (SItem == item) {
                flag = false;
            }
        })
        if (flag) {
            newArr.push(item);
        }
    });
    customAddList.value = newArr;
    keywords.value = newArr.join(';');
}
//切换核心指定自定义关键词
let onChange = (label) => {
    if (label == 0) {
        keywords.value = ''
        manuallySelect.value = false;
        customAdd.value = false;
        border_top_flag.value = false;
        getCheckx()
    } else if (label == 1) {
        manuallySelect.value = true;
        customAdd.value = false;
        border_top_flag.value = true;
        if (saveSelectionList.value.length > 0) {
            keywords.value = ''
            saveSelectionList.value.forEach(element => {
                keywords.value += element.keyword + ';'
            });
            keywords.value = keywords.value.slice(0, keywords.value.length - 1)
            getCheckx()
        } else {
            keywords.value = ''
            getCheckx()
        }
    } else {
        manuallySelect.value = false;
        customAdd.value = true;
        border_top_flag.value = false;
        if (customAddList.value.length > 0 && str.trim() != '' && str.trim() != null) {
            keywords.value = saveCustomAdd
            getCheckx()
        } else {
            keywords.value = ''
            getCheckx()
        }
    }
}

let handlerAddData = () => {
    router.push({ path: '/resource/articleLib' });
}

//保存任务按钮
let onSavetask = async (checkFlag = 1, isflag) => {
    flagState.value = 0;
    let updateFlag = checked.value ? 1 : 0
    let data = {
        keywordType: radio.value,
        keywords: keywords.value,
        rate: page.value,
        startFlag: 0,
        checkFlag,
        updateFlag: updateFlag
    }
    await getAdd(data).then(res => {
        if (res && res.code == "90000029") {
            dialogIsShowFlag.value = true;
            dialogIsShowFlagTip.value = res.msg;
        } else if (res != 'error') {
            router.push({ path: '/generateRecord' });
            ElMessage.success('保存任务成功!');
        }
    })
}
//生成任务按钮
let onStartBuild = async (checkFlag = 1) => {
    flagState.value = 1;
    let updateFlag = checked.value ? 1 : 0
    let data = {
        keywordType: radio.value,
        keywords: keywords.value,
        rate: page.value,
        startFlag: 1,
        checkFlag,
        updateFlag: updateFlag
    }
    await getAdd(data).then(res => {
        if (res && res.code == "90000029") {
            dialogIsShowFlag.value = true;
            dialogIsShowFlagTip.value = res.msg;
        } else if (res != 'error') {
            router.push({ path: '/generateRecord' });
            ElMessage.success('操作成功!');
        }
    }, err => {

    })
}
//生成页面input框变化
let onRateChange = (value) => {
    day.value = Math.ceil(total.value / page.value)
}
//生成天数input框变化
let onDayChange = (value) => {
    page.value = Math.ceil(total.value / day.value)
}
//更新多选框状态变化
let onCheck = (value) => {
    getCheckx()
}

onMounted(() => {
    getKeyWordNum();
    getCheckx()
})



</script>

<style lang="scss" scoped>
.intelligenceTable {
    max-height: calc(100vh - 220px);
    overflow: auto;
}

.intelligenceTable::-webkit-scrollbar {
    width: 6px;
    height: 1px;
}

.intelligenceTable::-webkit-scrollbar-thumb {
    border-radius: 4px;
    -webkit-box-shadow: none;
    background-color: rgba(144, 147, 153, .3);
}

.intelligenceTable::-webkit-scrollbar-track {
    background-color: rgba(144, 147, 153, 0);
}

.row_1_span {
    font-size: 18px;
    font-weight: 600;
    text-align: LEFT;
    color: #333333;
}

.input_boder {
    width: 100%;
    height: 54px;
    // padding: 17px 0;
    background: #ffffff;
    border: 1px solid #d8dbe6;
    border-radius: 4px;
    display: flex;
    align-items: center;
    margin-top: 12px;
    box-sizing: border-box;
}

.rd_sp1 {
    font-size: 14px;
    font-weight: 500;
    color: #343a56;
}

.rd_sp2 {
    margin-left: 8px;
    font-size: 12px;
    font-weight: 400;
    color: #515a75;
}

.rd_sp3 {
    font-size: 14px;
    font-weight: 500;
    color: #343a56;
    margin-left: 8px;
}

.row_3 {
    margin-top: 24px;
    align-items: center;
}

.row_4_span {
    margin-top: 38px;
    font-size: 18px;
    font-weight: 600;
    color: #333333;
}

.row_5 {
    margin-top: 12px;
    align-items: center;
}

.row_input_1 {
    margin: 0 8px;
    width: 87px;
    height: 32px;
}

.row_5_numbel {
    margin: 0 4px;
    font-size: 18px;
    font-weight: 600;
    color: #008cff;
}

.rd_2_bt {
    margin-right: 20px;
    width: 69px;
    // position: absolute;
    // right: 0;
}

.selectValue {
    height: 32px;
    width: calc(100% - 12px);

}

.seletSeach_1 {
    width: calc(100% - 12px);
}

.select_row_2 {
    margin-top: 10px;
}

.margin_right_8 {
    margin-right: 8px;
}

.margin_left_8 {
    margin-left: 8px;
}

.margin_top_12 {
    margin-top: 12px;
}

.select_button {
    width: calc((100% - 8px)/2);
    height: 32px;
}

.select_glcp {
    width: 100%;
}

.footer {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid #e9edf7;
}

.left_box {
    margin-left: 24px;
    display: flex;
    align-items: center;
}

.right_box {
    margin-right: 24px;
}

.left_box_span {
    font-size: 14px;
    font-weight: 400;
    color: #5f6884;
}

.input_boder_row_1 {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 17px 0;
    position: relative;
}

.input_boder_1 {
    width: 100%;
    height: 100%;
    border: 1px solid #d8dbe6;
    border-top: 0;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    display: flex;
    flex-wrap: wrap;
    box-sizing: border-box;
    align-content: flex-start;
    padding: 0 20px 20px;
    max-height: 251px;
    overflow-y: auto;
}

.input_boder_1::-webkit-scrollbar {
    width: 6px;
    height: 1px;
}

.input_boder_1::-webkit-scrollbar-thumb {
    border-radius: 4px;
    -webkit-box-shadow: none;
    background-color: rgba(144, 147, 153, .3);
}

.input_boder_1::-webkit-scrollbar-track {
    background-color: rgba(144, 147, 153, 0);
}

.input_boder_1_banner {
    padding: 11px 24px;
    background: #f2f5fc;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 400;
    text-align: LEFT;
    color: #343a56;
    height: 16px;
    margin-top: 8px;
    margin-right: 8px;
}

.add_word_span_1 {
    margin-top: 6px;
    font-size: 14px;
    font-weight: 600;
    color: #343a56;
}

.add_word_span_2 {
    margin-top: 4px;
    font-size: 12px;
    font-weight: 400;
    color: #515a75;
}

.add_word_input_3 {
    margin-top: 12px;
    margin-bottom: 22px;
}

.border_top {
    border-bottom: 0;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
}
</style>
<style lang="scss">
.cp-generate-container {
    .el-radio-group {
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
    }

    .el-radio__input {
        margin-left: 20px;
    }

    .el-radio {
        width: 100%;
        height: 100%;
    }

    .el-checkbox {
        height: 0;
    }

    .el-input {
        background: #ffffff;
        border-radius: 4px;
    }

    .select-word .el-dialog__title {
        font-size: 16px;
        font-weight: 600;
        color: #333333;
    }

    .el-dialog__header {
        padding: 24px 20px !important;
        margin-right: 24px;
    }

    .el-dialog__headerbtn {
        top: 8px !important;
        right: -7px !important;
    }

    .el-table th.el-table__cell {
        background: #f2f5fc;
    }

    .el-dialog__body {
        padding: 12px 24px 67px
    }

    .el-table .el-table__cell {
        padding: 14.5px 0;
    }

    .el-pagination .btn-next .el-icon,
    .el-pagination .btn-prev .el-icon {
        font-size: 22px;
    }

    .el-form-item__label {
        padding: 0 4px 0 0;
    }

    .add_word_input_3 .el-textarea__inner::-webkit-scrollbar {
        width: 8px;
        height: 1px;
    }

    .add_word_input_3 .el-textarea__inner::-webkit-scrollbar-thumb {
        border-radius: 4px;
        -webkit-box-shadow: none;
        background-color: rgba(144, 147, 153, .3);
    }

    .add_word_input_3 .el-textarea__inner::-webkit-scrollbar-track {
        background-color: rgba(144, 147, 153, 0);
    }
}
</style>