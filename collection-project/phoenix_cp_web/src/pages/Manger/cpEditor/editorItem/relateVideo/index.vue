<template>
    <div class="edit-item">
        <div class="edit-header">
            <div class="edit-titel">相关视频</div>
            <el-button type="primary" @click="handlerSetVideo('relateVideo')">设置相关视频</el-button>
        </div>
        <div class="edit-content prod-board scrollbar">
            <div class="prod-board-item" v-for="(prodItem, index) in cptObj.relateVideo.siteVideo" :key="index">
                <div v-if="prodItem.videoUrl">
                    <a :href="prodItem.videoUrl" :encodeId="prodItem.encodeId" target="_blank">
                        <span>{{ prodItem.videoName }}</span>
                    </a>
                </div>
                <div v-else>
                    <span>{{ prodItem.videoName }}</span>
                </div>
            </div>
            <div class="prod-board-item" v-for="(prodItem, index) in cptObj.relateVideo.privateVideo" :key="index">
                <div v-if="prodItem.videoUrl">
                    <a :href="prodItem.videoUrl" :encodeId="prodItem.encodeId" target="_blank">
                        <span>{{ prodItem.videoTitle }}</span>
                    </a>
                </div>
                <div v-else>
                    <span>{{ prodItem.videoTitle }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch, defineExpose, toRefs, defineEmits } from 'vue'

let emit = defineEmits(['handlerSetVideo']);

let props = defineProps({
    cptObj: {
        type: Object,
        default: {}
    }
})

let { cptObj } = toRefs(props);

let handlerSetVideo = (type) => {
    emit('handlerSetVideo', type, cptObj.value);
}
</script>
