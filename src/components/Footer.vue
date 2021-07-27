<template>
    <footer class="footer">
      <div class="container responsive footer__container">
        <div class="footer__item">
          <div class="footer__copyright">Copyright &#169; 2020 MyStartup</div>
          <div class="footer__copyright">Все права защищены.</div>
        </div>
        <div class="footer__item">
          <ul class="footer__menu">
            <li><a href="#">Главная</a></li>
            <li><a href="#">Наша миссия</a></li>
            <li><a href="#">Наша команда</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
          <div class="footer__socials">
            <a href="#"
              ><img
                src="https://img.icons8.com/fluent-systems-filled/48/000000/vkontakte.png"
            /></a>
            <a href="#"><BIconInstagram /></a>
            <a href="#"><BIconFacebook /></a>
            <a href="#"><BIconTwitter /></a>
            <a href="#"><BIconTelegram /></a>
          </div>
        </div>
        <ul class="footer__item _mobile footer__menu">
          <li><a href="#">Главная</a></li>
          <li><a href="#">Наша миссия</a></li>
          <li><a href="#">Наша команда</a></li>
          <li><a href="#">Контакты</a></li>
        </ul>
        <div class="footer__item">
          <a href="#" class="radius-button support-button dotted">Поддержка</a>
          <a href="#" class="footer__link">Пользовательское соглашение</a>
          <a href="#" class="footer__link">Политика конфиденциальности</a>
        </div>
        <div class="footer__item _mobile">
          <div class="footer__copyright _mobile">
            Copyright &#169; 2020 Bitswap.
          </div>
          <div class="footer__copyright _mobile">Все права защищены.</div>
        </div>
      </div>
    </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {
        
    },
})
</script>
