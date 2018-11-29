<template>
<div class="artworks">
  <loading-message class="loader" v-show="$store.state.loading" />
  <nuxt-link
    v-show="!$store.state.loading"
    :to="{name: 'artwork-id', params:{id: item.id}}"
    v-for="item in artworksHome"
    :key="item.id"
    class="box"
    :style="{'background-image': 'url(' +  (item.img.src || item.img.src_default) + ')'}">

   <div class="overlay">
     <div class="artwork-name">{{item.title}}</div>
     <div class="author">{{item.artist}}</div>
   </div>
  </nuxt-link>
</div>
</template>
<script>
import LoadingMessage from '~/components/LoadingMessage.vue'
export default{
	name: 'artworks-section',
  components: {
    LoadingMessage
  },
  data () {
    return {
      artworksHome: []
    }
  },
  async created () {
    this.$store.commit('SET_LOADING', true)
    this.artworksHome = await this.$api.getFeaturedArticles()
    this.$store.commit('SET_LOADING', false)
  }
}
</script>
<style scoped>
.artworks {
  width: 100%;
  height: 100vh;
  /*border: 2px solid #CCC;*/
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2,50%);
  /*justify-content: center;*/
  /*align-content: end;*/
}
.loader {
  width: 100%;
  height: 100%;
  background-color: #fffeee;
  color: #fff;
}
  .loader p {
    color: #fff;
  }

.box {
  background-color: #eee;
  color: #fff;
  padding: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  cursor: pointer;
  display: block;
}

.box:first-child {
  background-color: #fffeee;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.box:nth-child(2),
.box:nth-child(3) {
  grid-column: 3 / 5;
}
.box:nth-child(2) {
  background-color: blue;
  grid-row: 1 / 2;
}
.box:nth-child(3) {
  grid-row: 2 / 2;
}
  .box .overlay {
    background-color: rgba(104,104,104,.3);
    height: 100%;
    padding: 20px;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    flex-direction: column;
  }
    .box:hover .overlay {
      background-color: rgba(255,76,58,.3);
    }
  .box .artwork-name,
  .box .author {
    text-shadow: 1px 1px rgba(30,30,30,.5)
  }
  .box .artwork-name {
    font-size: 2.250em;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
  .box .author {
    font-size: 1.875em;
  }
@media (max-width: 670px) {
  .artworks {
    display: block;
    height: auto;
  }
  .box {
    height: 300px;
  }
}

</style>