<template>
  <div>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th v-for="item in HeaderTable" :key="item" class="text-left">{{item.name}}</th>
          </tr>
        </thead>
      </template>
    </v-simple-table>
  </div>
</template>
<script>
export default {
  props: ["HeaderTable"],
  data() {
    return {};
  }
};
</script>