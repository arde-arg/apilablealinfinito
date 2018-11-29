<template>
  <div class="search">
    <input
      type="search"
      :value="search"
      name="search"
      @keypress.enter="$emit('newSearch', $event.target.value)"
      placeholder="Buscar obra..."
    />
    <v-icon name="search" @click="$emit('newSearch', search)"/>
  </div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'
export default{
	name: 'search',
  components: {
    'v-icon': Icon
  },
  props: {
    search: {
      type: String,
      default: ''
    }
  }
}
</script>
<style scoped>
.search {
  display: inline-block;
  position: relative;
  margin-bottom: 40px;
}
@media (max-width: 620px) {
  .search {
    margin-bottom: 0;
  }
}
input {
  background-color: #dbdbdb;
  border-radius: 5px;
  height: 40px;
  padding: 5px 35px 5px 5px;
  width: 275px;
}
.fa-icon {
  position: absolute;
  right: 10px;
  top: 13px;
  cursor: pointer;
}
</style>