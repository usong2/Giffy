<template>
<div id="myPageBox">
    <h2>마이페이지</h2>
    <div class="box_wrap">
        <div class="box">
            <div class="padding">
                <h3>회원정보</h3>
                <a class="btn">수정</a>
                <ul>
                    <li>이름 : 김기피</li>
                    <li>연락처 : 010-0***-***0</li>
                </ul>
            </div>
        </div>
        <div class="box right">
            <div class="padding">
                <h3>API 인증키 정보</h3>
                <a class="btn">개발가이드</a>
                <ul>
                    <li>인증키 : DFZHWZ*********</li>
                    <li>사용기한 : 2019-09-01 ~ 2019-09-02</li>
                </ul>
            </div>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
#myPageBox{width: 800px;margin: 0 auto;padding: 50px 50px 100px 50px;background: #fff;}
#myPageBox h2{font-size: 32px;font-weight: 500;letter-spacing: -1px;color: #293c3c;text-align: center;height: 100px;line-height: 100px;margin: 0 0 50px 0;}
#myPageBox .box_wrap{}
#myPageBox .box_wrap:after{display: block;content: '';clear: both;}
#myPageBox .box_wrap .box{float: left;width: 49%;border: 1px solid #ccc;min-height: 200px;}
#myPageBox .box_wrap .box.right{float: right;}

#myPageBox .box_wrap .box .padding{position: relative;margin: 20px;}
#myPageBox .box_wrap .box a.btn{position: absolute;top: 0;right: 0;display: block;width: 80px;height: 30px;background: #000;color: #fff;font-weight: 500;text-align: center;line-height: 30px;}
#myPageBox .box_wrap .box h3{font-size: 28px;font-weight: 500;letter-spacing: -1px;}
#myPageBox .box_wrap .box ul{}
#myPageBox .box_wrap .box ul li{font-size: 16px;}
</style>
