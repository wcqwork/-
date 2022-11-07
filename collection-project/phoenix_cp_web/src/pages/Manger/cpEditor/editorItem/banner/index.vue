<template>
    <div class="edit-item">
        <div class="edit-header">
            <div class="edit-titel">banner位</div>
        </div>
        <div class="edit-content">
            <!-- <div v-for="(item, index) in cptObj.banner">
                <img :src="item.url" alt="">
            </div> -->
            <div class="item-content">
                <el-upload v-model:file-list="cptObj.banner" action="/operateManage/cp/upload" list-type="picture-card"
                    :on-remove="handleRemove">
                    <el-icon>
                        <Plus />
                    </el-icon>
                    <span style="margin-top:11px;">添加</span>
                </el-upload>
            </div>
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

let handleRemove = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
}

</script>

<style lang="scss" scoped>
.edit-content {
    display: flex;
}

img {
    display: inline-block;
    width: 156px;
    height: 96px;
    // min-height: 96px;
    object-fit: contain;
}
</style>
<style lang="scss">
.el-upload-list--picture-card .el-upload-list__item {
    width: 156px;
    height: 96px;
}

.el-upload--picture-card {
    width: 156px;
    height: 96px;
}

.el-upload-list__item-preview {
    display: none !important;
}

.el-upload-list__item-delete {
    margin-right: 15px;
}

.el-upload {
    display: flex;
    align-items: center;
    flex-direction: column;

    font-size: 12px;
    font-weight: 400;
    color: #4a4a4a;
}

.el-upload-list__item-status-label {
    display: none;
}

.el-upload-list__item-status-label {
    display: none !important;
}
</style>