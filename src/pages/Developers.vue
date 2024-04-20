<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Developers',
    data() {
        return {
            store,
            currentPage: 1,
        }
    },
    methods: {
        developers() {
            axios.get(`${store.UrlDeveloper}${store.keyApi}&page=${this.currentPage}&page_size=20`).then(response => {
                store.developers = response.data.results; // Aggiorna i giochi nel negozio
            });
        },
        nextPage() {
      this.currentPage++; // Incrementa il numero di pagina
      this.developers(); // Esegui la chiamata API per la pagina successiva
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--; // Decrementa il numero di pagina solo se non sei già alla prima pagina
        this.developers(); // Esegui la chiamata API per la pagina precedente
      }
    },
    },
    created() {
        this.developers();
    }
}
</script>
<template lang="">
    <main>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center text-white py-3 fs-1">Developer Houses</h2>
                </div>
                <div class="col-12 d-flex flex-wrap ">
                    <div class="col-md-12 col-lg-3 content p-3" v-for="developer, index in store.developers" :key="index">
                        <div class="card p-3" >
                            <img loading="lazy" class="posterImg" :src="developer.image_background" alt="...">
                            <div class="card-body">
                                <h3 class="card-title text-white text-center"> {{ developer.name }}</h3>
                                <h6 class="text-center text-white pt-3">Count: {{ developer.games_count }}</h6>
                                <a :href="'/houses/' + developer.id" class="btn btn-secondary d-flex justify-content-center">Dettagli</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center py-4" v-if="store.developers.length > 0">
            <button class="btn btn-secondary me-4" @click="prevPage">Pagina precedente</button>
            <button class="btn btn-secondary" @click="nextPage">Pagina successiva</button>
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
           
        }
    }
    .posterImg{
        width: 100%;
        border-radius: 20px;
        
       }
}
</style>