<template>
    <div class="setup-item">
        <div class="item-title">
            页面描述
        </div>
        <div class="f-item-titel">
            适用行业
            <div class="three-title">
                设置该模块调取内容的范围，仅调取“共享资源库”中指定的行业数据
            </div>
        </div>
        <div class="item-content pageDesc-test">
            <IndustryDialog ref="industryDialog1" :cptObj="cptObj.pageDesc.industry" @updataIndustry="updataIndustry">
            </IndustryDialog>
            <div class="three-content">
                <div class="three-title">生成规则</div>
                <div class="fourth-content">
                    <el-select v-model="cptObj.pageDesc.prefix" class="m-2" size="large" disabled>
                        <el-option v-for="item in pageDescS1Arr" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                    <span class="item-desc">个前缀句＋当前关键词＋</span>
                    <el-select v-model="cptObj.pageDesc.random" class="m-2" size="large" clearable >
                        <el-option v-for="item in pageDescS2Arr" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                    <span class="item-desc">个随机关键词＋</span>
                    <el-select v-model="cptObj.pageDesc.suffix" class="m-2" size="large" clearable disabled>
                        <el-option v-for="item in pageDescS1Arr" :key="item.value" :label="item.label"
                            :value="item.value" />
                    </el-select>
                    <span class="item-desc">后缀句</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch, defineExpose, toRefs } from 'vue'
import IndustryDialog from "@/components/IndustryDialog"


let props = defineProps({
    cptObj: {
        type: Object,
        default: {}
    }
})

let { cptObj } = toRefs(props);

let updataIndustry = (industry1) => {
    // debugger
    cptObj.value.pageDesc.industry = industry1;
}

let numArr = Array(7).fill().map(function (_, i) { return { value: i + 1, label: i + 1 + '' } });

let pageDescS1Arr = ref([
    {
        value: 1,
        label: '1',
    }
]);



let pageDescS2Arr = ref(numArr);

let pageDescS3Arr = ref(numArr);


</script>

<style scoped lang="scss">
.pageDesc-test {
    :deep(.el-input__inner) {
        width: 58px;
        height: 32px;
    }
}
</style>
