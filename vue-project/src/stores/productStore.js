import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import axios from 'axios'

export const useProductStore = defineStore('productStore', () => {
  const products = ref([])
  const loading = ref(false)
  const error = ref('')
  const query = ref('')

  const fetchData = async () => {
    loading.value = true
    error.value = null
    const searchValue = query.value.length > 0 ? query.value : ''

    try {
      const response = await axios.get('/api/searcha', {
        params: {
          client_id: 'dbf1dbc9-a940-48c2-b44b-0bb6dc63924e',
          query: searchValue,
          limit: 4,
          page: 1,
        },
      })
      products.value = response.data
    } catch (err) {
      error.value = err.message
    } finally {
      loading.value = false
    }
  }

  watch(query, () => {
    fetchData()
  })

  const setQuery = (newQuery) => {
    query.value = newQuery
  }

  return { products, loading, error, query, fetchData, setQuery }
})
