<template>
    <div class="container">
        <div class="chat-box">
            <chatContacts/>
            <chatForm :sender="userName"/>
            <chatForm sender="ivan"/>
        </div>   
    </div>
</template>

<script>

import chatContacts from './chat/Contacts.vue'
import chatForm from './chat/Chat-form.vue'

export default {
    data() {
        return {
            userName: this.$store.getters.getUser.login
        }
    },
    components: {
        chatContacts,
        chatForm
    },
}
</script>