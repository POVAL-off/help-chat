<template>
  <div class="chat-box__messages">
    <div class="chat-box__separator">12 июля</div>
    <div class="clear"></div>
    
    <Message v-for="message in messages" :key="message.message" :messageInfo="message"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Message from "./Message.vue";

export default defineComponent({
  components: { Message },
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
  setup() {},
});
</script>
