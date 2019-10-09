<template>

<div id="searchBox">

    <h3><span>홍길동</span>님 <br />어떤 국가로 떠나세요?</h3>
    
    <div id="search">
        <span class="icon"><i class="fa fa-search fa-lg" aria-hidden="true"></i></span>
        <input type="text" placeholder="여행국가 검색">
    </div>
</div>
</template>

<script>

</script>

<style scoped>
    #searchBox{width: 300px;margin: 0 auto;padding: 50px 50px 100px 50px;background: #fff;}
    #searchBox h3{font-size: 32px;font-weight: 600;letter-spacing: -1px;color: #293c3c;line-height: 1.5;}
    #searchBox h3 span{}

    #searchBox #search{width: 300px;border-bottom: 2px solid #ddd;padding: 30px 0 0 0;}
    #searchBox #search:after{display: block;content: '';clear: both;}
    #searchBox #search .icon{display: block;float: left;width: 30px;color: #22d4d9;text-align: left;height: 30px;}
    #searchBox #search .icon i{padding: 7px 0 0 0;}
    #searchBox #search input{float: left;border: none;width: 270px;height: 25px;}

    input[placeholder]{color: #000;}
    ::-webkit-input-placeholder{color: #999 !important;}
    :-moz-placeholder{color: #999 !important;opacity: 1;}
    ::-moz-placeholder{color: #999 !important;opacity: 1;}
    :-ms-input-placeholder {color: #999 !important;}
</style>
