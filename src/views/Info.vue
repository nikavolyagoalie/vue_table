<template>
  <div class="info">
    <div class="header">
      <button @click="$router.push('/')">Назад</button>
    </div>
    <div class="wrapper">
      <div class="title">title: {{ data[$route.params.id - 1].title }}</div>
      <div class="body">body: {{ data[$route.params.id - 1].body }}</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: 'Info',
  components: {
  },
  computed: {
    ...mapState({
      data: state => state.data
    })
  },
}
</script>

<style scoped>

</style>
