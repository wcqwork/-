import { ref,reactive } from "vue";

export default function useSelectMain() {
    
    let keyWordNum = ref(762)
    let radio = ref('0')
    let keywords = ref([])
    let checked = ref(false)
    let page = ref(40)
    let day = ref(10)
    let total = ref(0)
    let exist = ref(0)
    let dialogTableVisible = ref(false)
    let dialogAddVisible = ref(false)

    let textarea = ref('')
    return {
        radio,
        checked,
        page,
        day,
        dialogTableVisible,
        dialogAddVisible,
        textarea,
        keyWordNum,
        keywords,
        total,
        exist
    }
}