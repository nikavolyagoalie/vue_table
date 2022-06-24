<template>
  <div class="content">
    <data-table :data="data"></data-table>
    <pagination></pagination>
  </div>
</template>

<script>
import DataTable from '@/components/DataTable.vue'
import Pagination from '@/components/Pagination.vue'
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Home",

  components: {
    DataTable,
    Pagination
  },

  methods: {
    ...mapActions({
      fetchData: "fetchData",
    }),
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

<style lang="scss" scoped>

</style>
