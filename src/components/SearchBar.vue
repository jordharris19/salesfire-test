<template>
  <input type="text" v-model="searchTerm" @input="onSearch" placeholder="Search..." />
</template>

<script setup>
import { ref } from 'vue'
import { useProductStore } from '@/stores/productStore'
import debounce from 'lodash.debounce'

const dataStore = useProductStore()
const searchTerm = ref('')

const onSearch = debounce(() => {
  dataStore.setQuery(searchTerm.value)
}, 300)
</script>

<style scoped>
input {
  padding: 20px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  font-weight: bold;
}
</style>
