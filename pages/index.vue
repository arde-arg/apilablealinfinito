<template>
  <div class="index">
    <section class="main">
      <div class="wrapper-1100">
        <img class="logo-principal" src="../assets/marca-vertical.svg" alt="Apilable al infinito">
      </div>
      <img class="bg-letter" src="../assets/a.svg" alt="a">
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
          <button-layout>
            <template slot="button">Conocer más</template>
          </button-layout>
        </div>
      </div>
    </section>
    <artworks></artworks>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Artworks from '~/components/Artworks.vue'
import ButtonLayout from '~/components/ButtonLayout.vue'

export default {
  components: {
    AppLogo,
    Artworks,
    ButtonLayout
  }
}
</script>

<style scoped>
section {
  padding: 40px 0 40px 55px;
  width: 100%;
}
.main {
  background: #F1E8B8;
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
  position: absolute;
  left: 30%;
  bottom: -50vh;
}
.project {
  background: #FF4C3A;
  color: #fff;
  padding: 70px 0 70px 55px;
}
  .project .wrap-text {
    max-width: 550px
  }
  .project .title {
    margin-bottom: 40px;
  }
</style>

