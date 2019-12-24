<template>
  <div class>
    <header-active><p>Tài khoản đang bị khóa.</p></header-active>
    <content-active></content-active>
    <show-list-active :HeaderTable="HeaderTable"></show-list-active>
  </div>
</template>
<script>
import HeaderActive from "./components/HeaderActive";
import ContentActive from "./components/ContentActive";
import ShowListActive from "./components/ShowListActive";

export default {
  components: {
    HeaderActive,
    ContentActive,
    ShowListActive
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    HeaderTable: [
      { name: "Tên Tài Khoản" },
      { name: "Họ Và Tên" },
      { name: "Giới Tính" },
      { name: "Email" },
      { name: "Số Điện Thoại" },
      { name: "Quyền" },
      { name: "Trạng Thái" },
      { name: "" }
    ]
  })
};
</script> 