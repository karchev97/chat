<template>
  <div class="about">
    <chatPage/>
  </div>
</template>

<script>

import chatPage from '@/components/Chat-page.vue'

export default {
  name: 'Chat',
  components: {
    chatPage
  },
  data() {
    return {
      user: this.$store.getters.getUser
    }
  },
  beforeCreate() {
    if (this.$store.getters.getUser.login === '') {
      this.$router.push({ path: '/' })
    }
  }
}
</script>
