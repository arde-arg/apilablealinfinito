<template>
<div class="project">
  <div class="portada">
    <div class="wrapper-1100">
      <h1 class="page-title">El proyecto</h1>
    </div>
  </div>
  <div class="wrapper-1100 main-cont">
    <div class="content">
      <h2>¿Qués es Apilable al infinito?</h2>
      <p>Un concepto: “Apilable al infiNito” (se colecciona, se archiva, se comparte).</p>
      <p>Apilable como archivo: registro ordenado de obra, documentación de obra y autor.</p>
      <p>Apilable como obra, que se “archiva”, el carácter de hacerlo en módulos intercambiables hace que la lectura se realice e intervenga de forma diferente en cada usuario / espectador / coleccionista.</p>
      <p>La intención de los creadores de Apilable al infinito es interactuar con otros artistas para ir concretando la construcción de un “gran archivo”. En tanto compilador, se inscribe dentro de la tradición de la Ilustración y la enciclopedia dando respuesta poética a una contemporaneidad de sociedades regidas por la información. Irreversibilidad del tiempo y la sensación de estar dentro y no fuera del acontecimiento. El arte contemporáneo como bien dice Boris Groys, se vuelve el medio para investigar el ser del acontecimiento, los diferentes modos de la experiencia inmediata del acontecimiento, la relación entre el acontecimiento, la documentación y el archivo, y las formas emocionales e intelectuales a partir de las que nos relacionamos con la documentación.</p>
      <p>Abrimos el campo para resignifiar un formato, ARCHIVO, a través de la mirada del arte conceptual. Nuevos modos de disposición de documentación sobre arte contemporáneo y artistas, en constante construcción pero que “apilados” de una forma u otra podrían (modos de disposición) hablarnos de diferentes accesos al conocimiento. Un archivo que no solo almacena sino que “crea” sus contenidos al reordenarlos.</p>
      <p>Para el artista contemporáneo la posibilidad de participar en esta constelación de motivos y producciones visuales lo pone a interactuar en el mundo del acontecimiento, del registro, del intercambio de información, el flujo en el tiempo irreversible. Obras que se mostrarán no solo como obras terminadas sino como proceso mental y rastro dentro de la abundancia de conocimiento, relacionándolas, dándolas a conocer, agrupándolas.</p>
      <p>Los invitamos con Apilables al infinito a armar vuestro propio archivo y activarlo.</p>
    </div>
    <div class="wrap-img">
      <img src="../assets/proyecto-personas.png" alt="Grupo Apilable al infinito.">
      <p>AGUSTÍN LAFROSSIA</p>
      <p>AGUSTINA GIRARDI</p>
      <p>ALICIA VANDAMME</p>
      <p>CARLOS JAVIER DIAZ DE LA SOTA</p>
      <p>EZEQUIEL RIVERO</p>
      <p>GABRIELA MUÑOZ</p>
      <p>GUILLERMO PEREZ RAVENTOS</p>
      <p>JOAQUIN CONDE</p>
      <p>KEVIN POWELL</p>
      <p>RAFAEL SANTOS</p>
    </div>
  </div>
</div>
</template>

<script>

export default {
  components: {
  }
}
</script>

<style scoped>
.portada {
  background-color: #f1e8b8;
  margin-bottom: 80px;
}
  .portada .wrapper-1100 {
    height: 120px;
    position: relative;
    display: flex;
    align-items: center;
  }
.project .main-cont {
	min-height: calc(100vh - 120px - 80px - 42px)
}
.main-cont {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 2;
  grid-template-rows: 2;
  padding-bottom: 50px;
}
  .main-cont .content {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    padding-bottom: 30px;
  }
  .main-cont .wrap-img {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
  .main-cont .wrap-img img {
    margin-bottom: 20px;
  }
  .main-cont .wrap-img p {
    margin-bottom: 5px;
  }
  @media (max-width: 620px) {
    .main-cont {
      display: block;
    }
  }
</style>

