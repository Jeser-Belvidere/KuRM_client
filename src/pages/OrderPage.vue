<template>
  <q-page padding>
    <div class='main column items-center'>
      <h3>Заказ проекта</h3>
      <!--TODO: 
        Вынести форму в отдельный компонент
        -->
      <div class='q-gutter-md  items-center column'>
          <q-input 
            v-model="projectData.size"
            type="number"
            bg-color="secondary"
            rounded
            outlined
            label="Площадь кв/м">
              <template v-slot:append>
                <q-icon name="aspect_ratio" />
              </template>
          </q-input>
          
          <q-list>
            <q-item tag="label" v-ripple>
              <q-item-section avatar>
                <q-checkbox v-model="projectData.autorWatch" color="teal" />
              </q-item-section>
              <q-item-section>
                <q-item-label>Авторский Надзор</q-item-label>
                <q-item-label class='itemLabel' caption>Авторский надзор дает 100% гарантию выполнения заказов так, как они и были запланированны</q-item-label>
              </q-item-section>
            </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section avatar>
                  <q-checkbox v-model="projectData.prepay" color="orange" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>100% предоплата</q-item-label>
                  <q-item-label class='itemLabel' caption>При 100% оплате будет произведена скидка размеров в .....%</q-item-label>
                </q-item-section>
              </q-item>

              <q-item tag="label" v-ripple>
                <q-item-section avatar top>
                  <q-checkbox v-model="projectData.inMkad" color="cyan" />
                </q-item-section>
                <q-item-section>
                  <q-item-label>В пределах МКАД</q-item-label>
                  <q-item-label class='itemLabel' caption>Доступность стройки в пределах МКАД упрощает логистику,
                    за пределами мкад будет произведен отдельный расчет за каждый км</q-item-label>
                </q-item-section>
              </q-item>
          </q-list>
            <q-btn
            @click="calculate"
              class="q-pa-sm"
              color="secondary"
              text-color="primary"
              icon="calculate"
              label="Предварительный рассчет"
            />
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'OrderPage',
  mounted() {
    this.$store.dispatch('page/changeCurrentPageAction', 'OrderPage')
  },
  data() {
    return {
      projectData: {
        size: '',
        autorWatch: false,
        prepay: false,
        inMkad: false
      }
    }
  },
  methods: {
    //TODO: Дописать логику просчета
    calculate() {

    }
  }
}
</script>

<style lang='scss'>
.main {
  color: $secondary;
}
.itemLabel {
  color: $thirdly;
}
</style>
