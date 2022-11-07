<template>
    <!-- 顶部 -->
    <div class="flex-j-s-b" style="margin-bottom: 15px;">
        <el-row class="flex-a-center">
            <strong class="company-title">
                <slot name="title"></slot>
            </strong>
        </el-row>
        <el-row>
            <slot name="right"></slot>
        </el-row>
    </div>
</template>

<script setup>
</script>


<style lang="scss" scoped>

</style>