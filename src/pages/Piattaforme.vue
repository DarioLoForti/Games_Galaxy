<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Piattaforma',
    data() {
        return {
            store,
            combinedData: []
        }
    },
    methods: {
        platform() {
            axios.get(`${store.UrlPlatform}${store.keyApi}&page_size=40`).then(response => {
                const platformData = response.data.results;
                const platformsData = store.platforms;

            // Combino i dati e le immagini in un unico array di oggetti
            this.combinedData = platformData.map((store, index) => ({
                ...store,
                logo: platformsData[index].image // Aggiungo l'immagine dallo store.loghi corrispondente
            }));
        });
        }
    },
    created() {
        this.platform();
    },
}
</script>
<template lang="">
   <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center text-white py-3 fs-1">Platforms</h2>
                </div>
                <div class="col-12 d-flex flex-wrap pb-3">
                    <div class="col-md-12 col-lg-3 content p-3" v-for="(store, index) in combinedData" :key="index">
                        <div class="card p-3" >
                            <img loading="lazy" class="posterImg" :src="store.logo" alt="...">
                            <div class="card-body">
                                <h3 class="card-title text-white text-center"> {{ store.name }}</h3>
                                <h5 class="text-center pt-3"><a :href="'/details/' + store.id">View video Games</a></h5>
                                <h6 class="text-center text-white pt-3">Count: {{ store.games_count }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </main>
    
</template>
<style lang="scss" scoped>
@import '../styles/generals.scss';
main {
    background-image: url('../public/futuristic_black.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 90vh;

     
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
    }
}
</style>
