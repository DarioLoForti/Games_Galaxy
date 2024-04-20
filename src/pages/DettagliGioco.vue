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
            if (!dateStr) return '';
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
        },
        formatPlatformNames(platforms) {
        return platforms.map(platform => platform.platform.name).join(', ');
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
                <div class="col-md-12 col-lg-6">
                    <img class="posterImg" :src="game.background_image"  alt="...">
                    <h2 class="text-white pt-5">Name: {{ game.name }}</h2>
                    
                    <p class="text-white">Released: {{ formatDate(game.released) }}</p>
                    <p class="text-white">Voto: <span class="stars">{{ stars(game.rating) }}</span></p>
                    <p class="text-white">Sito Web: <a :href="game.website" class="text-white">{{ game.website }}</a></p>

                    <p class="text-white">Platforms:</p>
            <ul class="text-white">
                <li v-if="game.platforms.length > 0" v-for="(platform, index) in game.platforms" :key="platform.platform.id">
                    <router-link :to="'/details/' + platform.platform.id" class="text-white">{{ platform.platform.name }}</router-link>
                    <span v-if="index < game.platforms.length - 1">, </span>
                </li>
                <li v-else>No platforms available</li>
            </ul>

                    <p class="text-white">House Developer: <br>
                        <router-link v-for="developer in game.developers" :key="developer.id" :to="'/houses/' + developer.id" class="text-white">{{ developer.name }}</router-link>
                    </p>
                </div>
                <div class="col-md-12 col-lg-6">
                    <h3 class="text-white">Descrizione</h3>
                    <p class="text-white">{{ game.description }}</p>
                </div>
                <div class="col-12">
                    <h3 class="text-white">Trailer</h3>
                    <div class="d-flex flex-wrap" v-if="trailers.length > 0">
                        <div class="content px-3" v-for="trailer in trailers" :key="trailer.id">
                            <iframe loading="lazy" :src="trailer.data.max" width="250px" height="250" frameborder="0" allowfullscreen></iframe>

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
ul{
    list-style: none;
    li{
        a{
            text-decoration: none;
        }
    }
}
    .posterImg{
        width: 100%;
        border-radius: 20px;
        
       }
    .stars{
        color: gold;
       }
}
</style>