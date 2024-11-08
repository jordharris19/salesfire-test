<template>
  <div class="product-item">
    <a :href="product.link" :alt="product.title" target="_blank">
      <img :src="product.image_url" alt="Product Image" />
      <div class="product-info">
        <h3>{{ product.title }}</h3>
        <p class="product-price">From: £{{ product.price.min }}</p>
      </div>
      <button>View</button>
    </a>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped>
.product-item {
  width: 500px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  text-align: center;
  line-height: 28px;
  overflow: hidden;
  justify-content: space-between;
}

.product-item img {
  height: 300px;
  object-fit: cover;
}

.product-item button {
  width: 100%;
  background-color: #000;
  color: #fff;
  padding: 10px;
  border-radius: 10px;
  cursor: pointer;
}

.product-info {
  min-height: 85px;
  flex-direction: column;
  display: flex;
  margin-top: 10px;
  color: #000;
}

.product-price {
  font-weight: bold;
}

.product-item a:hover {
  background: none;
}
</style>
