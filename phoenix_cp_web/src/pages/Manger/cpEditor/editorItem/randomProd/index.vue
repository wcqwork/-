<template>
    <div class="edit-item">
        <div class="edit-header">
            <div class="edit-titel">随机产品</div>
            <el-button type="primary" @click="handlerSetProd('radomProduct')">设置随机产品</el-button>
        </div>
        <div class="edit-content prod-board scrollbar">
            <div class="prod-board-item" v-for="(prodItem, index) in cptObj.randomProd" :key="index">
                <a :href="prodItem.prodUrl" :encodeId="prodItem.encodeId" target="_blank">
                    <span>{{ prodItem.prodName }}</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch, defineExpose, toRefs, defineEmits } from 'vue'

let emit = defineEmits(['handlerSetProd']);

let props = defineProps({
    cptObj: {
        type: Object,
        default: {}
    }
})

let { cptObj } = toRefs(props);

let handlerSetProd = (type) => {
    emit('handlerSetProd', type, cptObj.value);
}
</script>
