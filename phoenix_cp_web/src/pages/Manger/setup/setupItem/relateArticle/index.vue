<template>
    <div class="setup-item">
        <div class="item-title">
            相关文章
        </div>
        <div class="f-item-titel">
            展示数量
            <div class="f-item-content">
                <div class="relateTotal">
                    <el-input v-model="cptObj.relateArticle.number" oninput ="value=value.replace(/[^\d]/g, '').replace(/^0/,'');if(value < 0) value = 1; if(value > 10) value = 10;">
                    </el-input>
                    <span class="rela-tiao">篇</span>
                </div>
                <span class="f-tip">最多支持展示10条</span>
            </div>
        </div>
        <div class="item-content">
            <div class="three-content">
                <div class="three-title">优先级</div>
                <div class="fourth-content">
                    <div class="f-checkbox">
                        <el-checkbox v-model="cptObj.relateArticle.priority" size="large" :true-label="1"
                            :false-label="0" />
                    </div>
                    <div>
                        <div class="tip-f-checkbox">优先调用网站中与当前关键词关联的文章，数量不足时随机调取“共享资源库-文章库”中的文章，请确保库里存在文章，以免影响页面生成</div>
                        <div class="tip-f-checkbox-tip">若不勾选，系统会随机调取“共享资源库-文章库”中的文章，但这类文章无法点击查看详情</div>
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

