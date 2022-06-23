<template>
  <div class="home">
    <table class="table">
      <thead>
        <tr>
          <th>#</th>
          <th>title</th>
          <th>body</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in data" :key="item.id" @click="$router.push(`/${item.id}`)">
          <td>{{ item.id }}</td>
          <td>{{ item.title }}</td>
          <td>{{ item.body }}</td>
        </tr>
      </tbody>
    </table>
    <div class="home__pagination">
      <div class="pages" @click="show(10)">10</div>
      <div class="pages" @click="show(25)">25</div>
      <div class="pages" @click="show(50)">50</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      
    };
  },

  methods: {
    ...mapActions({
      fetchData: "fetchData",
      moreData: "moreData",
    }),

    show(items) {
      this.moreData(items)
    }
  },

  computed: {
    ...mapState({
      data: state => state.data
    })
  },

  mounted() {
    this.fetchData();
  },
};
</script>

<style scoped>

tbody tr {
  cursor: pointer;
}

th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid #e1e1e1;
}
</style>
