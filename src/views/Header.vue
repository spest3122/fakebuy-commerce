<template>
  <nav class="bg-lime-800">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <ol class="flex">
        <template v-for="(cate, index) in categories" :key="`cate-${index}`">
          <template v-if="cate.nested.length > 0">
            <li
              class="relative p-3 text-white hover:bg-lime-700"
              @mouseover="mouseover"
              @mouseleave="mouseleave"
            >
              {{ cate.name }}
              <transition
                enter-active-class="transition ease-out duration-100"
                enter-from-class="transform opacity-0 scale-95"
                enter-to-class="transform opacity-100 scale-100"
                leave-active-class="transition ease-in duration-75"
                leave-from-class="transform opacity-100 scale-100"
                leave-to-class="transform opacity-0 scale-95"
              >
                <div
                  v-if="cate.nested.length > 0"
                  :class="[
                    hoverMenu ? '' : 'hidden',
                    'absolute left-0 top-12 z-10 w-48 bg-lime-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none',
                  ]"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="user-menu-button"
                >
                  <a
                    v-for="(deepCate, index) in cate.nested"
                    class="block px-3 py-2 text-white hover:bg-lime-700"
                    role="menuitem"
                    :key="`user-menu-item-${index}`"
                    >{{ deepCate.name }}</a
                  >
                </div>
              </transition>
            </li>
          </template>
          <template v-else>
            <li class="relative p-3 text-white hover:bg-lime-700">
              {{ cate.name }}
            </li>
          </template>
        </template>
      </ol>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
const hoverMenu = ref(false);
function mouseover() {
  hoverMenu.value = true;
}
function mouseleave() {
  hoverMenu.value = false;
}
const categories = [
  {
    id: 1,
    name: "Electronics",
    nested: [
      {
        id: 1,
        name: "Laptops",
      },
      {
        id: 2,
        name: "Keyboards",
      },
      {
        id: 3,
        name: "Mouses",
      },
    ],
  },
  {
    id: 2,
    name: "Gaming",
    nested: [],
  },
];
</script>
