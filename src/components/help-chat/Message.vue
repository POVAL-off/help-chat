<template>
    <div class="clear"></div>
    <div class="chat-box__message" :class="{ own : messageInfo.isOwn}" >
        <div class="name">{{ messageInfo.isOwn? messageInfo.name : 'Служба поддержки'}}</div>
      <div class="message">
        {{messageInfo.message}}
        <div class="time">{{ messageInfo.time.getHours() + ':' +  messageInfo.time.getMinutes()}}</div>
        <div class="clear"></div>
      </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props : {
        messageInfo : {
            type : Object,
            required : true
        }
    },
    setup() {
        
    },
})
</script>
