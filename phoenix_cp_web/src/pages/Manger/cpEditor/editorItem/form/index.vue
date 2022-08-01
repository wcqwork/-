<template>
    <div class="edit-item">
        <div class="edit-header">
            <div class="edit-titel">询盘表单</div>
        </div>
        <div class="edit-content">
            <el-select v-model="cptObj.form" class="m-2" placeholder="Select" clearable >
                <el-option v-for="item in formArr" :key="item.formId" :label="item.formName" :value="item.formId" />
            </el-select>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch, defineExpose, toRefs, defineEmits } from 'vue'

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
