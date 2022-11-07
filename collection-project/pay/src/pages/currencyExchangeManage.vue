<template>
  <div class="main">
    <div class="top" :class="isFixd?'fix-container':''">
      <span>{{ $t('exchange.huilvguanli') }}</span>
    </div>
    <div class="bottom" :class="isFixd?'fix-mt73':''">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column :label="$t('exchange.huobimingcheng')">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{
              $t('exchange.currency.' + scope.row.currencyUnit)
            }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('exchange.jiagefuhao')">
          <template slot-scope="scope">
            <span style="margin-left: 10px">{{
              scope.row.currencySymbol
            }}</span>
          </template>
        </el-table-column>
        <el-table-column :label="$t('exchange.huilv')" min-width="190px">
          <template slot-scope="scope">
            <el-input-number
              v-model="scope.row.exchangeRate"
              :precision="2"
              :step="0.1"
              :max="10000"
              :disabled="scope.row.isDefault == 1"
            ></el-input-number>
          </template>
        </el-table-column>
        <el-table-column :label="$t('exchange.qiyong')">
          <template slot-scope="scope">
            <el-switch
              v-model="scope.row.usingStatus"
              inactive-color="#9399AD"
              active-text=""
              inactive-text=""
              active-value="1"
              inactive-value="0"
              :disabled="scope.row.isDefault == 1"
            >
            </el-switch>
          </template>
        </el-table-column>
        <el-table-column :label="$t('exchange.moren')">
          <template slot-scope="scope">
            <el-button
              @click="handleClick(scope.$index)"
              type="text"
              size="small"
              :class="scope.row.isDefault == 1 ? 'active' : ''"
              >{{ $t('exchange.sheweimoren') }}</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="operation_con">
      <el-button class="save_button" @click="update_exchange">
        {{ $t('common.baocun') }}
      </el-button>
    </div>
  </div>
</template>

<script>
import { exchange, changeRate } from '@/config/api';
import watchpageSroll from '@/Mixins/watchpageSroll';

export default {
  name: 'payManage',
  mounted() {
    exchange()
      .then(res => {
        if (res.data.message == 'SUCCESS') {
          this.tableData = res.data.result.exchanges;
        } else {
          this.$message.error(this.$t('request.error2'));
        }
      })
      .catch(() => {
        this.$message.error(this.$t('request.error2'));
      });
    // support()
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(() => {
    //     this.$message.error('抱歉，后台返回了错误，初始化数据失败');
    //   });
  },
  data() {
    return {
      tableData: [],
    };
  },
  mixins:[watchpageSroll],
  methods: {
    handleClick(index) {
      this.tableData.map((param, i) => {
        if (index == i) {
          param.isDefault = '1';
          param.exchangeRate = '1';
          param.usingStatus = '1';
        } else {
          param.isDefault = 0;
        }
      });
    },
    async update_exchange() {
      try {
        let data = {
          exchanges: this.tableData,
        };
        let result = await changeRate(data);
        if (result.data.message === 'SUCCESS') {
          this.$message({
            showClose: true,
            message: this.$t('operate.caoZuoChengGong'),
            type: 'success',
          });
        } else {
          this.$message.error(this.$t('request.error1'));
        }
      } catch (error) {
        this.$message.error(this.$t('request.error1'));
      }
    },
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  .top {
    width: calc(100% - 30px);
    height: 72px;
    background: #f1f1f1;
    font-size: 18px;
    display: flex;
    vertical-align: middle;
    justify-content: flex-start;
    align-items: center;
    font-weight: bold;
    padding-left: 30px;
    border-bottom: 1px solid #dddfe3;
  }
  .bottom {
    width: 100%;
    height: calc(100% - 74px - 60px);
    padding: 30px;
    box-sizing: border-box;
    overflow: auto;
    .active {
      background: #ff9a3c;
      color: #fff;
      padding-left: 6px;
      padding-right: 6px;
    }
  }
  .operation_con {
    width: 100%;
    height: 60px;
    background: #fff;
    box-shadow: 0px -3px 6px rgba(159, 159, 159, 0.2);
    padding: 0;
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 99999;
    .save_button {
      width: 100px;
      height: 40px;
      margin-top: 10px;
      margin-left: 20px;
      background: rgb(12, 206, 127);
      color: #fff;
      border-radius: 3px;
    }
  }
}
</style>
