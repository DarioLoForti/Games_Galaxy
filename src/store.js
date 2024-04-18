import{ reactive } from 'vue';
export const store = reactive({

    UrlVideoGames: 'https://api.rawg.io/api/games?key=',
    videogames: [],
    generegames: [],

    UrlPlatform: 'https://api.rawg.io/api/platforms?key=',
    platforms:[],

    UrlGenere: 'https://api.rawg.io/api/genres?key=',
    generelist: [],
    generi: [],
    selectedGenre: [],
    
    UrlStores: 'https://api.rawg.io/api/stores?key=',
    stores: [],

    filter: [],
    search: [],

 
    
    keyApi: '8939060ae5fa41198ef1597cbc4bdf81', 

    genere: '',

    consoles: [
        {
            image: "public/pc.png"
        },
        {
            image: "public/Playstation.png"
        },
        {
            image: "public/xbox.jpg"
        },
        {
            image: "public/nintendo.png"
        }
    ]
})

