import {
  updatepayproperty,
} from '@/config/api';
import {
  clone
} from '@/utils';
// 信用卡及其他支付方式银行卡支付 下拉表单公共方法
export default {
  
  methods: {
    /** 卡片全局通用提交表单
     * sumbit_Pay: 提交表单
     * @param item 当前卡片数据(下面几个方法一致)
     * @param formName 表单名称(下面几个方法一致)
     * @param props 表单参数字段(下面几个方法一致)
     * @param type 卡片类型
     */
    sumbit_Pay (item, formName, props, type) {
      // payProperty递增
      Object.keys(this[formName]).forEach(ele => {
        item.payProperty = item.payProperty ? item.payProperty : {}
        item.payProperty[ele] = this[formName][ele]
      })

      this.$refs[formName][0].validate(valid => {
        if (valid) {
          // 默认支持信用卡类型
          if (!item.payProperty.selectedCreditCardList && type && type === 1) {

            switch (Number(item.payGroup)) {
              // allinpay
              case 9:
                item.payProperty.selectedCreditCardList = ["VISA", "Mastercard", "AmericanExpress", "Discover"]
                break
              // lianlian
              case 18:
                item.payProperty.selectedCreditCardList = ["VISA", "Mastercard", "AmericanExpress", "JCB", "Diners", "Discover"]
                break
              // Cashier
              case 1:
                item.payProperty.selectedCreditCardList = ["VISA", "Mastercard", "AmericanExpress"]
                break
              // 其他信用卡
              default:
                item.payProperty.selectedCreditCardList = ["VISA", "Mastercard", "AmericanExpress", "JCB"]
                break

            }
          }
          updatepayproperty({
            payTypeId: item.payTypeId,
            payProperty: JSON.stringify(item.payProperty),
          })
            .then(res => {
              if (res.data.message === 'SUCCESS') {
                item.Pay_change = false;
                this.$message({
                  showClose: true,
                  message: this.$t('operate.caoZuoChengGong'),
                  type: 'success',
                });
                Object.keys(props).forEach(ele => {
                  item.payProperty[ele] = this[formName][ele];
                });
              } else {
                this.$message.error(this.$t('request.error1'));
              }
            })
            .catch(() => {
              this.$message.error(this.$t('request.error1'));
            });
        } else {
          item.Pay_change = true;
          console.log('error submit!!');
          return false;
        }
      });
    },
    // 改变
    Pay_change (item, formName, props) {
      if (props) {
        Object.keys(props).forEach(ele => {
          this[formName][ele] = item.payProperty[ele]
        })
      }
      item.Pay_change = true;
      this.oldForm = clone(this[formName])
    },
    // 解绑
    unbind_Pay (item, formName, props) {
      if (item.usingStatus == 1) {
        this.$message(this.$t('exchange.message1'));
        return;
      }

      this.$confirm(
        this.$t('exchange.confirm5'),
        this.$t('exchange.confirm6'), {
        confirmButtonText: this.$t('common.queDing'),
        cancelButtonText: this.$t('common.quXiao'),
        type: 'warning',
        customClass: 'confrim_costom',
      },
      )
        .then(() => {
          updatepayproperty({
            payTypeId: item.payTypeId,
            payProperty: '',
            usingStatus: '0',
          })
            .then(res => {
              if (res.data.message === 'SUCCESS') {
                this.$message({
                  showClose: true,
                  message: this.$t('operate.caoZuoChengGong'),
                  type: 'success',
                });
                Object.keys(props).forEach(ele => {
                  this[formName][ele] = ''
                })
                item.payProperty = '';
              } else {
                this.$message.error(this.$t('request.error1'));
              }
            })
            .catch(() => {
              this.$message.error(this.$t('request.error1'));
            });
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('operate.yiQuXiaoCaoZuo'),
          });
        });
    },
    // 取消按钮
    cancel_Change (item, formName) {
      item.Pay_change = false;
      Object.keys(this.oldForm).forEach(ele => {
        this[formName][ele] = this.oldForm[ele]
        if (item.payProperty) {
          item.payProperty[ele] = this.oldForm[ele]
        }
      })
    },
    // 切换下拉框
    showControl (item) {
      item.payTypeName = item.payTypeName.split(',')[0] + ',' + Math.random();
      item.Pay_info_show = !item.Pay_info_show;
    },
    
  },
 
}