<template>
  <div>
    <input type="text" v-model="message">
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      message: 'Hello'
    }
  },
  watch: {
    message: function (val) {
      this.message = val
      this.$store.commit('setMessage', val)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
