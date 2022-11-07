import {
    ref,
    onMounted
} from 'vue';
// api
import { getIndustryList } from "@/api/global"

export default function useFilterSearch() {
    let searchkeyWords = ref('');
    let stateChoose = ref('');
    let bfChoose = ref('');

    let bfChooseArr = [
        {
            value: '0',
            label: '前缀句',
        },
        {
            value: '1',
            label: '后缀句',
        },
    ]

    let stateArr = ref([
    ])

    //搜索
    let searchBtn = (getList) => {
        getList();
    };
    let resetInput = (getList) => {
        searchkeyWords.value = '';
        stateChoose.value = '';
        bfChoose.value = '';

        getList();
    };
    // 行业列表
    let handlerGetIndustryList = () => {
        getIndustryList().then(res => {
            if (res) {
                let obj = {
                    id: "-1",
                    industryName: "通用行业"
                }
                res.unshift(obj);
                stateArr.value = res;
            }
        })
    }

    onMounted(() => {
        handlerGetIndustryList();
    })

    return {
        searchkeyWords,
        stateChoose,
        bfChoose,
        bfChooseArr,
        stateArr,
        searchBtn,
        resetInput
    }
}