<template>
    <div class="setup-item">
        <div class="item-title">
            询盘表单
        </div>
        <div class="f-item-titel">
            选择表单
        </div>
        <div class="item-content">
            <div class="f-item-content" style="width: 156px;">
                <el-select v-model="cptObj.form.formId" class="m-2" placeholder="Select" clearable >
                    <el-option v-for="item in formArr" :key="item.formId" :label="item.formName" :value="item.formId" />
                </el-select>
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
    },
    formArr:{
        type:Array,
        default:[]
    }
})

let { cptObj } = toRefs(props);


</script>

