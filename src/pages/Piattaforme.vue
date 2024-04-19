<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Piattaforma',
    data() {
        return {
            store,
            currentPage: 1 // Inizialmente la pagina è 1
        }
    },
    methods: {
        platform() {
            axios.get(`${store.UrlPlatform}${store.keyApi}`).then(response => {
                store.platforms = response.data.results; // Aggiorna i giochi nel negozio
            });
        }
    },
    created() {
        // this.generegames();
        // this.listgenere();
        this.platform();
    }
}
</script>
<template lang="">
   <main>
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex flex-wrap pt-5">
                <div class="content p-3" v-for="platform, index in store.platforms" :key="index">
                    <div class="card p-3" style="width: 18rem; ">
                        <div class="card-body">
                            <h3 class="card-title text-white text-center"> {{ platform.name }}</h3>
                            <h5 class="text-center pt-3"><a :href="'/details/' + platform.id">View video Games</a></h5>
                            <h6 class="text-center text-white pt-3">Count: {{ platform.games_count }}</h6>
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
    .posterImg{
        height: 100%;
        width: 100%;
        
       }
    .stars{
        color: gold;
       }
}
</style>
