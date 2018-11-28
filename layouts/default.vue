<template>
  <div>
    <nav-vertical></nav-vertical>
    <nuxt/>
    <footer-layout></footer-layout>
  </div>
</template>
<script>
  import FooterLayout from '@/components/FooterLayout'
  import NavVertical from '@/components/NavVertical'
  export default {
    name: 'default',
    components: {
      FooterLayout,
      NavVertical
    }
  }
</script>
<style>
:root {
  --rojoPrimario: #FF4C3A;
}
html {
  box-sizing: border-box;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.wrapper-1100 {
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 15px;
  font-size: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
p {
  font-size: 1rem;
}
img {
  max-width: 100%;
  height: auto
}
button, input {
  border: 0;
}
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
.main {
  z-index: 1;
}
.nav-vertical {
  z-index: 3;
}
.index, .list, .artwork, .project {
  padding-left: 55px;
}
@media (max-width: 620px) {
  .index, .list, .artwork, .project {
    padding-left: 0;
  }
  body {
    padding-bottom: 55px;
  }
}
input {
  border: 0;
}


.portada {
  background-color: #f1e8b8;
  margin-bottom: 80px;
}
  .portada .wrapper-1100 {
    height: 225px;
    position: relative;
    display: flex;
    align-items: center;
  }
.page-title {
  font-size: 4.5rem;
  position: absolute;
  bottom: -40px;
  left: 15px;
}
@media (max-width: 620px) {
  .portada {
    margin-bottom: 40px;
  }
  .portada .wrapper-1100 {
    height: 130px;
  }
  .page-title {
    bottom: -23px;
    font-size: 3rem;
    line-height: 3.1rem;
  }
}

</style>

