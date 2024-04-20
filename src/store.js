import{ reactive } from 'vue';
import Developers from './pages/Developers.vue';
export const store = reactive({

    UrlVideoGames: 'https://api.rawg.io/api/games?key=',
    videogames: [],
    topsmonth: [],
    topsyear: [],
    generegames: [],

    UrlPlatform: 'https://api.rawg.io/api/platforms?key=',
    platforms:[],

    UrlDeveloper: 'https://api.rawg.io/api/developers?key=',
    developers:[],

    UrlGenere: 'https://api.rawg.io/api/genres?key=',
    generelist: [],
    generi: [],
    selectedGenre: [],
    
    UrlStores: 'https://api.rawg.io/api/stores?key=',
    stores: [],

    filter: [],
    search: [],
    games: [],

 
    
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
    ],

    loghi: [
        {
            image: "https://testmatick.com/wp-content/uploads/2020/04/Logotip-Steam.jpg"
        },
        {
            image: "https://gaming-cdn.com/images/products/14672/616x353/playstation-network-card-10eur-eur10-card-playstation-4-playstation-5-gioco-playstation-store-paesi-bassi-cover.jpg?v=1696530870"
        },
        {
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDAVK2C4FoEmoVwYA8xOUglbn2TTDhuL5kYq2DCwkIEg&s"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/App_Store_%28iOS%29.svg/2048px-App_Store_%28iOS%29.svg.png"
        },
        {
            image: "https://cdn.vox-cdn.com/thumbor/CIlN-t9N4rlXid9OlX0x5NfKRy0=/1400x1400/filters:format(png)/cdn.vox-cdn.com/uploads/chorus_asset/file/6578821/844bac20026bcb6faf3d308fe9ad38365b3df6d1b5c4b74d0db309b426c997c5.0.png"
        },
        {
            image: "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/06/30/nintendo-eshop-problems-1024x576.jpg"
        },
        {
            image: "https://www.uagna.it/wp-content/uploads/2013/07/xbox360-path.jpg"
        },
        {
            image: "https://cdn.mos.cms.futurecdn.net/Q2oLsPvoGLpzWuDqZgzANH.jpg"
        },
        {
            image: "https://logowik.com/content/uploads/images/itchio5507.jpg"
        },
        {
            image: "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2021/02/epic-games-logo.png"
        },
    ],
})

