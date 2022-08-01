import {
    ref,
    defineProps,
    computed,
    reactive,
    onActivated,
    defineExpose
} from 'vue';

export default function useFilterSearch() {
    let searchContent = ref('');
    let searchkeyWords = ref('');


    //搜索
    let searchBtn = (getList) => {
        getList();
    };
    let resetInput = (getList) => {
        searchContent.value = '';
        searchkeyWords.value = '';

        getList();
    };

    return {
        searchContent,
        searchkeyWords,
        searchBtn,
        resetInput
    }
}