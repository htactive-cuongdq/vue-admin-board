<template>
  <div class="container row" color="info">
    <div class="col-md-6">
      <p>Từ ngày:</p>
      <input type="date" />
    </div>
    <div class="col-md-6">
      <p>Đến ngày:</p>
      <input type="date" />
    </div>
    <div class="row">
      <div class="col-md-6">
        <div class="col-md-6">
          <v-btn class="ma-2" outlined color="indigo">Tìm kiếm</v-btn>
        </div>
        <div class="col-md-6">
          <v-btn class="ma-2" outlined color="indigo">Hủy tìm kiếm</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {},
  data: () => ({})
};
</script> 