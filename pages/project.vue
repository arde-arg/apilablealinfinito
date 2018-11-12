<template>
<div class="project">
  <div class="portada">
    <div class="wrapper-1100">
      <h1 class="page-title">El proyecto</h1>
    </div>
  </div>
  <div class="wrapper-1100 main-cont">
    <h2>¿Qués es Apilable al infinito?</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt architecto suscipit dignissimos dolorum, omnis inventore enim ex a minus veritatis reiciendis facilis recusandae, quisquam, accusantium temporibus cum nemo nulla. Id.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus vel cum, iure quam. Illo hic veritatis, accusantium molestias et eligendi quaerat asperiores animi ad libero, quibusdam error soluta ratione ipsum!</p>
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

