import { ref } from "vue";

export default function useTip(tipFlagState){
    let tipFlag = ref('false');
    let closeTip = () => {
        tipFlag.value = "false";
        tipFlagState.value = false;
    };

    return {
        tipFlag,
        closeTip
    }
}