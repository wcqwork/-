import { ref } from "vue";

export default function useAddPageDesc(){
    let addPageDescVisible = ref(false)
    let addpageTextArea = ref('');
    let addPageAsc = ref(1);
    let addPageIndustry = ref(1);

    let handlerAddPageDescCalc = () => {
        addPageDescVisible.value = false
    }

    let handlerAddPageDescOk = () => {
        handlerAddPageDescCalc();
    }
    
    let handleraddPageDesc = () => {
        addPageDescVisible.value = true;
    }

    return {
        addPageDescVisible,
        addpageTextArea,
        addPageAsc,
        addPageIndustry,
        handlerAddPageDescCalc,
        handlerAddPageDescOk,
        handleraddPageDesc,
    }
}