<template>
    <div  :class="{'isBorder':industryType != '1'}">
        <div class="Industry-item"
            :class="(checkedCities && addPageIndustryRadio == 2 ||  industryType != '1') ? 'hasContent' : ''"
           >
            <el-radio-group v-model="addPageIndustryRadio" v-if="industryType == '1'" style="margin-right:8px;">
                <el-radio :label="-1">通用</el-radio>
                <el-radio :label="2">指定行业</el-radio>
            </el-radio-group>
            <!-- <el-checkbox-group v-model="addPageIndustry" v-else>
                <el-checkbox :label="-1">通用</el-checkbox>
                <el-checkbox :label="2">指定行业</el-checkbox>
            </el-checkbox-group> -->
            <span v-show="addPageIndustryRadio == 2 || industryType != '1'">
                <el-button type="primary" plain @click="handlerChooseIndustry">选择行业</el-button>
            </span>
        </div>
        <div class="industryList" v-show="addPageIndustryRadio == 2 ||  industryType != '1'">
            <span class="industry-list-item" v-for="(item, index) in checkedCities" :key="index">
                {{ item.industryName }}
            </span>
        </div>
        <!-- 请选择适用行业 -->
        <el-dialog custom-class="industryVisible" v-model="industryVisible" title="请选择适用行业" width="460px"
            :before-close="handlerIndustryCalc">
            <el-checkbox-group v-model="checkedCities" @change="handleCheckedCitiesChange">
                <div class="Industry-checkbox-item">
                    <el-checkbox v-for="city in cities" :key="city.id" :label="city" true-label>{{
                            city.industryName
                    }}</el-checkbox>
                </div>
            </el-checkbox-group>
            <template #footer>
                <div class="industryFotter">
                    <el-checkbox v-model="checkAll" :indeterminate="isIndeterminate" @change="handleCheckAllChange">
                        全选
                    </el-checkbox>
                    <span class="dialog-footer">
                        <el-button @click="handlerIndustryCalc">取消</el-button>
                        <el-button type="primary" @click="handlerIndustryOk">确认</el-button>
                    </span>
                </div>
            </template>
        </el-dialog>
    </div>
</template>

<script setup>
import { defineProps, defineEmits,watch,defineExpose } from "vue";
import useIndustry from '@/composables/Industry'

// api
// import { getIndustryList } from "@/api/global"

let props = defineProps({
    industryType: {
        type: String,
        default: '0'
    },
    cptObj:{
         type: String,
    }
})

let {
    addPageIndustryRadio,
    addPageIndustry,
    checkAll,
    isIndeterminate,
    checkedCities,
    cities,
    industryVisible,
    handleCheckAllChange,
    handleCheckedCitiesChange,
    handlerIndustryOk,
    handlerIndustryCalc } = useIndustry(props);

let handlerChooseIndustry = () => {
    industryVisible.value = true;
}


let emit = defineEmits(['updataIndustry']);


watch(() => checkedCities.value,() => {
     let industry1 = getChooseIndustry();
    //  console.log(industry1);
     emit('updataIndustry',industry1.industryStr);
})


// 获取选择的状态 新建时
let getChooseIndustry = () => {
    let industryStr = handlerIndustryStr(checkedCities);
    industryStr = ',' +industryStr;
    if (props.industryType == '1') {
        return {
            addPageIndustryRadio,
            industryStr
        }
    } else {
        return {
            addPageIndustry,
            industryStr
        }
    }
}

// 设置状态 编辑时
let setChooseIndustry = (industryObj) => {
    let {industryIdList} =industryObj;
    debugger;
    if(industryIdList.includes('-1')){
        addPageIndustryRadio.value = -1;

        checkedCities.value = [];
    }else{
        addPageIndustryRadio.value = 2;
        checkedCities.value = cities.value.filter((item) => {
            if(industryIdList.includes(item.id)){
                return true;
            }
        })
    }
}

// 重置状态
let resetIndustryState = () => {
    addPageIndustryRadio.value = -1;
    checkedCities.value = [];
}

// 保存数据处理
let handlerIndustryStr = (checkedCities) => {
    // debugger;
    let newArr = checkedCities.value.map((item) => {
        return item.id;
    })
    return newArr.join(',');
}



//暴露方法
defineExpose({ getChooseIndustry,setChooseIndustry,resetIndustryState });
</script>

<style lang="scss" scoped>
.Industry-item {
    padding-bottom: 12px;
    // border-bottom: 1px solid #d8dbe6;
    display: flex;
    align-items: center;
}

.Industry-item.hasContent {
    border-bottom: 1px solid #d8dbe6;
}

.isBorder .Industry-item.hasContent{
    border-bottom: 0;
}

.isBorder .Industry-item{
        padding-bottom: 5px;
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


.Industry-checkbox-item {
    :deep(.el-checkbox) {
        display: block;
        border-bottom: 1px solid;
        border-color: #e9edf7;
        height: auto;
        padding: 14px;
    }

    :deep(.el-checkbox:last-child) {
        border-bottom: 0px;
    }

    :deep(.el-checkbox__label) {
        padding-left: 12px;
    }

}

:deep(.industryVisible .el-dialog__body) {
    padding: 10px 20px;

    max-height: 328px;
    overflow-x: hidden;
}

:deep(.chooseTemplateVisible .el-dialog__body) {
    min-height: 800px;
}

:deep(.chooseTemplateVisible .el-dialog__header) {
    background: #393D41;
    margin: 0;
}

:deep(.chooseTemplateVisible .el-dialog__title) {
    color: #ffffff;
    font-size: 18px;
    font-weight: 600;
}

.industryFotter {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>