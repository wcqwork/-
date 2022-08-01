<template>
  <div class="main">
    <div class="top" :class="isFixd?'fix-container':''">
      <span @click="to_url('/payManage')" class="top-title" style="cursor: pointer"
        ><i class="el-icon-arrow-left"></i>
        {{ $t('common.fanHuiShouKuanYe') }}</span
      >
    </div>
    <div class="page-title-container" :class="isFixd?'fix-mt93':''">
        <span class="title">{{ $t('common.payMethodTitle') }}</span>
        <span class="desc">{{ $t('paymentMethod.payInnerTitle') }}</span>
    </div>
    <!-- 卡片列表循环渲染 -->
    <div style="box-sizing: border-box; padding: 30px;padding-top: 0;" class="card-container" ref='cardList'>
      <creditCard
        :ref="'creditCard' + payTypeObject.payTypeId"
        :payTypeObject="payTypeObject"
        v-for="payTypeObject in payList"
        :key="payTypeObject.payTypeId"
        @showControl="showControl"
        @credit_dialog_control="creditDialogControl"
        @stopCard="stopCard"
        :registerUrl="payTypeObject.registerUrl"
        @activeCard="activeCard"
      >
        <!-- allinpay -->
        <template v-if="Number(payTypeObject.payGroup) === 15">
          <template slot="cardInfo">
            <div class="card-type">
              <span>{{ $t('paymentMethod.creditCardInfo.lable') }}： </span>
              <a href="https://www.allinpay.com/" target="_blank">{{
                $t('paymentMethod.creditCardInfo.linkDesc')
              }}</a>
            </div>
          </template>
          <template slot="form">
            <div class="paypal_infos_con">
              <el-form
                :model="ruleForm2"
                :rules="rules2"
                ref="ruleForm2"
                class="demo-ruleForm"
                labelPosition="right"
                label-width="100px"
              >
                <div class="infos">
                  <el-form-item
                    :label="$t('exchange.zhiFuShangHuHao')"
                    prop="mchtId"
                  >
                    <el-input
                      v-model="ruleForm2.mchtId"
                      class="inputs"
                      :placeholder="
                        $t('common.qingShuRu') + $t('exchange.zhiFuShangHuHao')
                      "
                    ></el-input>
                  </el-form-item>
                </div>
                <div class="buttons">
                  <el-button
                    class="sumbit_button"
                    @click="
                      sumbit_Pay(payTypeObject, 'ruleForm2', { mchtId: '' }, 1)
                    "
                  >
                    {{ $t('common.bangDing') }}
                  </el-button>
                  <el-button
                    v-if="payTypeObject.Pay_change"
                    class="cancel_button"
                    @click="cancel_Change(payTypeObject, 'ruleForm2')"
                  >
                    {{ $t('common.quXiao') }}
                  </el-button>
                </div>
              </el-form>
            </div>
          </template>
          <template slot="formInfo">
            <div class="paypal_infos_con">
              <div class="title">{{ $t('common.zhangHaoXinXi') }}：</div>
              <div class="infos">
                <span class="label">{{ $t('exchange.zhiFuShangHuHao') }}</span>
                <span class="content">{{
                  payTypeObject ? payTypeObject.payProperty.mchtId : ''
                }}</span>
              </div>
              <div class="buttons">
                <el-button
                  class="sumbit_button"
                  @click="
                    Pay_change(payTypeObject, 'ruleForm2', { mchtId: '' })
                  "
                >
                  {{ $t('common.gengHuanZhangHu') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  @click="
                    unbind_Pay(payTypeObject, 'ruleForm2', { mchtId: '' })
                  "
                >
                  {{ $t('common.jieBang') }}
                </el-button>
              </div>
            </div>
          </template>
        </template>
        <!-- strip -->
        <template v-if="Number(payTypeObject.payGroup) === 9">
          <template slot="form">
            <div class="title">
              {{ $t('common.zhangHuXinXi') }}：
            </div>
            <el-form
              :model="ruleForm"
              :rules="rules"
              ref="ruleForm"
              class="demo-ruleForm"
              labelPosition="right"
              label-width="200px"
            >
              <div class="infos">
                <el-form-item
                  :label="$t('exchange.keFaBuMiShi')"
                  prop="pk_live"
                >
                  <el-input
                    v-model="ruleForm.pk_live"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.keFaBuMiShi')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.mishi')" prop="sk_live">
                  <el-input
                    v-model="ruleForm.sk_live"
                    class="inputs"
                    :placeholder="$t('common.qingShuRu') + $t('exchange.mishi')"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="buttons">
                <el-button
                  class="sumbit_button"
                  @click="
                    sumbit_Pay(payTypeObject, 'ruleForm', {
                      sk_live: '',
                      pk_live: '',
                    }, 1)
                  "
                >
                  {{ $t('common.bangDing') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  v-show="payTypeObject.Pay_change"
                  @click="cancel_Change(payTypeObject, 'ruleForm')"
                >
                  {{ $t('common.quXiao') }}
                </el-button>
              </div>
            </el-form>
          </template>
          <template slot="formInfo">
            <div class="title">{{ $t('common.zhangHaoXinXi') }}：</div>
            <div class="infos">
              <span class="label">{{ $t('exchange.keFaBuMiShi') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.pk_live : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">{{ $t('exchange.mishi') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.sk_live : ''
              }}</span>
            </div>
            <div class="buttons">
              <el-button
                class="sumbit_button"
                @click="
                  Pay_change(payTypeObject, 'ruleForm', {
                    sk_live: '',
                    pk_live: '',
                  })
                "
              >
                {{ $t('common.gengHuanZhangHu') }}
              </el-button>
              <el-button
                class="cancel_button"
                @click="
                  unbind_Pay(payTypeObject, 'ruleForm', {
                    sk_live: '',
                    pk_live: '',
                  })
                "
              >
                {{ $t('common.jieBang') }}
              </el-button>
            </div>
          </template>
          <!-- 卡片右侧提示 -->
          <template slot="cardInfo">
            <p class="strip-info-container" v-html="$t('creditCard.stripe.info')">
            </p>
          </template>
        </template>
        <!-- wintoPay -->
        <template v-if="Number(payTypeObject.payGroup) === 11">
          <template slot="form">
            <div class="title">
              {{ $t('common.zhangHuXinXi') }}：
            </div>
            <el-form
              :model="ruleForm3"
              :rules="rules3"
              ref="ruleForm3"
              class="demo-ruleForm"
              labelPosition="right"
              label-width="100px"
            >
              <div class="infos">
                <el-form-item :label="$t('exchange.winToPayShangHuHao')" prop="merchantNo">
                  <el-input
                    v-model="ruleForm3.merchantNo"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.winToPayShangHuHao')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item label="MD5key" prop="MD5key">
                  <el-input
                    v-model="ruleForm3.MD5key"
                    class="inputs"
                    :placeholder="$t('common.qingShuRu') +'MD5key'"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="buttons">
                <el-button
                  class="sumbit_button"
                  @click="
                    sumbit_Pay(payTypeObject, 'ruleForm3', {
                      merchantNo: '',
                      MD5key: '',
                    }, 1)
                  "
                >
                  {{ $t('common.bangDing') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  v-show="payTypeObject.Pay_change"
                  @click="cancel_Change(payTypeObject, 'ruleForm3')"
                >
                  {{ $t('common.quXiao') }}
                </el-button>
              </div>
            </el-form>
          </template>
          <template slot="formInfo">
            <div class="title">{{ $t('common.zhangHuXinXi') }}：</div>
            <div class="infos">
              <span class="label">{{ $t('exchange.winToPayShangHuHao') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.merchantNo : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">MD5key：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.MD5key : ''
              }}</span>
            </div>
            <div class="buttons">
              <el-button
                class="sumbit_button"
                @click="
                  Pay_change(payTypeObject, 'ruleForm3', {
                    merchantNo: '',
                    MD5key: '',
                  })
                "
              >
                {{ $t('common.gengHuanZhangHu') }}
              </el-button>
              <el-button
                class="cancel_button"
                @click="
                  unbind_Pay(payTypeObject, 'ruleForm3', {
                    merchantNo: '',
                    MD5key: '',
                  })
                "
              >
                {{ $t('common.jieBang') }}
              </el-button>
            </div>
          </template>
        </template>
        <!-- EecPay -->
        <template v-if="Number(payTypeObject.payGroup) === 14">
          <template slot="form">
            <div class="title">
              {{ $t('common.zhangHuXinXi') }}：
            </div>
            <el-form
              :model="ruleForm4"
              :rules="rules4"
              ref="ruleForm4"
              class="demo-ruleForm"
              labelPosition="right"
              label-width="100px"
            >
              <div class="infos">
                <el-form-item :label="$t('exchange.winToPayShangHuHao')" prop="merNo">
                  <el-input
                    v-model="ruleForm4.merNo"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.winToPayShangHuHao')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.winToPayZhongDuanHao')" prop="terNo">
                  <el-input
                    v-model="ruleForm4.terNo"
                    class="inputs"
                    :placeholder="$t('common.qingShuRu') + $t('exchange.winToPayZhongDuanHao')"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item label="Key" prop="key">
                  <el-input
                    v-model="ruleForm4.key"
                    class="inputs"
                    :placeholder="$t('common.qingShuRu') + 'Key'"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="buttons">
                <el-button
                  class="sumbit_button"
                  @click="
                    sumbit_Pay(payTypeObject, 'ruleForm4', {
                      terNo: '',
                      merNo: '',
                      key: '',
                    }, 1)
                  "
                >
                  {{ $t('common.bangDing') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  v-show="payTypeObject.Pay_change"
                  @click="cancel_Change(payTypeObject, 'ruleForm4')"
                >
                  {{ $t('common.quXiao') }}
                </el-button>
              </div>
            </el-form>
          </template>
          <template slot="formInfo">
            <div class="title">{{ $t('common.zhangHuXinXi') }}：</div>
            <div class="infos">
              <span class="label">{{ $t('exchange.winToPayShangHuHao') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.terNo : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">{{ $t('exchange.winToPayZhongDuanHao') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.merNo : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">Key：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.key : ''
              }}</span>
            </div>
            <div class="buttons">
              <el-button
                class="sumbit_button"
                @click="
                  Pay_change(payTypeObject, 'ruleForm4', {
                    terNo: '',
                    merNo: '',
                    key: '',
                  })
                "
              >
                {{ $t('common.gengHuanZhangHu') }}
              </el-button>
              <el-button
                class="cancel_button"
                @click="
                  unbind_Pay(payTypeObject, 'ruleForm4', {
                    terNo: '',
                    merNo: '',
                    key: '',
                  })
                "
              >
                {{ $t('common.jieBang') }}
              </el-button>
            </div>
          </template>
        </template>
        <!-- Cashier -->
        <template v-if="Number(payTypeObject.payGroup) === 1">
          <template slot="form">
            <div class="title">
              {{ $t('common.zhangHuXinXi') }}：
            </div>
            <el-form
              :model="ruleForm5"
              :rules="rules5"
              ref="ruleForm5"
              class="demo-ruleForm"
              labelPosition="right"
              label-width="100px"
            >
              <div class="infos">
                <el-form-item :label="$t('exchange.winToPayShangHuHao')" prop="merchant_id">
                  <el-input
                    v-model="ruleForm5.merchant_id"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.winToPayShangHuHao')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item label="privateKey" prop="private_key">
                  <el-input
                    v-model="ruleForm5.private_key"
                    class="inputs"
                    :placeholder="$t('common.qingShuRu') +'privateKey'"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="buttons">
                <el-button
                  class="sumbit_button"
                  @click="
                    sumbit_Pay(payTypeObject, 'ruleForm5', {
                      private_key: '',
                      merchant_id: '',
                    }, 1)
                  "
                >
                  {{ $t('common.bangDing') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  v-show="payTypeObject.Pay_change"
                  @click="cancel_Change(payTypeObject, 'ruleForm5')"
                >
                  {{ $t('common.quXiao') }}
                </el-button>
              </div>
            </el-form>
          </template>
          <template slot="formInfo">
            <div class="title">{{ $t('common.zhangHuXinXi') }}：</div>
            <div class="infos">
              <span class="label">{{ $t('exchange.winToPayShangHuHao') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.merchant_id : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">privateKey：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.private_key : ''
              }}</span>
            </div>
            <div class="buttons">
              <el-button
                class="sumbit_button"
                @click="
                  Pay_change(payTypeObject, 'ruleForm5', {
                    private_key: '',
                    merchant_id: '',
                  })
                "
              >
                {{ $t('common.gengHuanZhangHu') }}
              </el-button>
              <el-button
                class="cancel_button"
                @click="
                  unbind_Pay(payTypeObject, 'ruleForm5', {
                    private_key: '',
                    merchant_id: '',
                  })
                "
              >
                {{ $t('common.jieBang') }}
              </el-button>
            </div>
          </template>
        </template>
         <!-- PingPong -->
        <template v-if="Number(payTypeObject.payGroup) === 17">
          <template slot="form">
            <div class="title">
              {{ $t('common.zhangHuXinXi') }}：
            </div>
            <el-form
              :model="ruleForm6"
              :rules="rules6"
              ref="ruleForm6"
              class="demo-ruleForm"
              labelPosition="right"
              label-width="150px"
            >
              <div class="infos">
                <el-form-item :label="$t('exchange.pingpangCode')" prop="accId">
                  <el-input
                    v-model="ruleForm6.accId"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.pingpangCode')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.winToPayShangHuHao')" prop="clientId">
                  <el-input
                    v-model="ruleForm6.clientId"
                    class="inputs"
                    :placeholder="$t('common.qingShuRu') + $t('exchange.winToPayShangHuHao')"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.yanzhi')" prop="salt">
                  <el-input
                    v-model="ruleForm6.salt"
                    class="inputs"
                    :placeholder="$t('common.qingShuRu') + $t('exchange.yanzhi')"
                  ></el-input>
                </el-form-item>
              </div>
              <div class="buttons">
                <el-button
                  class="sumbit_button"
                  @click="
                    sumbit_Pay(payTypeObject, 'ruleForm6', {
                      accId: '',
                      clientId: '',
                      salt: '',
                    }, 1)
                  "
                >
                  {{ $t('common.bangDing') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  v-show="payTypeObject.Pay_change"
                  @click="cancel_Change(payTypeObject, 'ruleForm6')"
                >
                  {{ $t('common.quXiao') }}
                </el-button>
              </div>
            </el-form>
          </template>
          <template slot="formInfo">
            <div class="title">{{ $t('common.zhangHuXinXi') }}：</div>
            <div class="infos">
              <span class="label">{{ $t('exchange.pingpangCode') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.accId : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">{{$t('exchange.winToPayShangHuHao')}}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.clientId : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">{{ $t('exchange.yanzhi') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.salt : ''
              }}</span>
            </div>
            <div class="buttons">
              <el-button
                class="sumbit_button"
                @click="
                  Pay_change(payTypeObject, 'ruleForm6', {
                      accId: '',
                      clientId: '',
                      salt: '',
                    })
                "
              >
                {{ $t('common.gengHuanZhangHu') }}
              </el-button>
              <el-button
                class="cancel_button"
                @click="
                  unbind_Pay(payTypeObject, 'ruleForm6', {
                      accId: '',
                      clientId: '',
                      salt: '',
                    })
                "
              >
                {{ $t('common.jieBang') }}
              </el-button>
            </div>
          </template>
        </template>
        <!-- lianlian -->
        <template v-if="Number(payTypeObject.payGroup) === 18">
          <template slot="form">
            <div class="title">
              {{ $t('common.zhangHuXinXi') }}：
            </div>
            <el-form
              :model="ruleForm7"
              :rules="rules7"
              ref="ruleForm7"
              class="demo-ruleForm"
              labelPosition="right"
              label-width="150px"
            >
              <div class="infos">
                <el-form-item :label="$t('exchange.winToPayShangHuHao')" prop="merchantId">
                  <el-input
                    v-model="ruleForm7.merchantId"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.winToPayShangHuHao')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="buttons">
                <el-button
                  class="sumbit_button"
                  @click="
                    sumbit_Pay(payTypeObject, 'ruleForm7', {
                      merchantId: ''
                    }, 1)
                  "
                >
                  {{ $t('common.bangDing') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  v-show="payTypeObject.Pay_change"
                  @click="cancel_Change(payTypeObject, 'ruleForm7')"
                >
                  {{ $t('common.quXiao') }}
                </el-button>
              </div>
            </el-form>
          </template>
          <template slot="formInfo">
            <div class="title">{{ $t('common.zhangHuXinXi') }}：</div>
            <div class="infos">
              <span class="label">{{ $t('exchange.winToPayShangHuHao') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.merchantId : ''
              }}</span>
            </div>
            <div class="buttons">
              <el-button
                class="sumbit_button"
                @click="
                  Pay_change(payTypeObject, 'ruleForm7', {
                      merchantId: '',
                    })
                "
              >
                {{ $t('common.gengHuanZhangHu') }}
              </el-button>
              <el-button
                class="cancel_button"
                @click="
                  unbind_Pay(payTypeObject, 'ruleForm7', {
                      merchantId: ''
                    })
                "
              >
                {{ $t('common.jieBang') }}
              </el-button>
            </div>
          </template>
        </template>
        <!-- Oceanpayment -->
         <template v-if="Number(payTypeObject.payGroup) === 20">
          <template slot="form">
            <div class="title">
              {{ $t('common.zhangHuXinXi') }}：
            </div>
            <el-form
              :model="ruleForm8"
              :rules="rules8"
              ref="ruleForm8"
              class="demo-ruleForm"
              labelPosition="right"
              label-width="150px"
            >
              <div class="infos">
                <el-form-item :label="$t('exchange.userName')" prop="account">
                  <el-input
                    v-model="ruleForm8.account"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.userName')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.winToPayZhongDuanHao')" prop="terminl">
                  <el-input
                    v-model="ruleForm8.terminl"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.winToPayZhongDuanHao')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.safeCode')" prop="securecode">
                  <el-input
                    v-model="ruleForm8.securecode"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.safeCode')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.gongyao')" prop="key">
                  <el-input
                    v-model="ruleForm8.key"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.gongyao')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="buttons">
                <el-button
                  class="sumbit_button"
                  @click="
                    sumbit_Pay(payTypeObject, 'ruleForm8', {
                      account: '',
                      terminl: '',
                      securecode: '',
                      key: ''
                    }, 1)
                  "
                >
                  {{ $t('common.bangDing') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  v-show="payTypeObject.Pay_change"
                  @click="cancel_Change(payTypeObject, 'ruleForm8')"
                >
                  {{ $t('common.quXiao') }}
                </el-button>
              </div>
            </el-form>
          </template>
          <template slot="formInfo">
            <div class="title">{{ $t('common.zhangHuXinXi') }}：</div>
            <div class="infos">
              <span class="label">{{ $t('exchange.userName') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.account : ''
              }}</span>
            </div>
             <div class="infos">
              <span class="label">{{ $t('exchange.winToPayZhongDuanHao') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.terminl : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">{{ $t('exchange.safeCode') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.securecode : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">{{ $t('exchange.gongyao') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.key : ''
              }}</span>
            </div>
            <div class="buttons">
              <el-button
                class="sumbit_button"
                @click="
                  Pay_change(payTypeObject, 'ruleForm8', {
                      account: '',
                      terminl: '',
                      securecode: '',
                      key: ''
                    })
                "
              >
                {{ $t('common.gengHuanZhangHu') }}
              </el-button>
              <el-button
                class="cancel_button"
                @click="
                  unbind_Pay(payTypeObject, 'ruleForm8', {
                      account: '',
                      terminl: '',
                      securecode: '',
                      key: ''
                    })
                "
              >
                {{ $t('common.jieBang') }}
              </el-button>
            </div>
          </template>
        </template>
        <!-- Cybersource -->
         <template v-if="Number(payTypeObject.payGroup) === 21">
          <template slot="form">
            <div class="title">
              {{ $t('common.zhangHuXinXi') }}：
            </div>
            <el-form
              :model="ruleForm9"
              :rules="rules9"
              ref="ruleForm9"
              class="demo-ruleForm"
              labelPosition="right"
              label-width="150px"
            >
             <div class="infos">
                <el-form-item :label="$t('exchange.zhiFuShangHuHao')" prop="Merchat_id">
                  <el-input
                    v-model="ruleForm9.Merchat_id"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.zhiFuShangHuHao')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item label="ProfileID" prop="ProfileID">
                  <el-input
                    v-model="ruleForm9.ProfileID"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + 'ProfileID'
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.gongyao')" prop="Access_key">
                  <el-input
                    v-model="ruleForm9.Access_key"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.gongyao')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.yanzhi')" prop="Secret_key">
                  <el-input
                    v-model="ruleForm9.Secret_key"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.yanzhi')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.logingongyao')" prop="Merchant_key">
                  <el-input
                    v-model="ruleForm9.Merchant_key"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.logingongyao')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="infos">
                <el-form-item :label="$t('exchange.loginyanzhi')" prop="Merchant_shared_secret_key">
                  <el-input
                    v-model="ruleForm9.Merchant_shared_secret_key"
                    class="inputs"
                    :placeholder="
                      $t('common.qingShuRu') + $t('exchange.loginyanzhi')
                    "
                  ></el-input>
                </el-form-item>
              </div>
              <div class="buttons">
                <el-button
                  class="sumbit_button"
                  @click="
                    sumbit_Pay(payTypeObject, 'ruleForm9', {
                      Merchat_id: '',
                      ProfileID: '',
                      Access_key: '',
                      Secret_key: '',
                      Merchant_key: '',
                      Merchant_shared_secret_key: ''
                    }, 1)
                  "
                >
                  {{ $t('common.bangDing') }}
                </el-button>
                <el-button
                  class="cancel_button"
                  v-show="payTypeObject.Pay_change"
                  @click="cancel_Change(payTypeObject, 'ruleForm9')"
                >
                  {{ $t('common.quXiao') }}
                </el-button>
              </div>
            </el-form>
          </template>
          <template slot="formInfo">
            <div class="title">{{ $t('common.zhangHuXinXi') }}：</div>
            <div class="infos">
              <span class="label">{{ $t('exchange.zhiFuShangHuHao') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.Merchat_id : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">ProfileID：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.ProfileID : ''
              }}</span>
            </div>
             <div class="infos">
              <span class="label">{{ $t('exchange.gongyao') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.Access_key : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">{{ $t('exchange.yanzhi') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.Secret_key : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">{{ $t('exchange.logingongyao') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.Merchant_key : ''
              }}</span>
            </div>
            <div class="infos">
              <span class="label">{{ $t('exchange.loginyanzhi') }}：</span>
              <span class="content">{{
                payTypeObject ? payTypeObject.payProperty.Merchant_shared_secret_key : ''
              }}</span>
            </div>
            <div class="buttons">
              <el-button
                class="sumbit_button"
                @click="
                  Pay_change(payTypeObject, 'ruleForm9', {
                      Merchat_id: '',
                      ProfileID: '',
                      Access_key: '',
                      Secret_key: '',
                      Merchant_key: '',
                      Merchant_shared_secret_key: ''
                    })
                "
              >
                {{ $t('common.gengHuanZhangHu') }}
              </el-button>
              <el-button
                class="cancel_button"
                @click="
                  unbind_Pay(payTypeObject, 'ruleForm9', {
                      Merchat_id: '',
                      ProfileID: '',
                      Access_key: '',
                      Secret_key: '',
                      Merchant_key: '',
                      Merchant_shared_secret_key: ''
                    })
                "
              >
                {{ $t('common.jieBang') }}
              </el-button>
            </div>
          </template>
        </template>
      </creditCard>
    </div>

    <!-- 绑定信用卡弹框 -->
    <transitionDialog
      :creditCardTypes_show="creditCardTypes_show"
      :checkboxGroup.sync="checkboxGroup"
      :creditCardTypes="creditCardTypes"
      @save_select_credits="save_select_credits"
      @credit_dialog_control="creditDialogControl"
      @e_prevent="e_prevent"
    ></transitionDialog>
  </div>
</template>

<script>
import {
  activecreditcardstatus,
  inactivecreditcardstatus,
  updatepayproperty,
} from '@/config/api';
import transitionDialog from '../components/transitionDialog.vue';
import creditCard from '../components/creditCard.vue';
import mixins from '@/Mixins/card';
import watchpageSroll from '@/Mixins/watchpageSroll';
import { clone } from '@/utils';
export default {
  name: 'payManage',
  mounted() {
    if (!this.$route.params.data) {
      this.$router.back();
      return;
    }
    let payList =
      this.$route.params.data && JSON.parse(this.$route.params.data).payList;
    this.registerUrl = payList.registerUrl || '';
    if (payList && payList.length) {
      payList.map(param => {
        param.Pay_info_show = false;
        param.Pay_change = false;
        if (param.payGroup == 9) {
          param.logoSrc = require('@/assets/stripe_logo.png');
          param.payTypeName = 'Stripe';
          param.registerUrl = "https://stripe.com/"
          this.payList.push(param)
        } else if (param.payGroup == 15) {
          param.logoSrc = require('@/assets/AllinPay_logo.png');
          param.payTypeName = 'ALLINPAY';
          param.registerUrl = "https://www.allinpay.com/"
          this.payList.push(param)
        } else if (param.payGroup && Number(param.payGroup) == 11) {
          param.logoSrc = require('@/assets/Wintopay_logo.png');
          param.payTypeName = 'Wintopay';
          param.registerUrl = "https://www.Wintopay.com/"

          this.payList.push(param)
        } else if (param.payGroup && Number(param.payGroup) == 14) {
          param.logoSrc = require('@/assets/EecPay_logo.png');
          param.payTypeName = 'EecPay';
          param.registerUrl = "https://www.EecPay.com/"

          this.payList.push(param)
        } else if (param.payGroup && Number(param.payGroup) == 1) {
          param.logoSrc = require('@/assets/Cashier_logo.png');
          param.payTypeName = 'Cashier';
          param.registerUrl = "https://www.Cashier.com/"

          this.payList.push(param)
        } else if (param.payGroup && Number(param.payGroup) == 17) {
          param.logoSrc = require('@/assets/PingPong_logo.png');
          param.registerUrl = "https://www.pingpongx.com/"
          param.payTypeName = 'PingPong';
          this.payList.push(param)
        } else if (param.payGroup && Number(param.payGroup) == 18) {
          param.logoSrc = require('@/assets/LianLianPay_logo.png');
          param.payTypeName = 'LianLian Pay';
          param.registerUrl = "https://www.lianlianpay.com/"
          this.payList.push(param)
        } else if (param.payGroup && Number(param.payGroup) == 20) {
          param.logoSrc = require('@/assets/Oceanpayment.png');
          param.payTypeName = 'Oceanpayment';
          param.registerUrl = "https://www.Oceanpayment.com/"
          this.payList.push(param)
        } else if (param.payGroup && Number(param.payGroup) == 21) {
          param.logoSrc = require('@/assets/card_logo/Cybersource_logo.png');
          param.payTypeName = 'Cybersource';
          param.registerUrl = "https://www.Cybersource.com/"
          this.payList.push(param)
        } else {
          param.logoSrc = require('@/assets/LianLianPay_logo.png');
        }

      });
      // this.payList = payList;
    }
  },
  data() {
    return {
      creditCardTypes: require('../assets/data/creditCardTypes.json'),
      creditCardTypes_show: false,
      payList: [],
      ruleForm: {
        sk_live: '',
        pk_live: '',
      },
      ruleForm3: {
        merchantNo: '',
        MD5key: '',
      },
      ruleForm4: {
        terNo: '',
        merNo: '',
        key: '',
      },
      ruleForm5:{
        private_key: '',
        merchant_id: '',
      },
      ruleForm6: {
          accId: '',
          clientId: '',
          salt: '',
      },
      ruleForm7: {
        merchantId: ''
      },
      ruleForm8: {
        account: '',
        terminl: '',
        securecode: '',
        key: ''

      },
      ruleForm9: {
        ProfileID: '',
        Access_key: '',
        Secret_key: '',
        Merchant_key: '',
        Merchant_shared_secret_key: '',
        Merchat_id: ''
      },
       rules9:  {
           Merchat_id: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        ProfileID: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        Access_key: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        Secret_key: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        Merchant_key: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        Merchant_shared_secret_key: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ]
      },
      rules8:  {
        account: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        terminl: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        securecode: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        key: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ]
      },
      rules7: {
        merchantId: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ]
      },
      rules6: {
        accId: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        clientId: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        salt: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      rules4: {
        terNo: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        merNo: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        key: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      rules3: {
        merchantNo: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        MD5key: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      rules5: {
        private_key: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        merchant_id: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      rules: {
        sk_live: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
        pk_live: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      ruleForm2: {
        mchtId: '',
      },
      rules2: {
        mchtId: [
          {
            required: true,
            message: this.$t('operate.biTianXiang'),
            trigger: 'blur',
          },
        ],
      },
      checkboxGroup: [],
      checkAll: false,
      credit_editing: '',
      currentCardInfo: null,
      registerUrl: '',
      oldForm:{}
    };
  },
  components: { transitionDialog, creditCard },
  mixins: [mixins,watchpageSroll],
  methods: {
    // 停用
    stopCard(item) {
      this.$confirm(
        this.$t('exchange.confirm1'),
        this.$t('exchange.confirm2'),
        {
          confirmButtonText: this.$t('common.queDing'),
          cancelButtonText: this.$t('common.quXiao'),
          type: 'warning',
          customClass: 'confrim_costom',
        },
      )
        .then(async () => {
          try {
            let result = await inactivecreditcardstatus({
              payTypeId: item.payTypeId,
            });
            if (result.data.message === 'SUCCESS') {
              this.payList.forEach(ele => {
                if (ele.payTypeId === item.payTypeId) {
                  ele.usingStatus = 0;
                }
              });
            } else {
              this.$message.error(this.$t('request.error1'));
            }
          } catch (error) {
            this.$message.error(this.$t('request.error1'));
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('operate.yiQuXiaoCaoZuo'),
          });
        });
    },
    // 启用
    activeCard(item) {
      this.$confirm(
        this.$t('exchange.confirm3'),
        this.$t('exchange.confirm4'),
        {
          confirmButtonText: this.$t('common.queDing'),
          cancelButtonText: this.$t('common.quXiao'),
          type: 'warning',
          customClass: 'confrim_costom',
        },
      )
        .then(async () => {
          try {
            let result = await activecreditcardstatus({
              payTypeId: item.payTypeId,
            });
            if (result.data.message === 'SUCCESS') {
              this.payList.forEach(ele => {
                if (ele.payTypeId === item.payTypeId) {
                  ele.usingStatus = 1;
                } else {
                  ele.usingStatus = 0;
                }
              });
            } else {
              this.$message.error(this.$t('request.error1'));
            }
          } catch (error) {
            this.$message.error(this.$t('request.error1'));
          }
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: this.$t('operate.yiQuXiaoCaoZuo'),
          });
        });
    },
    // 选择信用卡弹框
    creditDialogControl(item) {
      this.creditCardTypes_show = !this.creditCardTypes_show;
      if (!item) return;
      if (this.creditCardTypes_show) {
        this.checkboxGroup = item.payProperty.selectedCreditCardList || [];
      }
      this.currentCardInfo = item;
    },
    to_location(url) {
      parent.open(url);
    },
    to_url(url, data) {
      if (data) {
        // console.log(data)
        this.$router.push({ path: url, query: { data: data } });
      } else {
        this.$router.push(url);
      }
    },

    e_prevent() {},
    // 保存
    save_select_credits() {
      if (
        !this.currentCardInfo ||
        this.currentCardInfo.payProperty == '' ||
        !this.currentCardInfo.payProperty
      ) {
        return;
      }

      let payProperty = clone(this.currentCardInfo.payProperty);
      payProperty.selectedCreditCardList = this.checkboxGroup;
      updatepayproperty({
        payTypeId: this.currentCardInfo.payTypeId,
        payProperty: JSON.stringify(payProperty),
      })
        .then(res => {
          if (res.data.message === 'SUCCESS') {
            this.$message({
              showClose: true,
              message: this.$t('operate.caoZuoChengGong'),
              type: 'success',
            });
            this.creditCardTypes_show = false;
            this.currentCardInfo.payProperty.selectedCreditCardList =
            this.checkboxGroup;
          } else {
            this.$message.error(this.$t('request.error1'));
          }
          // this.payList.forEach(ele=>{
          //   if(ele.payTypeId === this.currentCardInfo.payTypeId) {
          //     ele = this.currentCardInfo
          //   }
          // })
        })
        .catch(() => {
          this.$message.error(this.$t('request.error1'));
          //  this.payList.forEach(ele=>{
          //   if(ele.payTypeId === this.currentCardInfo.payTypeId) {
          //     ele = this.currentCardInfo
          //   }
          // })
        });
    },
  },
};
</script>
<style lang="less">
  .strip-info-container {
    font-size: 16px;
    font-family: MicrosoftYaHei;
    color: #666666;
    a {
      margin: 0 5px;
      text-decoration: underline;
      color: #008cff;
    }
  }
</style>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 100%;
  min-width: 947px;
  .page-title-container {
    margin: 24px 0;
    color: #343A56;
    font-family: MicrosoftYaHei;
    margin-left: 30px;
    .title {
      font-size: 18px;
      margin-right: 14px;
    }
    .desc {
      font-size: 14px;


    }
  }
  .top {
    width: calc(100% - 30px);
    height: 72px;
    background: #f1f1f1;
    font-size: 18px;
    display: flex;
    vertical-align: middle;
    justify-content: flex-start;
    align-items: center;
    padding-left: 30px;
    border-bottom: 1px solid #dddfe3;
    .top-title {
      font-size: 18px;
      font-weight: bold;
      color: #000;
    }
  }
  .bottom {
    width: 100%;
    height: calc(100% - 74px);
    padding: 30px;
    box-sizing: border-box;
    overflow: auto;
    .main_title_con {
      width: 100%;
      height: 25px;
      .main_title {
        font-size: 20px;
        font-family: MicrosoftYaHei;
        color: #343a56;
        line-height: 26px;
      }
      .subtitle {
        font-size: 14px;
        font-family: MicrosoftYaHei;
        color: #343a56;
        line-height: 19px;
        margin-left: 18px;
      }
    }
    .method_details {
      width: 100%;
      background: #f6f8fe;
      margin-top: 16px;
      padding: 16px 25px;
      box-sizing: border-box;
      overflow: hidden;
      .logo_con {
        width: 154px;
        height: 70px;
        border-radius: 6px;
        float: left;
      }
      .stripe_logo {
        background: url('../assets/stripe_logo.png') round;
      }
      .AllinPay_logo {
        background: url('../assets/AllinPay_logo.png') round;
      }
      .center_con {
        width: calc(100% - 180px - 131px - 130px);
        height: 70px;
        padding-left: 60px;
        float: left;
        .detail1 {
          font-size: 26px;
          font-family: Arial-BoldMT, Arial;
          color: #343a56;
          line-height: 38px;
        }
        .operate {
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #008cff;
          line-height: 26px;
          .using {
            background: #4dcb73;
            border-radius: 13px;
            font-size: 14px;
            font-family: MicrosoftYaHei;
            color: #ffffff;
            line-height: 26px;
            display: inline-block;
            padding: 0 13px 0 28px;
            position: relative;
          }
          .using::before {
            content: '';
            width: 12px;
            height: 12px;
            background: #ffffff;
            opacity: 0.3;
            border-radius: 50%;
            position: absolute;
            top: 7px;
            left: 11px;
            display: block;
          }
        }
      }
      .button_con {
        width: 220px;
        height: 70px;
        float: right;
        .sumbit_button {
          width: 132px;
          height: 45px;
          background: #ffffff;
          border-radius: 4px;
          border: 1px solid #eaeaea;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #666666;
          line-height: 21px;
          margin-top: 12px;
        }
        .stop_button {
          background: #ff2600;
          border-radius: 4px;
          border: 1px solid #eaeaea;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #ffffff;
        }
        .active_button {
          background: #4dcb73;
          border-radius: 4px;
          border: 1px solid #eaeaea;
          font-size: 16px;
          font-family: MicrosoftYaHei;
          color: #ffffff;
          margin-top: 12px;
        }
        .open_button {
          background: #ffffff;
          border-radius: 4px;
          width: 100px;
          height: 45px;
          font-family: ArialMT;
          font-size: 16px;
          color: #666666;
          margin-top: 30px;
        }
        .triangle_up {
          width: 13px;
          height: 8px;
          background: url('../assets/icon/triangle.png') round;
          margin-left: 15px;
          display: inline-block;
        }
        .triangle_down {
          width: 13px;
          height: 8px;
          background: url('../assets/icon/triangle.png') round;
          margin-left: 15px;
          display: inline-block;
          transform: rotate(180deg);
        }
      }
    }
  }
  .paypal_infos_con {
    width: 100%;
    box-sizing: border-box;
    background: #ecf0f8;
    padding: 40px 50px 50px 50px;
    overflow: hidden;
    .cons {
      width: calc(50% - 1px);
      float: left;
      border-right: 1px dotted rgba(151, 151, 151, 0.7);
      box-sizing: border-box;
      position: relative;
      .title {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #666666;
        display: inline-block;
        padding-right: 10%;
        box-sizing: border-box;
        .help {
          font-size: 12px;
          color: #008cff;
          margin-left: 184px;
          cursor: pointer;
        }
      }
      .cards {
        width: 100%;
        height: auto;
        margin-top: 10px;
        box-sizing: border-box;
        overflow: hidden;
        .card {
          width: 50px;
          height: 34px;
          float: left;
          margin-left: 10px;
          margin-top: 10px;
          .card_img {
            width: 100%;
            height: 100%;
          }
        }
        .card:first-child {
          margin-left: 0;
        }
      }
      .type_con {
        width: 100%;
        height: 36px;
        margin-top: 30px;
        .sumbit_button {
          width: 158px;
          height: 36px;
          background: #f6f8fe;
          border-radius: 4px;
          border: 1px solid #eaeaea;
        }
      }
      .infos {
        width: 100%;
        height: 40px;
        display: flex;
        /deep/.el-form-item__label {
          font-size: 14px !important;
          font-family: MicrosoftYaHei;
          color: #343a56 !important;
          line-height: 24px !important;
          margin-top: 8px;
        }
        /deep/.el-form-item__error {
          top: 10px;
          left: 281px;
        }
        .inputs {
          width: 274px;
          height: 32px;
          border-radius: 4px;
          /deep/.el-input__inner {
            height: 32px !important;
            line-height: 32px !important;
          }
        }
        .label {
          // width: 110px;
          font-size: 14px;
          font-family: MicrosoftYaHei;
          color: #343a56;
          line-height: 40px;
          text-align: right;
          vertical-align: middle;
          display: inline-block;
          white-space: nowrap;
        }
        .content {
          // width: calc(100% - 140px);
          font-size: 16px;
          font-family: ArialMT;
          color: #343a56;
          line-height: 40px;
          // margin-left: 10px;
          text-align: left;
          text-overflow: ellipsis;
          overflow: hidden;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .buttons {
        padding-left: 100px;
        margin-top: 10px;
        .sumbit_button {
          width: 97px;
          height: 36px;
          background: #008cff;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #ffffff;
          line-height: 20px;
        }
        .cancel_button {
          width: 97px;
          height: 36px;
          background: #ffffff;
          border: 1px solid #eaeaea;
          font-size: 14px;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 400;
          color: #666666;
          line-height: 20px;
        }
        /deep/.el-button {
          padding: 5px 20px;
        }
      }
      .card-type {
        font-size: 16px;
        font-family: MicrosoftYaHei;
        color: #666666;
        margin-bottom: 15px;
        a {
          text-decoration: underline;
          color: #008cff;
        }
      }
    }
    .cons.left {
      width: 50%;
      border-right: 0;
      padding-left: 50px;
    }
  }
}
</style>
