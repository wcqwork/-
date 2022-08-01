import { ref } from "vue";

export default function useAddPageDesc(industryVisible){
    let editEncodeId = ref(null);
    let addPageDescVisible = ref(false)
    let addpageTextArea = ref('');
    let addPageIndustry = ref(1);
    let industryList = ref([
        {name:'制造加工机械'},
        {name:'制造加工机械'},
    ])

    let handlerAddPageDescCalc = () => {
        addPageDescVisible.value = false
    }

    // 关闭 && 回调
    let handlerAddPageDescOk = (handlerUpdate) => {
        handlerUpdate();
        handlerAddPageDescCalc();
    }
    
    let handleraddPageDesc = (handlerCalcState) => {
        addpageTextArea.value = '';
        addPageDescVisible.value = true;

        handlerCalcState();
    }

    let handlerEditPageDesc = (obj) => {
        addPageDescVisible.value = true;

        // 编辑初始化数据
        let {discussContent} = obj;
        addpageTextArea.value = discussContent;
    }

    let handlerChooseIndustry = () => {
        industryVisible.value = true;
    }

    // 添加评论人
    let addEncodeId = ref(null);
    let addComentatorVisible = ref(false);
    let addComentatorTextArea = ref('');

    let handlerAddComentatorCalc = () => {
        addComentatorVisible.value = false;
    }

    let handlerAddComentatorOk = (handlerCallback) => {
        handlerCallback();
        handlerAddComentatorCalc();
    }

    let handlerEditComentator = (obj) => {
        addComentatorVisible.value = true;
        // 编辑初始化数据
        let {discusserName} = obj;
        addComentatorTextArea.value = discusserName;
    }

    let handlerComentator = (obj) => {
        addComentatorVisible.value = true;

        // 编辑初始化数据
        addComentatorTextArea.value = '';
    }

    return {
        addEncodeId,
        editEncodeId,
        addPageDescVisible,
        addpageTextArea,
        addPageIndustry,
        industryList,
        handlerAddPageDescCalc,
        handlerAddPageDescOk,
        handlerEditPageDesc,
        handleraddPageDesc,
        handlerChooseIndustry,

        addComentatorVisible,
        addComentatorTextArea,
        handlerAddComentatorCalc,
        handlerAddComentatorOk,
        handlerComentator,
        handlerEditComentator
    }
}