<template>
  <div class="min-h-full bg-white">
    <Nav @toggleDialog="toggleDialog"></Nav>
    <Drawer :show="showDialog" @toggleDialog="toggleDialog"></Drawer>
    <Header></Header>
    <Main></Main>
  </div>
</template>
<script setup>
import { ref } from "vue";
import Header from "./Header.vue";
import Main from "./Main.vue";
import Nav from "./Nav.vue";
import Drawer from "./Drawer.vue";

const showDialog = ref(false);
function toggleDialog() {
  showDialog.value = !showDialog.value;
}
</script>
<style></style>
