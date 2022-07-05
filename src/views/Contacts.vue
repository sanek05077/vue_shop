<template>
  <div class="main light-section">
    <b-container>
      <b-row>
        <b-col col>
          <Breadcrumbs/>
        </b-col>
      </b-row>
      <b-row>
        <b-col col md="6" lg="4">
          <h1>Контактная информация</h1>
          <ul class="contacts-list">
            <li>
              <strong class="title">Адрес магазина</strong>
              <span>г. Ирпень, ул. Чехова, 11</span>
            </li>
            <li>
              <strong class="title">Юридическая информация</strong>
              <span>ФЛП Дрокина Е.А.<br/> ИНН 2677819062 <br/>р/с UA533052990000026007000114248<br/> Банк АТ КБ "ПРИВАТБАНК", МФО 305299</span>
            </li>
            <li>
              <strong class="title">Телефоны</strong>
              <span>Телефон: +38 (095) 225-50-30</span>
              <span>Телефон: +38 (067) 225-50-30</span>
              <span>Телефон: +38 (093) 170-38-38</span>
              <span>E-mail: <a href="mailto:">info@gaston.com.ua</a></span>
            </li>
            <li>
              <strong class="title">Режим работы</strong>
              <span>ПН-ПТ: 09:00 - 18:00</span>
              <span>СБ: 10:00 - 16:00</span>
              <span>ВС: Выходной </span>
            </li>
          </ul>
        </b-col>
        <b-col md="6" lg="5" offset-lg="1">
          <ContactForm />
        </b-col>
      </b-row>
        <GoogleMapLoader />
    </b-container>
  </div>
</template>

<script>
import GoogleMapLoader from '@/components/app/GoogleMapLoader'
import ContactForm from '@/components/app/ContactForm'
export default {
  name: "Contacts",
  components: {
    GoogleMapLoader,
    ContactForm
  },
  metaInfo() {
    return {
      title: this.$title('Контакты')
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.meta.breadcrumb.label;
    }
  }
}
</script>

<style lang="scss">
.contacts-list {
  padding: 0 0 1rem;
  margin: 0;
  list-style: none;
  li {
    padding: 0 0 1rem;
    strong {
      display: block;
    }
    span {
      display: block;
    }
  }
}

</style>
