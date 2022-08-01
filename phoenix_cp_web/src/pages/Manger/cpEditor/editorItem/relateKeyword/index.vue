<template>
    <div class="edit-item">
        <div class="edit-header">
            <div class="edit-titel">相关关键词</div>
            <el-button type="primary" @click="handlerSetKeyword('relateKeyWord')">设置相关关键词</el-button>
        </div>
        <div class="edit-content">
            <span class="prod-keyword-item" v-for="(prodItem, index) in cptObj.relateKeyword" :key="index">
                <a :href="prodItem.cpUrl" :encodeId="prodItem.encodeId" target="_blank">
                    <span>{{ prodItem.cpKeyword }}</span>
                </a>
            </span>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch, defineExpose, toRefs, defineEmits } from 'vue'

let emit = defineEmits(['handlerSetKeyword']);

let props = defineProps({
    cptObj: {
        type: Object,
        default: {}
    }
})

let { cptObj } = toRefs(props);

let handlerSetKeyword = (type) => {
    emit('handlerSetKeyword', type, cptObj.value);
}
</script>
