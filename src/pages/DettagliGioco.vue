<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
    name: 'DettagliGioco',
    data() {
        return {
            store,
            game: {},
            trailers: []
        }
    },
    methods: {
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
        goBack() {
            this.$router.go(-1); 
        }
    },
    created() {
        const gameId = this.$route.params.id;
        axios.get(`https://api.rawg.io/api/games/${gameId}?key=8939060ae5fa41198ef1597cbc4bdf81`)
            .then(response => {
                this.game = response.data;
            })
            .catch(error => {
                console.error('Errore nel caricamento dei dettagli del gioco:', error);
            });

        axios.get(`https://api.rawg.io/api/games/${gameId}/movies?key=8939060ae5fa41198ef1597cbc4bdf81`)
            .then(response => {
                this.trailers = response.data.results;
            })
            .catch(error => {
                console.error('Errore nel caricamento dei trailer del gioco:', error);
            });
    }
};
</script>

<template lang="">
    <main>
        <div class="container pt-5">
            <div class="row">
                <div class="col-12 pb-5">
                    <button class="btn btn-secondary" @click="goBack">Torna indietro</button>
                </div>
                <div class="col-6">
                    <img class="posterImg" :src="game.background_image"  alt="...">
                    <h2 class="text-white pt-5">Nome: {{ game.name }}</h2>
                    <p class="text-white">Data Uscita: {{ formatDate(game.released) }}</p>
                    <p class="text-white">Voto: <span class="stars">{{ stars(game.rating) }}</span></p>
                    <p class="text-white">Sito Web: <a :href="game.website" class="text-white">{{ game.website }}</a></p>
                    <p class="text-white">Piattaforme: <br>{{ game.platforms.map(platform => platform.platform.name).join(', ') }}</p>
                </div>
                <div class="col-6">
                    <h3 class="text-white">Descrizione</h3>
                    <p class="text-white">{{ game.description }}</p>
                </div>
                <div class="col-12">
                    <h3 class="text-white">Trailer</h3>
                    <div class="d-flex flex-wrap" v-if="trailers.length > 0">
                        <div class="content px-3" v-for="trailer in trailers" :key="trailer.id">
                            <iframe  :src="trailer.data.max" width="250px" height="250" frameborder="0" allowfullscreen></iframe>

                        </div>
                    </div>
                    <div v-else>
                        <p class="text-white">Nessun trailer disponibile.</p>
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

    .posterImg{
        width: 100%;
        border-radius: 20px;
        
       }
    .stars{
        color: gold;
       }
}
</style>