import {
    ref,
    reactive,
} from 'vue';

export default function delDialog() {
    let delDialogVisible = ref(false);
    let delEncodeId = ref(null);

    // 确定删除
    let handlerDeleteOk = (handlerDeleteFun) => {
        handlerDeleteFun();
        delDialogVisible.value = false;
        delEncodeId.value = null;
    }

    return {
        delEncodeId,
        delDialogVisible,
        handlerDeleteOk
    }
}