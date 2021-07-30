<template>
<transition name='slide-fade' mode="out-in">
  <q-page padding>
    <div class="main
      column
      justify-center
      items-center">
        <div class="brandTitle">
          <h2>KUDESIGN</h2>
        </div>
    </div>
  </q-page>
  </transition>
</template>
<script>
export default {
   name: 'HomePage',
   mounted() {
    this.$store.dispatch('page/changeCurrentPageAction', 'HomePage')
  },
}
</script>

<style lang="scss">

.brandTitle {
  overflow: auto;
  color: $secondary;
}
</style>
