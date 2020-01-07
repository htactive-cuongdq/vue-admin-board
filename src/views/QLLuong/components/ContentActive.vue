<template>
  <div class="container row">
    <div class="col-md-4">
      <p>Tên tài khoản:</p>
      <v-text-field :rules="rules"></v-text-field>
    </div>
    <div class="col-md-4">
      <p>Họ và tên:</p>
      <v-text-field :rules="rules"></v-text-field>
    </div>
    <div class="col-md-4">
      <p>Email:</p>
      <v-text-field :rules="rules"></v-text-field>
    </div>
    <div class="col-md-4">
      <p>Số điện thoại:</p>
      <v-text-field :rules="rules"></v-text-field>
    </div>
    <div class="col-md-4">
      <p>Từ ngày:</p>
      <v-menu
        v-model="menu2"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="computedDateFormatted"
            hint="MM/DD/YYYY format"
            persistent-hint
            readonly
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title @input="menu2 = false"></v-date-picker>
      </v-menu>
    </div>
    <div class="col-md-4">
      <p>Tới ngày:</p>
      <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        transition="scale-transition"
        offset-y
        full-width
        max-width="290px"
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="dateFormatted"
            hint="MM/DD/YYYY format"
            persistent-hint
            @blur="date = parseDate(dateFormatted)"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
      </v-menu>
    </div>
    <v-btn class="ma-2" outlined  fab color="indigo">
      <v-icon>mdi-pencil</v-icon>
    </v-btn>
    <div class="row">
      <div class="col-md-12 d-flex flex-row-reverse">
        <v-btn class="ma-2" outlined color="indigo">Hủy tìm kiếm</v-btn>
        <v-btn class="ma-2" outlined color="indigo">Tìm kiếm</v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: vm => ({
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
    menu2: false,
    justify: ["start", "end", "center", "space-between", "space-around"]
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    }
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    }
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    }
  }
};
</script>