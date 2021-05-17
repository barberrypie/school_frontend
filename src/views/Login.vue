<template>
  <div class="login">
    <form>
      <div class="auth-form">
        <header>
          <h2>Авторизация</h2>
          <p>зайдите на сайт, используя свой логин и пароль</p>
        </header>

        <div>
          <input class="form-input" type="text" placeholder="Логин">
          <br>
          <input class="form-input" type="password" placeholder="Пароль">
          <br>
          <router-link :to="{name:'Home'}">
            <button class="log-in submits sign-up button"> Войти </button>
          </router-link>

        </div>
        <div class="buttons">
          <button class="submits frgt-pass button">Забыли пароль?</button>
          <router-link :to="{name:'SignUp'}">
          <button class="submits sign-up button">Зарегистрироваться</button>
          </router-link>
        </div>
      </div>
    </form>
  </div>
</template>


<script>
export default {
  name: "Login",
  data() {
    return {
      email: '',
      password: '',
      errorsEmail: '',
      errorsPassword: ''
    }
  },
  methods: {
    login(event) {
      this.errorsEmail = ''
      this.errorsPassword = ''

      if (this.email.trim().length === 0) {
        this.errorsEmail = 'Пожалуйста заполниет Email.'
      }
      if (this.password.trim().length === 0) {
        this.errorsPassword = 'Пожалуйста заполниет Пароль.'
      }

      if (this.errorsEmail.length === 0 && this.errorsPassword.length === 0) {
        alert('Отправили запрос.')
      }

      event.preventDefault()
    }
  }
}
</script>

