<template>
    <div class="setup-item">
        <div class="item-title">
            随机产品
        </div>
        <div class="f-item-titel">
            展示数量
            <div class="three-title">
                系统会随机调取网站中的产品进行展示
            </div>
        </div>
        <div class="item-content">
            <div class="f-item-content">
                <div class="relateTotal">
                    <el-input v-model="cptObj.randomProd.number" oninput ="value=value.replace(/[^\d]/g, '').replace(/^0/,'');if(value < 0) value = 1; if(value > 20) value = 20;">
                    </el-input>
                    <span class="rela-tiao">条</span>
                </div>
                <span class="f-tip">最多支持展示20条</span>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref, defineProps, watch, defineExpose, toRefs } from 'vue'


let props = defineProps({
    cptObj: {
        type: Object,
        default: {}
    }
})

let { cptObj } = toRefs(props);
</script>

