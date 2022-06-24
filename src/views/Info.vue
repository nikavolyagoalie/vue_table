<template>
  <div class="content">
    <div class="header">
      <custom-button @click="$router.push('/')">Назад</custom-button>
    </div>
    <div class="wrapper">
      <div class="title">
        <h2>{{ data[id].name["first"]}} {{ data[id].name["last"] }}</h2>
        <img :src="data[id].picture.large"/>
      </div>
      <div class="body">
        <p>Проживает в населенном пункте <b>{{ data[id].location["city"] }}</b>, страна <b> {{ data[id].location["country"] }}</b></p>
        <p>Дата рождения {{ formatDate(data[id].dob["date"]) }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import CustomButton from '@/components/UI/CustomButton.vue'

export default {
  name: 'Info',
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  components: {
    CustomButton
  },
  computed: {
    ...mapState({
      data: state => state.data
    })
  },
  methods: {
    formatDate(date) {
      let normalDate = new Date(date)
      let day = normalDate.getDate()
      let month = normalDate.getMonth()
      let year = normalDate.getFullYear()

      if (day < 10 ) {
        day = `0${day}`
      }

      if (month < 10 ) {
        month = `0${month}`
      }

      return `${day}.${month}.${year}`
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 75%;
  }
</style>
