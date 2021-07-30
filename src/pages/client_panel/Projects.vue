<template>
  <q-page padding>
    <h1>PROJECTS PAGE</h1>
    <div class="main
      column
      justify-center
      items-center">
      <!--  <div v-for="project of mockOfProjects"
      class="listOfProjects">

      </div>  -->
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'ProjectsPage',
  mounted() {
    this.$store.dispatch('page/changeCurrentPageAction', 'ProjectsPage')
  },
  data() {
    return {
      mockOfProjects: [
        {
          project_id: '1',
          user_id: '1',
          adress: 'Проспект Вернадского 105к4',
          autor_status: false
        },
        {
          project_id: '1',
          user_id: '1',
          adress: 'Проспект Вернадского 105к4',
          autor_status: false
        },
        {
          project_id: '1',
          user_id: '1',
          adress: 'Проспект Вернадского 105к4',
          autor_status: false
        },
      ]
    }
  }
}
</script>

<style lang="scss">

</style>