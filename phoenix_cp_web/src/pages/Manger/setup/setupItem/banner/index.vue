<template>
    <div class="setup-item">
        <div class="item-title">
            banner位
        </div>
        <div class="f-item-titel">
            图片
            <div class="three-title">
                系统会从网站的幻灯片、高级幻灯片组件里的图片，以及此处上传的图片中随机调取展示在页面上。建议图片宽度不小于1920px，最多支持添加20张图片。
            </div>
        </div>
        <div class="item-content">
            <el-upload v-model:file-list="cptObj.banner.pic" action="/operateManage/cp/upload" list-type="picture-card"
                :on-remove="handleRemove">
                <el-icon>
                    <Plus />
                </el-icon>
                <span style="margin-top:11px;">添加</span>
            </el-upload>
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

let {cptObj} = toRefs(props);

let handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}


</script>

