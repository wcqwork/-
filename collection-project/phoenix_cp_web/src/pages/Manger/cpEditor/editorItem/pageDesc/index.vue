<template>
    <div class="edit-item">
        <div class="edit-header">
            <div class="edit-titel">描述</div>
        </div>
        <div class="edit-content">

            <!-- {{cptObj.pageDesc}} -->
            <div style="border: 1px solid #ccc">
                <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig"
                    :mode="mode" />
                <Editor style="height: 500px; overflow-y: hidden;" v-model="valueHtml" :defaultConfig="editorConfig"
                    :mode="mode" @onCreated="handleCreated2" />
            </div>
        </div>
    </div>
</template>

<script setup>
import '@wangeditor/editor/dist/css/style.css'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import useEditor from "@/composables/Editor"
import { onMounted, ref, defineProps, watch, defineExpose, toRefs } from 'vue'

// editor
let { editorRef,
    valueHtml,
    mode,
    toolbarConfig,
    editorConfig,
    handleCreated } = useEditor();

let props = defineProps({
    cptObj: {
        type: Object,
        default: {}
    }
})

let { cptObj } = toRefs(props);

const handleCreated2 = (editor) => {
    editorRef.value = editor; // 记录 editor 实例，重要！
    valueHtml.value = '<p>'+cptObj.value.pageDesc+'</p>'
};

watch(() => valueHtml.value,() => {
    cptObj.value.pageDesc = valueHtml.value;
})
</script>
