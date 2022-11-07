import { ref,onMounted } from 'vue'

export default function useChooseTemplate() {
    let chooseTemplateVisible = ref(false);
    let activeTemlate = ref(null);
    let chooseTemplateList = ref([
    ])

    let handlerChooseTemCalc = () => {
        chooseTemplateVisible.value = false
    }

    let handlerChooseTemp = (encodeId,handlerGetComponentSetting) => {
        activeTemlate.value = encodeId;
        handlerChooseTemCalc();

        handlerGetComponentSetting({encodeId});
    }

    return {
        activeTemlate,
        chooseTemplateVisible,
        chooseTemplateList,
        handlerChooseTemCalc,
        handlerChooseTemp
    }
}