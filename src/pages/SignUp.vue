<template>
<div id="signUp">
  <Header></Header>
  <SignUpForm></SignUpForm>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import SignUpForm from '../components/SignUpForm.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    'Header': Header,
    'SignUpForm': SignUpForm,
    'Footer': Footer
  }
}
</script>

<style>

</style>
