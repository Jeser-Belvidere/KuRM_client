<template>
  <q-page padding>
    <div class='main'>
    <h1 style='color: white;'>Chat Page</h1>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ChatPage',
  mounted() {
    this.$store.dispatch('page/changeCurrentPageAction', 'ChatPage')
  },
  data() {
    return {

    }
  }
}
</script>

<style lang='scss'>

</style>