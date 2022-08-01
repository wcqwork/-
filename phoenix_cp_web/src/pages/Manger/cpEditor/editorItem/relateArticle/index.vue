<template>
    <div class="edit-item">
        <div class="edit-header">
            <div class="edit-titel">相关文章</div>
            <el-button type="primary" @click="handlerSetArticle('relateArticle')">设置相关文章</el-button>
        </div>
        <div class="edit-content prod-board scrollbar">
            <div class="prod-board-item" v-for="(prodItem, index) in cptObj.relateArticle.siteArticle" :key="index">
                <div v-if="prodItem.articleUrl">
                    <a :href="prodItem.articleUrl" :encodeId="prodItem.encodeId" target="_blank">
                        <span>{{ prodItem.articleTitle }}</span>
                    </a>
                </div>
                <div v-else>
                    <span>{{ prodItem.articleTitle }}</span>
                </div>
            </div>
            <div class="prod-board-item" v-for="(prodItem, index) in cptObj.relateArticle.privateArticle" :key="index">
                <div v-if="prodItem.articleUrl">
                    <a :href="prodItem.articleUrl" :encodeId="prodItem.encodeId" target="_blank">
                        <span>{{ prodItem.articleTitle }}</span>
                    </a>
                </div>
                <div v-else>
                    <span>{{ prodItem.articleTitle }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch, defineExpose, toRefs, defineEmits } from 'vue'

let emit = defineEmits(['handlerSetArticle']);

let props = defineProps({
    cptObj: {
        type: Object,
        default: {}
    }
})

let { cptObj } = toRefs(props);

let handlerSetArticle = (type) => {
    emit('handlerSetArticle', type, cptObj.value);
}
</script>
