
<template>
  <div v-show="visible" @click="closeClick" class="showPhoto">
    <div class="showPhoto_item">
      <div class="closebtn">
        <span class="cirl"><img src="@/assets/img/关闭.png" alt="" /></span>
      </div>
      <img class="img" :src="url" alt="图片加载失败" />
    </div>
  </div>
</template>

<script setup>
import {
  defineProps,
  defineEmits
} from 'vue';
let emit = defineEmits(["closeClick"])
let props = defineProps({
  url: {
    type: String,
    default: ""
  },
  visible: {
    type: Boolean,
    default: false
  }
})

let closeClick = () => {//子组件可以使用 $emit 触发父组件的自定义事件
  emit('closeClick')
}
</script>
<style lang="scss" scoped>
.showPhoto {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 999999999999999;
  display: flex;

  .showPhoto_item {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, calc(-50% + 20px));
    width: 50%;
    max-width: 400px;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .img {
    display: block;
    margin: auto 0;
    text-align: center;
  }
}

.closebtn {
  display: inline-block;
  text-align: right;
  margin-bottom: 10px;
  cursor: pointer;

  .cirl {
    display: inline-block;
    width: 36px;
    height: 36px;
    background: #ffffff;
    border-radius: 100%;
    text-align: center;
    line-height: 43px;
    vertical-align: middle;

    img {
      width: 18px;
    }
  }
}
</style>