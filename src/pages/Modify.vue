<template>
<div id="modify">
  <Header></Header>
  <ModifyForm></ModifyForm>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import ModifyForm from '../components/ModifyForm.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    'Header': Header,
    'ModifyForm': ModifyForm,
    'Footer': Footer
  }
}
</script>

<style>

</style>
