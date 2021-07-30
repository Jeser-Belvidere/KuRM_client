<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="header">
      <q-toolbar>
        <q-btn 
          dense 
          flat 
          round 
          icon="menu"
          style="font-size: 2rem;" 
          @click="left = !left" 
        />
      </q-toolbar>
    </q-header>

    <q-drawer 
      v-model="left" 
      side="left" 
      behavior="mobile" 
      content-class="bg-primary text-white"
      bordered
      :width="200"
      :breakpoint="300"
    >
      <q-list>
        <q-item
        clickable
        class="q-ma-md">
          <q-icon
            class="q-mr-md"
            name="gite"
            size="lg"
          />
          <q-item-section>
            О нас
          </q-item-section>
        </q-item>
        <q-item
        clickable
        class="q-ma-md">
          <q-icon
            class="q-mr-md"
            name="call"
            size="lg"
          />
          <q-item-section>
            Контакты
          </q-item-section>
        </q-item>        
        <q-item 
        clickable
        @click="onClick"
        v-if='isAuthCheck'
        class="q-ma-md">
          <q-icon
            class="q-mr-md"
            name="logout"
            size="lg"
          />
          <q-item-section>
            Выйти
          </q-item-section>
        </q-item>    
      </q-list>
    </q-drawer>
        <!--TODO: сделать динамическую отрисовку футера через v-for в зависимости от состояния
         отображения текущей страницы передавая массив с компонентами для данной страницы
         ? или отрисовать футер в самой странице-->
    <q-footer 
      elevated
      class="footer">
          <div class="row" >
            <div class="col-4">
              <q-btn
              class="full-width full-height"
              to="/orderProject"
              icon="local_mall"
              label="заказать проект"
              stack
              glossy
              color="$primary" />
            </div>
            <div class="col-4">
              <q-btn
              class="full-width full-height"
              to="/chat"
              icon="forum"
              label="Чат"
              stack
              glossy
              color="$primary" />
            </div>
            <div 
            class="col-4">
              <q-btn
              class="full-width full-height"
              to="/auth"
              icon="account_circle"
              label="Войти в аккаунт"
              stack
              glossy
              color="$primary" />
            </div>
          </div>
    </q-footer>
  
    <q-page-container >
      <transition name='slide-fade' mode="out-in">
        <router-view />
      </transition>
    </q-page-container>
  
  </q-layout>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data () {
    return {
      left: false,
    }
  },
  methods: {
    ...mapGetters('user',['isAuth']),
    ...mapActions('user',['logOut']),

    onClick() {
      this.logOut()
    }
  },
  computed: {
    isAuthCheck() {
      return this.isAuth()
    }
  }
}
</script>
<style lang="scss">
.slide-fade-enter-active { transition: all 0.3s ease-out; } 
.slide-fade-leave-active { transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); } 
.slide-fade-enter-from, 
.slide-fade-leave-to { transform: translateX(20px); opacity: 0; }

body {
  background-color: $primary;
  background-attachment: fixed;
  width: 100%;
  height: 100%;
}
</style>