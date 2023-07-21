<script setup>
defineProps(['product'])
</script>

<template>
  <div class="productd_grid_card">
    <input type="checkbox" class="delete-checkbox" v-model="product.isChecked" />

    <div class="">
      <div><strong>SKU:</strong> {{ product.sku }}</div>
      <div><strong>Name:</strong> {{ product.name }}</div>
      <div><strong>Price:</strong> {{ product.price }}</div>

      <div v-if="product.type === 'DVD'"><strong>Size:</strong> {{ product.size }}</div>
      <div v-if="product.type === 'Book'"><strong>weight:</strong> {{ product.weight }}</div>
      <div v-if="product.type === 'Furniture'">
        <strong>Dimensions:</strong> {{ product.width }} x {{ product.length }} x
        {{ product.height }}
      </div>
    </div>
  </div>
</template>

<style>
.productd_grid_card {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}
</style>
