<script setup>
import Heading from '@/components/headings/index.vue'
import Footer from '@/components/footer.vue'
import List from '@/components/product/list.vue'

import { onMounted, ref } from 'vue'

document.title = 'Products'

const products = ref([])

const fetchProducts = () => {
  fetch('http://localhost:8080/delete_many.php')
    .then((response) => response.json())
    .then((data) => {
      data.forEach((product) => {
        product.isChecked = false
      })
      products.value = data
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      console.log('done', products.value)
    })
}

const deleteProducts = () => {
  const checkedProducts = products.value.filter((product) => product.isChecked)
  const targets = { targets: checkedProducts }

  fetch('http://localhost:8080/read_all', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(targets)
  }).finally(() => {
    fetchProducts()
  })
}

onMounted(() => {
  fetchProducts()
})
</script>

<template>
  <div class="layout">
    <Heading :deleteProducts="deleteProducts" />
    <hr />
    <main>
      <List :products="products" />
    </main>
    <hr />
    <Footer />
  </div>
</template>

<style>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex-grow: 1;
}
</style>
