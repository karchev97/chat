<template>
  <div class="container">
    <div class="auth-form">
      <h1>Добро пожаловать в <span>v-chat</span></h1>
      <form class="form-inputs">
        <label for="login"><span>Введите логин</span>
          <input type="text" id="login" v-model="login" @keypress.enter.prevent>
        </label>
        <label for="auth-link"><span :class="{error: isLink}">{{ linkShow }}</span>
          <input type="text" id="auth-link" :class="{'error-input': isLink}" v-model="link" @keypress.enter.prevent>
        </label>
        <input type="button" value="Начать общение" :disabled="disabled" @click="setUser()">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'authForm',
  data() {
    return {
      login: '',
      link: '',
      disabled: true,
      isLink: false,
    }
  },
  methods: {
    // Метод проверки форм на зполнение
    checkInputs: function() {
      if (this.login && this.link && this.isLink === false) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    // Метод проверки ссылки на правильность
    checkLink: function() {
      let reg =/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g;

      if (reg.test(this.link)) {
        this.isLink = false;
      } else {
        this.isLink = true;
      }

      this.checkInputs();
    },
    // запоминаем пользователя
    setUser: function() {
      let obj = {
        login: this.login,
        link: this.link
      }
      this.$store.commit('addUser', obj);
      this.$router.push({ path: '/chat' })
    }
  },
  computed: {
    // Свойство отображающее определенный заголовок у формы
    linkShow: function() {
      if(this.isLink) {
        return 'Вы ввели неверную ссылку'
      } else {
        return 'Введите ссылку на свой аватар'
      }
    }
  },
  watch: {
    login: function() {
      this.checkInputs()
    },
    link: function(link) {
      this.checkLink()
    },
  }
}
</script>

