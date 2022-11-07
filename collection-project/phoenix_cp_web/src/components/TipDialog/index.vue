<template>
    <el-dialog v-model="isTipDialog.isShow" title="提示" width="30%" :before-close="handleClose">
        <span>您还未设置页面生成规则，需要前往“设置”中设置规则后才能进行页面生成。</span>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handlerGoSet">去设置</el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { checkWebisiteSet } from "@/api/global"
import { toRefs,defineExpose } from "vue";
import { useRouter } from "vue-router";

let router = useRouter();

let props = defineProps({
    isTipDialog:{
        type:Object,
        default:{isShow:false}
    }
})

let {isTipDialog} = toRefs(props);

const handleClose = () => {
    isTipDialog.value.isShow = false;
}

let handlerGoSet = () => {
    handleClose();
    router.push({ name: 'setup' });
}

let handerCpGenerate = () => {
    checkWebisiteSet().then(res => {
        if(res){
           let isFlag = res.res == '1' || false;
           if(!isFlag){
                isTipDialog.value.isShow = true;
           }else{
              router.push({ name: 'cpGenerate' })
           }
        }
    })
}

//暴露方法
defineExpose({ handerCpGenerate });
</script>