<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'Details',
    data() {
        return {
            store,
            currentPage: 1,
            games: [],
        }
    },
    methods: {
        generegames() {
            const platformId = this.$route.params.id;
            axios.get(`${store.UrlVideoGames}${store.keyApi}&platforms=${platformId}&page=${this.currentPage}`).then(response => {
                this.games = response.data.results; 
                this.scrollToTop();
            })
            .catch(error => {
                console.error('Errore nel caricamento dei giochi della piattaforma:', error);
            });
        },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scorri la finestra verso l'alto in modo fluido
    },
        formatDate(dateStr) {
            const parts = dateStr.split('-');
            const day = parts[2];
            const month = parts[1];
            const year = parts[0];
            return `${day}-${month}-${year}`;
        },
        stars(vote) {
            const numStars = (vote).toFixed(0);
            return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
        },
        shortenPlatformNames(platforms) {
        const platformNames = platforms.map(platform => platform.platform.name);
        const platformString = platformNames.join(', ');
        return platformString.length > 50 ? platformString.substring(0, 50) + '...' : platformString;
    },
    nextPage() {
      this.currentPage++; // Incrementa il numero di pagina
      this.generegames(); // Esegui la chiamata API per la pagina successiva
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--; // Decrementa il numero di pagina solo se non sei già alla prima pagina
        this.generegames(); // Esegui la chiamata API per la pagina precedente
      }
    },
    goBack() {
            this.$router.go(-1); 
        }
    },
    created() {
        this.generegames();
    }
};
</script>

<template lang="">
    <main>
        <div class="container pt-5">
            <div class="row">
                <div class="col-12">
                    <button class="btn btn-secondary" @click="goBack">Torna indietro</button>
                </div>
                <div class="col-12 d-flex flex-wrap pt-5">
                    <div class="col-md-12 col-lg-3 content p-3" v-for="(game, index) in games" :key="index">
                        <div class="card p-3">
                            <img class="posterImg" :src="game.background_image" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-white">Nome: <br>{{ game.name }}</h5>
                                <h5 class="card-title text-white">Data uscita: <br>{{ formatDate(game.released) }}</h5>
                                <h6 class="text-white">Voto: <span class="stars">{{ stars(game.rating) }}</span></h6>
                                <p class="text-white">Piattaforme: <br>{{ shortenPlatformNames(game.platforms) }}</p>
                                <a :href="'/dettagli/' + game.id" class="btn btn-secondary">Dettagli</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="text-center py-4" v-if="this.games.length > 0">
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
        
    }

    .posterImg {
        height: 150px;
        width: 100%;
        border-radius: 20px;
    }
    .stars{
        color: gold;
       }
}
</style>