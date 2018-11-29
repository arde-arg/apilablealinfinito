<template>
  <div class="index">
    <section class="main">
      <div class="wrapper-1100">
        <img class="logo-principal" src="../assets/marca-vertical.svg" alt="Apilable al infinito">
      </div>
      <!-- <img class="bg-letter" src="../assets/a.svg" alt="a"> -->
    </section>
    <section class="project">
      <div class="wrapper-1100">
        <div class="wrap-text">
          <img src="../assets/el-proyecto.svg" alt="El proyecto" class="title">
          <p>
            “Apilable al infinito” (se apila, se archiva, se comparte).
            <br>
            Apilable como archivo: registro ordenado de obra, documentación de obra y autor.
            <br>
            Apilable como archivo que construye legibilidades posibles.
            <br>
            Reescrituras.
          </p>

          <nuxt-link to="/project">
            <button-layout>
              <template slot="button">Conocer más</template>
            </button-layout>
          </nuxt-link>
        </div>
      </div>
    </section>

    <loading-message v-show="$store.state.loading" />
    <artworks-section v-show="!$store.state.loading"/>

    <register-section />
  </div>
</template>

<script>
import ArtworksSection from '~/components/ArtworksSection.vue'
import ButtonLayout from '~/components/ButtonLayout.vue'
import RegisterSection from '~/components/RegisterSection.vue'
import LoadingMessage from '~/components/LoadingMessage.vue'

export default {
  components: {
    ArtworksSection,
    ButtonLayout,
    RegisterSection,
    LoadingMessage
  }
}
</script>

<style scoped>
section {
  padding-top: 40px;
  padding-bottom: 40px;
  width: 100%;
}
.main {
  background: #e9f0ce;
  position: relative;
}
.main .wrapper-1100 {
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: flex-end;
  text-align: right;
}
.bg-letter {
  bottom: -50vh;
  height: 100vh;
  left: 30%;
  position: absolute;
}
@media (max-width: 1025px) {
  .bg-letter {
    bottom: -25vh;
    height: 50vh;
    left: 15px;
  }
}
.project {
  background: #FF4C3A;
  color: #fff;
  padding: 70px 0;
}
  .project .wrap-text {
    max-width: 550px
  }
  .project .title {
    margin-bottom: 40px;
  }
.index /deep/ button {
  margin-top: 25px
}
</style>

