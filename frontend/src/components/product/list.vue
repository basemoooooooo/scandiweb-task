<script setup>
import OneProduct from '@/components/product/one.vue'
defineProps(['products'])
</script>

<template>
  <div class="productd_grid">
    <OneProduct v-for="(product, i) in products" :key="i" :product="product" />
  </div>
</template>

<style>
.productd_grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;
}
</style>
