<template>
    <div class="setup-item">
        <div class="item-title">
            相关视频
        </div>
        <div class="f-item-titel">
            展示数量
            <div class="f-item-content">
                <div class="relateTotal">
                    <el-input v-model="cptObj.relateVideo.number" oninput ="value=value.replace(/[^\d]/g, '').replace(/^0/,'');if(value < 0) value = 1; if(value > 5) value = 5;">
                    </el-input>
                    <span class="rela-tiao">条</span>
                </div>
                <span class="f-tip">最多支持展示5条</span>
            </div>
        </div>
        <div class="item-content">
            <div class="three-content">
                <div class="three-title">优先级</div>
                <div class="fourth-content">
                    <div class="f-checkbox">
                        <el-checkbox v-model="cptObj.relateVideo.priority" size="large" :true-label="1"
                            :false-label="0" />
                    </div>
                    <div>
                        <div class="tip-f-checkbox">优先随机调用网站中的视频，数量不足时随机调取“共享资源库-视频库”中的视频，请确保库里存在视频，以免影响页面生成</div>
                        <div class="tip-f-checkbox-tip">若不勾选，系统会随机展示“共享资源库-视频库”中的视频</div>
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

