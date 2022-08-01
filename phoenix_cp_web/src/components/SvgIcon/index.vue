<template>
  <svg
    :class="svgClass"
    :style="{ width: size + 'px', height: size + 'px', color: color }"
    aria-hidden="true"
  >
    <use :xlink:href="`#icon-${name}`" />
  </svg>
</template>

<script setup>
import { computed, defineProps } from "vue";
let props = defineProps({
  name: { type: String, required: true }, // svg 图标名称
  className: { type: String, default: "" }, // 指定的类样式
  size: { type: String, default: "32" }, // 图标尺寸
  color: { type: String, default: "#000" }, // 图标颜色
});
let svgClass = computed(() => {
  return !props.className ? "svg-icon" : "svg-icon " + props.className;
});
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  outline: none;
  cursor: pointer;
}
</style>
