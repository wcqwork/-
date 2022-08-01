import { ref,watch } from "vue";

export default function useCheck(props,multipleSelection,twoTabsMultipCheckAll,tableListArr) {
    let isShowFlag = ref(true); // 切换禁用| 全选
    let tableCheckAll = ref(false); // 当前状态是否全选

    let handlerIsshowFlag = () => {
        if ((multipleSelection.value.length > 0 || twoTabsMultipCheckAll.value.length > 0) && !tableCheckAll.value) {
            isShowFlag.value = true;
        } else {
            isShowFlag.value = false;
        }
    }

    let handlerIsChenckAll = (arr, checkArr) => {
        let noChooseCout = 0; //当前页面 没有选择的
        let newCheckAll = checkArr.map((item) => {
            return item.encodeId
        })
        arr.forEach(item => {
            let isHas = newCheckAll.includes(item.encodeId);
            if (!isHas) {
                noChooseCout++;
            }
        });
        // 跟页面剩余可以选的对比
        let limitNum =  props.limitNum;
        if(props.currentEdit == 'radomProduct'){
            limitNum = 20;
        }
        let yuNum = limitNum - checkArr.length; //剩余可以选多少个
        if (yuNum >= 0 && noChooseCout <= yuNum) {
            tableCheckAll.value = true;
        } else {
            tableCheckAll.value = false;
        }
    }

    let handlerChange = () => {
        let otherArr = ['relateArticle', 'relateVideo'] //有两个tabs
        if (otherArr.includes(props.currentEdit)) {
            handlerIsChenckAll(tableListArr.value, twoTabsMultipCheckAll.value); //处理全选
        } else {
            handlerIsChenckAll(tableListArr.value, multipleSelection.value); //处理全选
        }
        handlerIsshowFlag();//处理全选
    }

    watch(() => multipleSelection.value, () => { 
        handlerChange();
    })

    watch(() => twoTabsMultipCheckAll.value, () => { 
        handlerChange();
    })

    watch(() => tableListArr.value, () => {
        handlerChange();
    })

    return {
        isShowFlag
    }
}