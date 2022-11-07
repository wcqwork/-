import { ref, onMounted } from 'vue'

export default function useSetting() {
    let relateProdTotal = ref(0)
    let relateProdCheck = ref(0)

    let randomProductCheck = ref(0)
    let relateArticleCheckbox = ref(0)
    let relateVideoCheckbox = ref(0)
    let relateKeyword = ref(0)

    let industry = ref([
        '制造加工机械',
        '五金工具'
    ])

    // 页面描述
    let addPageIndustry = ref([1, 2]);

    let pageDescS1 = ref(0)
    let pageDescS1Arr = ref([
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
    ]);

    let pageDescS2 = ref(0)
    let pageDescS2Arr = ref([
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
    ]);

    let pageDescS3 = ref(0)
    let pageDescS3Arr = ref([
        {
            value: 1,
            label: '1',
        },
        {
            value: 2,
            label: '2',
        },
        {
            value: 3,
            label: '3',
        },
    ]);

    let formArrActive = ref(null);
    let formArr = ref([
    ]);

    return {
        relateProdTotal,
        relateProdCheck,
        randomProductCheck,
        relateArticleCheckbox,
        relateVideoCheckbox,
        relateKeyword,
        industry,
        addPageIndustry,
        pageDescS1,
        pageDescS1Arr,
        pageDescS2,
        pageDescS2Arr,
        pageDescS3,
        pageDescS3Arr,
        formArrActive,
        formArr
    }
}