<template>
  <div class="chat-box">
    <div class="chat-box__header">
      <a href="#" class="back"><BIconChevronLeft /></a>
      <h1 class="main-title">Добро пожаловать в онлаин-чат службы поддержки</h1>
      <div style="width: 12px" class=""></div>
    </div>
    <MessageBox :messages="messages" />
    <form class="chat-box__form main-form" @submit.prevent>
      <textarea v-model="messageInput" class="input-style" rows="7"></textarea>
      <div class="row">
        <label class="main-form__item file-field"> </label>
        <div class="main-form__submit">
          <button
            @click="sendMessage"
            type="submit"
            class="radius-button standart rounded"
          >
            Отправить
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import MessageBox from "./MessageBox.vue";
import { defineComponent, onMounted, ref } from "vue";

interface IMessage {
  messageId: number;
  userName: string;
  message: string;
  isOwn?: boolean;
  time?: Date;
}

export default defineComponent({
  components: {
    MessageBox,
  },
  setup() {
    const messages = ref<IMessage[]>([
      {
        messageId: Date.now(),
        userName: "Helper",
        message: `Добрый день, Дмитрий. Опишите вашу проблему более подробно. У вас возникли ошибки (баги) на сайте?`,
        isOwn: false,
        time: new Date(),
      },
    ]);

    let socket : WebSocket = new WebSocket("ws://skade.cc:38080");

    onMounted(() => {
      socket = new WebSocket("ws://skade.cc:38080");
      socket.onopen = function (event) {
        console.log("[open] Соединение установлено");
        sendToWebSocket();
      };
    });
 
    const sendToWebSocket = () => {
      socket.send(JSON.stringify(messages.value));
      socket.onmessage = function (event) {
        console.log(`[message] Данные получены с сервера: ${event.data}`);
      };
      socket.onmessage = function (event) {
        console.log(`[message] Данные получены с сервера: ${event.data}`);
      };
    };

    const messageInput = ref<string>("");

    const sendMessage = () => {
      if (!messageInput.value.trim()) return null;
      messages.value.push({
        messageId: Date.now(),
        userName: "VP",
        message: messageInput.value,
        isOwn: true,
        time: new Date(),
      });
      sendToWebSocket();
      messageInput.value = "";
    };

    return {
      messages: messages.value,
      messageInput,
      sendMessage,
    };
  },
});
</script>
