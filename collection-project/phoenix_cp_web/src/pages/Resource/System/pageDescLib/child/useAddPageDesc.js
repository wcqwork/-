import { ref } from "vue";

export default function useAddPageDesc(){
    let addPageDescVisible = ref(false)
    let addpageTextArea = ref('');
    let addPageAsc = ref(0);
    let addPageIndustry = ref(-1);

    let editEncodeId = ref(null);

    // 关闭 && 回调
    let handlerAddPageDescCalc = () => {
        addPageDescVisible.value = false
        editEncodeId.value = null;
    }

    // 关闭 && 回调
    let handlerAddPageDescOk = (handlerAddDesc) => {
        handlerAddDesc();
        handlerAddPageDescCalc();
    }
    
    let handleraddPageDesc = (handlerCalcState) => {
        addpageTextArea.value = '';
        addPageAsc.value = 0;
        addPageDescVisible.value = true;

        handlerCalcState();
    }

    let handlerEditSetData = (obj) => {
        addPageDescVisible.value = true;
        let {pageDesText,desType} = obj;
        addpageTextArea.value = pageDesText;
        addPageAsc.value = parseInt(desType);
    }

    return {
        editEncodeId,
        addPageDescVisible,
        addpageTextArea,
        addPageAsc,
        addPageIndustry,
        handlerAddPageDescCalc,
        handlerAddPageDescOk,
        handleraddPageDesc,
        handlerEditSetData
    }
}