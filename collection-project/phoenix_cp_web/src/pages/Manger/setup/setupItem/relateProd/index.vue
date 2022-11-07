<template>
    <div class="setup-item">
        <div class="item-title">
            相关产品
        </div>
        <div class="f-item-titel">
            展示数量
            <div class="f-item-content">
                <div class="relateTotal">
                    <el-input v-model="cptObj.relateProd.number" oninput ="value=value.replace(/[^\d]/g, '').replace(/^0/,'');if(value < 0) value = 1; if(value > 10) value = 10;">
                    </el-input>
                    <span class="rela-tiao">条</span>
                </div>
                <span class="f-tip">最多支持展示10条</span>
            </div>
        </div>
        <div class="item-content">
            <div class="three-content">
                <div class="three-title">优先级</div>
                <div class="fourth-content">
                    <div class="f-checkbox">
                        <el-checkbox v-model="cptObj.relateProd.priority" :true-label="1" :false-label="0"
                            size="large" />
                    </div>
                    <div>
                        <div class="tip-f-checkbox">优先调用网站中与当前关键词相关联的产品，数量不足时随机选择网站中的其它产品</div>
                        <div class="tip-f-checkbox-tip">若不勾选，系统会随机展示网站中的产品</div>
                    </div>
                </div>
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

