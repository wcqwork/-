import { ref, onMounted, watch } from 'vue'
// api
import { getIndustryList } from "@/api/global"

export default function useIndustry(props) {
    let addPageIndustry = ref([-1, 2]);
    let addPageIndustryRadio = ref(-1);
    const checkAll = ref(false)
    const isIndeterminate = ref(true)
    const checkedCities = ref([])
    const cities = ref([]);

    const handleCheckAllChange = (val) => {
        checkedCities.value = val ? cities.value : []
        isIndeterminate.value = false
    }
    const handleCheckedCitiesChange = (value) => {
        const checkedCount = value.length
        checkAll.value = checkedCount === cities.length
        isIndeterminate.value = checkedCount > 0 && checkedCount < cities.length
    }

    // 初始化数据反转
    let handlerRevertIndustryStr = (str, allData) => {
        let newArr = str.split(",");
        let checkAll = allData.filter(item => {
            return newArr.includes(item.id);
        })
        return checkAll;
    }

    // 行业列表
    let handlerGetIndustryList = () => {
        getIndustryList().then(res => {
            if (res != 'error') {
                // debugger
                if (props.industryType != '1') {
                    res.unshift({
                        id: "-1",
                    industryName: "通用"
                    })
                }
                cities.value = res;

                // 设置页面
                if (props.cptObj) {
                    checkedCities.value = handlerRevertIndustryStr(props.cptObj, cities.value);
                }
            }
        })
    }

    watch(() => props.cptObj,() => {
        checkedCities.value = handlerRevertIndustryStr(props.cptObj, cities.value);
    })

    onMounted(() => {
        handlerGetIndustryList();
    })

    // dialog
    let industryVisible = ref(false)
    let handlerIndustryCalc = () => {
        industryVisible.value = false;
    }

    let handlerIndustryOk = () => {
        handlerIndustryCalc();
    }


    return {
        addPageIndustryRadio,
        addPageIndustry,
        checkAll,
        isIndeterminate,
        checkedCities,
        cities,
        industryVisible,
        handleCheckAllChange,
        handleCheckedCitiesChange,
        handlerIndustryOk,
        handlerIndustryCalc
    }
}