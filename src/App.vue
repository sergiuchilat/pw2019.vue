<template>
  <div id="app">
    <Menu></Menu>
    <hr>
    {{$t('message.hello')}}
    <hr>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Menu from '@/components/blocks/Menu'
import Footer from '@/components/blocks/Footer'
import i18n from '@/plugins/i18n'
export default {
  name: 'App',
  components: {
    Menu,
    Footer,
    i18n
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
