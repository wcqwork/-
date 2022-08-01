<template>
  <el-table :data="tableData" style="width: 100%;" :header-cell-class-name="headerCellClassName"
    :row-class-name="rowClassName" :stripe="stripe" @sort-change="sortChange" v-bind="$attrs">
    <template #empty>
      <el-empty description="暂无列表信息" />
    </template>
    <template v-for="item in configTable.tHead">
      <el-table-column :label="item.label" v-if="item.slot" :min-width="item.width" :sortable="item.sortable ? 'custom' : false" :prop="item.prop"
        :key="item.label" :fixed="!item.fixed ? false : item.fixed">
        <template #default="scope">
          <slot :name="item.slotName" :data="scope.row"></slot>
        </template>
      </el-table-column>
      <el-table-column :label="item.label" :prop="item.prop" :min-width="item.width" :sortable="item.sortable  ? 'custom' : false "
        :key="item.label" v-else></el-table-column>
    </template>
  </el-table>
</template>

<script setup>
import { defineProps, defineEmits, computed, isRef } from "vue";
/**
 * @description props 字段详解
 * @example configTable :{ tHead: [], tableData: [] }
 * tHead 默认表头 type:Array
 * tableData  表格数据 type:Array
 * stripe  是否为斑马纹 table 默认false
 * headerCellClassName  表头单元格标识类名，可不传
 * rowClassName  表格行标识类名，可不传
 */
let props = defineProps({
  configTable: {
    type: Object,
    default: () => ({ tHead: [], tableData: [] }),
  },
  stripe: {
    type: Boolean,
    default: false,
  },
  headerCellClassName: {
    type: String,
    default: "",
  },
  rowClassName: {
    type: String,
    default: "",
  },
  getList: {
    type: Function,
    default: () => { }
  }
});
//检查tableData响应数据类型
const tableData = computed(() => {
  return isRef(props.configTable.tableData)
    ? props.configTable.tableData.value
    : props.configTable.tableData;
});

const emit = defineEmits(["sortChange"]);
//排序
let sortChange = (e) => {
  emit("sortChange", e, props.getList);
};
</script>
