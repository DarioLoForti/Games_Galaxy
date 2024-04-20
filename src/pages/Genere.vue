<script>
import { store } from '../store.js';
import axios from 'axios';

export default {
  name: 'Genere',
  data() {
    return {
      store,
      currentPage: 1, // Inizialmente la pagina è 1
      selectedGame: {}
    }
  },
  methods: {
    generegames() {
      axios.get(`${store.UrlVideoGames}${store.keyApi}&genres=${store.selectedGenre}&page=${this.currentPage}&ordering=${store.filter}&search=${store.search}`).then(response => {
        store.generegames = response.data.results;
        this.scrollToTop();
      });
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scorri la finestra verso l'alto in modo fluido
    },
 
    stars(vote) {
      const numStars = (vote).toFixed(0);
      return '★'.repeat(numStars) + '☆'.repeat(5 - numStars);
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
    listgenere() {
      axios.get(`${store.UrlGenere}${store.keyApi}&page_size=50`).then(response => {
        store.generelist = response.data.results;
      });
    },
    formatDate(dateStr) {
      // Dividi la stringa della data nelle sue parti (anno, mese, giorno)
      const parts = dateStr.split('-');
      // Estrai giorno, mese e anno
      const day = parts[2];
      const month = parts[1];
      const year = parts[0];
      // Ritorna la data formattata come "gg-mm-aaaa"
      return `${day}-${month}-${year}`;
    },
    
  },
  created() {
    this.generegames();
    this.listgenere();
  }
}
</script>

<template>
  <main>
      <div class="container">
        <div class="row">
          <div class="col-12 pt-5">
            <h5 class="type text-center fs-1">Filter your search</h5>
          </div>
          <div class="col-md-12 col-lg-4 ">
            <label class="text-white" for="type">Genre</label>
            <select class="form-select mt-3 " id="type" v-model="store.selectedGenre" @change="generegames">
              <option value="" selected>Selected Genre</option>
              <option v-for="(genere, index) in store.generelist" :key="index" :value="genere.name.toLowerCase()">
                {{ genere.name.toLowerCase() }}
              </option>
            </select>
          </div>
          <div class="col-md-12 col-lg-4">
            <label class="text-white" for="type">Filter</label>
            <select class="form-select mt-3 " id="type" v-model="store.filter" @change="generegames">
              <option value="" selected>Filter</option>
              <option value="name">name (a - z)</option>
              <option value="-name">name (z - a)</option>
              <option value="released">release date ascending</option>
              <option value="-released">release date decreasing</option>
              <option value="added">added</option>
              <option value="created">created</option>
              <option value="updated">updated</option>
              <option value="rating">★ crescente</option>
              <option value="-rating">★ decrescente</option>
            </select>
          </div>
          <div class="col-md-12 col-lg-4 ">
            <label class="text-white" for="type">Title</label>
            <input class="form-control mt-3" type="text" placeholder="Search Title" name="search" id="search" v-model="store.search" @keyup.enter="generegames">
          </div>    
          <div class="col-12 d-flex flex-wrap pt-5">
            <div class="col-md-12 col-lg-3  content p-3" v-for="(game, index) in store.generegames" :key="index">
              <div class="card p-3">
                <img class="posterImg" :src="game.background_image" alt="...">
                <div class="card-body">
                  <h5 class="card-title text-white">Nome: <br>{{ game.name }}</h5>
                  <h5 class="card-title text-white">Data uscita: <br>{{ formatDate(game.released) }}</h5>
                  <h6 class="text-white">Voto: <span class="stars">{{ stars(game.rating) }}</span></h6>
                  <a :href="'/dettagli/' + game.id" class="btn btn-secondary">Dettagli</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="container-fluid d-none d-lg-block " v-if="store.generegames.length <= 0">
        <div class="row">
          <div class="col-12 d-flex image">
            <div class="col-6">
              <h1 class="text-white font-s p-5">Find Your ...</h1>
            </div>
            <div class="col-6 d-flex justify-content-end align-items-end flex-column">
              <h1 class="text-white font-e p-5">Video Games !!!</h1>
            </div>
            
          </div>
        </div>
      </div>   
      <div class="text-center py-4" v-if="store.generegames.length > 0">
        <button class="btn btn-secondary me-4" @click="prevPage">Pagina precedente</button>
        <button class="btn btn-secondary" @click="nextPage">Pagina successiva</button>
      </div>
  </main>
</template>
<style scoped>
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
  .font-s{
    font-size: 60px;
    margin-left: 100px;
    margin-top: 50px;
  }
  .font-e{
    font-size: 60px;
    margin-right: 100px;
    margin-bottom: 50px;
    
  }

    .posterImg {
        height: 150px;
        width: 100%;
        border-radius: 20px;
    }

    .stars {
        color: gold;
    }
    .type{
        font-size: 25px;
        font-weight: 600;
        margin: 20px;
        color: white;
    }
    .container-fluid{
      padding: 0 !important;
    }
    .image{
     background-image: url('../../public/controller3.webp');
     background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    min-height: 70vh;
    }
}
</style>
