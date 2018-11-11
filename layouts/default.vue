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
.main {
  z-index: 1;
}
.nav-vertical {
  z-index: 3;
}
.index, .list {
  padding-left: 55px;
}
@media (max-width: 620px) {
  .index, .list {
    padding-left: 0;
  }
  body {
    padding-bottom: 55px;
  }
}
</style>

