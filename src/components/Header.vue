<script>
import { store } from '../store.js'
export default {
  name: 'Header',
  data() {
    return {
      store
    }
  },
}
</script>
<template lang="">
  <header>
    <div class="container py-3">
      <div class="row">
        <div class="col-4">
          <div class="logo">
            <router-link :to="{ name: 'home' }">
              <img class='misura-logo ' src="../../public/logo2.png" alt="">
          </router-link>
          </div>
        </div>
        <div class="col-4">
          <div class="title text-font">
            <h1 class="text-center font">Games Galaxy</h1>
          </div>
        </div>
        <div class="col-4 ">
            <div class="menu">
                <ul class="d-flex justify-content-end align-items-cente mt-3 text-white">
                    <li class="px-3"><a href=""><router-link :to="{ name: 'home' }">Home</router-link></a></li>
                    <li class="px-3"><a href=""><router-link :to="{ name: 'genere' }">Genre</router-link></a></li>
                    <li class="px-3"><a href=""><router-link :to="{ name: 'piattaforme' }">Platforms</router-link></a></li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  </header>
</template>
<style lang="scss" scoped>
  @use '../styles/generals.scss' as *;
  header{
    width: 100%;
    background-image: url('../public/background.jpg');
    .text-font{
      color: #BE6200;
    }
    .font{
      font-size: 60px;
      font-weight: 700;
    }

    ul{
      list-style: none;
      li{
        a{
          text-decoration: none;
          color: #BE6200;
          font-weight: 500;
          font-size: 20px;
        }
      }
    }
    h1{
      font-size: 50px;
    }
    .misura-logo{
      width: 25%;
    }
  }
</style>