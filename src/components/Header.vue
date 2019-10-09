<template>
  <div id="header">
    <div class="header_box">
      <div class="container">
        <h1 id="logo"><router-link to="/"><img v-bind:src="logo_link" alt="Giffy"></router-link></h1>
        <ul id="gnb">
          <li><router-link to="/Travel">해외여행정보</router-link></li>
          <li><router-link to="/ApiGuide">API 개발가이드</router-link></li>
        </ul>
        <ul id="rnb">
          <li class="log"><a v-on:click="openLogin"><i class="fa fa-lock fa-lg" aria-hidden="true"></i>로그인</a></li>
          <li class="last"><router-link to="/SignUp">회원가입</router-link></li>
        </ul>
      </div><!-- container End -->
      <modal v-if="showModal" @close="showModal = false" class="sign_box">
        <h3 slot="header">Login<i class="fa fa-times-circle fa-2x" aria-hidden="true" @click="showModal = false"></i></h3>
        <span slot="footer">
          <ul class="sign_input">
            <li><div class="title">아이디</div><div class="input"><input type="text"></div></li>
            <li><div class="title">비밀번호</div><div class="input"><input type="password"></div></li>
          </ul>
          <div class="button_box">
            <button>로그인</button>
          </div>
          <ul class="etc">
            <li><a href="#">아이디/비밀번호 찾기</a></li>
            <li><a @click="showModal = false"><router-link to="/SignUp">회원가입</router-link></a></li>
          </ul>
        </span>
      </modal>
    </div><!-- header_box -->
  </div><!-- header End -->
</template>

<script>
import Modal from './common/Modal.vue'

export default {
  data() {
    return {
      showModal: false,
      logo_link: './src/file/img/s_img/logo.png'
    }
  },
  methods: {
    openLogin() {
        this.showModal = !this.showModal;
    }
  },
  components: {
    Modal: Modal
  }
}
</script>

<style>
    #header{position: relative;width: 100%;height: 80px;z-index: 9999;
    background: #0ada84; /* Old browsers */
    background: -moz-linear-gradient(left, #0ada84 0%, #00babf 100%); /* FF3.6-15 */
    background: -webkit-linear-gradient(left, #0ada84 0%,#00babf 100%); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(to right, #0ada84 0%,#00babf 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0ada84', endColorstr='#00babf',GradientType=1 ); /* IE6-9 */
    }
    #header .header_box{position: relative;width: 100%;height: 80px;}
    #header .container{position: absolute;top: 0;left: 0;width: 100%;}
    #header .container:after{display: block;content: '';clear: both}
    #header h1#logo{float: left;width: 100px;margin: 0 125px 0 15px;height: 80px;}
    #header h1#logo img{width: 100%;margin: 15px 0 0 0;}

    #header ul:after{display: block;content: '';clear: both;}
    #header ul li{float: left;line-height: 80px;}

    #header ul#gnb:after{display: block;content: '';clear: both}
    #header ul#gnb{float: left;}
    #header ul#gnb li{margin-right: 48px;}
    #header ul#gnb li a{font-size: 18px;color: #fff;font-weight: 500;}
    
    #header ul#rnb{float: right;margin: 0 15px 0 0;}
    #header ul#rnb li a{font-size: 14px;font-weight: 500;cursor: pointer;}
    #header ul#rnb li.log a{color: #fff;}
    #header ul#rnb li.log i{color: #fff;padding: 0 10px 5px 0;vertical-align: middle;}
    #header ul#rnb li.last{margin: 20px 0 0 45px;}
    #header ul#rnb li.last a{display: block;width: 110px;height: 40px;line-height: 40px;border-radius: 5px;background: #ffb441;color: #fff;text-align: center;}
    
    .sign_box h3{position: relative;font-size: 30px;margin: 0 40px 30px 40px;text-align: center;height: 80px;line-height: 80px;border-bottom: 4px solid #ddd;color: #ffb441;padding: 20px 0 0 0;}
    .sign_box h3 i{position: absolute;top: -13px;;right: -53px;color: #666;cursor: pointer;}
    .sign_box ul.sign_input{margin: 0 40px 15px 40px;}
    .sign_box ul.sign_input li{float: none;padding: 0 0 15px 0;width: 100%;}
    .sign_box ul.sign_input li:after{display: block;content: '';clear: both;}
    .sign_box ul.sign_input li .title{float: left;width: 30%;font-weight: 500;color: #333;font-size: 16px;line-height: 35px;}
    .sign_box ul.sign_input li .input{float: right;width: 68%;border: 3px solid #ddd;}
    .sign_box ul.sign_input li .input input{width: 100%;border: none;height: 35px;}

    .sign_box ul.sign_input li.triple .input{float: right;width: 48%;}
    .sign_box ul.sign_input li.triple .btn{float: right;width: 20%;}
    .sign_box ul.sign_input li.triple .btn button{width: 95%;margin: 0 5%;background: #888;height: 39px;color: #fff;font-weight: 500;}
    
    .sign_box .button_box{width: 40%;margin: 0 auto;padding: 0 0 30px 0;}
    .sign_box .button_box button{width: 100%;background: #ffb441;text-align: center;line-height: 50px;height: 50px;color: #fff;font-weight: 500;font-size: 16px;border-radius: 5px;}
    
    .sign_box ul.etc{margin: 0 40px;}
    .sign_box ul.etc li{width: 50%;text-align: center;line-height: 70px;height: 70px;}
    .sign_box ul.etc li a{font-weight: 500;color: #666;font-size: 14px;}
</style>
