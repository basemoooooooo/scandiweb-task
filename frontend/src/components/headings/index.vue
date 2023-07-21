<script setup>
import Title from './title.vue'
defineProps(['deleteProducts'])
</script>

<template>
  <header>
    <Title> Product List </Title>

    <div class="actions">
      <router-link class="action" to="/add-product">ADD</router-link>
      <button class="action" @click="deleteProducts">MASS DELETE</button>
    </div>
  </header>
</template>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem;
}

.actions {
  display: flex;
  gap: 1rem;
}

.action {
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 0.25rem;
  background-color: #fff;
  color: #333;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
}
</style>
