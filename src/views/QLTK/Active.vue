<template>
  <div class>
    <header-active></header-active>
    <content-active></content-active>
  </div>
</template>
<script>
import HeaderActive from "./components/HeaderActive";
import ContentActive from "./components/ContentActive";

export default {
  components: {
    HeaderActive,
    ContentActive
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
};
</script> 