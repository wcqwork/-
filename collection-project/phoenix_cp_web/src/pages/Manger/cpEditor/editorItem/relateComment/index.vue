<template>
    <div class="edit-item">
        <div class="edit-header">
            <div class="edit-titel">相关评论</div>
            <el-button type="primary" @click="handlerSetComment('relateComment')">设置相关评论</el-button>
        </div>
        <div class="edit-content prod-board scrollbar">
            <div class="prod-board-item" v-for="(prodItem, index) in cptObj.relateComment" :key="index">
                <div class="comment-data">
                    <div>{{ prodItem.discusser }} <span style="margin-left:10px;">{{ prodItem.time }}</span></div> 
                    <div class="rateval">
                        <el-rate disabled v-model="rateval" />
                    </div>
                </div>
                <div><span>{{ prodItem.discussContent }}</span></div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch, defineExpose, toRefs, defineEmits } from 'vue'

let emit = defineEmits(['handlerSetComment']);

let props = defineProps({
    cptObj: {
        type: Object,
        default: {}
    }
})

let rateval = ref(5)
let { cptObj } = toRefs(props);

let handlerSetComment = (type) => {
    emit('handlerSetComment', type, cptObj.value);
}
</script>
