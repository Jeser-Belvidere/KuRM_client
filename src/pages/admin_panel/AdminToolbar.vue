<template>
  <q-page padding>
    <div class="main column items-center">
        <div class="q-pa-md">
          <h2 style='color: white;'>AdminPage</h2>

          <div class="admin-tools row">
            <div class="col">
              <orders-button />
            </div>

            <div class="col">
              <search-button />
            </div>
          </div>
          
        </div>
    </div>
  </q-page>
</template>

<script>
import OrdersButton from 'src/components/admin_toolbar_components/OrdersButton.vue'
import SearchButton from 'src/components/admin_toolbar_components/SearchButton.vue'

export default {
  components: { OrdersButton, SearchButton },
  name: 'AdminToolbarPage',
  data() {
    return {

    }
  },
}
</script>

<style lang='scss'>


</style>