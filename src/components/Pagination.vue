<template>
  <div class="pagination">
    <div
      class="pagination__pages"
      :class="{ active: pages === limit }"
      @click="show(pages)"
      v-for="(pages, i) in howMuchShow"
      :key="i"
    >
      {{ pages }}
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  name: "Pagination",
  data() {
    return {
      howMuchShow: [10, 25, 50],
    };
  },
  computed: {
    ...mapState({
      limit: (state) => state.limit,
    }),
  },
  methods: {
    ...mapActions({
      moreData: "moreData",
    }),

    show(pages) {
      this.moreData(pages);
    },
  },
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  margin: 24px 0;

  &__pages {
    padding: 12px;
    border: 2px solid #e1e1e1;
    margin-right: 4px;
    cursor: pointer;
    border-radius: 10%;

    &:hover {
      opacity: 0.5;
      transition: 0.4s all;
    }

    &.active {
      border: 2px solid #12af1a;
      color: #12af1a;
    }
  }
}
</style>