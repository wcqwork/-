<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
//样式初始化
body,
ol,
ul,
h1,
h2,
h3,
h4,
h5,
h6,
p,
th,
td,
dl,
dd,
form,
fieldset,
legend,
input,
textarea,
select {
  margin: 0;
  padding: 0;
}
body {
  font: 12px 'MicrosoftYaHei', 'Arial Narrow', HELVETICA;
  background: #fff;
  -webkit-text-size-adjust: 100%;
}
a {
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
em {
  font-style: normal;
}
li {
  list-style: none;
}
img {
  border: 0;
  vertical-align: middle;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
p {
  word-wrap: break-word;
}
.fix-container {
  position: fixed;
  left: 130px;
  top: 0;
  z-index: 55;
}
.fix-mt73 {
  margin-top: 73px !important;
}
.fix-mt93 {
  margin-top: 93px !important;
}
//确认提示框总体默认样式修改
.confrim_costom {
  width: 346px !important;
  .el-message-box__header {
    width: 346px !important;
    height: 56px;
    padding: 16px 15px 16px 24px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    .el-message-box__title {
      font-size: 16px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 16px;
    }
    // .el-message-box__headerbtn {
    //   right: 50px;
    // }
  }
  .el-message-box__content {
    padding: 22px 24px;
    border-top: 1px solid rgba(0, 0, 0, 0.06);
    border-bottom: 1px solid rgba(0, 0, 0, 0.06);
    min-height: 86px;
    box-sizing: border-box;
    .el-message-box__status {
      display: none;
    }
    .el-message-box__message {
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      line-height: 22px !important;
      padding: 0;
    }
  }
  .el-message-box__btns {
    width: 346px !important;
    height: 45px !important;
    box-sizing: border-box;
    padding-top: 10px;
    .el-button--default {
      width: 65px;
      height: 32px;
      background: #ffffff;
      border-radius: 2px;
      border: 1px solid rgba(0, 0, 0, 0.15);
      font-size: 14px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
    }
    .el-button--primary {
      background: #1890ff;
      color: white;
    }
  }
}
</style>
