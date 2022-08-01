<template>
  <div class="pager_box">
    <div class="left_number" v-if="!!total">
      <el-row v-if="!contactFlag">
        <span>共{{ total }}条记录</span>
        <span>每页显示</span>
        <ul>
          <li
            v-for="item in groupData"
            :key="item"
            @click="perPageSize(item)"
            :class="{ borderColor: item === pageSize }"
          >
            {{ item }}
          </li>
        </ul>
        <span v-if="showMax">最多支持{{ maxNumber }}条</span>
      </el-row>
      <el-row v-else>
        <span>共计{{ total }} 位联系人</span>
      </el-row>
    </div>
    <el-row class="flex-a-center">
      <el-pagination
        class="paginationAll"
        small
        background
        :page-size="pageSize"
        :current-page="currentPage"
        layout="prev, pager, next"
        prev-text="上一页"
        next-text="下一页"
        :total="total"
        @current-change="currentChange"
        :hide-on-single-page="true"
      />
      <p class="lastPage" @click="lastPage" v-if="total > pageSize">末页</p>
    </el-row>
  </div>
</template>
<script setup>
import { defineProps, defineEmits, ref, defineExpose, onMounted,watch } from "vue";
/**
 * @description props 字段详解
 * total 总条数
 * showMax 显示最多支持条数
 * maxNumber 最多支持条数
 * groupData 每页显示数量list
 * pageSize 每页显示数量
 */
const props = defineProps({
  total: {
    type: Number,
    default: 0,
  },
  showMax: {
    type: Boolean,
    default: false,
  },
  maxNumber: {
    type: Number,
    default: 5000,
  },
  groupData: {
    type: Array,
    default: () => [10, 20, 30, 50],
  },
  pageSize: {
    type: Number,
    default: 20,
  },
  contactFlag: {
    type: Boolean,
    default: false,
  },
  getList:{
    type:Function,
    default:() => {}
  },
  pageCurrent:{
    type:Number,
    default:1
  }
});

//当前分页位置
let currentPage = ref(1);
let emit = defineEmits(["perPageSize", "currentChange"]);

//每页显示数量
let perPageSize = (current) => {
  currentPage.value = 1;
  emit("perPageSize", current, props.getList);
};
//分页切换事件
let currentChange = (current) => {
  currentPage.value = current;
  emit("currentChange", current, props.getList);
};
//最后一页
let lastPage = () => {
  let max = Math.ceil(props.total / props.pageSize);
  currentPage.value = max;
  emit("currentChange", max, props.getList);
};
//复位页数
let resetPage = (e) => {
  console.log("复位");
  currentPage.value = e;
};

watch(() => props.pageCurrent,() => {
  currentPage.value = props.pageCurrent;
})
//暴露方法
defineExpose({ resetPage });
</script>
<style scoped lang="scss">
.pager_box {
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  .left_number {
    display: flex;
    font-size: 12px;
    color: #343a56;
    ul {
      display: flex;
      margin-right: 5px;
      li {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 5px;
        width: 22px;
        height: 22px;
        border: 1px solid #d8dbe6;
        color: #848ba4;
      }
      li:hover {
        cursor: pointer;
      }
      .borderColor {
        border-color: #848ba4;
      }
    }
    span {
      display: flex;
      align-items: center;
      margin-right: 10px;
    }
  }

  :deep(.paginationAll.el-pagination.is-background) {
    .el-pager li {
      border: 1px solid #d8dbe6;
      background: #fff;
    }
    .el-pager li:not(.is-disabled).is-active {
      background: $df-blue;
    }
    .btn-prev {
      border: 1px solid #d8dbe6;
      background: #fff;
      padding: 0 10px;
    }
    .btn-next {
      border: 1px solid #d8dbe6;
      background: #fff;
      padding: 0 10px;
    }
  }
  .lastPage {
    border: 1px solid #d8dbe6;
    background: #fff;
    padding: 0 10px;
    font-size: 12px;
    height: 22px;
    line-height: 22px;
    margin-left: 8px;
    cursor: pointer;
  }
  .lastPage:hover {
    color: $df-blue;
  }
}
</style>
