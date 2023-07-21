<script setup>
import { ref } from 'vue'
defineProps(['handler'])
const product = ref({
  sku: '',
  name: '',
  price: '',
  type: 'DVD',
  size: '',
  weight: '',
  width: '',
  height: '',
  length: ''
})

const msgs = {
  DVD: 'Please provide size in MB',
  Book: 'Please provide weight in KG',
  Furniture: 'Please provide dimentions in HxWxL'
}
</script>

<template>
  <form action="" method="post" id="product_form" @submit.prevent="handler(product)">
    <p>Basic product info</p>

    <fieldset>
      <label for="sku">sku</label>
      <input required type="text" id="sku" v-model="product.sku" />
    </fieldset>

    <fieldset>
      <label for="name">name</label>
      <input required type="text" id="name" v-model="product.name" />
    </fieldset>

    <fieldset>
      <label for="price">price</label>
      <input required type="number" id="price" v-model="product.price" />
    </fieldset>

    <p><strong>Selected product type:</strong> {{ product.type }}</p>

    <fieldset>
      <label for="type">type switcher</label>
      <select name="type" id="type" v-model="product.type" :id="productType">
        <option value="DVD" selected>DVD</option>
        <option value="Book">Book</option>
        <option value="Furniture">Furniture</option>
      </select>
    </fieldset>

    <div>{{ msgs[product.type] }}</div>

    <fieldset v-if="product.type === 'DVD'">
      <label for="size">size (mb)</label>
      <input required type="number" id="size" v-model="product.size" />
    </fieldset>

    <!-- furniture -->
    <div v-if="product.type === 'Furniture'">
      <fieldset>
        <label for="height">height (cm)</label>
        <input required type="number" id="height" v-model="product.height" />
      </fieldset>

      <fieldset>
        <label for="width">width (cm)</label>
        <input required type="number" id="width" v-model="product.width" />
      </fieldset>

      <fieldset>
        <label for="length">length (cm)</label>
        <input required type="number" id="length" v-model="product.length" />
      </fieldset>
    </div>
    <!-- furniture -->

    <fieldset v-if="product.type === 'Book'">
      <label for="weight">weight (kg)</label>
      <input required type="number" id="weight" v-model="product.weight" />
    </fieldset>
  </form>
</template>

<style>
fieldset {
  border: none;
  padding: 1rem;
}

select,
option {
  color: black;
}

form {
  padding: 2rem;
}
</style>
