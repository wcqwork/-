import { ref,reactive } from "vue";

export default function useSelectDialog() {
    
    let manuallySelect = ref(false)
    let selectWordData = reactive({
        keyWordList:[],
        selectionList:[]
    })

    const optionsCoreKeyWord = [
    {
        value: '',
        label: '不限',
    },
    {
        value: '0',
        label: '是',
    },
    {
        value: '1',
        label: '否',
    }]
    const optionsProduct = [
        {
            value: '',
            label: '所有',
        },
        {
            value: '0',
            label: '小于5个',
        },
        {
            value: '1',
            label: '5-10个',
        },
        {
            value: '2',
            label: '11-20个',
        },
        {
            value: '3',
            label: '大于20个',
        },
    ]
    const optionsArticle = [
        {
            value: '',
            label: '所有',
        },
        {
            value: '0',
            label: '小于5个',
        },
        {
            value: '1',
            label: '5-10个',
        },
        {
            value: '2',
            label: '11-20个',
        },
        {
            value: '3',
            label: '大于20个',
        },
    ]
    const optionsProductClassif = [
        {
            value: '',
            label: '所有',
        },
        {
            value: '0',
            label: '小于5个',
        },
        {
            value: '1',
            label: '5-10个',
        },
        {
            value: '2',
            label: '11-20个',
        },
        {
            value: '3',
            label: '大于20个',
        },
    ]
    const optionsCpFlag = [
        {
            value: '',
            label: '不限',
        },
        {
            value: '1',
            label: '是',
        },
        {
            value: '0',
            label: '否',
        }]
        let seletSeach_1 = ref('')
        let selectCoreKeyWord = ref('')
        let selectProduct = ref('')
        let selectArticle = ref('')
        let selectProductClassif = ref('')
        let selectCpFlag = ref('')
        let selectPageNum = ref(1)
        let selectTotal = ref('')
        let pageSize = ref(20)
    return {
        seletSeach_1,
        selectWordData,
        manuallySelect,
        optionsCoreKeyWord,
        optionsProduct,
        optionsArticle,
        optionsProductClassif,
        optionsCpFlag,
        selectCoreKeyWord,
        selectProduct,
        selectArticle,
        selectProductClassif,
        selectCpFlag,
        selectTotal,
        selectPageNum,
        pageSize
    }
}