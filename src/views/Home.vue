<template>
  <div class="min-h-full">
    <Nav></Nav>
    <Header></Header>
    <Main></Main>
  </div>
</template>
<script>
import Header from "./Header.vue";
import Main from "./Main.vue";
import Nav from "./Nav.vue";
export default {
  components: {
    Header,
    Main,
    Nav,
  },
};
</script>
<style></style>
