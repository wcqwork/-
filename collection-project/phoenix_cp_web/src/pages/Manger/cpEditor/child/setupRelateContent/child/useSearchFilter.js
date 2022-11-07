import { ref } from "vue";

export default function useSearchFilter() {
    let chooseEncodeGroupId = ref(null);
    // 内容处理
    let chooseArr = ref([
    ])
    const props1 = {
        checkStrictly: true,
        label: 'nodeName',
        value: 'nodeId',
        children: 'childList'
    }
    let prodName = ref('');

    let searchBtn = (getList) => {
        // getList();
    }
    let resetInput = (getList) => {
        prodName.value = "";
        chooseEncodeGroupId.value = [];
        
        // getList();
    }

    return {
        props1,
        chooseEncodeGroupId,
        chooseArr,
        prodName,
        searchBtn,
        resetInput
    }
}