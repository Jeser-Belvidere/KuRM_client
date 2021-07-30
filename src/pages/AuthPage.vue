<template>
<transition name='slide-fade' mode="out-in">
  <q-page padding>
     <div class="main column justify-center items-center">
      <!--TODO: 
        Вынести форму в отдельный компонент
        -->
          <q-form
          class="q-gutter-md">
            <q-input
            v-model="userData.email" 
            bg-color="secondary"
            rounded
            outlined
            label="Email">
              <template v-slot:append>
                <q-icon
                  name="person" />
              </template>
            </q-input>

            <q-input 
            v-model="userData.password"
            type="password"
            bg-color="secondary"
            rounded
            outlined
            label="Password">
              <template v-slot:append>
                <q-icon name="lock" />
              </template>
            </q-input>

            <div class='actions q-gutter-md'>
              <q-btn
              color="white"
              text-color="black"
              @click="onLoginHandler"
              >
                Войти
              </q-btn>

              <q-btn
              color="white"
              text-color="black"
              to='/logup'
              >
                Зарегистрироваться
              </q-btn>
            </div>
          </q-form>
    </div>
  </q-page>
  </transition>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'AuthPage',
  data() {
    return {
      userData: {
      email: '',
      password: ''
      }
    }
  },
  methods: {
    ...mapActions('user',['loginHandler']),

    onLoginHandler() {
     this.loginHandler(this.userData)
    },
  },
  
}
</script>

<style lang="scss">
.slide-fade-enter-active { transition: all 0.3s ease-out; } 
.slide-fade-leave-active { transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1); } 
.slide-fade-enter-from, 
.slide-fade-leave-to { transform: translateX(20px); opacity: 0; }
</style>