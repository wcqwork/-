<template>
    <div class="edit-item">
        <div class="edit-header">
            <div class="edit-titel">标题</div>
        </div>
        <div class="edit-content">
            <el-input v-model="cptObj.pageTitle" />
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch, defineExpose, toRefs } from 'vue'


let props = defineProps({
    cptObj: {
        type: Object,
        default: {}
    }
})

let { cptObj } = toRefs(props);

</script>
