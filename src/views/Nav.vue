<template>
  <nav class="bg-lime-950">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:block flex items-center">
          <div class="md:hidden">
            <button
              type="button"
              class="relative mr-2 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              @click="$emit('toggleDialog')"
            >
              <Bars3Icon class="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div class="flex items-center bg-lime-50 p-2 rounded-full">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-8"
                src="../assets/Flogo.png"
                alt="fakebuy-logo"
              />
            </div>
          </div>
        </div>
        <div class="md:block">
          <div class="flex items-center md:ml-6">
            <div>
              <button
                type="button"
                class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <ShoppingCartIcon class="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <!-- Profile dropdown -->
            <div class="relative ml-3">
              <div>
                <button
                  class="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  @click="togglePanel"
                >
                  <span class="absolute -inset-1.5" />
                  <span class="sr-only">Open user menu</span>
                  <UserIcon class="h-6 w-6" />
                </button>
              </div>
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div
                  v-if="openPanel"
                  class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <!-- Active: "bg-gray-100", Not Active: "" -->
                  <a
                    v-for="(navigation, index) in userNavigation"
                    :href="navigation.href"
                    class="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    :key="`user-menu-item-${index}`"
                    >{{ navigation.name }}</a
                  >
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from "vue";
import {
  ShoppingCartIcon,
  UserIcon,
  Bars3Icon,
} from "@heroicons/vue/24/outline";
defineEmits(["toggleDialog"]);

const openPanel = ref(false);

function togglePanel() {
  openPanel.value = !openPanel.value;
}

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];
</script>
<style lang=""></style>
