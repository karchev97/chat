<template>
    <div class="chat-contacts">
        <h1>Контакты</h1>
        <ul>
            <li>
                <img :src="user.link" alt="Avatar">
                <span>{{user.login}}</span>
            </li>
            <li>
                <img src="https://www.travelcontinuously.com/wp-content/uploads/2018/04/empty-avatar.png" alt="Avatar">
                <span>Иван Иванов</span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: this.$store.getters.getUser
        }
    },
}
</script>