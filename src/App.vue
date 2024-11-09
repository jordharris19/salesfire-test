<template>
  <div class="product-search-container">
    <SearchBar />
    <ResultsSet />
  </div>
</template>

<script setup>
import SearchBar from '@/components/SearchBar.vue'
import ResultsSet from '@/components/ResultsSet.vue'
</script>

<style scoped>
.product-search-container {
  max-width: 1035px;
  justify-content: center;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 100%;
  margin: 20px 0;
}
</style>
