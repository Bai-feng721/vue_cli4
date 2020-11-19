<template>
  <div class="main">
    <div class="footermain">
      <div class="footer">
        <div class="footer_left">
          <div class="footer_ma">
            <img src="@/assets/image/erweima.png" alt="">
            <p>扫描二维码,关注我们</p>
          </div>
          <div class="footer_mess">
            <b>联系我们</b>
            <p>服务专线:0931-2133073,15155949259</p>
            <p>邮箱:18919884566@189.cn</p>
            <p>地址:甘肃省兰州市城关区会宁路双创街006号</p>
          </div>
        </div>
        <div class="footer_right">
          <b>关于我们</b>
          <p>宗旨：打造双创生态圈</p>
          <p>主营业务：软件开发、双创研究、创业服务、成果转化、（线上+线下）营销项目</p>
        </div>
      </div>


    </div>
    <div class="last">
      <div class="company">
        Copyright © 2019-2022 甘肃微纳科技 版权所有
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "LyFooter"
  }
</script>

<style scoped>
  .main {
    width: 100%;
    height: 290px;
  }

  .footermain {
    width: 100%;
    height: 250px;
    background-color: #232730;
  }

  .footer {
    width: 1200px;
    height: 250px;
    background-color: #232730;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }

  .footer_left {
    width: 600px;
    height: 166px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .footer_ma {
    width: 150px;
    height: 125px;
    color: #FFFFFF;
  }
   .footer_ma img{
     width: 150px;
   }
  .footer_mess {
    width: 400px;
    text-align: left;
    margin-left: 30px;
  }

  .footer_mess b {
    color: #FFFFFF;
    line-height: 31px;
  }

  .footer_mess p {
    color: #FFFFFF;
    line-height: 31px;
    font-size: 14px;
  }

  .footer_right {
    width: 520px;
    height: 166px;
    padding-top: 20px;
    text-align: left
  }

  .footer_right b {
    line-height: 32px;
    color: #FFFFFF;
  }

  .footer_right p {
    line-height: 32px;
    color: #FFFFFF;
  }

  .company {
    /* background-color: #2b323c; */
    width: 1200px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    margin: 0 auto;
    font-size: 14px;
    color: #FFFFFF;
  }

  .last {
    width: 100%;
    height: 60px;
    /* background-color: #2b323c; */
  }
</style>
