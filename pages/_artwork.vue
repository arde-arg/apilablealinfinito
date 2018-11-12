<template>
<div class="artwork">
  <div class="portada">
    <div class="wrapper-1100">
      <div class="category">{{ $store.state.artworkSelected.category }}</div>
      <h1 class="page-title">{{ $store.state.artworkSelected.title }}</h1>
    </div>
  </div>
  <div class="wrapper-1100 wrap-art-cont">
    <div class="artist">@{{ $store.state.artworkSelected.artist }}</div>
    <div class="date-block">
      <div class="date">{{ $store.state.artworkSelected.date }}</div>
      <share></share>
    </div>
    <div class="wrap-art">
      <div class="content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper erat id ex varius lobortis. Etiam imperdiet, justo nec fringilla ornare, mauris quam venenatis augue, vitae pulvinar ex neque at enim. Quisque aliquam dolor eget iaculis aliquet. Praesent interdum, risus eu tempus posuere, ante metus posuere velit, sed vehicula lectus ante sed lectus. Suspendisse eget euismod sem, rhoncus congue augue. Phasellus mollis non urna eget feugiat. Suspendisse potenti.</p>
        <p>Vivamus sit amet convallis erat, eget pellentesque sem. Aenean at mollis purus, nec scelerisque felis. Fusce est arcu, iaculis sed pretium sed, vehicula nec felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi in neque non felis placerat volutpat. Etiam scelerisque felis at finibus condimentum. Nunc vel porttitor leo, quis varius lorem. Suspendisse malesuada eros et porta tempor.</p>
        <img src="../assets/china.png" alt="China">
        <p>Vivamus sit amet convallis erat, eget pellentesque sem. Aenean at mollis purus, nec scelerisque felis. Fusce est arcu, iaculis sed pretium sed, vehicula nec felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi in neque non felis placerat volutpat. Etiam scelerisque felis at finibus condimentum. Nunc vel porttitor leo, quis varius lorem. Suspendisse malesuada eros et porta tempor.</p>
        <p>Vivamus sit amet convallis erat, eget pellentesque sem. Aenean at mollis purus, nec scelerisque felis. Fusce est arcu, iaculis sed pretium sed, vehicula nec felis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi in neque non felis placerat volutpat. Etiam scelerisque felis at finibus condimentum. Nunc vel porttitor leo, quis varius lorem. Suspendisse malesuada eros et porta tempor.</p>
      </div>
      <div class="wrap-img">
        <img :src="$store.state.artworkSelected.coverImg.src" :alt="$store.state.artworkSelected.coverImg.alt" class="cover-img">
      </div>
    </div>
    <div v-if="$store.state.artworkSelected.pdfs" class="download-row">
      <div
        v-for="pdf in $store.state.artworkSelected.pdfs"
        :key="pdf.id"
        class="download-item" >
        <svg xmlns="http://www.w3.org/2000/svg" width="40.572" height="40.573">
          <path d="M39.748 36.524a.826.826 0 0 0-.826.826v1.571H1.651v-5.504h38.097a.825.825 0 0 0 0-1.651H.825a.828.828 0 0 0-.825.828v7.153c0 .456.369.826.825.826h38.922c.455 0 .824-.37.824-.826v-2.396a.823.823 0 0 0-.823-.827zM19.703 27.999a.828.828 0 0 0 1.167 0L31.378 17.49a.827.827 0 0 0 0-1.168.824.824 0 0 0-1.167 0l-9.925 9.925-9.926-9.925a.824.824 0 0 0-1.167 0 .827.827 0 0 0 0 1.168l10.51 10.509z"/>
          <path d="M20.287 23.589c.456 0 .825-.37.825-.825V.825a.825.825 0 0 0-1.652 0v21.938c0 .456.37.826.827.826z"/>
        </svg>
        <a
          :href="pdf.src"
          target="_blank">
          {{pdf.filename}}
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import ListModule from '~/components/ListModule.vue'
import Search from '~/components/Search.vue'
import Share from '~/components/Share.vue'
export default {
  components: {
    ListModule,
    Search,
    Share
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
  .artwork .category {
    font-size: 1.5rem;
  }
  .artwork .artist {
    font-size: 2.25rem;
    margin-bottom: 30px;
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
    }
    .wrap-art {
      display: grid;
      grid-gap: 15px;
      grid-template-columns: 2;
      grid-template-rows: 2;
    }
    .wrap-art .content {
      grid-column: 1 / 2;
      grid-row: 1 / 3;
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

