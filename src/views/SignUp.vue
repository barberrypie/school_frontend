<template>
  <div class="login">
    <form>
      <div class="auth-form">
        <div class="head">
          <h2>Регистрация</h2>
        </div>

        <div>
          <input class="form-input" type="text" placeholder="Введите Ф.И.О.">
          <br>
          <input class="form-input" type="text" placeholder="Введите логин">
          <br>
          <input class="form-input" type="password" placeholder="Введите пароль">
          <br>
          <input class="form-input" type="text" placeholder="Введите e-mail">
          <br>
          <button class="log-in button"> Зарегистрироваться </button>
        </div>
        <router-link :to="{name:'Login'}">
            <button class="submits sign-up button frgt-pass" >Вы уже зарегистрированы?</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

