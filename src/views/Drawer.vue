<template>
  <transition
    enter-active-class="transition ease-out duration-100"
    enter-from-class="transform opacity-0 scale-95"
    enter-to-class="transform opacity-100 scale-100"
    leave-active-class="transition ease-in duration-75"
    leave-from-class="transform opacity-100 scale-100"
    leave-to-class="transform opacity-0 scale-95"
  >
    <div
      class="relative z-40 lg:hidden"
      role="dialog"
      aria-modal="true"
      v-show="show"
    >
      <div class="fixed inset-0 bg-black bg-opacity-25"></div>

      <div class="fixed inset-0 z-40 flex">
        <div
          class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl"
        >
          <div class="flex px-4 pb-2 pt-5">
            <button
              type="button"
              class="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              @click="$emit('toggleDialog')"
            >
              <span class="absolute -inset-0.5"></span>
              <span class="sr-only">Close menu</span>
              <XMarkIcon class="h-6 w-6" />
            </button>
          </div>

          <div class="mt-2">
            <div
              id="tabs-1-panel-1"
              class="space-y-10 px-4 pb-8 pt-10"
              aria-labelledby="tabs-1-tab-1"
              role="tabpanel"
              tabindex="0"
            >
              <div
                class="grid grid-cols-2 gap-x-4"
                v-for="category in navigation.categories"
                :key="category.name"
              >
                <div
                  class="group relative text-sm"
                  v-for="item in category.featured"
                  :key="item.name"
                >
                  <div
                    class="aspect-h-1 aspect-w-1 overflow-hiddenv rounded-lg bg-gray-100 group-hover:opacity-75"
                  >
                    <img
                      :src="item.imageSrc"
                      :alt="item.imageSrc"
                      class="object-cover object-center"
                    />
                  </div>
                  <a
                    :href="item.href"
                    class="mt-6 block font-medium text-gray-900"
                  >
                    <span
                      class="absolute inset-0 z-10"
                      aria-hidden="true"
                    ></span>
                    {{ item.name }}
                  </a>
                  <p aria-hidden="true" class="mt-1">Shop now</p>
                </div>
              </div>
              <div v-for="section in navigation.sections" :key="section.id">
                <p
                  id="women-clothing-heading-mobile"
                  class="font-medium text-gray-900"
                >
                  {{ section.name }}
                </p>
                <ul
                  role="list"
                  aria-labelledby="women-clothing-heading-mobile"
                  class="mt-6 flex flex-col space-y-6"
                >
                  <li
                    class="flow-root"
                    v-for="item in section.items"
                    :key="item.name"
                  >
                    <a :href="item.href" class="-m-2 block p-2 text-gray-500">{{
                      item.name
                    }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>
<script setup>
import { XMarkIcon } from "@heroicons/vue/24/outline";
defineProps(["show"]);
defineEmits(["toggleDialog"]);

const navigation = {
  categories: [
    {
      id: "women",
      name: "Women",
      featured: [
        {
          name: "New Arrivals",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg",
          imageAlt:
            "Models sitting back to back, wearing Basic Tee in black and bone.",
        },
        {
          name: "Basic Tees",
          href: "#",
          imageSrc:
            "https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg",
          imageAlt:
            "Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.",
        },
      ],
    },
  ],
  sections: [
    {
      id: "clothing",
      name: "Clothing",
      items: [
        { name: "Tops", href: "#" },
        { name: "Dresses", href: "#" },
        { name: "Pants", href: "#" },
        { name: "Denim", href: "#" },
        { name: "Sweaters", href: "#" },
        { name: "T-Shirts", href: "#" },
        { name: "Jackets", href: "#" },
        { name: "Activewear", href: "#" },
        { name: "Browse All", href: "#" },
      ],
    },
  ],
};
</script>
<style lang=""></style>
