<template>
  <div id="app">
    <Menu></Menu>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from '@/components/blocks/Menu'
import Footer from '@/components/blocks/Footer'

export default {
  name: 'App',
  components: {
    Menu,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
