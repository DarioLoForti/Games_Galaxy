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

    platforms: [
        {
            image: "https://img.freepik.com/premium-vector/computer-pc-icon-logo-design_775854-1632.jpg"
        },
        {
            image: "https://i.etsystatic.com/22852620/r/il/e93ec6/2663930898/il_570xN.2663930898_g90m.jpg"
        },
        {
            image: "https://www.salvatorepumo.it/wp-content/uploads/2023/09/logo-playstation-4.png"
        },
        {
            image: "https://l450v.alamy.com/450vit/hp0rbh/logo-di-xbox-one-hp0rbh.jpg"
        },
        {
            image: "https://pbs.twimg.com/profile_images/1345715836753993729/iCIRJ9gg_400x400.jpg"
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Nintendo_switch_logo.png/480px-Nintendo_switch_logo.png"
        },
        {
            image: "https://static.vecteezy.com/system/resources/thumbnails/021/496/368/small_2x/ios-icon-logo-software-phone-apple-symbol-with-name-black-design-mobile-illustration-free-vector.jpg"
        },
        {
            image: "https://www.salvatorepumo.it/wp-content/uploads/2023/02/logo-android-oggi.png"
        },
        {
            image: "https://fs-prod-cdn.nintendo-europe.com/media/images/03_teaser_module_1_square/systems_2/nintendo_3ds_3/TM_GenericTMs_3DS.png"
        },
        {
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/98529f60-a744-4c8f-8ea8-40b283d374b8/dem33fu-be3959b4-4622-412d-a604-fb0ca34ba110.png/v1/fill/w_718,h_540,q_80,strp/nintendo_ds_startup_logo_remake__update__by_ezequieljairo_dem33fu-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTQwIiwicGF0aCI6IlwvZlwvOTg1MjlmNjAtYTc0NC00YzhmLThlYTgtNDBiMjgzZDM3NGI4XC9kZW0zM2Z1LWJlMzk1OWI0LTQ2MjItNDEyZC1hNjA0LWZiMGNhMzRiYTExMC5wbmciLCJ3aWR0aCI6Ijw9NzE4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.fdYfxjJCjYwEtBEgx6-HAnyq8nTVg9wwZgYzTM1h6AE"
        },
        {
            image: "https://static.wikia.nocookie.net/mitchell/images/4/42/Nintendo_DSi_logo.png/revision/latest?cb=20161103015629"
        },
        {
            image: "https://logowik.com/content/uploads/images/mac-os.jpg"
        },
        {
            image: "https://images.vexels.com/media/users/3/140692/isolated/preview/72d1f12edf758d24f5b6db73bac4f297-linux-logo.png"
        },
        {
            image: "https://payload.cargocollective.com/1/8/272109/3900253/Screen%20Shot%202012-08-11%20at%202.02.05%20PM%20copy_o.png"
        },
        {
            image: "https://logowik.com/content/uploads/images/xbox5244.jpg"
        },
        {
            image: "https://www.internetmatters.org/wp-content/uploads/2023/01/Playstation-3-logo-600x313.webp"
        },
        {
            image: "https://i.pinimg.com/originals/41/80/f7/4180f7ce03e431cdaa62018fb638da3c.jpg"
        },
        {
            image: "https://w7.pngwing.com/pngs/942/214/png-transparent-playstation-2-playstation-vr-playstation-camera-super-nintendo-entertainment-system-playstation-4-logo-text-logo-video-game-thumbnail.png"
        },
        {
            image: "https://pbs.twimg.com/profile_images/595306625998675968/s90WosHA_400x400.jpg"
        },
        {
            image: "https://w0.peakpx.com/wallpaper/321/286/HD-wallpaper-playstation-portable-psp-widescreen-playstation-logo-awesome-black-portable-sony-psp.jpg"
        },
        {
            image: "https://cdn2.steamgriddb.com/thumb/3108433cd549f596381a5c2f0f0087ef.jpg"
        },
        {
            image: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8620066f-455d-4b15-bd72-96bd441e42d7/d2f0a3h-fd63d9c9-c858-47a2-a2ce-a8487a5f9a81.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzg2MjAwNjZmLTQ1NWQtNGIxNS1iZDcyLTk2YmQ0NDFlNDJkN1wvZDJmMGEzaC1mZDYzZDljOS1jODU4LTQ3YTItYTJjZS1hODQ4N2E1ZjlhODEuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.C2GY2pQmVsn285d8vtH3U2kELWpnj4vMYRDo4CkGNgs"
        },
        {
            image: "https://jojo-funstore.com/cdn/shop/collections/nintendo-gamecube-logo-purple.jpg?v=1646564546"
        },
        {
            image: "https://i.pinimg.com/originals/a8/ef/c2/a8efc291c402994c982ddf79f251499d.png"
        },
        {
            image: "https://toppng.com/uploads/preview/source-nintendo-game-boy-advance-logo-115629163465s1fttrycr.png"
        },
        {
            image: "https://i.pinimg.com/736x/aa/3e/11/aa3e11b0b021102d404189bce7c21333.jpg"
        },
        {
            image: "https://logowik.com/content/uploads/images/game-boy-player6395.logowik.com.webp"
        },
        {
            image: "https://logowik.com/content/uploads/images/snes3714.logowik.com.webp"
        },
        {
            image: "https://cdn.dribbble.com/users/75654/screenshots/4777658/nes-logo_dribbble.jpg"
        },
        {
            image: "https://www.perfectlyintune.com/page34/page35/files/apple-logo-0028640x4800029.jpg"
        },
        {
            image: "https://www.stickersmurali.com/it/img/arc144-jpg/folder/products-listado-merchanthover/adesivi-apple-ii.jpg"
        },
        {
            image: "https://logowik.com/content/uploads/images/commodore-amiga5783.logowik.com.webp"
        },
        {
            image: "https://reaganray.com/img/blog/video-game-consoles/atari-7800.png"
        },
        {
            image: "https://supergamestation.com/cdn/shop/collections/atari_5200_logo_1200x1200.jpg?v=1605990317"
        },
        {
            image: "https://logowik.com/content/uploads/images/atari-26008865.jpg"
        },
        {
            image: "https://www.pngitem.com/pimgs/m/95-954955_atari-flashback-logo-png-transparent-png.png"
        },
        {
            image: "https://a0.anyrgb.com/pngimg/1494/1700/atari-age-atari-800xl-atari-logo-atari-jaguar-atari-st-atari-8bit-family-atari-2600-commodore-64-go-to-atari.png"
        },
        {
            image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPKrEQX7nTxtmwp4686fPpxMS4HRiaE2Ydk2HFMJ973UABuDUEBPnZGx325nKdArisxUvYs3LfY0LOhKwcN7nxuyKRnmm42gi7My6TIV63W7sAsk3YokIWvvLQALNNOPYt-fSUmh2q8tFj/s640/Atari+ST.png"
        },
        {
            image: "https://2hg.nl/c/360-category_default/atari-lynx-consoles-and-accessories.jpg"
        },
        {
            image: "https://reaganray.com/img/blog/video-game-consoles/atari-xe.png"
        },
        
       
    ]
})

