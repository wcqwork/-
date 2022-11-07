import {
    ref,
    reactive,
    watch,
    onMounted
} from 'vue';
import { useStore } from "vuex";

export default function useTable() {
    const store = useStore();
    //每页显示
    let pageCurrent = ref(1); //当前分页 pageNum
    let pageSize = ref(10); //一页数量
    let totalRecord = ref(0); //总记录数
    let orderByField = ref(null); //排序名称
    let orderByMode = ref(null); //排序参数

    let paginationRef = ref(null); //分页ref

    


    //表格默认数据
    let configTable = reactive({
    });

    //排序
    let sortChange = (e, getList) => {
        paginationRef.value.resetPage(1);
        pageCurrent.value = 1;
        switch (e.prop) {
            case "count":
                orderByField.value = "USE_COUNT";
                break;
            case "adderName":
                orderByField.value = "ADDER_NAME";
                break;
            case "queueStatus":
                orderByField.value = "QUEUE_STATUS";
                break;
            case "generateTime":
                orderByField.value = "GENERATE_TIME";
                break;
            case "addTime":
                orderByField.value = "ADD_TIME";
                break;
            default:
                orderByField.value = "";
                break;
        }
        switch (e.order) {
            case "descending":
                orderByMode.value = "DESC";
                break;
            case "ascending":
                orderByMode.value = "ASC";
                break;
            default:
                orderByMode.value = "";
                break;
        }
        getList();
    };

    //切换当前页
    let currentChange = (e, getList) => {
        pageCurrent.value = e;
        getList();
    };

    //每页显示数量
    let perPageSize = (e, getList) => {
        //设置
        store.commit("SETPAGESIZE",e);
        pageSize.value = e;
        pageCurrent.value = 1;
        getList();
    };

    onMounted(() => {
        pageSize.value = store.state.global.pageSizeNum || 10;
    })

    return {
        pageSize,
        totalRecord,
        pageCurrent,
        paginationRef,
        configTable,
        sortChange,
        currentChange,
        perPageSize,
        orderByField,
        orderByMode
    }
}