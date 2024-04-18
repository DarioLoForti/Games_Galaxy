<script>
import { store } from '../store.js';
import axios from'axios';
export default {
    name: 'HomePage',
   data() {
    return {
        store
    }
   },
   methods: {
    getDates() {

    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); 
    const yyyy = today.getFullYear();
    const currentDate = `${yyyy}-${mm}-${dd}`;


    const nextWeek = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000); 
    const ddNextWeek = String(nextWeek.getDate()).padStart(2, '0');
    const mmNextWeek = String(nextWeek.getMonth() + 1).padStart(2, '0');
    const yyyyNextWeek = nextWeek.getFullYear();
    const nextWeekDate = `${yyyyNextWeek}-${mmNextWeek}-${ddNextWeek}`;

    return `${currentDate},${nextWeekDate}`;
},
 
videogames(){
    let data = this.getDates(); 
    axios.get(`${store.UrlVideoGames}${store.keyApi}&dates=${data}`).then(response =>{
        this.store.videogames = response.data.results;
    }).catch(error => {
        console.error("Errore nella richiesta videogames:", error);
    });
},
    videogame(){
        axios.get(`${store.UrlStores}${store.keyApi}`).then(response =>{
            store.stores = response.data.results
    
            })
    },
    stars(vote){
            const numStars = (vote).toFixed(0);
            return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
        },
   
   },
   created(){
  this.getDates();
    this.videogames();
    this.videogame();
   }
}
</script>
<template lang="">
    <main>
        <div class="container-fluid">
            <div class="row">
                <div class="col-12 image d-flex justify-content-center align-items-end">
                    <h1 class="text-white font pb-2">The Wolrd of Video Games</h1>
                </div>
            </div>
        </div>  
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center text-white pt-5 fs-1">Released this week </h2>
                </div>
                <div class="col-12 d-flex flex-wrap pt-5">
                    <div class="content p-3" v-for="videogame, index in store.videogames" :key="index">
                        <div class="card  p-3" style="width: 18rem; height: 25rem; ">
                         
                            <img class="posterImg" :src="videogame.background_image"  alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-white">Nome: <br>{{ videogame.name }}</h5>
                                <h5 class="card-title text-white">Rilascio: <br>{{ videogame.released }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="container pt-5">
            <div class="row">  
                <div class="col-12 pb-5">
                    <h1 class="text-white text-center">Follow your passions</h1>
                </div>      
                <div class="col-4 video">
                    <video autoplay muted loop id="myVideo" style="width: 100%; height: 50%;">
                        <source src="../../public/jumbo2.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="col-4 video">
                    <video autoplay muted loop id="myVideo" style="width: 100%; height: 50%;">
                        <source src="../../public/jumbo1.mp4" type="video/mp4">
                    </video>
                </div>
                <div class="col-4 video">
                    <video autoplay muted loop id="myVideo" style="width: 100%; height: 50%;">
                        <source src="../../public/jumbo.mp4" type="video/mp4">
                    </video>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center text-white pt-5 fs-1">Store</h2>
                </div>
                <div class="col-12 d-flex flex-wrap pt-5">
                    <div class="content p-3" v-for="stores, index in store.stores" :key="index">
                        <div class="card p-3" style="width: 18rem; height: 25rem; ">
                         
                            <img class="posterImg" :src="stores.image_background"  alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-white">Nome: <br>{{ stores.name }}</h5>
                                <h5 class="card-title text-white">Dominio: <br> <a :href="'https://www.' + stores.domain" target="_blank">{{ stores.domain }}</a></h5>
                                <h5 class="card-title text-white">Giochi: <br>{{ stores.games_count }}</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="row pt-5">
                <div class="col-3 " v-for="(console, index) in store.consoles" :key="index">
                    <div class="console d-flex justify-content-around">
                        <img :src="console.image" alt="Console Image">
                    </div>
                </div>
            </div>
        </div>
        
    </main>
</template>
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;
main{
    background-image: url('../public/futuristic_black.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    .card {
        background-image: url('../public/background.jpg');
        border-radius: 20px;
        transition: border 0.3s, transform 0.3s;
        &:hover {
            border: 3px solid gray;
            transform: scale(1.05); 
            box-shadow: 0px -5px 6px rgba(255, 255, 255, 0.5),
            0px 5px 6px rgba(255, 255, 255, 0.5);
            
        }
        a{
            text-decoration: none;
            color: gray;
        }
    }
    .font{ 
        font-size: 60px;
    }
    #myVideo {
        position: absolute;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
      }

    .image {
        background-image: url('../public/controller4.jpg');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        height: 45vh;
        width: 100%;
        overflow: hidden; 
    }
    
    
    .image::after {
        content: '';
        position: absolute;
        top: 0;
        width: 10%; 
        height: 100%;
        background: linear-gradient(to right, rgba(255, 255, 255, 0), 
        rgba(255,255,255,0.25), rgba(255,255,255,0.50)); 
        filter: blur(100px); 
    }
    .image::before{
        content: '';
        position: absolute;
        top: 0;
        width: 10%; 
        height: 100%;
        background: linear-gradient(to left, rgba(255, 255, 255, 0), 
        rgba(255,255,255,0.25), rgba(255,255,255,0.50)); 
        filter: blur(100px); 
    }
    
    .image::before {
        left: 0;
    }
    
    .image::after {
        right: 0;
    }
    #myVideo {
        position: relative;
        right: 0;
        bottom: 0;
        min-width: 100%;
        min-height: 100%;
      }
    
    .posterImg{
        height: 150px;
        width: 100%;
        border-radius: 20px;
        
       }
    .stars{
        color: gold;
       }
    .console{
        width: 200px;
        border-radius: 50%;
        img{
            padding: 20px;
            border-radius: 50%;
            width: 100%;
        }
    }
}
    
</style>