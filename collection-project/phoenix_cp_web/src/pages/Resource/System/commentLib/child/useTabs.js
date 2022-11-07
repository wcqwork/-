import { ref } from "vue"

export default function useTabs(){
    let activeTabName = ref('comment');

    const handleTabsClick = (handlerTabSwitch) => {
        // activeTabName.value
        handlerTabSwitch(activeTabName.value);
      }
    
    return {
        activeTabName,
        handleTabsClick
    }
}