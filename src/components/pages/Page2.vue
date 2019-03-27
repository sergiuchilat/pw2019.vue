<template>
    <div>
      {{messageFromStore}}
    </div>
</template>

<script>
export default {
  name: 'Page2',
  computed: {
    messageFromStore () {
      return this.$store.getters.getMessage
    }
  }
}
</script>

<style scoped>

</style>
