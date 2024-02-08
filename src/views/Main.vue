<template>
  <div
    class="mx-auto max-w-2xl px-4 pb-8 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8"
  >
    <div class="flex items-center">
      <div class="mt-2 mr-2 rounded-md shadow-sm flex-1">
        <input
          type="text"
          name="price"
          id="price"
          class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          placeholder="search"
        />
      </div>
      <div class="mt-2 rounded-md shadow-sm self-atuo">
        <select
          name="filter"
          id="filter"
          class="block h-100 w-full rounded-md border-0 py-1.5 pl-5 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-base sm:leading-6"
        >
          <option v-for="item in searchFilter" :key="`filter-${item.name}`">
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>

    <h2 class="text-2xl">Products</h2>
    <div
      class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8"
    >
      <a
        v-for="product in products"
        :key="product.id"
        :href="product.href"
        class="group"
      >
        <div
          class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
        >
          <img
            :src="product.imageSrc"
            :alt="product.imageAlt"
            class="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
        <p class="mt-1 text-lg font-medium text-gray-900">
          {{ product.price }}
        </p>
      </a>
    </div>
  </div>
</template>

<script setup>
const products = [
  {
    id: 1,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 2,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 3,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 4,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
  {
    id: 5,
    name: "Basic Tee",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
    imageAlt: "Front of men's Basic Tee in black.",
    price: "$35",
    color: "Black",
  },
];
const searchFilter = [
  {
    id: 1,
    name: "Price (ASC)",
  },
  {
    id: 2,
    name: "Price (DESC)",
  },
  {
    id: 3,
    name: "Title (ASC)",
  },
  {
    id: 4,
    name: "Title (DESC)",
  },
  {
    id: 5,
    name: "Last Modified at the top",
  },
  {
    id: 6,
    name: "Last Modified at the bottom",
  },
];
</script>
