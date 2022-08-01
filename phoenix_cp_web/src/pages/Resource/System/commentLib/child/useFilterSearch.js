import { ref } from "vue";

export default function useFilterSearch() {
    let commentContent = ref('');

    //搜索
    let searchBtn = (getList) => {
        getList();
    };
    // 重置
    let resetInput = (getList) => {
        commentContent.value = '';
        getList();
    };

    return{
        commentContent,
        searchBtn,
        resetInput
    }
}