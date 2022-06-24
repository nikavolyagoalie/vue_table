<template>
  <table class="table">
    <thead>
      <tr>
        <th>gender</th>
        <th>firstname</th>
        <th>lastname</th>
        <th>city</th>
        <th>email</th>
        <th>phone</th>
        <th>postcode</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(item, i) in data"
        :key="i"
        @click="$router.push(`/${i}`)"
      >
        <td>{{ item.gender }}</td>
        <td>{{ item.name["first"] }}</td>
        <td>{{ item.name["last"] }}</td>
        <td>{{ item.location["city"] }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.phone }}</td>
        <td>{{ item.location["postcode"] }}</td>
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