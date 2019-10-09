<template>
  <div id="mainVisual">
    <div id="slider">
      
      <!--<agile :nav-buttons="false" :autoplay-speed="5000" :speed="2500" fade="fade" pause-on-hover="pause-on-hover" pause-on-dots-hover="pause-on-dots-hover" autoplay="autoplay">
        <img class="slide" src="src/file/img/p_img/background-image1.png"/>
        <img class="slide" src="src/file/img/p_img/background-image2.png"/>
        <img class="slide" src="src/file/img/p_img/background-image3.png"/>
        <img class="slide" src="src/file/img/p_img/background-image4.png"/>
      </agile>-->
    </div>
    <div class="cover"></div>

    <div id="iconBox">
        <div class="con">
            <div class="icon i1"><img src="../file/img/s_img/visual_icon1.png"></div>
            <div class="icon i2"><img src="../file/img/s_img/visual_icon2.png"></div>
            <div class="icon i3"><img src="../file/img/s_img/visual_icon1.png"></div>
            <div class="icon i4"><img src="../file/img/s_img/visual_icon3.png"></div>

            <div class="icon i5"><img src="../file/img/s_img/visual_icon4.png"></div>
            <div class="icon i6"><img src="../file/img/s_img/visual_icon1.png"></div>
            <div class="icon i7"><img src="../file/img/s_img/visual_icon2.png"></div>
            <div class="icon i8"><img src="../file/img/s_img/visual_icon5.png"></div>
        </div>
    </div>

    <div id="searchBox">
      <div class="container">
        <div class="con">
            <input type="text" placeholder="여행 국가를 검색하세요">
            <span class="addContainer">
            <i class="fa fa-search fa-lg" aria-hidden="true"></i>
            </span>
        </div>

        <div class="recommend">
          <div class="box">
            <ul>
              <li><span class="flag"><img src="https://image.flaticon.com/icons/svg/206/206758.svg"></span><span class="nation">대한민국</span></li>
              <li><span class="flag"><img src="https://image.flaticon.com/icons/svg/206/206650.svg"></span><span class="nation">대만</span></li>
            </ul>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>


<script>
export default {

}
</script>

<style scoped>
#mainVisual{position: relative;width: 100%;height: 600px;background: url(../file/img/p_img/background-image1.png) no-repeat center center;background-size: cover;}
#mainVisual .cover{position: absolute;top: 0;left: 0;width: 100%;height: 600px;background: url(../file/img/s_img/background-cover.png) repeat-x;}

#mainVisual #iconBox{position: absolute;top: 0;left: 0;width: 100%;height: 600px;}
#mainVisual #iconBox .con{position: relative;width: 100%;height: 600px;}
#mainVisual #iconBox .con .icon{position: absolute;bottom: -1px;width: 50px;}
#mainVisual #iconBox .con .icon img{width: 100%;}
#mainVisual #iconBox .con .icon.i1{left: 2%;}
#mainVisual #iconBox .con .icon.i2{left: 10%;}
#mainVisual #iconBox .con .icon.i3{left: 18%;}
#mainVisual #iconBox .con .icon.i4{left: 26%;}
#mainVisual #iconBox .con .icon.i5{right: 26%;}
#mainVisual #iconBox .con .icon.i6{right: 18%;}
#mainVisual #iconBox .con .icon.i7{right: 10%;}
#mainVisual #iconBox .con .icon.i8{right: 2%;}


#mainVisual #searchBox{position: absolute;bottom: 45px;left: 0;z-index: 100;width: 100%;}
#mainVisual #searchBox .container{position: relative;width: 100%;height: auto;}
#mainVisual #searchBox .con{width: 327px;padding: 2px 0 0 25px;height: 45px;margin: 0 auto;background: #fff;border-radius: 53px;}
#mainVisual #searchBox .con:after{display: block;content: '';clear: both;}
#mainVisual #searchBox .con input{float: left;width: 275px;height: 43px;border: none;background: #fff;font-size: 16px;font-weight: 500;color: #293c3c;}
#mainVisual #searchBox .con i{float: right;width: 30px;color: #22d4d9;padding: 15px 10px 0 10px;}
input[placeholder]{color: #22d4d9;}
::-webkit-input-placeholder{color: #22d4d9 !important;}
:-moz-placeholder{color: #22d4d9 !important;opacity: 1;}
::-moz-placeholder{color: #22d4d9 !important;opacity: 1;}
:-ms-input-placeholder {color: #22d4d9 !important;}

#mainVisual #searchBox .recommend{display: none;position: absolute;left: 0;top: 46px;width: 100%;}
#mainVisual #searchBox .recommend .box{width: 295px;background: pink;padding: 0 0 0 15px;background: #fff;margin: 0 auto;border: 2px solid #ccc;}
#mainVisual #searchBox .recommend .box ul{padding: 10px 0 0 0;}
#mainVisual #searchBox .recommend .box ul li{margin: 0 0 10px 0;}
#mainVisual #searchBox .recommend .box ul li:after{display: block;content: '';clear: both;}
#mainVisual #searchBox .recommend .box ul li span.flag{display: block;float: left;width: 30px;}
#mainVisual #searchBox .recommend .box ul li span.flag img{width: 30px;}
#mainVisual #searchBox .recommend .box ul li span.nation{display: block;float: left;width: 200px;padding: 0 0 0 10px;line-height: 30px;font-size: 14px;font-weight: 500;color: #666;}
</style>
