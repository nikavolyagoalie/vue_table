<template>
  <table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>title</th>
        <th>body</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item in data"
        :key="item.id"
        @click="$router.push(`/${item.id}`)"
      >
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.body }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "DataTable",
  props: {
    data: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.table {
  width: 75%;
  border-collapse: collapse;
}

tbody {
  tr {
    cursor: pointer;
  }
}

th,
td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #e1e1e1;
}
</style>