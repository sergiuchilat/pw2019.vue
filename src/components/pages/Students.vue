<template>
    <div>
      Students
      <b-table striped hover :items="items"></b-table>
    </div>
</template>

<script>
export default {
  name: 'Students',
  computed: {
    messageFromStore () {
      return this.$store.getters.getMessage
    },
    items () {
      return this.$store.getters.getStudents
    }
  },
  mounted () {
    this.$store.dispatch('fetchData').then(() => {})
  }
}
</script>

<style scoped>

</style>
