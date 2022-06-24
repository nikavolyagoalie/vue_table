<template>
  <div class="content">
    <div class="header">
      <custom-button @click="$router.push('/')">Назад</custom-button>
    </div>
    <div class="wrapper">
      <div class="title">
        <h2>{{ data[$route.params.id - 1].title }}</h2>
      </div>
      <div class="body">{{ data[$route.params.id - 1].body }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import CustomButton from '@/components/UI/CustomButton.vue'

export default {
  name: 'Info',
  components: {
    CustomButton
  },
  computed: {
    ...mapState({
      data: state => state.data
    })
  },
}
</script>

<style lang="scss" scoped>
  .wrapper {
    width: 75%;
  }
</style>
