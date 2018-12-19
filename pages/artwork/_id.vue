<template>
<div class="artwork">
  <div class="portada">
    <div class="portada-bg"></div>
    <div class="wrapper-1100">
      <nuxt-link to="/list" class="back-btn">
        <!-- <a @click="$router.go(-1)" href="" class="back-btn"> -->
          <v-icon
            name="arrow-left"
            class="icon">
          </v-icon>
        <!-- </a> -->
      </nuxt-link>
      <nuxt-link
        v-if="artwork.category"
        :to="{
          name: 'categoria',
          params:{
            categoryId: artwork.categoryId,
            categoryUri: artwork.categoryUri
          }
        }"
        class="category"
      >
        {{ artwork.category }}
      </nuxt-link>
      <h1 class="page-title">{{ artwork.title }}</h1>
    </div>
  </div>
  <div class="wrapper-1100 wrap-art-cont">
    <nuxt-link
      v-if="artwork.artist"
      :to="{
        name: 'artista',
        params:{
          artistId: artwork.artistId,
          artistUri: artwork.artistUri
        }
      }"
      class="artist"
    >@{{ artwork.artist }}
    </nuxt-link>
    <div class="date-block">
      <div class="date">{{ artwork.date }}</div>
      <share></share>
    </div>
    <div class="wrap-art">

<!--       <div v-if="artwork.video">
        <iframe
          :src="'https://player.vimeo.com/video/' + artwork.video"
          width="640"
          height="352"
          frameborder="0"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen>
        </iframe>
      </div> -->

      <div class="content">
        <template v-if="$store.state.loading">
          <loading-message />
        </template>
        <template v-else>
          <iframe
            v-if="artwork.video"
            :src="'https://player.vimeo.com/video/' + artwork.video"
            width="640"
            height="352"
            frameborder="0"
            webkitallowfullscreen
            mozallowfullscreen
            allowfullscreen>
          </iframe>
          <div v-html="artwork.content"></div>
        </template>
      </div>

      <div class="wrap-img">
        <img :src="artwork.img.src" :alt="artwork.img.alt" class="cover-img">
      </div>

    </div>
    <div v-if="artwork.pdfs.length" class="download-row">
      <div
        v-for="pdf in artwork.pdfs"
        :key="pdf.id"
        class="download-item" >
        <a
          :href="pdf.src"
          target="_blank">
          <svg xmlns="http://www.w3.org/2000/svg" width="40.572" height="40.573">
            <path d="M39.748 36.524a.826.826 0 0 0-.826.826v1.571H1.651v-5.504h38.097a.825.825 0 0 0 0-1.651H.825a.828.828 0 0 0-.825.828v7.153c0 .456.369.826.825.826h38.922c.455 0 .824-.37.824-.826v-2.396a.823.823 0 0 0-.823-.827zM19.703 27.999a.828.828 0 0 0 1.167 0L31.378 17.49a.827.827 0 0 0 0-1.168.824.824 0 0 0-1.167 0l-9.925 9.925-9.926-9.925a.824.824 0 0 0-1.167 0 .827.827 0 0 0 0 1.168l10.51 10.509z"/>
            <path d="M20.287 23.589c.456 0 .825-.37.825-.825V.825a.825.825 0 0 0-1.652 0v21.938c0 .456.37.826.827.826z"/>
          </svg>
          <p>{{pdf.filename}}</p>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ButtonLayout from '~/components/ButtonLayout.vue'
import Icon from 'vue-awesome/components/Icon'
import ListModule from '~/components/ListModule.vue'
import Search from '~/components/Search.vue'
import Share from '~/components/Share.vue'
import LoadingMessage from '~/components/LoadingMessage.vue'

export default {
  components: {
    ButtonLayout,
    ListModule,
    Search,
    Share,
    LoadingMessage,
    'v-icon': Icon
  },
  validate ({ params }) {
    return /^\d+$/.test(params.id)
  },
  data () {
    return {
      artwork: {
        id: 0,
        artist: '',
        category: ''  ,
        img: {
          src: '',
          alt: ''
        },
        date: '',
        pdfs: [],
        title: ''
      }
    }
  },
  async created () {
    this.$store.commit('SET_LOADING', true)
    try {
      this.artwork = await this.$api.getArticle(
        this.$route.params.id,
        this.$route.query.preview
      )
    }catch(e){
      console.log(e)
      this.$nuxt.error({
        statusCode: 404,
        message: 'Este artículo no fue encontrado'
      })
    }finally{
      this.$store.commit('SET_LOADING', false)
    }
  }
}
</script>

<style scoped>
.portada {
  background-color: transparent;
  padding: 20px 0 0;
  position: relative;
  min-height: 200px;
  /*margin-bottom: 80px;*/
}
  .portada .portada-bg {
    position: absolute;
    width:100%;
    height: 225px;
    background-color: #f1e8b8;
    top: 0;
    left: 0;
  }
  @media (max-width: 620px) {
    .portada .portada-bg {
      height: 130px;
    }
  }
  .portada .wrapper-1100 {
    height: auto;
    /*position: relative;*/
    display: block;
    /*align-items: center;*/
  }
  .back-btn {
    /*position: absolute;*/
    /*left: 15px;*/
    /*top: 40px;*/
    display:  block;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }
  .fa-icon {
    width: auto;
    height: 1em; /* or any other relative font sizes */

    /* You would have to include the following two lines to make this work in Safari */
    max-width: 100%;
    max-height: 100%;
  }

  .artwork .category {
    display: block;
    font-size: 1.5rem;
    margin-bottom: 50px;
  }

  .page-title {
    font-size: 3rem;
    line-height: 3.2rem;
    position: relative;
    bottom: auto;
    left: auto;
  }
  @media (max-width: 620px) {
    .portada {
      margin-bottom: 40px;
    }
    .portada .wrapper-1100 {
      height: auto;
    }
    .page-title {
      bottom: auto;
      font-size: 2.5rem;
      line-height: 2.6rem;
    }
  }

  .artwork .artist {
    font-size: 2.25rem;
    margin-bottom: 30px;
  }
  .artwork .artist:hover {
    transition: .3s all ease;
    color: #FF4C3A;
  }
  .artwork .date-block {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    width: 100%;
  }
    .artwork .date {
      font-size: 1.125rem;
    }
    @media (max-width: 620px) {
      .artwork .artist {
        font-size: 1.125rem;
      }
      .artwork .date {
        font-size: .9rem;
      }
    }
    .wrap-art-cont {
      padding-bottom: 120px;
      min-height: calc(100vh - 329px)
    }
    .wrap-art {
      display: grid;
      grid-gap: 30px;
      grid-template-columns: 2;
      grid-template-rows: 2;
    }
    .wrap-art .content {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
    }
    .wrap-art iframe {
      margin-bottom: 20px;
    }
    @media (max-width: 620px) {
      .wrap-art {
        display: block;
      }
    }
      .wrap-art .content p {
        font-size: 0.875rem;
        line-height: .9rem;
        margin-bottom: 10px;
      }
      .wrap-art .content img {
        margin: 0 0 15px;
      }
    .wrap-art .wrap-img {
      grid-column: 2 / 3;
      grid-row: 1 / 3;
    }
    .wrap-art .wrap-img img {
      margin: 0 auto;
    }
.download-row {}
  .download-item {
    display: inline-block;
    font-size: .875rem;
    padding: 20px;
    text-align: center;
    cursor: pointer;
  }
    .download-item a {
      display: block;
    }
    .download-item:hover svg {
      fill: #FF4C3A;
    }
    .download-item:hover a {
      color: #FF4C3A;
    }
</style>

