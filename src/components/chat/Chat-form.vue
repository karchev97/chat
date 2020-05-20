<template>
    <div class="chat-form">
        <h1>{{sender}}</h1>
        <div class="chat-messages">
            <div v-for="(item, index) in getMes" :key="index">
                <div class="message-to" v-if="item.sender == sender">
                    <span>{{item.text}}</span>
                </div> 
                <div class="message-from" v-else>
                    <span>{{item.text}}</span>
                </div>
            </div>
        </div>
        <div class="block-form">
            <form>
                <textarea cols="30" placeholder="Введите сообщение" v-model="message"></textarea>
                <input type="button" value="Отправить" :disabled="disabled" @click="sendMessage()">
            </form>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        sender: String
    },
    data() {
        return {
            user: this.$store.getters.getUser,
            message: '',
            messages: [],
            disabled: true
        }
    },
    methods: {
        sendMessage: function() {
            let mes = {
                sender: this.sender,
                text: this.message
            }
            this.$store.commit('addMessage', mes);
            this.message = '';
        }
    },
    computed: {
        getMes() {
            return this.$store.getters.getMessages;
        }
    },
    watch: {
        message: function() {
            if (this.message) {
                this.disabled = false
            } else {
                this.disabled = true
            }
        },
        messages: function() {
            console.log(this.messages)
        }   
    }
}
</script>