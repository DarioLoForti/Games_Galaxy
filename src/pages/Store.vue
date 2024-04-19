<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Header',
    data() {
        return {
            combinedData: [] // Nuovo array per combinare dati e immagini
        }
    },
    methods:{
    videogame() {
        axios.get(`${store.UrlStores}${store.keyApi}`).then(response => {
            const storesData = response.data.results;
            const logosData = store.loghi;

            // Combino i dati e le immagini in un unico array di oggetti
            this.combinedData = storesData.map((store, index) => ({
                ...store,
                logo: logosData[index].image // Aggiungo l'immagine dallo store.loghi corrispondente
            }));
        });
    },
},

    created() {
        this.videogame();
    }
}
</script>

<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center text-white py-3 fs-1">Store</h2>
                </div>
                <div class="col-12 d-flex flex-wrap pb-5">
                    <div class="col-md-6 col-lg-3 content p-3" v-for="(store, index) in combinedData" :key="index">
                        <div class="card p-3" >
                            <img loading="lazy" class="posterImg" :src="store.logo" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-white">Nome: <br>{{ store.name }}</h5>
                                <h5 class="card-title text-white">Dominio: <br> <a :href="'https://www.' + store.domain" target="_blank">{{ store.domain }}</a></h5>
                                <h5 class="card-title text-white">Giochi: <br>{{ store.games_count }}</h5>
                            </div>
                        </div>
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
        background-image: url('../public/background.webp');
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
        img{
            width: 100%;
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
        background-image: url('../public/controller4.webp');
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