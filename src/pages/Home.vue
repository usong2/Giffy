<template>
<div id="home">
  <Header></Header>
  <MainVisual></MainVisual>
  <h1>Home</h1>
  <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import MainVisual from '../components/MainVisual.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    'Header': Header,
    'MainVisual': MainVisual,
    'Footer': Footer
  }
}
</script>

<style scoped>
#header{position: fixed;background: transparent;}

</style>
