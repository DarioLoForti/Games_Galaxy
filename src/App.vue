<script>

import { store } from './store.js'
import axios from 'axios';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components:{
    Header,
    Footer
  },
  data() {
    return {
      store
    }
  },
}
</script>
<template lang="">
<Header />
<router-view></router-view>
<Footer />
</template>
<style lang="scss">
@use './styles/generals.scss' as *;
</style>