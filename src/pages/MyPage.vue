<template>
<div id="myPage">
  <Header></Header>
  <MyPageBox></MyPageBox>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import MyPageBox from '../components/MyPageBox.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    'Header': Header,
    'MyPageBox': MyPageBox,
    'Footer': Footer
  }
}
</script>

<style>

</style>
