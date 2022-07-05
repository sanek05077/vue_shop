<template>
  <form
      @submit.prevent="submitHandler"
      class="contact-form"
  >
    <h3>Форма связи</h3>
    <b-form-input
        id="email"
        type="text"
        class="form-control"
        placeholder="Ваше имя"
        v-model.trim="name"
        :class="{invalid: ($v.name.$dirty && !$v.email.required)}"
    ></b-form-input>
    <small
        class="helper-text invalid"
        v-if="$v.name.$dirty && !$v.name.required"
    >
      Введите Ваше имя</small>
    <b-form-input
        id="email"
        type="text"
        class="form-control"
        placeholder="E-Mail для связи"
        v-model.trim="email"
        :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
    ></b-form-input>
    <small
        class="helper-text invalid"
        v-if="$v.email.$dirty && !$v.email.required"
    >
      Введите Ваш email</small>
    <small
        class="helper-text invalid"
        v-else-if="$v.email.$dirty && !$v.email.email"
    >
      Введите корректный Email</small>
    <b-form-textarea
        id="message"
        placeholder="Сообщение"
        class="form-control"
        v-model.trim="message"
        rows="3"
        max-rows="6"
    ></b-form-textarea>
    <small
        class="helper-text invalid"
        v-if="$v.message.$dirty && !$v.message.required"
    >
      Введите Ваше сообщение</small>
    <button
        class="btn btn-brand"
        type="submit"
    >
      Отправить
    </button>
  </form>
</template>

<script>
import {email, required} from 'vuelidate/lib/validators'
export default {
  name: "ContactForm",
  data: () => ({
    email: '',
    name: '',
    message: '',
  }),
  validations: {
    email: {
      email,
      required
    },
    name: {
      required
    },
    message: {
      required
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch()
        return
      }
      const formData = {
        email: this.email,
        name: this.name,
        message: this.message
      }
      console.log(formData)
    }
  }
}
</script>

<style lang="scss" scoped>
.helper-text {
  &.invalid {
    width: 100%;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
    font-size: 80%;
    color: #dc3545;
    display: block;
  }
}
.contact-form {
  padding: 0 0 2rem;
  h3 {
    font-weight: 600;
    font-size: 1.375rem;
  }
  .form-control {
    margin: 0 0 1rem;
    padding: 0.5rem 1rem;
  }
  .btn {
    width: 100%;
  }
  textarea {
    height: 150px;
    min-height: 150px;
    resize: none;
    overflow: auto !important;
  }
}

</style>
