<template>
  <section>
    <header>
      <nav>
        <div class="container-fluid">
          <div class="row main_menu">
            <div class="col-md-2 contact">
              <div class="container">
                <div class="row contact_in">
                  <br>Конктакты организации:
                </div>
                <div class="row center">
                  <div class="col-md-2 padding-0">
                    <img class="icon_50" src="img/phone.png"/>
                  </div>
                  <div class="col-md-10 text padding-0 blue-text">
                    +7-666-666-6666
                  </div>
                </div>
                <div class="row center ">
                  <div class="col-md-2 padding-0">
                    <img class="icon_50" src="img/email.png"/>
                  </div>
                  <div class="col-md-10 text padding-0 blue-text">
                    school666@beluo.ru
                  </div>
                </div>
                <div class="row center button-right">
                  <div class="col-md-2 padding-0">
                    <img class="icon_50" src="img/map.png"/>
                  </div>
                  <div class="col-md-10 text padding-0 blue-text">
                    308000, г. Белгород,
                    <br>ул. Улица, д. 000
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-8  name">
              <router-link :to="{name:'Home'}">
                <br>Муниципальное бюджетное общеобразовательное учреждение
                <br>основная общеобразовательная школа №000
                <br>г. Белгорода
              </router-link>
            </div>
            <div class="col-md-2 version">
              <div class="container">
                <div class="row button-right height-50">
                  <a href="#">
                    <button class="entrance"><img class="icon" src="img/eye.png"/></button>
                  </a>
                </div>

                <div class="row button-right height-50">
                  <router-link :to="{name:'Login'}">
                    <button class="entrance">Авторизация</button>
                  </router-link>
                </div>

                <div class="row">
                  <form class="d-flex">
                    <input class="form-control me-2 search" type="search" placeholder="Введите запрос" aria-label="Search">
                    <button class="btn btn-outline-success search_button" type="submit">Найти</button>
                  </form>
                </div>


              </div>
            </div>
          </div>
        </div>


        <div class="container-fluid button-color">
          <div class="row float_menu">
            <div class="col-lg-2 padding-0">
              <router-link :to="{name:'Home'}">
                <button class="button-with-border">
                  Главная
                </button>
              </router-link>
            </div>
            <div class="col-lg-2 padding-0">
              <router-link :to="{name:'News'}">
                <button class="button-with-border">
                  Новости
                </button>
              </router-link>
            </div>
            <div class="col-lg-2 padding-0">
              <a href="#">
                <button class="button-with-border">Объявления</button>
              </a>
            </div>
            <div class="col-lg-2 padding-0">
              <a href="#">
                <button class="button-with-border">
                  Сведения об образовательной организации
                </button>
              </a>
            </div>
            <div class="col-lg-2 padding-0">
              <a href="#">
                <button class="button-with-border">
                  Деятельность
                </button>
              </a>
            </div>
            <div class="col-lg-2 padding-0">
              <a href="#">
                <button class="button-without-border">
                  Дополнительные сведения
                </button>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>


    <router-view/>


    <footer>
      <div class = "flex">
        <div class="col-1-3 padding-0 margin-left-15">
          <br>Обратная связь
        </div>
        <div class="col-1-3 padding-0 text-center">
          <br>Информационный портал МБОУ ООШ №000 г. Белгорода
          <br>&copy 2021 год
        </div>
        <div class="col-1-3 padding-0 text-right margin-right-15">
          <br>Ссылки на соц. сети
        </div>
      </div>
    </footer>
    </section>
</template>
