import { ref } from "vue";
import { useStore } from "vuex";

export default function useFilterSearch(orderByField,orderByMode,pageCurrent) {
    const store = useStore();
    let searchkeyWords = ref('');
    let searchPageLink = ref('');
    let stateChoose = ref('');
    let searchencodeId = ref("");

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

    // 记录搜索状态
    let setInitParams = () => {
        let initParams = store.state.global.pageListParams;
        searchkeyWords.value = initParams.searchkeyWords;
        searchPageLink.value = initParams.searchPageLink;
        stateChoose.value = initParams.stateChoose;
        orderByField.value = initParams.orderByField;
        orderByMode.value = initParams.orderByMode;
        pageCurrent.value = initParams.pageCurrent;
    }

    let setParamsData = () => {
        let searchParams = {
            searchkeyWords: searchkeyWords.value,
            searchPageLink: searchPageLink.value,
            stateChoose: stateChoose.value,
            orderByField: orderByField.value,
            orderByMode: orderByMode.value,
            pageCurrent: pageCurrent.value
        }
        store.commit('SETPAGELISTPARAMS', searchParams);
    }

    //搜索
    let searchBtn = (getList) => {
        pageCurrent.value = 1;
        setParamsData();
        getList();
    };
    let resetInput = (getList) => {
        searchkeyWords.value = '';
        searchPageLink.value = '';
        stateChoose.value = '';
        searchencodeId.value = '';
        pageCurrent.value = 1;
        setParamsData();
        getList();
    };


    return {
        searchkeyWords,
        searchPageLink,
        stateChoose,
        stateArr,
        searchencodeId,
        searchBtn,
        resetInput,
        setInitParams,
        setParamsData
    }

}