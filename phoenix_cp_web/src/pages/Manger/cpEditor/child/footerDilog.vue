<template>
    <!-- 分页 -->
    <div class="footer">
        <div>
            <el-pagination :page-size="pageSize" :pager-count="5" layout="prev, pager, next" :total="totalContet"
                @current-change="currentChange"
                :hide-on-single-page="true" />
        </div>
        <span class="dialog-footer">
            <el-button @click="handlerCalc">取消</el-button>
            <el-button type="primary" @click="handlerSetUpOk">确定</el-button>
        </span>
    </div>
</template>

<script setup>
import {
    ref,
    defineProps,
    computed,
    reactive,
    onActivated,
    defineExpose,
    defineEmits
} from 'vue';



let pageCurrent = ref(1); // pageCurrent  pageNumber
let pageSize = ref(10);
let totalContet = ref(30);


let emit = defineEmits(["handlerCloseDialog"]);
let handlerCalc = () => {
    emit("handlerCloseDialog", false);
}
let handlerSetUpOk = () => {
    handlerCalc();
}

let currentChange = (current) => {
    pageCurrent.value = current;
    console.log(current)
}
</script>

<style lang="scss" scoped>
.footer {
    display: flex;
    justify-content: space-between;
}
</style>