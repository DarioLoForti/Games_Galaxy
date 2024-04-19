<script>
import { store } from '../store.js'
export default {
  name: 'Footer',
  data() {
    return {
      store
    }
  },
}
</script>
<template lang="">
  <footer>
    <div class="container py-3">
      <div class="row">
        <div class="col-lg-4 col-12 col-md-6 text-center text-lg-start">
            <ul>
                <li><a href="">Chi Siamo</a></li>
                <li><a href="">Dicono di noi</a></li>
                <li><a href="">Sviluppatori</a></li>
            </ul>
        </div>
        <div class="col-lg-4 col-12 col-md-6 text-center">
            <ul>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
                <li><a href=""></a></li>
              </ul>
        </div>
        <div class="col-lg-4 col-12 col-md-6 text-center">
            <ul class="d-flex justify-content-center pt-4 ">
                <li><a href=""><i class="fa-brands fa-square-facebook fa-2xl" style="color: #ffffff;"></i></a></li>
                <li class="px-4"><a href=""><i class="fa-brands fa-square-instagram fa-2xl" style="color: #ffffff;"></i></a></li>
                <li><a href=""><i class="fa-brands fa-square-x-twitter fa-2xl" style="color: #ffffff;"></i></a></li>
             
              </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>
  @use '../styles/generals.scss' as *;
  footer{
    position: relative;
    bottom: 0;
    width: 100%;
    background-image: url('../public/background.webp');

    .text-font{
      color: #BE6200;
    }
    ul{
      list-style: none;
      li{
        a{
          text-decoration: none;
          color: #BE6200;
          font-weight: 500;
          font-size: 18px;
        }
      }
    }
  }
</style>