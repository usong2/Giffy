<template>
<div id="signUpForm">
<h2>회원정보 수정</h2>
<div class="policy_txt">회원정보는 <b>개인정보처리방침</b>에 따라 안전하게 보호되며, <br />회원님의 동의 없이 공개 또는 제 3자에게 제공되지 않습니다.</div>
<ul>
    <li class="email"><div class="title">이메일</div><div class="input">abc@google.com</div></li>
    <li><div class="title">비밀번호</div><div class="input"><input type="password" placeholder="비밀번호를 입력하세요"></div></li>
    <li><div class="title">비밀번호 확인</div><div class="input"><input type="password" placeholder="비밀번호를 입력하세요"></div></li>
    <li><div class="title">이름</div><div class="input"><input type="text" placeholder="이름을 입력하세요"></div></li>
    <li class="birth"><div class="title">생년월일</div><div class="input"><input type="text" placeholder="950101"></div><div class="bar">-</div><div class="input number"><input type="text" placeholder="1"></div><div class="star">******</div></li>
    <li><div class="title">연락처</div><div class="input"><input type="text" placeholder="연락처를 입력하세요"></div></li>
    <li><div class="title">직업</div>
        <div class="input">
            <select>
                <option>직업을 선택하세요</option>
                <option>학생</option>
                <option>사무직</option>
            </select>
        </div>
    </li>
    <li><div class="title">별명</div><div class="input"><input type="text"></div></li>
    <li><div class="submit"><button>수정하기</button></div></li>
</ul>
</div>
</template>

<script>

</script>

<style scoped>
    .policy_txt{padding: 25px 30px 10px 30px;text-align: center;line-height: 1.6;font-size: 15px;font-weight: 300;letter-spacing: -0.5px;color: #666;}
    .policy_txt b{color: #000;text-decoration: underline;font-weight: 500;}
    #signUpForm{width: 600px;margin: 0 auto;padding: 50px 50px 100px 50px;background: #fff;}
    #signUpForm h2{font-size: 32px;font-weight: 500;letter-spacing: -1px;color: #293c3c;text-align: center;height: 100px;line-height: 100px;border-bottom: 4px solid #ddd;}
    #signUpForm ul{padding: 50px 0 0 0;}
    #signUpForm ul li{width: 100%;padding: 0 0 20px 0;}
    #signUpForm ul li:after{display: block;content: '';clear: both;}
    #signUpForm ul li .title{float: left;width: 150px;font-size: 16px;font-weight: 500;color: #333;font-size: 16px;line-height: 35px;}
    #signUpForm ul li .input{float: left;width: 444px;border: 3px solid #ddd;}
    #signUpForm ul li .input input{width: 100%;border: none;height: 35px;text-indent: 5px;}
    #signUpForm ul li .input select{width: 100%;height: 35px;border: none;color: #999}
 
    #signUpForm ul li.email .input{width: 300px;border: none;line-height: 35px;}

    #signUpForm ul li.birth .input{width: 200px;}
    #signUpForm ul li.birth .bar{float: left;width: 50px;text-align: center;line-height: 39px;font-weight: 600;}
    #signUpForm ul li.birth .input.number{width: 50px;}
    #signUpForm ul li.birth .star{float: left;width: 80px;padding: 0 0 0 20px;line-height: 39px;font-size: 18px;font-weight: 500;}

    input[placeholder]{color: #000;}
    ::-webkit-input-placeholder{color: #999 !important;}
    :-moz-placeholder{color: #999 !important;opacity: 1;}
    ::-moz-placeholder{color: #999 !important;opacity: 1;}
    :-ms-input-placeholder {color: #999 !important;}

    #signUpForm ul li .submit{padding: 25px 0 0 0;width: 40%;margin: 0 auto;}
    #signUpForm ul li .submit button{width: 100%;background: #ffb441;text-align: center;line-height: 50px;height: 50px;color: #fff;font-weight: 500;font-size: 16px;border-radius: 5px;}
</style>
