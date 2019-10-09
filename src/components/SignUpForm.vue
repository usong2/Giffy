<template>
<div id="signUpForm">
    <h2>회원가입</h2>
    <div class="agree_box">
        <ul>
            <li class="all"><div class="check"><input type="checkbox"></div><div class="txt">가입 전체약관에 동의합니다.</div></li>
            <li><div class="check"><input type="checkbox"></div><div class="txt">서비스 이용약관 동의</div><div class="all_content">내용보기</div></li>
            <li><div class="check"><input type="checkbox"></div><div class="txt">개인정보 수집 및 이용 동의</div><div class="all_content">내용보기</div></li>
        </ul>
    </div>
    <ul class="form_list">
        <li class="email"><div class="title">이메일</div><div class="input"><input type="text" placeholder="이메일을 입력하세요"></div><div class="btn"><button>중복 확인</button></div></li>
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
        <li><div class="submit"><button>가입하기</button></div></li>
    </ul>
</div>
</template>

<script>

</script>

<style scoped>
    .agree_box{}
    .agree_box ul{padding: 25px 30px 10px 30px;border: 2px solid #ddd;border-top: none;}
    .agree_box ul li{line-height: 25px;height: 20px;margin-bottom: 10px;}
    .agree_box ul li:after{display: block;content: '';clear: both;}
    .agree_box ul li .check{float: left;width: 20px;}
    .agree_box ul li .txt{float: left;color: #293c3c;}
    .agree_box ul li .all_content{float: right;color: #22d4d9;font-size: 12px;}
    
    .agree_box ul li.all{padding-bottom: 10px;}
    .agree_box ul li.all .txt{font-size: 16px;font-weight: normal;}

    #signUpForm{width: 600px;margin: 0 auto;padding: 50px 50px 100px 50px;background: #fff;}
    #signUpForm h2{font-size: 32px;font-weight: 500;letter-spacing: -1px;color: #293c3c;text-align: center;height: 100px;line-height: 100px;border-bottom: 4px solid #ddd;}
    #signUpForm ul.form_list{padding: 50px 0 0 0;}
    #signUpForm ul.form_list li{width: 100%;padding: 0 0 20px 0;}
    #signUpForm ul.form_list li:after{display: block;content: '';clear: both;}
    #signUpForm ul.form_list li .title{float: left;width: 150px;font-size: 16px;font-weight: 500;color: #333;font-size: 16px;line-height: 35px;}
    #signUpForm ul.form_list li .input{float: left;width: 444px;border: 3px solid #ddd;}
    #signUpForm ul.form_list li .input input{width: 100%;border: none;height: 35px;text-indent: 5px;}
    #signUpForm ul.form_list li .input select{width: 100%;height: 35px;border: none;color: #999}
 
    #signUpForm ul.form_list li.email .input{width: 300px;}
    #signUpForm ul.form_list li.email .btn{float: left;width: 134px;margin: 0 0 0 10px;}
    #signUpForm ul.form_list li.email .btn button{width: 100%;background: #ffb441;height: 39px;color: #fff;font-weight: 500;}

    #signUpForm ul.form_list li.birth .input{width: 200px;}
    #signUpForm ul.form_list li.birth .bar{float: left;width: 50px;text-align: center;line-height: 39px;font-weight: 600;}
    #signUpForm ul.form_list li.birth .input.number{width: 50px;}
    #signUpForm ul.form_list li.birth .star{float: left;width: 80px;padding: 0 0 0 20px;line-height: 39px;font-size: 18px;font-weight: 500;}

    input[placeholder]{color: #000;}
    ::-webkit-input-placeholder{color: #999 !important;}
    :-moz-placeholder{color: #999 !important;opacity: 1;}
    ::-moz-placeholder{color: #999 !important;opacity: 1;}
    :-ms-input-placeholder {color: #999 !important;}

    #signUpForm ul.form_list li .submit{padding: 25px 0 0 0;width: 40%;margin: 0 auto;}
    #signUpForm ul.form_list li .submit button{width: 100%;background: #ffb441;text-align: center;line-height: 50px;height: 50px;color: #fff;font-weight: 500;font-size: 16px;border-radius: 5px;}
</style>
