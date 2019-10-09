<template>
<div id="Travel">
    <Header></Header>
    <CountrySearch></CountrySearch>
    세계여행정보
    <Footer></Footer>
</div>
</template>

<script>
import Header from '../components/Header.vue'
import CountrySearch from '../components/CountrySearch.vue'
import Footer from '../components/Footer.vue'
export default {
  components: {
    'Header': Header,
    'CountrySearch': CountrySearch,
    'Footer': Footer
  }
}
</script>

<style scoped>
    
</style>
