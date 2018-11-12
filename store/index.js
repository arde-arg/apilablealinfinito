import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      artworks: [
        {
          id: 1,
          img: {
            src: require('@/assets/china.png'),
            alt: 'Obra de arte'
          },
          artist: 'Uemura Shōen',
          title: 'Hotaru',
          category: 'Arte Japonés'
        },
        {
          id: 2,
          img: {
            src: require('@/assets/laberinto.png'),
            alt: 'Obra de arte'
          },
          artist: 'Costhanzo',
          title: 'Laberinto',
          category: 'Arte Bonaerense'
        },
        {
          id: 3,
          img: {
            src: require('@/assets/china.png'),
            alt: 'Obra de arte'
          },
          artist: 'Uemura Shōen',
          title: 'Hotaru',
          category: 'Arte Japonés'
        },
        {
          id: 4,
          img: {
            src: require('@/assets/china.png'),
            alt: 'Obra de arte'
          },
          artist: 'La Frossia Francisco emanuel Taborda',
          title: 'Título largo de una obra nueva',
          category: 'Arte Japonés'
        },
        {
          id: 5,
          img: {
            src: require('@/assets/laberinto.png'),
            alt: 'Obra de arte'
          },
          artist: 'Costhanzo',
          title: 'Laberinto',
          category: 'Arte Bonaerense'
        },
        {
          id: 6,
          img: {
            src: require('@/assets/china.png'),
            alt: 'Obra de arte'
          },
          artist: 'Uemura Shōen',
          title: 'Hotaru',
          category: 'Arte Japonés'
        }
      ],
      artworksHome: [
        {
          id: 1,
          img: {
            src: require('@/assets/china.png'),
            alt: 'Obra de arte'
          },
          artist: 'Uemura Shōen',
          title: 'Hotaru',
          category: 'Arte Japonés'
        },
        {
          id: 2,
          img: {
            src: require('@/assets/laberinto.png'),
            alt: 'Obra de arte'
          },
          artist: 'Costhanzo',
          title: 'Laberinto',
          category: 'Arte Bonaerense'
        },
        {
          id: 3,
          img: {
            src: require('@/assets/china.png'),
            alt: 'Obra de arte'
          },
          artist: 'Uemura Shōen',
          title: 'Hotaru',
          category: 'Arte Japonés'
        }
      ],
      artworkSelected: {
        id: 1,
        artist: 'Uemura Shōen',
        category: 'Arte Japonés',
        coverImg: {
          src: require('@/assets/china.png'),
          alt: 'Obra de arte'
        },
        date: '26/09/2018',
        pdfs: [
          {
            id: 1,
            filename: 'Obra nueva',
            src: ''
          }
        ],
        title: 'Hotaru'
      },
      counter: 0
    }),
    mutations: {
      increment (state) {
        state.counter++
      }
    }
  })
}

export default createStore