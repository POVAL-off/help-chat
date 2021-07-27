<template>
    <header class="header">
      <!-- container -->
      <div class="header__container responsive container">
        <!-- header__start -->
        <div class="header__start"></div>
        <!-- /header__start -->
        <!-- header__end -->
        <div class="header__end mobile-d-none">
          <!-- header__user -->
          <div class="header__user mobile-d-none">
            <a href="#" class="toggler">
              <BIconPerson />
            </a>
            <div class="droplist">
              <div class="title">Логин</div>
              <ul class="list">
                <li><a href="#">История</a></li>
                <li><a href="#">Настройки</a></li>
                <li><a href="#">Выход</a></li>
              </ul>
            </div>
          </div>
          <!-- /header__user -->
          <!-- header__notifications -->
          <div class="header__notifications mobile-d-none">
            <a href="#" class="toggler">
              <BIconBell />
            </a>
            <div class="droplist extended">
              <div class="title">
                Новые уведомления <a href="#">Посмотреть все</a>
              </div>
              <div class="none">Новых уведомлений нет</div>
            </div>
          </div>
          <!-- /header__notifications -->
          <!-- header__lang -->
          <div class="header__lang mobile-d-none">
            <div class="toggler">
              <b-icon-globe><BIconChevronDown /></b-icon-globe>
            </div>
            <div class="droplist">
              <div class="title">Язык</div>
              <ul class="list">
                <li><a href="#" class="active">Русский</a></li>
                <li><a href="#">English</a></li>
              </ul>
            </div>
          </div>
          <!-- /header__lang -->
        </div>
        <!-- /header__end -->
      </div>
      <!-- container -->
    </header>
    <!-- /header -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
