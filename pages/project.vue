<template>
<div class="project">
  <div class="portada">
    <div class="wrapper-1100">
      <h1 class="page-title">El proyecto</h1>
    </div>
  </div>
  <div class="wrapper-1100 main-cont">
    <h2>¿Qués es Apilable al infinito?</h2>
    <p>Apilable a infinito es un espacio abierto a la exploración del trabajo interpersonal y a la profusión de más obra. Cabe consignar que cada volumen es contenedor de una temática específica, en términos muy generales y si esto puede entenderse así, con una lógica de juego narrativo propia que deriva en una sucesión de aconteceres semánticos. En palabras de Alberto Caballero (1): “Guillermo Pérez Raventós deja claro este proceso, se trata indefectiblemente de un trabajo sobre “la letra” tanto el sonido matérico de la voz como el significado de lo que va sucediendo están al servicio de la letra, y por lo tanto la imagen visual que de ello se obtiene es lineal, no se trata de un texto a interpretar, se trata de una sucesión a la letra, ahora una, ahora la siguiente, la sucesiva… se trata de una sucesión de imágenes a la letra”.</p>
    <p><small>(1) Alberto Caballero, Barcelona junio 2009. Coordinador de GEIFC grupo de estudio e investigación de los fenómenos contemporáneos y de: Actión Art magazine sobre la acción.</small></p>
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
</style>

