<template>
    <div class="setup-item">
        <div class="item-title">
            相关评论
        </div>
        <div class="f-item-titel">
            展示数量
            <div class="f-item-content">
                <div class="relateTotal">
                    <el-input v-model="cptObj.relateComment.number" oninput ="value=value.replace(/[^\d]/g, '').replace(/^0/,'');if(value < 0) value = 1; if(value > 10) value = 10;">
                    </el-input>
                    <span class="rela-tiao">条</span>
                </div>
                <span class="f-tip">最多支持展示10条</span>
            </div>
        </div>
        <div class="item-content">
            <div class="three-content">
                <div class="three-title">适用行业</div>
                <div class="f-three-title">
                    设置该模块调取内容的范围，仅调取“共享资源库”中指定的行业数据
                </div>
            </div>
            <div class="industry">
                <IndustryDialog :cptObj="cptObj.relateComment.industry" @updataIndustry="updataIndustry"></IndustryDialog>
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
    cptObj.value.relateComment.industry = industry1;
}

</script>

