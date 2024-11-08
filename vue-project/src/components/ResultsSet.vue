<template>
  <div class="search-results">
    <p v-if="productStore.loading">Loading...</p>
    <p v-if="productStore.error">Error: {{ productStore.error }}</p>
    <div
      class="products-container"
      v-if="productStore.products && productStore.query.length && !productStore.loading"
    >
      <ProductCard
        v-for="(item, index) in productStore.products.products"
        :key="index"
        :product="item"
      />
    </div>

    <p v-else-if="!productStore.loading && !productStore.error && productStore.query.length">
      No products found.
    </p>
  </div>
</template>

<script setup>
import { useProductStore } from '@/stores/productStore'
import ProductCard from '@/components/ProductCard.vue'

// Access the store
const productStore = useProductStore()

// Fetch data if query already exists
if (productStore.query) {
  productStore.fetchData()
}
</script>

<style scoped>
.products-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}
</style>
