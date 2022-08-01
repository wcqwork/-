import { ref } from "vue";

export default function useFilterSearch() {
    let stateChoose = ref('');

    const stateArr = [
        {
            value: '0',
            label: '未开始',
        },
        {
            value: '1',
            label: '进行中',
        },
        {
            value: '2',
            label: '已生成',
        },
        {
            value: '3',
            label: '生成失败',
        },
        {
            value: '4',
            label: '已暂停',
        }
    ]

    //搜索
    let searchBtn = (getList) => {
        getList();
    };
    let resetInput = (getList) => {
        stateChoose.value = '';
        getList();
    };

    return {
        stateChoose,
        stateArr,
        searchBtn,
        resetInput
    }
}