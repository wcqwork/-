import { ref } from "vue";

export default function useTip(){
    let tipFlag = ref('true');
    let closeTip = () => {
        tipFlag.value = "false";
    };

    return {
        tipFlag,
        closeTip
    }
}